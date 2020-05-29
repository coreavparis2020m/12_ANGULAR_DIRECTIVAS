import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-iteracion',
  templateUrl: './iteracion.component.html',
  styleUrls: ['./iteracion.component.css']
})
export class IteracionComponent implements OnInit {

  // la propiedad clientes va a ser una array de elementos de la clase Cliente
  clientes: Cliente[] = [ 
    {nombre: 'Juan Pérez', direcciones: ['Av España 4 Cáceres','Av Constitución 12 Madrid']},
    {nombre: 'Laura López', direcciones: ['c/ Paris 20 Cáceres']},
    {nombre: 'Juan Pérez', direcciones: ['c/ Pisa 12 Cáceres','Av Ppe de Vergara 100 Madrid']},
    {nombre: 'Juan Pérez', direcciones: ['Av España 4 Cáceres','Av Constitución 12 Madrid']},
    {nombre: 'Laura López', direcciones: ['c/ Paris 20 Cáceres']},
    {nombre: 'Juan Pérez', direcciones: ['c/ Pisa 12 Cáceres','Av Ppe de Vergara 100 Madrid']},
    {nombre: 'Juan Pérez', direcciones: ['Av España 4 Cáceres','Av Constitución 12 Madrid']},
    {nombre: 'Laura López', direcciones: ['c/ Paris 20 Cáceres']},
    {nombre: 'Juan Pérez', direcciones: ['c/ Pisa 12 Cáceres','Av Ppe de Vergara 100 Madrid']},
    {nombre: 'Juan Pérez', direcciones: ['Av España 4 Cáceres','Av Constitución 12 Madrid']},
    {nombre: 'Laura López', direcciones: ['c/ Paris 20 Cáceres']},
    {nombre: 'Juan Pérez', direcciones: ['c/ Pisa 12 Cáceres','Av Ppe de Vergara 100 Madrid']},
  ]   

  constructor() { }

  ngOnInit(): void {
  }

}
