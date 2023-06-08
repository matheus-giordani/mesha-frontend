import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { ListRegisterComponent } from './components/list-register/list-register.component';
import { ViewRegisterComponent } from './components/view-register/view-register.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { CpfFormatPipe } from './utils/cpfFormat.pipe';
import { PhoneFormatPipe } from './utils/numCelularFormat.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  declarations: [
    AppComponent,
    FormRegisterComponent,
    ListRegisterComponent,
    ViewRegisterComponent,
    PageErrorComponent,
    CpfFormatPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    ButtonModule,
    InputMaskModule,
    HttpClientModule,
    TableModule,
    SelectButtonModule,
    ToastrModule.forRoot()  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
