import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/_services/college/college.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  college_Details:any={}

  constructor(/*private _collegeDetails:CollegeDetailsService*/private college:CollegeService) { }
  ngOnInit(): void {
  
  
      // this._collegeDetails.getDetails().subscribe( data=> {
      //   console.log(data)
      this.college.getDetails().subscribe(
        data => {
          this.college_Details = data.data
          // const collegeDetails = JSON.stringify(data)
          console.log(data);
        }
      )
    }

    saveId(college:any){
      let id = college._id;
      localStorage.setItem("id",id);
    }
  
  }
  


