import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  constructor() {/*  */ }

  @Input() tituloAplicacion = 'Aplicacion';
  ngOnInit(): void {
    console.log('header init')
  }

}
