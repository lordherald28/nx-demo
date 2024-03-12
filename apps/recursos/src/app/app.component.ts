import { Component } from '@angular/core';
import { IMenuItems } from '@demo-inycom/utils';

@Component({
  selector: 'demo-inycom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Recursos';

  public  menuItems : Array<IMenuItems> = [
    {name:'Recursos',link:'/',isTitleNav:true},
    {name:'Administración',link:'admin'},
    {name:'Agenda',link:'agenda'},
    {name:'Mi Ficha',link:'mi-ficha'},
    {name:'Personas',link:'usuarios'},
    {name:'Ayuda',link:'ayuda'},
  ]

}
