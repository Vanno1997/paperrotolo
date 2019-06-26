import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtenteService } from './services/utente.service';
import { ThingListComponent } from './components/thing/thing-list/thing-list.component';
import { UserInsertComponent } from './components/user/user-insert/user-insert.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { HardwareInsertComponent } from './components/hardware/hardware-insert/hardware-insert.component';
import { HardwareUpdateComponent } from './components/hardware/hardware-update/hardware-update.component';
import { HardwareListComponent } from './components/hardware/hardware-list/hardware-list.component';
import { ThingService } from './services/thing.service';
import { HardwareService } from './services/hardware.service';
import { LoginComponent } from './components/login/login/login.component';
import { LoginService } from './services/login.service';
import { LabelInsertComponent } from './components/label/label-insert/label-insert.component';
import { LabelUpdateComponent } from './components/label/label-update/label-update.component';
import { LabelDeleteComponent } from './components/label/label-delete/label-delete.component';
import { LabelListComponent } from './components/label/label-list/label-list.component';
import { ThingUpdateComponent } from './components/thing/thing-update/thing-update.component';
import { ThingDeleteComponent } from './components/thing/thing-delete/thing-delete.component';
import { ThingInsertComponent } from './components/thing/thing-insert/thing-insert.component';
import { BehaviorInsertComponent } from './components/behavior/behavior-insert/behavior-insert.component';
import { BehaviorUpdateComponent } from './components/behavior/behavior-update/behavior-update.component';
import { BehaviorListComponent } from './components/behavior/behavior-list/behavior-list.component';
import { CodeInsertComponent } from './components/code/code-insert/code-insert.component';
import { CodeUpdateComponent } from './components/code/code-update/code-update.component';
import { CodeListComponent } from './components/code/code-list/code-list.component';
import { HomeBoComponent } from './components/home/home-bo/home-bo.component';
import { HomeAdminComponent } from './components/home/home-admin/home-admin.component';
import { MenuBoComponent } from './components/menu/menu-bo/menu-bo.component';
import { MenuAdminComponent } from './components/menu/menu-admin/menu-admin.component';
import { KeywordInsertComponent} from'./components/keyword/keyword-insert/keyword-insert.component';
import {KeywordListComponent} from './components/keyword/keyword-list/keyword-list.component';
import {KeywordUpdateComponent} from './components/keyword/keyword-update/keyword-update.component';
import { LinkTKInsertComponent } from './components/linkTK/link-tk-insert/link-tk-insert.component';
import { LinkTkListComponent } from './components/linkTK/link-tk-list/link-tk-list.component';
import { LinkTkDeleteComponent } from './components/linkTK/link-tk-delete/link-tk-delete.component';
import { LinkTkUpdateComponent } from './components/linkTK/link-tk-update/link-tk-update.component';
import { LinkTkShowThingComponent } from './components/linkTK/link-tk-show-thing/link-tk-show-thing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoDashboardComponent } from './components/bo-dashboard/bo-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CoopThingService} from './services/coopThingService.service';
import { ActionEventInsertComponent } from './components/action-event/action-event-insert/action-event-insert.component';
import { ActionEventUpdateComponent } from './components/action-event/action-event-update/action-event-update.component';
import { ActionEventDeleteComponent } from './components/action-event/action-event-delete/action-event-delete.component';
import { ActionEventListComponent } from './components/action-event/action-event-list/action-event-list.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ActionEventShowComponent } from './components/action-event/action-event-show/action-event-show.component';
import { ThingInfoComponent } from './components/thing-info/thing-info.component';
import { LabelNavbarComponent } from './components/label/label-navbar/label-navbar.component';
import { ThingNavbarComponent } from './components/thing/thing-navbar/thing-navbar.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('474801575817-6drnjk6m228rs723vct1tllkss2f9v10.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    UserInsertComponent,
    UserUpdateComponent,
    UserShowComponent,
    UserDeleteComponent,
    HardwareInsertComponent,
    HardwareUpdateComponent,
    HardwareListComponent,
    ThingListComponent,
    LoginComponent,
    LabelInsertComponent,
    LabelUpdateComponent,
    LabelDeleteComponent,
    LabelListComponent,
    ThingUpdateComponent,
    ThingDeleteComponent,
    ThingInsertComponent,
    BehaviorInsertComponent,
    BehaviorUpdateComponent,
    BehaviorListComponent,
    CodeInsertComponent,
    CodeUpdateComponent,
    CodeListComponent,
    HomeBoComponent,
    HomeAdminComponent,
    MenuBoComponent,
    MenuAdminComponent,
    KeywordInsertComponent,
    KeywordUpdateComponent,
    KeywordListComponent,
    LinkTKInsertComponent,
    LinkTkListComponent,
    LinkTkDeleteComponent,
    LinkTkUpdateComponent,
    NavbarComponent,
    LinkTkShowThingComponent,
    BoDashboardComponent,
    AdminDashboardComponent,
    ActionEventInsertComponent,
    ActionEventUpdateComponent,
    ActionEventDeleteComponent,
    ActionEventListComponent,
    ActionEventShowComponent,
    ThingInfoComponent,
    LabelNavbarComponent,
    ThingNavbarComponent,

  ],
  imports: [

    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [UtenteService, ThingService, HardwareService, LoginService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
