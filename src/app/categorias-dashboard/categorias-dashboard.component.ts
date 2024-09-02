import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriasService } from '../categorias.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-categorias-dashboard',
  templateUrl: './categorias-dashboard.component.html',
  styleUrl: './categorias-dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,CommonModule,RouterModule
  ]
})

export class CategoriasDashboardComponent implements OnInit {
  categoriaForm: FormGroup;
    // Declaración de la propiedad
    categorias: any[] = [];
   
  constructor(private fb: FormBuilder, private categoriasService: CategoriasService) {
    this.categoriaForm = this.fb.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  ngOnInit(): void {

      console.log('CategoriasDashboardComponent ha sido inicializado');
    
    
  this.categorias = [
    { nombre: 'Categoría 1' },
    { nombre: 'Categoría 2' },
    { nombre: 'Categoría 3' }
  ];}
  onSubmit(): void {
    if (this.categoriaForm.valid) {
      this.categoriasService.addCategoria(this.categoriaForm.value).subscribe(response => {
        console.log('Categoría añadida:', response);
        // ctualizar la lista de categorías o mostrar un mensaje de éxito.
      });
    }
  }
  deleteCategoria(id: number): void {
    this.categoriasService.deleteCategoria(id).subscribe(() => {
      console.log('Categoría eliminada');
      // actualizar la lista de categorías después de la eliminación.
    });
  }
}
