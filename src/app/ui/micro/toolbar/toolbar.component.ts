import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  expand() {
    this.expanded = !this.expanded;
    console.log(this.expanded);
    
  }

}
