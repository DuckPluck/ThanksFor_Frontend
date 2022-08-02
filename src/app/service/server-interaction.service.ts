// Service for client-server interaction

import { Injectable } from "@angular/core";

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

    export interface RootObject {
        tables: Table[];
    }

    Injectable({providedIn: 'root'})
    export class serverInteraction {

    }