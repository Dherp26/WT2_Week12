import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "./pokemon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit {
    pokemon;
    name;

    constructor(private ps: PokemonService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ps.getPokemon(this.name).subscribe((response: any) => {
            this.pokemon = response;
        });
    }
}
