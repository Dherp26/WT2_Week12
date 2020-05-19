import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
// untuk validasi formulir
import { ReactiveFormsModule } from "@angular/forms";
// untuk menggunakan formsmodule
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// untuk akses http
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// untuk load sidedrawer
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import Theme from "@nativescript/theme";

Theme.setMode(Theme.Dark);

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        PokemonComponent,
        PokemonDetailComponent,
        LoginComponent,
        ShellComponent,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
