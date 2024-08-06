import { Form } from '@angular/forms';
import { Value } from './../../../node_modules/@firebase/remote-config-types/index.d';
import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  constructor(private angularFirestore: AngularFirestore) { }
  
  ngOnInit(): void {

  }
  onSubmit(formData: any){ // nhớ thêm kiểu dữ liệu cho các parameter truyền vào
    // console.log(formData.value.category);
    let categoryData = {
      category: formData.value.category,
      name: "Nguyen Khanh Ha"
    }
    this.angularFirestore.collection('categories').add(categoryData).then( docRef => {
      console.log(docRef);
    }).catch( error => {console.log(error)});
  }
}
