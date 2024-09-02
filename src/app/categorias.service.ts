import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = '/api/category'; // URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener todas las categorías
  getCategorias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para añadir una nueva categoría
  addCategoria(categoria: any): Observable<any> {
    return this.http.post(this.apiUrl, categoria);
  }

  // Método para eliminar una categoría por ID
  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
