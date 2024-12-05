import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { HttpResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  providers: [UploadService, AdminService],
})
export class TeamsComponent {

  Team = {
    name: '',
    league_id: '',
    image: '',
  }

  imgUrl = 'https://admin.ballded789.co:3000/img/';

  teamList: any = [];
  edit: any = [];

  currentFile?: File;
  message = '';
  status: string = "warning";
  keyword: string = '';
  leagueList: any = [];

  constructor(private uploadService: UploadService, private admin: AdminService) { }

  ngOnInit() {
    this.getTeam();
    this.getLeagueList();
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
            this.Team.image = event.body.file.filename;
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
            this.teamList[index].image = event.body.file.filename;
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

  saveTeam() {
    // console.log(this.Team);
    this.admin.addTeam(this.Team).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        this.message = res.message;
        this.Team.name = '';
        this.Team.image = '';
        this.currentFile = undefined;
        this.status = 'success';
        this.getTeam();
      } else {
        this.message = res.message;
        this.status = 'danger'
      }
    });
  }

  deleteTeam(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.admin.deleteTeam(id).subscribe((res: any) => {
        // console.log(res);
        if (res.status == 200) {
          this.message = res.message;
          this.status = 'success';
          this.getTeam();
        }
      });
    }

  }

  getTeam() {
    this.admin.getTeam().subscribe((res: any) => {
      this.teamList = res;
      this.edit = new Array(this.teamList.length).fill(false);
      // console.log(this.teamList);

      this.search();
    });
  }

  updateTeam(id: any, ball: any) {
    // console.log(ball);
    let data = {
      id: id,
      name: ball.name,
      image: ball.image,
      league_id: ball.league_id
    }
    this.admin.updateTeam(id, data).subscribe((res: any) => {
      if (res.status == 200) {
        this.message = 'อัพเดตข้อมูลทีมสำเร็จ';
        this.status = 'success';
        this.getTeam();
      } else {
        this.message = res.message + '. ชื่อทีมซ้ำ';
        this.status = 'danger'
      }

    });
  }

  updateTeamClick(index: any) {
    this.edit[index] = true;
  }

  cancelEdit(index: any) {
    this.edit[index] = false;
    this.getTeam();
  }

  deleteImage(index: any) {
    this.teamList[index].image = '';
  }

  search() {
    this.admin.getTeam().subscribe((result: any) => {
      this.teamList = result;
      this.teamList = this.teamList.filter((res: any) => {
        return res.name.toLocaleLowerCase().match(this.keyword.toLocaleLowerCase()) || res.league_name.toLocaleLowerCase().match(this.keyword.toLocaleLowerCase());
      });
    });
  }

  // get league list
  getLeagueList() {
    this.admin.getLeague().subscribe((res: any) => {
      this.leagueList = res;
      // console.log(this.leagueList);

    });
  }
}
