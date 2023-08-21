import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DATA1Component } from './pages/data1/data1.component';
import { DATA2Component } from './pages/data2/data2.component';
import { DATA3Component } from './pages/data3/data3.component';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditData1Component } from './pages/edit-data1/edit-data1.component';
import { TimeComponent } from './tools/time/time.component';
import { CalanderComponent } from './tools/calander/calander.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { ProfileComponent } from './tools/profile/profile.component';
import { NewcalanderComponent } from './tools/newcalander/newcalander.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DashboardPieComponent } from './tools/dashboard/dashboard-pie/dashboard-pie.component';
import { DashboardLineComponent } from './tools/dashboard/dashboard-line/dashboard-line.component';
import { DashboardAreaComponent } from './tools/dashboard/dashboard-area/dashboard-area.component';
import { DashboardRangeareaComponent } from './tools/dashboard/dashboard-rangearea/dashboard-rangearea.component';
import { DashboardBubbleComponent } from './tools/dashboard/dashboard-bubble/dashboard-bubble.component';
import { DashboardRadarComponent } from './tools/dashboard/dashboard-radar/dashboard-radar.component';
import { DashboardPolarareaComponent } from './tools/dashboard/dashboard-polararea/dashboard-polararea.component';
import { MatCardModule } from '@angular/material/card';
import { MainDashboardComponent } from './tools/dashboard/main-dashboard/main-dashboard.component';
import { DashboardBarComponent } from './tools/dashboard/dashboard-bar/dashboard-bar.component';
import { DashboardColumnComponent } from './tools/dashboard/dashboard-column/dashboard-column.component';
import { DashboardRadialbarComponent } from './tools/dashboard/dashboard-radialbar/dashboard-radialbar.component';
import { DashboardCandlestickComponent } from './tools/dashboard/dashboard-candlestick/dashboard-candlestick.component';
import { TeammembersComponent } from './tools/teammembers/teammembers.component';
import { DashboardtableComponent } from './tools/dashboard/dashboardtable/dashboardtable.component';
import { DashboardcardComponent } from './tools/dashboard/dashboardcard/dashboardcard.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DATA1Component,
    DATA2Component,
    DATA3Component,
    HomeComponent,
    AddDataComponent,
    EditData1Component,
    TimeComponent,
    CalanderComponent,
    ProfileComponent,
    NewcalanderComponent,
    DashboardPieComponent,
    DashboardLineComponent,
    DashboardAreaComponent,
    DashboardRangeareaComponent,
    DashboardBubbleComponent,
    DashboardRadarComponent,
    DashboardPolarareaComponent,
    MainDashboardComponent,
    DashboardBarComponent,
    DashboardColumnComponent,
    DashboardRadialbarComponent,
    DashboardCandlestickComponent,
    TeammembersComponent,
    DashboardtableComponent,
    DashboardcardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatNativeDateModule,
    NgApexchartsModule,
    NgIf,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatProgressBarModule,
    MatDividerModule,
    MatGridListModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
