import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { HttpResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-ball-master',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './ball-master.component.html',
  styleUrl: './ball-master.component.scss',
  providers: [UploadService, AdminService],
})
export class BallMasterComponent {

  ballMaster = {
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
    this.getBallMaster();
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
            this.ballMaster.image = event.body.file.filename;
            // console.log(this.ballMaster.image);

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

  saveBallMaster() {
    // console.log(this.ballMaster);
    this.admin.addBallMaster(this.ballMaster).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.message = res.message;
        this.ballMaster.name = '';
        this.ballMaster.image = '';
        this.currentFile = undefined;
        this.status = 'success';
        this.getBallMaster();
      } else {
        this.message = res.message;
        this.status = 'danger'
      }
    });
  }

  deleteBallMaster(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.admin.deleteBallMaster(id).subscribe((res: any) => {
        // console.log(res);
        if (res.status == 200) {
          this.message = res.message;
          this.status = 'success';
          this.getBallMaster();
        }
      });
    }

  }

  getBallMaster() {
    this.admin.getBallMaster().subscribe((res: any) => {
      this.masterList = res;
      this.edit = new Array(this.masterList.length).fill(false);
    });
  }

  updateBallMaster(id: any, ball: any) {
    // console.log(ball);

    this.admin.updateBallMaster(id, ball).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.message = 'อัพเดตข้อมูลเซียนบอลสำเร็จ';
        this.status = 'success';
        this.getBallMaster();
      } else {
        this.message = res.message + '. ชื่อเซียนบอลซ้ำ';
        this.status = 'danger'
      }

    });
  }

  updateBallMasterClick(index: any) {
    this.edit[index] = true;
  }

  cancelEdit(index: any) {
    this.edit[index] = false;
    this.getBallMaster();
  }

  deleteImage(index: any) {
    this.masterList[index].image = '';
  }
}
