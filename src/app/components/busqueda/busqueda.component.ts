import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService
    ) {
      
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino']
      this.heroes = this._heroeService.buscarHeroes(params['termino'])
      console.log(this.heroes);
    })
  }

}
