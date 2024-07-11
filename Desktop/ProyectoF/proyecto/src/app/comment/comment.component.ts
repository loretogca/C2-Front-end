import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../comment.service';
import { text } from 'body-parser';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  comments: any[] = [];
  newCommentText: string = '';
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments();
  }
  loadComments(): void{
    this.commentService.getComments().subscribe(data =>{
      this.comments = data;
    },
    (error) => {
      console.error('Error fetching comments', error)
    }
  );
  }
  addComment(): void{
    if (this.newCommentText.trim()){
      const newComment = { text: this.newCommentText};
      this.commentService.addComment(newComment).subscribe(
        (comment) => {
          this.comments.push(comment);
          this.newCommentText = '';
        },
        (error) =>{
          console.error('Error adding comment', error);
        }
      )
    }
    
  }
  deleteComment(commentId: number): void {
    this.commentService.deleteComment(commentId).subscribe(
      () => {
        this.comments = this.comments.filter(Comment => Comment.commentId ! == commentId);
      }
    )

  }

}
