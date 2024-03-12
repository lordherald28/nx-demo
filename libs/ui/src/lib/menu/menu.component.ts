// import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IMenuItems } from '@demo-inycom/utils';

@Component({
  selector: 'lib-ui-app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  // standalone: true,
  // imports: [RouterModule, CommonModule]
})
export class MenuComponent implements OnInit {

  @Input() menuItems: IMenuItems[] = [];
  constructor() {/*   */}

  ngOnInit() { 
    console.log('menu items: ', this.menuItems);
  }

}
