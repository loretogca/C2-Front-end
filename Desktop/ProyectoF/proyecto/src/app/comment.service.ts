import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  // Método para obtener comentarios
  getComments(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para agregar un comentario
  addComment(comment: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, comment, { headers });
  }

  // Método para eliminar un comentario
  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
