import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any= {};
  casa: String = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService ) { 
      
    this.activatedRoute.params.subscribe( params => {
      // Params nos devuelve el id que se le envia por ruta 
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe.casa);
      
    })
  }

  ngOnInit(): void {
    if(this.heroe.casa == 'DC') {
      this.casa = '../../../assets/img/DC.png';
    } else {
      this.casa = '../../../assets/img/Marvel.png';
    }
  }

}
