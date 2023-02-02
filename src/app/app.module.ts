import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpressionComponent } from './formulas/expression/expression.component';
import { VariableComponent } from './formulas/variable/variable.component';
import { BasicComponent } from './formulas/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ExpressionComponent,
    VariableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
