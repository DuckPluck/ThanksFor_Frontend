// Service for client-server interaction

import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

// json response format:
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Sticker {
  id: number;
  text: string;
  todos: Todo[];
  image: string;
}

export interface Table {
  id: number;
  stickers: Sticker[];
}

@Injectable({ providedIn: 'root' })

export class ServerInteractionService implements OnInit {
  constructor(protected http: HttpClient) {}
  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------------------ Table ---------------------------------------
  fetchTable(): Observable<Table[]> {
    return this.http.get<Table[]>('http://localhost:3000/tables');

    /* catchError((error) => {
      console.log('Error: ', error.message);
      return throwError(error);
    }); */
  }

  addTable(table: Table[]): Observable<Table> {
    return this.http.post<Table>('http://localhost:3000/tables', table);
  }

  removeTable(id: number): Observable<void | HttpEvent<void>> {
    return this.http.delete<void>(`http://localhost:3000/tables/${id}`);
  }

  editTable(table: Table[], id: number): Observable<Table> {                                // метод для изм. прав и названия доски
    return this.http.post<Table>(`http://localhost:3000/tables/${id}`, table);
  }

  // ------------------------------------------------------------------------------------------------ Sticker ---------------------------------------

  addSticker() {}                              
  removeSticker() {}
  editSticker() {}

  // ------------------------------------------------------------------------------------------------ Todo ---------------------------------------
  addTodo() {}
  removeTodo() {}
  editTodo() {}
  completeTodo() {}
}
