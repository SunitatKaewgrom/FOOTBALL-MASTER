import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss',
  providers: [UploadService, AdminService],
})
export class LeagueComponent {

  League = {
    name: '',
    image: '',
  }

  imgUrl = 'https://admin.ballded789.co:3000/img/';

  masterList: any = [];
  edit: any = [];

  currentFile?: File;
  message = '';
  status: string = "warning";

  constructor(private uploadService: UploadService, private admin: AdminService) { }

  ngOnInit() {
    this.getLeague();
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
            this.League.image = event.body.file.filename;
            // console.log(this.League.image);

          }
        },
        error: (err: any) => {
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
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
            this.masterList[index].image = event.body.file.filename;
          }
        },
        error: (err: any) => {
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }

  saveLeague() {
    // console.log(this.League);
    this.admin.addLeague(this.League).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.message = res.message;
        this.League.name = '';
        this.League.image = '';
        this.currentFile = undefined;
        this.status = 'success';
        this.getLeague();
      } else {
        this.message = res.message;
        this.status = 'danger'
      }
    });
  }

  deleteLeague(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.admin.deleteLeague(id).subscribe((res: any) => {
        // console.log(res);
        if (res.status == 200) {
          this.message = res.message;
          this.status = 'success';
          this.getLeague();
        }
      });
    }

  }

  getLeague() {
    this.admin.getLeague().subscribe((res: any) => {
      this.masterList = res;
      this.edit = new Array(this.masterList.length).fill(false);
    });
  }

  updateLeague(id: any, ball: any) {
    // console.log(ball);

    this.admin.updateLeague(id, ball).subscribe((res: any) => {
      if (res.status == 200) {
        this.message = 'อัพเดตข้อมูลลีกสำเร็จ';
        this.status = 'success';
    
        // กำหนดเวลาการแสดงข้อความ 3 วินาที
        setTimeout(() => {
          this.message = '';
        }, 3000);
    
        this.getLeague(); // เรียกข้อมูลใหม่
      } else {
        this.message = res.message + '. ชื่อลีกซ้ำ';
        this.status = 'danger';
    
        // กำหนดเวลาการแสดงข้อความ 5 วินาที
        setTimeout(() => {
          this.message = '';
        }, 5000);
      }
    });
    
  }

  updateLeagueClick(index: any) {
    this.edit[index] = true;
  }

  cancelEdit(index: any) {
    this.edit[index] = false;
    this.getLeague();
  }

  deleteImage(index: any) {
    this.masterList[index].image = '';
  }

  
}
