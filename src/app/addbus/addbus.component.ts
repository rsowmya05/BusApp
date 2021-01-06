import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})

export class AddbusComponent implements OnInit {

  
  constructor(private route:Router) { 
    
  }
  add(){
    // this.showModal = true;    
    this.route.navigate(["add"])
  }
  ngOnInit(): void {
  } 

}
