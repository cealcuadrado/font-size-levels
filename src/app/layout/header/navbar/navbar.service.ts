import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private sujetoNivelTamannio = new BehaviorSubject<number>(2);

  constructor() { }

  public setearNivelTamannio(nivel: number): void {
    this.sujetoNivelTamannio.next(nivel);
  }

  public obtenerNivelTamannio(): Observable<number> {
    return this.sujetoNivelTamannio.asObservable();
  }
}
