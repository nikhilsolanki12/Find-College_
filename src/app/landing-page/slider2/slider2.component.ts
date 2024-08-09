import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  constructor(
   private userService:UserService
  ) { }

  ngOnInit(): void {
   this.getEducation()
  }

  getEducation(){
    const param: any ={};
    this.userService.getEducation(param).subscribe(
      (res: any) => {
        if (res && res.code === 200) {
          // this.notif.message('success', res.message);
          // this.close();
        }
      },
      (error: any) => {
        // this.notif.message('error', error.error.message);
      }
    )
  }
}
