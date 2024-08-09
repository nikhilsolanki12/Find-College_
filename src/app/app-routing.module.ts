import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { ExploreCollegeComponent } from './explore-college/explore-college.component';
import { ExploreHostelComponent } from './explore-hostel/explore-hostel.component';
import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'landing-page',component:LandingPageComponent},
  {path:'explore-college',component:ExploreCollegeComponent},
  {path:'college-details',component:CollegeDetailsComponent},
  {path:'explore-hostels',component:ExploreHostelComponent},
  {path:'hostel-details',component:HostelDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
