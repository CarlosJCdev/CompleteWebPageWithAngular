import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AngularComponent } from '../angular/angular.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor() { 
    
  }

  ngOnInit(): void {

  }

}
