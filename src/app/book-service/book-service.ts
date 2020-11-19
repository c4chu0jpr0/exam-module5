import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BookService {

    constructor(public httpClient: HttpClient) { }

    getData = (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books";
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    addBook = (books): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books";
            this.httpClient.post(url,books)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    updateBook = (id,books): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books/"+id;
            this.httpClient.put(url,books)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    detailBook = (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books/"+id;
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    deleteBook = (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books/"+id;
            this.httpClient.delete(url,id)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}