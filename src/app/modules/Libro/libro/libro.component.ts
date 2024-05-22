import { Component, Input } from '@angular/core';
import { Libro } from '../../../models/libromodel';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  @Input() libro!: Libro;
  constructor() { }
  

}
