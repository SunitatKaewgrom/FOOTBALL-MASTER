import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadService } from '../upload.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-head-message',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './head-message.component.html',
  styleUrl: './head-message.component.scss',
  providers: [AdminService, UploadService]
})
export class HeadMessageComponent implements OnInit {
  constructor(private admin: AdminService, private uploadService: UploadService) { }

  message: any = {
    message: '',
    image1: '',
    image2: '',
  };

  message_status: any = '';
  currentFile1?: File;
  currentFile2?: File;
  imgUrl = 'https://admin.ballded789.co:3000/img/';
  ngOnInit() {
    this.getMessage();
  }

  selectFile1(event: any): void {
    this.currentFile1 = event.target.files.item(0);
    if (this.currentFile1) {
      this.upload1();
    }
  }

  selectFile2(event: any): void {
    this.currentFile2 = event.target.files.item(0);
    if (this.currentFile2) {
      this.upload2();
    }
  }

  upload1(): void {
    if (this.currentFile1) {
      this.uploadService.upload(this.currentFile1).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            // this.message = event.body.message;
            this.message.image1 = event.body.file.filename;
            // console.log(this.Team.image);

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
          this.currentFile1 = undefined;
        },
      });
    }
  }

  upload2(): void {
    if (this.currentFile2) {
      this.uploadService.upload(this.currentFile2).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            // this.message = event.body.message;
            this.message.image2 = event.body.file.filename;
            // console.log(this.Team.image);

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
          this.currentFile2 = undefined;
        },
      });
    }
  }

  getMessage() {
    this.admin.getMessage().subscribe((data: any) => {
      this.message = data[0];
      this.message_status = data.length > 0 ? 'update' : 'save';
    });
  }

  updateMessage() {
    this.admin.updateMessage(this.message).subscribe((data: any) => {
      if (data.status === 200) {
        alert('Update Success');
      } else {
        alert('Update Fail');
      }
    });
  }

  saveMessage() {
    this.admin.saveMessage(this.message).subscribe((data: any) => {
      if (data.status === 200) {
        alert('บันทึกสำเร็จ');
      } else {
        alert('บันทึกไม่สำเร็จ');
      }
    });
  }

}
