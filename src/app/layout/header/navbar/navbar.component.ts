import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public nivelTamannio: number;
  public buttons = ['btn-sm', 'btn-md', 'btn-lg'];

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbar.obtenerNivelTamannio().subscribe(nivelTamannio => {
      this.nivelTamannio = nivelTamannio;
    });
  }

  public isActive(nivel: number): boolean {
    return this.nivelTamannio === nivel;
  }

  public cambiarNivelTamannio(nivel: number): void {
    this.navbar.setearNivelTamannio(nivel);
  }
}
