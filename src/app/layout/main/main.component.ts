import { NavbarService } from './../header/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public nivelTamannio: number;

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbar.obtenerNivelTamannio().subscribe(nivelTamannio => {
      this.nivelTamannio = nivelTamannio;
    });
  }

  public setearNivelTamannio(): string {
    return `nivel-tamannio-${this.nivelTamannio}`;
  }

}
