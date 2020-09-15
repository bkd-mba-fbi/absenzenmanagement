import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyAbsencesRoutingModule } from './my-absences-routing.module';
import { MyAbsencesComponent } from './components/my-absences/my-absences.component';
import { MyAbsencesShowComponent } from './components/my-absences-show/my-absences-show.component';
import { MyAbsencesReportComponent } from './components/my-absences-report/my-absences-report.component';
import { MyAbsencesReportLinkComponent } from './components/my-absences-report-link/my-absences-report-link.component';
import { MyAbsencesConfirmComponent } from './components/my-absences-confirm/my-absences-confirm.component';

@NgModule({
  declarations: [
    MyAbsencesComponent,
    MyAbsencesShowComponent,
    MyAbsencesReportComponent,
    MyAbsencesReportLinkComponent,
    MyAbsencesConfirmComponent,
  ],
  imports: [SharedModule, MyAbsencesRoutingModule],
})
export class MyAbsencesModule {}