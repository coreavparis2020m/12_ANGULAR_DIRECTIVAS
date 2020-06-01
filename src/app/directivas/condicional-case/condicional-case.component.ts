import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional-case',
  templateUrl: './condicional-case.component.html',
  styleUrls: ['./condicional-case.component.css']
})
export class CondicionalCaseComponent implements OnInit {

  jugadores: any = [
    {nombre: 'Magic Johnson', equipo: 'lakers'},
    {nombre: 'Larry Bird', equipo: 'celtics'},
    {nombre: 'Michael Jordan', equipo: 'bulls'},
    {nombre: 'Karem Abdul Jabar', equipo: 'celtics'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
