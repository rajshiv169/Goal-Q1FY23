import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BussinessDetailsComponent } from './components/bussiness-details/bussiness-details.component';
import { BussinessDetailsAboutComponent } from './components/bussiness-details-about/bussiness-details-about.component';
import { ChooseComponent } from './components/choose/choose.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { ChooseStateComponent } from './components/choose-state/choose-state.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamComponent } from './components/team/team.component'

@NgModule({
  declarations: [
    OnboardingComponent,
    BussinessDetailsComponent,
    BussinessDetailsAboutComponent,
    ChooseComponent,
    ChooseCompanyComponent,
    ChooseStateComponent,
    HeaderComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    BrowserAnimationsModule
  ]
})
export class OnboardingModule { }
