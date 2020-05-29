import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {

  repositorio = 'Proyecto en Python';
  repositorioCheck: string;
  capital: string;

  constructor() { }

  ngOnInit(): void {
  }

  setResultado() {
    return this.capital.toLowerCase() === 'madrid';
  }

}
