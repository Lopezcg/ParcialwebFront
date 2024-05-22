import { Component } from '@angular/core';
import { Libro } from '../../../models/libromodel';
import { NgFor } from '@angular/common';
import { LibroService } from '../../../services/libro.service';
import { LibroComponent } from '../../Libro/libro/libro.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-librospage',
  standalone: true,
  imports: [NgFor,LibroComponent],
  templateUrl: './librospage.component.html',
  styleUrl: './librospage.component.css'
})
export class LibrospageComponent {
  libros:Libro[]=[];
  constructor(private router: Router) { 
    this.ngOnInit();

  }

  async ngOnInit(){
    const librosService= new LibroService();
    this.libros= await librosService.getLibros();
    console.log(this.libros);
    
  }
  crearLibro(){
    this.router.navigate(['/crearlibro'])
  }

}
