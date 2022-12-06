import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name : string;
  urlImage : string;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  search(){
    //Es importante el Observable para poder suscribirse al return
    this.pokemonService.getPokemon(this.name).subscribe((data:any) =>{
      this.urlImage = data.sprites.front_default
    });
  }

}
