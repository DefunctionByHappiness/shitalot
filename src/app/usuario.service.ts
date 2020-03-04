/*import { Injectable } from '@angular/core';
import { USUARIOS } from 'src/mocklista';
import { usuario } from './usuario';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  getUsuarios(): Observable<usuario[]> {
    return of(USUARIOS);
  }
  
  constructor() { }
}*/
import { Injectable } from '@angular/core';

import { usuario } from './usuario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  /*getUsuarios(): Observable<usuario[]> {
    return of(USUARIOS);
  }*/
  
  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8080/leerListaUsuariosRest';

  public getUsuarios(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.userUrl);
  }

  public crearUsuario(usuario:usuario) {
    return this.http.post<usuario>(this.userUrl, usuario);
  }
}