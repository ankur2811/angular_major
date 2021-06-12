import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadComponent } from './upload/upload.component';
import {RouterModule} from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes=[
  {path:'land',component:LandingpageComponent},{path:'upload',component:UploadComponent}, {path:'video',component:VideoComponent},

{path:'**',redirectTo:'/land'}];

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    UploadComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
