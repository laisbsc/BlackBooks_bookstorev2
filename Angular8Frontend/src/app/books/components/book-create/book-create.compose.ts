import { Component } from '@angular/core';

@Component({
  selector: 'app-book-create', //defines the name of the selector function
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent {
  enteredValue = '';
  newBook = "No content";

  onAddBook(bookInput: HTMLTextAreaElement) {
    console.log(bookInput);
    this.newBook =  this.enteredValue;

  }

}
