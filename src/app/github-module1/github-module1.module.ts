import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, BodyComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [HeaderComponent, BodyComponent],
  exports: [HeaderComponent, BodyComponent],
  providers: []
})
export class GithubModule1Module { }
