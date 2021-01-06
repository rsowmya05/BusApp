import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebus',
  templateUrl: './deletebus.component.html',
  styleUrls: ['./deletebus.component.css']
})
export class DeletebusComponent implements OnInit {

  constructor(private route:Router)     { }

    delete(){
      // this.showModal = true;    
      this.route.navigate(["delete"])
    }
  ngOnInit(): void {
  }

}
