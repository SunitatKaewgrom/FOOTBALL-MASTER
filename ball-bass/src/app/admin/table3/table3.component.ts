import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { UploadService } from '../upload.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-table3',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table3.component.html',
  styleUrl: './table3.component.scss',
  providers: [AdminService, UploadService]

})

export class Table3Component {

  data: any = [];
  new_data = { name: '', statistic: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], message: '', odds: '', image: '', statics: '0' };

  imgUrl = 'https://admin.ballded789.co:3000/img/';

  currentFile?: File;
  edit: any = [];


  constructor(private uploadService: UploadService, private admin: AdminService) { }


  ngOnInit() {
    this.getHomeMaster();
  }

  addHomeMAster() {
    this.data.push({ name: '', statistic: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], message: '', odds: '', image: '', statics: '0' });
  }

  removeHomeMaster(index: number) {
    this.data.splice(index, 1);
  }

  saveHomeMaster() {
    this.admin.addTb3(this.new_data).subscribe((res) => {
      // console.log(res);
      if (res.status == 200) {
        this.new_data = { name: '', statistic: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3'], message: '', odds: '', image: '', statics: '0' };
        alert('บันทึกข้อมูลสำเร็จ');
        this.getHomeMaster();
      } else {
        alert('บันทึกข้อมูลไม่สำเร็จ');
      }
    });
  }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
    if (this.currentFile) {
      this.upload();
    }
  }

  upload(): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            // this.message = event.body.message;
            this.new_data.image = event.body.file.filename;
            // console.log(this.new_data.image);

          }
        },
        error: (err: any) => {
          if (err.error && err.error.message) {
          } else { }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }

  getHomeMaster() {
    this.admin.getTb3().subscribe((res) => {
      this.data = res;
      // push false to edit
      this.edit = new Array(res.length).fill(false);

    });
  }

  updateHomeMaster(id: any, ball: any) {
    // console.log(ball);
    this.admin.updateTb3(id, ball).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.getHomeMaster();
      }
    });
  }

  updateHomeMasterClick(index: any) {
    this.edit[index] = true;
  }

  cancelEdit(index: any) {
    this.edit[index] = false;
    this.getHomeMaster();
  }

  deleteImage(index: any) {
    this.data[index].image = '';
  }

  deleteHomeMaster(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.admin.deleteTb3(id).subscribe((res: any) => {
        // console.log(res);
        if (res.status == 200) {
          this.getHomeMaster();
        }
      });
    }
  }

  selectFileEdit(event: any, index: number): void {
    this.currentFile = event.target.files.item(0);
    if (this.currentFile) {
      this.uploadEdit(index);
    }
  }

  uploadEdit(index: number): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            // this.message = event.body.message;
            this.data[index].image = event.body.file.filename;
          }
        },
        error: (err: any) => {
          if (err.error && err.error.message) {
          } else {
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }


}
