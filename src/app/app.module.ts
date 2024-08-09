import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { CardSliderComponent } from './landing-page/card-slider/card-slider.component';
import { CountryCardComponent } from './landing-page/country-card/country-card.component';
import { CourseIconComponent } from './landing-page/course-icon/course-icon.component';
import { GlassBgComponent } from './landing-page/glass-bg/glass-bg.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { Slider2Component } from './landing-page/slider2/slider2.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { CurveCardComponent } from './landing-page/curve-card/curve-card.component';
import { ExpertTalkComponent } from './landing-page/expert-talk/expert-talk.component';
import { FilterComponent } from './explore-college/filter/filter.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CollegeComponent } from './college-details/college/college.component';
import { SearchBoxComponent } from './landing-page/search-box/search-box.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ExploreCollegeComponent } from './explore-college/explore-college.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { RatingComponent } from './college-details/rating/rating.component';
import { CompareComponent } from './college-details/compare/compare.component';
import { ReasonComponent } from './college-details/reason/reason.component';
import { ReviewComponent } from './college-details/review/review.component';
import { OverviewComponent } from './college-details/college/overview/overview.component';
import { CoursesComponent } from './college-details/college/courses/courses.component';
import { AdmissionComponent } from './college-details/college/admission/admission.component';
import { FacilitesComponent } from './college-details/college/facilites/facilites.component';
import { CampusComponent } from './college-details/college/campus/campus.component';
import { PlacementComponent } from './college-details/college/placement/placement.component';
import { SimilarComponent } from './college-details/similar/similar.component';
import { ExploreHostelComponent } from './explore-hostel/explore-hostel.component';
import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { Filter2Component } from './explore-hostel/filter2/filter2.component';
import { HostelComponent } from './hostel-details/hostel/hostel.component';
import { RatingHostelComponent } from './hostel-details/rating-hostel/rating-hostel.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PrefixInterceptor, ErrorHandlingInterceptor } from './_helpers';
import { UserService } from './_services';
import { SimilarHostelsComponent } from './hostel-details/similar-hostels/similar-hostels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardSliderComponent,
    CountryCardComponent,
    CourseIconComponent,
    GlassBgComponent,
    NextDirective,
    PrevDirective,
    Slider2Component,
    FooterComponent,
    CurveCardComponent,
    ExpertTalkComponent,
    FilterComponent,
    AdminDashboardComponent,
    CollegeComponent,
    SearchBoxComponent,
    LandingPageComponent,
    ExploreCollegeComponent,
    CollegeDetailsComponent,
    RatingComponent,
    CompareComponent,
    ReasonComponent,
    ReviewComponent,
    OverviewComponent,
    CoursesComponent,
    AdmissionComponent,
    FacilitesComponent,
    CampusComponent,
    PlacementComponent,
    SimilarComponent,
    ExploreHostelComponent,
    HostelDetailsComponent,
    Filter2Component,
    HostelComponent,
    RatingHostelComponent,
    SimilarHostelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      
    })
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: PrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
