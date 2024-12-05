import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private baseUrl = 'https://admin.ballded789.co:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') || '',
    }),
  }

  constructor(private http: HttpClient) { }

  addBallMaster(ballMaster: any): Observable<any> {
    return this.http.post(this.baseUrl + '/master', ballMaster, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getBallMaster(): Observable<any> {
    return this.http.get(this.baseUrl + '/master', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteBallMaster(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/master/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateBallMaster(id: any, ballMaster: any): Observable<any> {
    return this.http.put(this.baseUrl + '/master/' + id, ballMaster, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // League
  addLeague(league: any): Observable<any> {
    return this.http.post(this.baseUrl + '/league', league, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getLeague(): Observable<any> {
    return this.http.get(this.baseUrl + '/league', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteLeague(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/league/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateLeague(id: any, league: any): Observable<any> {
    return this.http.put(this.baseUrl + '/league/' + id, league, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // Team
  addTeam(team: any): Observable<any> {
    return this.http.post(this.baseUrl + '/team', team, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getTeam(): Observable<any> {
    return this.http.get(this.baseUrl + '/team', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // get team by league
  getTeamByLeague(leagueId: any): Observable<any> {
    return this.http.get(this.baseUrl + '/team/' + leagueId, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteTeam(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/team/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateTeam(id: any, team: any): Observable<any> {
    return this.http.put(this.baseUrl + '/team/' + id, team, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // Admin
  addAdmin(admin: any): Observable<any> {
    return this.http.post(this.baseUrl + '/admin', admin, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getAdmin(): Observable<any> {
    return this.http.get(this.baseUrl + '/admin', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteAdmin(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/admin/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateAdmin(id: any, admin: any): Observable<any> {
    return this.http.put(this.baseUrl + '/admin/' + id, admin, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // tb1
  addTb1(tb1: any): Observable<any> {
    return this.http.post(this.baseUrl + '/tb1', tb1, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getTb1ByDate(date: any): Observable<any> {
    return this.http.get(this.baseUrl + '/tb1/' + date, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getTb1(): Observable<any> {
    return this.http.get(this.baseUrl + '/tb1', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteTb1(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/tb1/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateTb1(id: any, tb1: any): Observable<any> {
    return this.http.put(this.baseUrl + '/tb1/' + id, tb1, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // tb2
  addTb2(data: any, date: any): Observable<any> {
    return this.http.post(this.baseUrl + '/tb2', { data: data, date: date }, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getTb2(): Observable<any> {
    return this.http.get(this.baseUrl + '/tb2', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // get tb2 by date
  getTb2ByDate(date: any): Observable<any> {
    return this.http.get(this.baseUrl + '/tb2/' + date, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteTb2(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/tb2/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateTb2(id: any, tb2: any): Observable<any> {
    return this.http.put(this.baseUrl + '/tb2/' + id, tb2, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // tb3
  addTb3(tb3: any): Observable<any> {
    return this.http.post(this.baseUrl + '/tb3', tb3, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getTb3(): Observable<any> {
    return this.http.get(this.baseUrl + '/tb3', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteTb3(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/tb3/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateTb3(id: any, tb3: any): Observable<any> {
    return this.http.put(this.baseUrl + '/tb3/' + id, tb3, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  getMessage(): Observable<any> {
    return this.http.get(this.baseUrl + '/message', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  updateMessage(message: any): Observable<any> {
    return this.http.put(this.baseUrl + '/message', { message: message }, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  deleteMessage(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/message/' + id, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  saveMessage(message: any): Observable<any> {
    return this.http.post(this.baseUrl + '/message', { message: message }, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }
}
