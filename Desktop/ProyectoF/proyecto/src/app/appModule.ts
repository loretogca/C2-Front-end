import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentService } from './comment.service';
import { CommentComponent } from './comment/comment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CommentComponent],
  imports: [HttpClientModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}