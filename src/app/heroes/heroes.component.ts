import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public name:any;
  hero:Hero = new Hero(9178,"bitu_palai")
  constructor() {
    this.name = "spandan palai"; 
   }
  
  ngOnInit(): void {
  
  }
  
  
  
  


}
