import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book-service/book-service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  book: any =[];
  constructor(private router: Router,private service: BookService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getData()
      .then(res => {
        this.book = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  goToAdd(){
    this.router.navigateByUrl("/books/create")
  }
  updateCustomer=(id)=>{
   this.router.navigateByUrl("/books/update/"+id);
 }
 deleteCustomer(id){
  this.router.navigateByUrl("/books/delete/"+id);
}
detailCustomer(id){
  this.router.navigateByUrl("/books/detail/"+id);
}
}
