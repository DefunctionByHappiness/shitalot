import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: usuario = new usuario()
  validForm: boolean = true;
  generos = ["Hombre", "Mujer"];

  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
  });

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  crearUsuario(): void{

    if (this.usuarioForm.valid) {
      this.validForm = true;
      this.usuario = {
        nombre: this.usuarioForm.value.nombre,
        edad: this.usuarioForm.value.edad,
        ciudad: this.usuarioForm.value.ciudad,
        foto: "/images/img.png",
        genero: this.usuarioForm.value.genero,
      }
      this.usuarioService.crearUsuario(this.usuario)
          .subscribe( data => {
            alert("Usuario" + data + "generado de forma correcta.");
      });
    } else {
      this.validForm = false;
    }

  };
}
