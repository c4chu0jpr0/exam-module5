import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: ListBookComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
      //    path: 'create',
      //   component: CreateBookComponent,
      //   }
        // ,{
        //   path: 'update/:id',
        //   component: UpdateBookComponent,
        // },
        // {
        //   path: 'delete/:id',
        //   component: DeleteBookComponent,
        // },
        // {
        //   path: 'detail/:id',
        //   component: DetailBookComponent,
        // }
    ]
  },
  {
    path: 'books/create',
    component: CreateBookComponent,
  },
  {
      path: 'books/update/:id',
      component: UpdateBookComponent,
    },
    {
        path: 'books/delete/:id',
        component: DeleteBookComponent,
      },
      {
        path: 'books/detail/:id',
        component: DetailBookComponent,
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
