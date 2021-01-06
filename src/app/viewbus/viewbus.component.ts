import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbus',
  templateUrl: './viewbus.component.html',
  styleUrls: ['./viewbus.component.css']
})
export class ViewbusComponent implements OnInit {

  constructor(private route:Router) { 
  }

  view(){
    // this.showModal = true;    
    this.route.navigate(["view"])
  }
  ngOnInit(): void {
  }

}
