import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UploadService, AdminService],

})
export class UsersComponent {

  Admin = {
    username: '',
    password: '',
  }

  imgUrl = 'https://admin.ballded789.co:3000/img/';

  masterList: any = [];
  edit: any = [];

  currentFile?: File;
  message = '';
  status: string = "warning";

  constructor(private uploadService: UploadService, private admin: AdminService) { }

  ngOnInit() {
    this.getAdmin();
  }


  saveAdmin() {
    // console.log(this.Admin);
    this.admin.addAdmin(this.Admin).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.message = res.message;
        this.Admin.username = '';
        this.Admin.password = '';
        this.currentFile = undefined;
        this.status = 'success';
        this.getAdmin();
      } else {
        this.message = res.message;
        this.status = 'danger'
      }
    });
  }

  deleteAdmin(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.admin.deleteAdmin(id).subscribe((res: any) => {
        // console.log(res);
        if (res.status == 200) {
          this.message = res.message;
          this.status = 'success';
          this.getAdmin();
        }
      });
    }

  }

  getAdmin() {
    this.admin.getAdmin().subscribe((res: any) => {
      this.masterList = res;
      this.edit = new Array(this.masterList.length).fill(false);
    });
  }

  updateAdmin(id: any, ball: any) {
    // console.log(ball);

    this.admin.updateAdmin(id, ball).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.message = 'อัพเดตข้อมูล Admin สำเร็จ';
        this.status = 'success';
        this.getAdmin();
      } else {
        this.message = res.message + '. ชื่อ Admin ซ้ำ';
        this.status = 'danger'
      }

    });
  }

  updateAdminClick(index: any) {
    this.edit[index] = true;
  }

  cancelEdit(index: any) {
    this.edit[index] = false;
    this.getAdmin();
  }

  deleteImage(index: any) {
    this.masterList[index].image = '';
  }
}
