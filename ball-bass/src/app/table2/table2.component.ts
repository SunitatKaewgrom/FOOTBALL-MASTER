import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.scss',
  providers: [TableDataService]

})
export class Table2Component {
  image1: any;
  image2: any;
  constructor(private tbdata: TableDataService) { }

  imgUrl = 'https://admin.ballded789.co:3000/img/';
  data: any = [];
  master: any = [];
  statistic: any = [];
  message: any = '';

  ngOnInit() {
    this.getTb2();
    this.getmessage();

  }

  getmessage() {
    this.tbdata.getMessage().subscribe((data: any) => {
      // console.log(data);
      this.message = data[0].message;
      this.image1 = data[0].image1;
      this.image2 = data[0].image2;
    });
  }

  getTb2() {
    this.tbdata.getTb2().subscribe((data: any) => {
      this.data = data;
      for (let i = 0; i < this.data.length; i++) {
        this.data[i] = this.data[i].data;
      }

      // เรียงลำดับ this.data.master by id
      this.data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
      // console.log(this.data);
      this.getMaster();

    });
  }

  // get master data
  getMaster() {
    this.tbdata.getMaster().subscribe((data: any) => {
      this.master = data;
      // console.log(this.master);
      for (let index = 0; index < this.master.length; index++) {
        const element = this.master[index];
        this.statistic.push({ all: -1, win: 0, percent: 0 });
        // for loop data
        for (let i = 0; i < this.data.length; i++) {
          const matchData = this.data[i];
          // for loop matchData.master
          for (let j = 0; j < matchData.master.length; j++) {
            const matchMaster = matchData.master[j];
            if (matchMaster.id == element.id) {
              // console.log(matchMaster.name, element.name);
              this.statistic[index].all++;
              if (matchMaster.match.winner === matchMaster.match.win) {
                this.statistic[index].win++;
              }
            }
          }
        }
      }

      for (let index = 0; index < this.statistic.length; index++) {
        const element = this.statistic[index];
        element.percent = ((element.win / element.all) * 100).toFixed(0) + '%';
      }

      // console.log(this.statistic);

    });
  }

  convertDate(date: string) {
    let monthList = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    // 3 มี.ค.
    let d = new Date(date);
    return d.getDate() + ' ' + monthList[d.getMonth()];

  }
}
