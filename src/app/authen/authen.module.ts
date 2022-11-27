import { NgModule } from '@angular/core';
// import { NgxEchartsModule } from 'ngx-echarts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { ChartModule } from 'angular2-chartjs';
// import { NbCardModule } from '@nebular/theme';

// import { ThemeModule } from '../@theme/theme.module';

import { AuthenRoutingModule } from './authen-routing.module';
//import { LoginComponent } from './login/login.component';
import { AuthenComponent } from './authen.component';



@NgModule({
  imports: [
    // ThemeModule,
    AuthenRoutingModule,
    // NgxEchartsModule,
    // NgxChartsModule,
    // ChartModule,
    // NbCardModule,
  ],
  declarations: [AuthenComponent],
})
export class AuthenModule {}
