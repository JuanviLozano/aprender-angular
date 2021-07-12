import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

  verHeroe() {
  console.log(this.index);
  
  }

}
