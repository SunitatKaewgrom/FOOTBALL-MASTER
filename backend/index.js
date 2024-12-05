const db = require('./connection');
// setup express app and port number to listen on 3000 and use body parser
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const https = require('https');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware to log requests to the console
const middleware = (req, res, next) => {
    // console.log(req.headers.authorization);
    if (req.headers.authorization !== '' && req.headers.authorization !== undefined && req.headers.authorization !== null && req.headers.authorization !== '') {
        // Verify JWT token
        jwt.verify(req.headers.authorization, '555', (err, decoded) => {
            console.log(decoded);
            if (err) {
                res.status(202).status({ message: "ไม่มีสิทธิเข้าถึงข้อมูลนี้", status: 202, err: err })
            } else {
                next();
            }
        });
    } else {
        res.status(201).status({ message: "ไม่มีสิทธิเข้าถึงข้อมูลนี้", status: 201 })
    }
    // next();
};



app.get('/', (req, res) => {
    res.send('Hello from the server side');
});

// get all team
app.get('/team', middleware, (req, res) => {
    db.query('SELECT teams.name name, league.name league_name, teams.id id, league.id league_id, teams.image FROM teams INNER JOIN league WHERE teams.league_id = league.id  ORDER BY league_id DESC', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(203).json({ message: 'Error retrieving teams from database', status: 203 });
            return;
        }
        res.json(rows);
    });
});

// get team by league
app.get('/team/:league', middleware, (req, res) => {
    db.query('SELECT * FROM teams WHERE league_id = ? ORDER BY name ASC', [req.params.league], (err, rows) => {
        if (err) {
            res.status(203).json({ message: 'Error retrieving teams from database', status: 203 });
            return;
        }
        res.json(rows);
    });
});

// add a new team
app.post('/team', middleware, (req, res) => {
    console.log(req.body);
    db.query('INSERT INTO teams SET ?', req.body, (err, result) => {
        if (err) {
            console.log(err);
            res.status(203).json({ message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.', status: 203 });
            return;
        }
        res.status(201).json({ message: 'Team added to database with ID: ' + result.insertId, status: 200 });
    });
});

// update a team
app.put('/team/:id', middleware, (req, res) => {
    console.log(req.body);
    db.query('UPDATE teams SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(203).json({ message: 'Error updating team in database', status: 203 });
            return;
        }
        res.status(200).json({ message: 'Team updated in database', status: 200 });
    });
});

// delete a team
app.delete('/team/:id', middleware, (req, res) => {
    db.query('DELETE FROM teams WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(203).json({ message: 'Error deleting team from database', status: 203 });
            return;
        }
        res.status(200).json({ message: 'Team deleted from database', status: 200 });
    });
});

// login with username and password and get a JWT token
app.post('/login', (req, res) => {
    // console.log(req.body);
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password], (err, rows) => {
        if (err) {
            res.status(203).json({ message: 'Error retrieving user from database', status: 203 });
            return;
        }
        if (rows.length === 0) {
            res.status(200).json({ message: 'Invalid username or password', status: 203 });
            return;
        }
        const token = jwt.sign({ username: req.body.username }, '555', { expiresIn: '365d' });
        res.json({ token: token, status: 200 });
    });
});

// add a new user
app.post('/admin', middleware, (req, res) => {
    db.query('INSERT INTO users SET ?', req.body, (err, result) => {
        if (err) {
            res.status(203).json({ message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.', status: 203 });
            return;
        }
        res.status(201).json({ message: 'User added to database with ID: ' + result.insertId, status: 200 });
    });
});

// update a user
app.put('/admin/:id', middleware, (req, res) => {
    db.query('UPDATE users SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            res.status(203).json({ message: 'Error updating user in database', status: 203 });
            return;
        }
        res.status(200).json({ message: 'User updated in database', status: 200 });
    });
});

// delete a user
app.delete('/admin/:id', middleware, (req, res) => {
    db.query('DELETE FROM users WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(203).json({ message: 'Error deleting user from database', status: 203 });
            return;
        }
        res.status(200).json({ message: 'User deleted from database', status: 200 });
    });
});

// get all users
app.get('/admin', middleware, (req, res) => {
    db.query('SELECT * FROM users ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(203).json({ message: 'Error retrieving users from database', status: 203 });
            return;
        }
        res.json(rows);
    });
});

// add master data (INSERT INTO `master` (`id`, `image`, `name`) VALUES (NULL, '', ''))
app.post('/master', middleware, (req, res) => {
    db.query('INSERT INTO master SET ?', req.body, (err, result) => {
        if (err) {
            res.status(203).json({
                message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.',
                status: 203
            });
            return;
        }
        res.status(201).json({
            message: 'Master added to database with ID: ' + result.insertId,
            status: 200
        });
    });
});

// update master data
app.put('/master/:id', middleware, (req, res) => {
    db.query('UPDATE master SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error updating master in database', status: 500 });
            return;
        }
        res.json({ message: 'Master updated in database', status: 200 });
    });
});

// delete master data
app.delete('/master/:id', middleware, (req, res) => {
    db.query('DELETE FROM master WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error deleting master from database', status: 500 });
            return;
        }
        res.json({ message: 'Master deleted from database', status: 200 });
    });
});

// get all master data
app.get('/master', middleware, (req, res) => {
    db.query('SELECT * FROM master ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving master from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// leauge list (INSERT INTO `league` (`id`, `name`, `image`) VALUES (NULL, '', ''))
app.post('/league', middleware, (req, res) => {
    db.query('INSERT INTO league SET ?', req.body, (err, result) => {
        if (err) {
            res.status(203).json({
                message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.',
                status: 203
            });
            return;
        }
        res.status(201).json({
            message: 'League added to database with ID: ' + result.insertId,
            status: 200
        });
    });
});

// update league data
app.put('/league/:id', middleware, (req, res) => {
    db.query('UPDATE league SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error updating league in database', status: 500 });
            return;
        }
        res.json({ message: 'League updated in database', status: 200 });
    });
});

// delete league data
app.delete('/league/:id', middleware, (req, res) => {
    db.query('DELETE FROM league WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error deleting league from database', status: 500 });
            return;
        }
        res.json({ message: 'League deleted from database', status: 200 });
    });
});

// get all league data
app.get('/league', middleware, (req, res) => {
    db.query('SELECT * FROM league ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving league from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});


// ------------------   upload image to server   ------------------
// upload image to server
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('image');

app.post('/upload', middleware, (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(200).send('Error uploading file');
            return;
        }
        res.status(201).json({ file: req.file, message: 'File uploaded successfully' });
    });
});

// get image from server
app.get('/img/:image', (req, res) => {
    const image = req.params.image;
    const imageLocation = path.join(__dirname, 'uploads', image);
    const imageExists = fs.existsSync(imageLocation);
    if (imageExists) {
        res.sendFile(imageLocation);
    } else {
        res.status(404).json({ message: 'Image not found', status: 404 });
    }
});

// delete image from server
app.delete('/img/:image', middleware, (req, res) => {
    const image = req.params.image;
    const imageLocation = path.join(__dirname, 'uploads', image);
    const imageExists = fs.existsSync(imageLocation);
    if (imageExists) {
        fs.unlink(imageLocation, (err) => {
            if (err) {
                res.status(203).send('Error deleting file from server');
                return;
            }
            res.status(200).json({ message: 'File deleted from server', status: 200 });
        });
    } else {
        res.status(203).json({ message: 'Image not found', status: 404 });
    }
});

//get tb1 INSERT INTO `tb1` (`id`, `data`, `date`, `addby`) VALUES (NULL, '', '', NULL) (data = JSON)
app.post('/tb1', middleware, (req, res) => {
    db.query(`INSERT INTO tb1 (data) VALUES ('${JSON.stringify(req.body)}')`, (err, result) => {
        if (err) {
            // console.log(err);
            res.status(203).json({
                message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.',
                status: 203
            });
            return;
        }
        res.status(201).json({
            message: 'tb1 added to database with ID: ' + result.insertId,
            status: 200
        });
    });
});

// update tb1 data
app.put('/tb1/:id', middleware, (req, res) => {
    db.query('UPDATE tb1 SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error updating tb1 in database', status: 500 });
            return;
        }
        res.json({ message: 'tb1 updated in database', status: 200 });
    });
});

// delete tb1 data
app.delete('/tb1/:id', middleware, (req, res) => {
    db.query('DELETE FROM tb1 WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error deleting tb1 from database', status: 500 });
            return;
        }
        res.json({ message: 'tb1 deleted from database', status: 200 });
    });
});

// get all tb1 data
app.get('/tb1', middleware, (req, res) => {
    db.query('SELECT * FROM tb1 ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving tb1 from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// get tb1 by date
app.get('/tb1/:date', middleware, (req, res) => {
    db.query('SELECT * FROM tb1 WHERE date = ?', [req.params.date], (err, rows) => {
        if (err) {
            res.status(203).json({ message: 'Error retrieving tb1 from database', status: 203 });
            return;
        }
        res.json(rows);
    });
});

// tb2 list (INSERT INTO `tb2` (`id`, `data`, `date`) VALUES (NULL, '', ''))
app.post('/tb2', middleware, (req, res) => {
    db.query(`INSERT INTO tb2 (data, date) VALUES ('${JSON.stringify(req.body.data)}', '${req.body.date}') 
    ON DUPLICATE KEY UPDATE data = '${JSON.stringify(req.body.data)}'`, (err, result) => {
        if (err) {
            res.status(203).json({
                message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.',
                status: 203
            });
            return;
        }
        res.status(201).json({
            message: 'tb2 added to database with ID: ' + result.insertId,
            status: 200
        });
    });
});

// update tb2 data
app.put('/tb2/:id', middleware, (req, res) => {
    db.query('UPDATE tb2 SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error updating tb2 in database', status: 500 });
            return;
        }
        res.json({ message: 'tb2 updated in database', status: 200 });
    });
});

// delete tb2 data
app.delete('/tb2/:id', middleware, (req, res) => {
    db.query('DELETE FROM tb2 WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error deleting tb2 from database', status: 500 });
            return;
        }
        res.json({ message: 'tb2 deleted from database', status: 200 });
    });
});

// get all tb2 data
app.get('/tb2', middleware, (req, res) => {
    db.query('SELECT * FROM tb2 ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving tb2 from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// get tb2 by date
app.get('/tb2/:date', middleware, (req, res) => {
    db.query('SELECT * FROM tb2 WHERE date = ? ORDER BY id DESC', [req.params.date], (err, rows) => {
        if (err) {
            res.status(203).json({ message: 'Error retrieving tb2 from database', status: 203 });
            return;
        }
        res.json(rows);
    });
});

// tb3 list INSERT INTO `tb3` (`id`, `name`, `statistic`, `message`, `odds`, `image`, `statics`) VALUES (NULL, '', NULL, NULL, NULL, NULL, NULL)
app.post('/tb3', middleware, (req, res) => {
    let data = req.body;

    db.query(`INSERT INTO tb3 (name, statistic, message, odds, image, statics) VALUES ('${data.name}', '${JSON.stringify(data.statistic)}', '${data.message}', '${data.odds}', '${data.image}', '${data.statics}')`, (err, result) => {
        if (err) {
            // console.log(err);
            res.status(203).json({
                message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.',
                status: 203
            });
            return;
        }
        res.status(201).json({
            message: 'tb3 added to database with ID: ' + result.insertId,
            status: 200
        });
    });
});

// update tb3 data
app.put('/tb3/:id', middleware, (req, res) => {
    let query = `UPDATE tb3 SET name = '${req.body.name}', statistic = '${JSON.stringify(req.body.statistic)}', message = '${req.body.message}', odds = '${req.body.odds}', image = '${req.body.image}', statics = '${req.body.statics}' WHERE id = ${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error updating tb3 in database', status: 500 });
            return;
        }
        res.json({ message: 'tb3 updated in database', status: 200 });
    });
});

// delete tb3 data
app.delete('/tb3/:id', middleware, (req, res) => {
    db.query('DELETE FROM tb3 WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error deleting tb3 from database', status: 500 });
            return;
        }
        res.json({ message: 'tb3 deleted from database', status: 200 });
    });
});

// get all tb3 data
app.get('/tb3', middleware, (req, res) => {
    db.query('SELECT * FROM tb3 ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving tb3 from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// get tb1 with out middleware
app.get('/tb1all', (req, res) => {
    db.query('SELECT * FROM tb1 ORDER BY id DESC LIMIT 1', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving tb1 from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// get tb2 with out middleware
app.get('/tb2all', (req, res) => {
    db.query('SELECT * FROM tb2 ORDER BY date DESC LIMIT 7', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving tb2 from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// get tb3 with out middleware
app.get('/tb3all', (req, res) => {
    db.query('SELECT * FROM tb3 ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving tb3 from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

// get ballmaster with out middleware
app.get('/masterall', (req, res) => {
    db.query('SELECT * FROM master ORDER BY id DESC', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving master from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});

//head message (INSERT INTO `head_message` (`id`, `message`) VALUES (NULL, ''))
app.post('/message', middleware, (req, res) => {
    console.log(req.body.message);
    data = req.body.message;
    db.query(`INSERT INTO head_message (message, image1, image2) VALUES ('${data.message}', '${data.image1}', '${data.image2}')`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(203).json({
                message: err.sqlMessage.split(' for key')[0] + ' already exists in database. Please use a different name.',
                status: 203
            });
            return;
        }
        res.status(201).json({
            message: 'head_message added to database with ID: ' + result.insertId,
            status: 200
        });
    });
});

// update head_message data
app.put('/message', middleware, (req, res) => {
    console.log(req.body.message);
    data = req.body.message;
    db.query('UPDATE head_message SET ? WHERE 1', [data], (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error updating head_message in database', status: 500 });
            return;
        }
        res.json({ message: 'head_message updated in database', status: 200 });
    });
});

// delete head_message data
app.delete('/message/:id', middleware, (req, res) => {
    db.query('DELETE FROM head_message WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error deleting head_message from database', status: 500 });
            return;
        }
        res.json({ message: 'head_message deleted from database', status: 200 });
    });
});

// get all head_message data
app.get('/message', (req, res) => {
    db.query('SELECT * FROM head_message ORDER BY id DESC LIMIT 1', (err, rows) => {
        if (err) {
            res.status(200).json({ message: 'Error retrieving head_message from database', status: 500 });
            return;
        }
        res.json(rows);
    });
});





https.createServer({
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./crt.crt'),
    ca: fs.readFileSync('./caroot.crt')
}, app).listen(3000, () => {
    console.log(`Listening at https://localhost:${3000}`);
});