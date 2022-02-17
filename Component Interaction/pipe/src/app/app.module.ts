import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPipePipe } from './my-pipe.pipe';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { TableComponent } from './table/table.component'
import { FormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    TableComponent,
    TemplateDrivenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
