import { Component, OnInit } from "@angular/core";

import { PokemonService } from "./pokemon.service";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "ns-items",
    templateUrl: "./pokemon.component.html",
})
export class PokemonComponent implements OnInit {
    $pokemons: BehaviorSubject<Array<any>>;
    pokemons = [];
    idxstart = 0;

    constructor(private ps: PokemonService) {
        this.$pokemons = new BehaviorSubject([]);
    }

    ngOnInit(): void {
        this.ps.getPokemons().subscribe(
            (response: any) => {
                this.pokemons.push(...response.results);
                this.$pokemons.next(this.pokemons);
            },
            (err) => console.log(err)
        );
    }

    loadMore() {
        console.log("called");
        if (this.pokemons.length <= 0) return;
        this.idxstart += 20;
        this.ps.getPokemons(this.idxstart).subscribe((response: any) => {
            if (response.results) {
                this.pokemons.push(...response.results);
                this.$pokemons.next(this.pokemons);
            }
        });
    }
}
