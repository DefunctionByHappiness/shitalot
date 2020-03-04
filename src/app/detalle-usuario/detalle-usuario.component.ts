import { Component, OnInit } from '@angular/core';
import {usuario} from '../usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
    usuario={
    id: 1,
    nombre: 'Lorem Usuarium',
    edad: 1,
    genero: '1',
    ciudad: 'mep',
    foto: 'https://images-na.ssl-images-amazon.com/images/I/51wgGNb%2BBvL._SY355_.jpg'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
