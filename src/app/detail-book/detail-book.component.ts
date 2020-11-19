import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book-service/book-service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
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
  Back = () => {
    this.router.navigateByUrl('/');
  };
}
