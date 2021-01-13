import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maikena',
  templateUrl: './maikena.component.html',
  styleUrls: ['./maikena.component.css']
})
export class MaikenaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  verify(authform:NgForm){
    if(!authform.valid) return;
    console.log(authform.value['username']);
    console.log(authform.value['password']);
    authform.reset();
  }

}
