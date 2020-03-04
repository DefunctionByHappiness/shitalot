import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  usuarios: usuario[]; // recibe un array de perfiles

  usuarioSeleccionado: usuario;
  onSelect(usuario: usuario): void {
  this.usuarioSeleccionado = usuario;

}
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
     }

  getUsuarios(): void{
    this.usuarioService.getUsuarios().subscribe( usuarios => this.usuarios= usuarios);
    
  }

}
