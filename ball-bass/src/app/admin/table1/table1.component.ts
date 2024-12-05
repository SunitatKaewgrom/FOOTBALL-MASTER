import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.scss',
  providers: [AdminService]
})
export class Table1Component {
  date: any = new Date();
  match: any = [];
  leagueList: any = [[]];
  teamList: any = [[]];
  masterList: any = [];
  message: any = '';
  status: string = 'warning';

  constructor(private admin: AdminService) { }

  imgUrl = 'https://admin.ballded789.co:3000/img/';

  ngOnInit() {
    // this.date to format yyyy-mm-dd for input type date use local date
    this.date = this.date.toISOString().split('T')[0];
    this.getTb1();
    this.getMaster();
  }

  addMatch() {
    this.match.unshift({
      league: '',
      league_name: '',
      league_image: '',
      date: this.date,
      time: '01:00',
      home: '',
      away: '',
      home_score: 0,
      away_score: 0,
      master: [],
      result: '',
      home_image: '',
      away_image: '',
      odds: '',
      status: '0',
      hilight: '',
    });

    this.leagueList.unshift([]);
    this.teamList.unshift([]);

    // this.match = this.match.reverse();
    // this.leagueList = this.leagueList.reverse();
    // this.teamList = this.teamList.reverse();
    this.getLeague(0);

  }

  getLeague(index: number = 0) {
    this.admin.getLeague().subscribe((res: any) => {
      this.leagueList[index] = res;
      // console.log(this.leagueList);
      if (this.match[index].league) {
        this.getTeam(index, this.match[index].league);
      }

    });
  }

  getTeam(index: number, league: any) {
    this.admin.getTeamByLeague(league).subscribe((res: any) => {
      this.teamList[index] = res;
      let selected = this.leagueList[index].find((el: any) => el.id == league);
      this.match[index].league_name = selected.name;
      this.match[index].league_image = selected.image;
    });
  }

  date_change() {
    // console.log(this.date);
  }

  // get tb1 data
  getTb1() {
    this.admin.getTb1().subscribe((res: any) => {
      if (res.length > 0) {
        this.match = res[0].data;
        for (let i = 0; i < this.match.length; i++) {
          this.getLeague(i);
          this.getTeam(i, this.match[i].league);
        }
      }
      // console.log(res[0].data);

    });
  }

  deleteMatch(index: number) {
    this.match.splice(index, 1);
  }

  addMaster(index: number) {
    this.match[index].master.push({
      id: '',
      name: '',
      image: '',
      analysis: '',
      link: '',
      result: '',
    });
  }

  deleteMaster(index: number, master: number) {
    this.match[index].master.splice(master, 1);
  }

  // get master
  getMaster() {
    this.admin.getBallMaster().subscribe((res: any) => {
      this.masterList = res;
      // console.log(this.masterList);
    });
  }

  selectedHome(i: number, name: string) {
    let selected = this.teamList[i].find((el: any) => el.name == name);
    this.match[i].home_image = selected.image;
    // console.log(this.match[i].home_image);
  }

  selectedAway(i: number, name: string) {
    let selected = this.teamList[i].find((el: any) => el.name == name);
    this.match[i].away_image = selected.image;
    // console.log(this.match[i].away_image);

  }

  selectedMaster(index: number, midx: number, master: number) {
    // console.log(master, index);
    // find master by id
    let selected = this.masterList.find((el: any) => el.id == master);
    // console.log(selected);
    this.match[index].master[midx].id = selected.id;
    this.match[index].master[midx].name = selected.name;
    this.match[index].master[midx].image = selected.image;

    // console.log(this.match);
  }

  submit() {
    // console.log(this.match);
    this.admin.addTb1(this.match).subscribe((res: any) => {
      // console.log(res);
      if (res.status == '200') {
        this.message = 'บันทึกข้อมูลเรียบร้อย';
        this.status = 'success';
        alert('บันทึกข้อมูลเรียบร้อย');
      } else {
        this.message = 'บันทึกข้อมูลไม่สำเร็จ';
        this.status = 'danger';
        alert('บันทึกข้อมูลไม่สำเร็จ');
      }

    });
  }
}
