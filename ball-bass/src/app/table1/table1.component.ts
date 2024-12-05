import { Component } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.scss',
  providers: [TableDataService]
})
export class Table1Component {
  imgUrl = 'https://admin.ballded789.co:3000/img/';
  data: any = [];
  message: any = '';
  width: number = window.innerWidth;
  image1: any;
  image2: any;

  constructor(private tbdata: TableDataService) { }


  ngOnInit() {
    this.getTb1();
    this.getmessage();

    // get screen width
    this.width = window.innerWidth;
  }

  getmessage() {
    this.tbdata.getMessage().subscribe((data: any) => {
      // console.log(data);
      this.message = data[0].message;
      this.image1 = data[0].image1;
      this.image2 = data[0].image2;
    });
  }

  getTb1() {
    this.tbdata.getTb1().subscribe((data: any) => {
      this.data = data[0].data;
      // console.log(this.data);
      // sort all data in data sort by data.id
      this.data.sort((a: any, b: any) => {
        return a.id - b.id;
      });

      // เก็บไว้เฉพาะ array 0-4 ที่เหลือเอาออก
      this.data = this.data.slice(0, 5);

      // sort all master in data.master sort by data.master.id
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        element.master.sort((a: any, b: any) => {
          return a.id - b.id;
        });
      }



    });
  }

  convertDate(date: any, time: any) {
    let monthList = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    // 3 มี.ค.,01:00 น.
    let d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    let result = `${day} ${monthList[month]},${hour}:${minute} น.`;
    return result;
  }

  result(home: number, away: number, master_result: string) {
    if (master_result === '1') {
      master_result = 'WIN';
    }
    if (master_result === '2') {
      master_result = 'DRAW';
    }
    if (master_result === '3') {
      master_result = 'LOSE';
    }

    return master_result;
  }
}
