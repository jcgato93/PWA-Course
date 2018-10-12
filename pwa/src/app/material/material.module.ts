import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule, MatSnackBarModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule, 
    MatIconModule,
    MatSnackBarModule,
    MatCardModule

  ],
  declarations: []
})
export class MaterialModule {

 }
