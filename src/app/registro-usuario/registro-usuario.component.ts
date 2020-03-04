import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario:usuario = new usuario()
  
  constructor(private router: Router, private usuarioService: UsuarioService) { 
  }

    crearUsuario(): void{
      this.usuarioService.crearUsuario(this.usuario)
          .subscribe( data => {
            alert("Usuario generado de forma correcta.");
      });
    };
    
  

  ngOnInit(): void {
  }

}
