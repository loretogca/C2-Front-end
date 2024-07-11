import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../layout/card/card.component';
import { ButtonComponent } from '../../layout/button/button.component';
import { CommentService } from '../../comment.service';
import { CommentComponent } from '../../comment/comment.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommentComponent, CommonModule, FormsModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss',
  providers: [CommentService]
})
export class SeriesComponent implements OnInit {
  comments: any[] = [];
  
  constructor(private commentService: CommentService){}
  ngOnInit(): void {
    this.getComments();
  }

  getComments():void{
    this.commentService.getComments().subscribe((data)=>{
      this.comments = data;
    },
    (error)=>{
      console.error('Error fetching comments', error);
    }
  );
}
  addComment(text: string): void {
    const newComment = { text };
    this.commentService.addComment(newComment).subscribe(
      (comment) => {
        this.comments.push(comment);
      },
      (error) => {
        console.error('Error adding comment', error);
      }
    );
  }
  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(
      () => {
        this.comments = this.comments.filter(comment => comment.id !== id);
      },
      (error) => {
        console.error('Error deleting comment', error);
      }
    );
  }
}
