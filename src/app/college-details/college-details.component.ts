import { Component, OnInit } from '@angular/core';
// import { CollegeDetailsService } from 'src/services/collegeDetails/college-details.service';
import { CollegeService } from '../_services/college/college.service';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {

  constructor(/*private _collegeDetails:CollegeDetailsService*/private college:CollegeService) { }

  ngOnInit(): void {
    // this._collegeDetails.getDetails().subscribe( data=> {
    //   console.log(data)
    // })
    console.log("hello")
    this.college.getDetails().subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
