import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {AutoFocusModule} from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

import {SplitterModule} from 'primeng/splitter';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import {AutoCompleteModule} from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DynamicComponent } from './dynamic/dynamic.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
  ],
  imports: [
    TableModule,
    ChartModule,
    TabMenuModule,
    TabViewModule,
    BrowserModule,
    ScrollPanelModule,
    SplitterModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    AutoFocusModule,
    InputTextModule,
    RippleModule,
    TagModule,
    HttpClientModule,
    DividerModule,
    AutoCompleteModule,
    PanelModule,
    CardModule,
    PasswordModule    ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
