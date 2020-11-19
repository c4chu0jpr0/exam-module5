import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book-service/book-service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  value: Number;
  book: any = {
    title: '',
    author: '',
    description: '',
  };
  constructor(public router: Router, private actRoute: ActivatedRoute,private service: BookService) { 
    this.value = parseInt(this.actRoute.snapshot.params.id);
    this.getbook(this.value);
  }

  ngOnInit(): void {
  }

  getbook(id){
    this.service.detailBook(id)
    .then(res => {
      this.book = res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  deleteCus(){
    this.service.deleteBook(this.value)
    .then((res) => {
      this.router.navigateByUrl('/');
    })
    .catch((e) => {
      window.alert('Connection Error !');
    });
  }
  back(){
    this.router.navigateByUrl("/");
  }
}
