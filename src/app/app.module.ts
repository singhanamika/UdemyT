import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
	import { MatIconModule } from '@angular/material/icon'
//import {MatFormFieldModule} from '@angular/material/form-field';
import	{MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {AuthorserviceService} from './authorservice.service';
import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { CasingPipe } from './casing.pipe';
import { FavcomponentComponent } from './favcomponent/favcomponent.component';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { ReusableComponent } from './reusable/reusable.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DemoNumber } from './demo.number';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
	SummaryPipe,
	TitleCasingComponent,
	CasingPipe,
	FavcomponentComponent,
	HttpserviceComponent,
	ReusableComponent,
	HeroesComponent,
	HeroDetailComponent,
    DemoNumber
  ],
  imports: [
    BrowserModule,
	FormsModule,
	BrowserAnimationsModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatInputModule,
	//MatFormFieldModule
	MatDatepickerModule,
	MatNativeDateModule,
	MatIconModule,
	HttpModule
  ],
  providers: [AuthorserviceService,
  HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
