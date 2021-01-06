import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent implements OnInit {

  constructor(private route:Router) { }

  update(){
    // this.showModal = true;    
    this.route.navigate(["update"])
  }
  ngOnInit(): void {
  }

}
