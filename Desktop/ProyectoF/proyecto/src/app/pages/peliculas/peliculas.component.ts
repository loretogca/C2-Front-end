import { Component, OnInit } from '@angular/core';
import { CardpeliculasComponent } from '../../layout/cardpeliculas/cardpeliculas.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from '../../comment/comment.component';
import { CommentService } from '../../comment.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CardpeliculasComponent, FormsModule, CommentComponent, CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss',
  providers: [CommentService]
})
export class PeliculasComponent implements OnInit{
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
