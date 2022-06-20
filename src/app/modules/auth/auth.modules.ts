import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SigninComponent } from "src/app/signin/signin.component";
import * as fromAuth from '../../store/reducers/auth.reducer';
import { AuthEffects } from '../../store/effects/auth.effect';
import { MaterialModule } from "src/materialDesign/material/material.module";


@NgModule({
    declarations: [SigninComponent],
    imports: [CommonModule, MaterialModule, FormsModule,ReactiveFormsModule,  StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), EffectsModule.forFeature([AuthEffects])],
    exports: [SigninComponent],
  })
  export class AuthModule {}