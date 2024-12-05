import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-table3',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table3.component.html',
  styleUrl: './table3.component.scss',
  providers: [TableDataService]

})
export class Table3Component {
  message: any = '';

  constructor(private tbdata: TableDataService) { }

  imgUrl = 'https://admin.ballded789.co:3000/img/';
  data: any = [];

  ngOnInit() {
    this.getTb3();
    this.getmessage();
  }

  getmessage() {
    this.tbdata.getMessage().subscribe((data: any) => {
      console.log(data);

      this.message = data[0].message;
    });
  }

  getTb3() {
    this.tbdata.getTb3().subscribe((data: any) => {
      this.data = data;
      // console.log(this.data);

    });
  }
}
