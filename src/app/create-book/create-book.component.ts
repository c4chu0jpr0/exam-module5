import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book-service/book-service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: any = {
    title: '',
    author: '',
    description: '',
  };
  constructor(private router: Router, private service: BookService) { }

  ngOnInit(): void {
  }
  dangki = () => { 
    
    this.service
      .addBook(this.book)
      .then((res) => {
        this.router.navigateByUrl('/');
      })
      .catch((e) => {
        window.alert('Connection Error !');
      });
  };
  Back = () => {
    this.router.navigateByUrl('/');
  };
}
