import { Component } from '@angular/core';
import { Libro } from '../../models/libromodel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crearlibro',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './crearlibro.component.html',
  styleUrl: './crearlibro.component.css'
})
export class CrearlibroComponent {
 libro:Libro={
    id:0,
    nombre:'',
    autor:'',
    fechaEscritura:'',
    numEdicion:'',
    precio:0,
    tipo:'',
    fama:''
 }
 constructor(private libroService:LibroService,private router: Router) { }
 create(form:any){
    this.libroService.createLibro(this.libro);
    form.reset();
    this.router.navigate(['/'])
 }
}
