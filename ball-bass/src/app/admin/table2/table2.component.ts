import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.scss',
  providers: [AdminService]
})
export class Table2Component {
  allData: any = [];
  constructor(private admin: AdminService) { }
  date: any = new Date().toISOString().substring(0, 10);
  dateShow: any = '';
  data: any = {
    date: this.date,
    master: []
  };
  leagueList: any = [];
  masterList: any = [];

  teamList: any = [[]];

  imgUrl = 'https://admin.ballded789.co:3000/img/';

  ngOnInit() {
    this.getMaster();
    this.getLeague();
    this.getTb2ByDate();
    // console.log(this.date);
    this.dateShow = this.convertDate();

  }

  clearValue() {
    this.data = {
      date: this.date,
      master: []
    };
    this.teamList = [[]];

    this.ngOnInit();
  }

  changeDate() {
    this.clearValue();
  }

  removeDate(index: any) {
    this.data.splice(index, 1);
  }

  getMaster() {
    this.admin.getBallMaster().subscribe((res: any) => {
      this.masterList = res;
      // console.log(this.masterList);

    });
  }

  convertDate() {
    // Format วันที่ เดือน ปี
    let d = new Date(this.date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let monthList = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    return `${day} ${monthList[month - 1]} ${year}`;
  }

  changeBallMaster(midx: number, master_id: any) {

    let master = this.masterList.find((item: any) => item.id == master_id);
    this.data.master[midx].name = master.name;
    this.data.master[midx].id = master.id;
    this.data.master[midx].image = master.image;
    // console.log(this.data);

  }

  addMaster() {
    this.data.master.push({
      name: '',
      id: '',
      image: '',
      statics: 0,
      link: '',
      match: {
        league: '',
        league_id: '',

        away: { id: '', name: '', image: '' },
        home: { id: '', name: '', image: '' },
        icon: '',
        win: '',
        result: '',
      }
    });


  }

  removeMaster(master: any) {
    // console.log(this.data);

    this.data.master.splice(master, 1);
  }

  getLeague() {
    this.admin.getLeague().subscribe((res: any) => {
      this.leagueList = res;
    });
  }

  changeLeague(index: number, league_id: any) {
    let league = this.leagueList.find((item: any) => item.id == league_id);
    this.data.master[index].league = league.name;
    this.data.master[index].league_id = league.id;
    // console.log(this.data);
    this.getTeamByLeague(index, league_id);
  }

  changeHome(index: number, home_id: any) {
    let home = this.teamList[index].find((item: any) => item.id == home_id);
    this.data.master[index].match.home.id = home.id;
    this.data.master[index].match.home.name = home.name;
    this.data.master[index].match.home.image = home.image;
    // console.log(this.data);
  }

  changeAway(index: number, away_id: any) {
    let away = this.teamList[index].find((item: any) => item.id == away_id);
    this.data.master[index].match.away.id = away.id;
    this.data.master[index].match.away.name = away.name;
    this.data.master[index].match.away.image = away.image;
    // console.log(this.data);
  }

  // get team by league
  getTeamByLeague(index: number, league_id: any) {
    this.admin.getTeamByLeague(league_id).subscribe((res: any) => {
      this.teamList[index] = res;
    });
  }

  save() {
    this.admin.addTb2(this.data, this.date).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        alert('บันทึกข้อมูลเรียบร้อย');
      }
    });
  }

  // get tb2 by date
  getTb2ByDate() {
    this.admin.getTb2ByDate(this.date).subscribe((res: any) => {
      // console.log(res);
      if (res.length > 0) {
        this.allData = res;
        this.data = res[0].data;
        this.date = res[0].data.date;
        for (let index = 0; index < this.data.master.length; index++) {
          const element = this.data.master[index];
          this.getTeamByLeague(index, element.match.league_id);
        }
      } else {
        this.data = {
          date: this.date,
          master: []
        };
      }
    });

  }





}
