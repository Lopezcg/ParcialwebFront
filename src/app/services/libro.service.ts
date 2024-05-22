import { Injectable } from '@angular/core';
import { Libro } from '../models/libromodel';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private urlApi= 'http://localhost:8080/libro';
  async getLibros():Promise<Libro[]>{
    try{
      const response= await axios.get<Libro[]>(this.urlApi);
      return response.data;
  }catch(error){
      console.error(error);
      return [];
  }
}

    async getLibroById(id:number):Promise<Libro>{
      try{
        const response= await axios.get<Libro>(`${this.urlApi}/${id}`);
        return response.data;
    }catch(error){
        console.error(error);
        return {} as Libro;
    }
    }
    async createLibro(libro:Libro){
      try{
        const response= await axios.post<Libro>(this.urlApi,libro);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}

async updateLibro(libro:Libro){
  try{
    const response= await axios.put<Libro>(`${this.urlApi}/${libro.id}`,libro);
    return response.data;

}catch(error){
    console.error(error);
    return null;
}
}
async deleteLibro(id:number){
  try{
    const response= await axios.delete<Libro>(`${this.urlApi}/${id}`);
    return response.data;
  }catch(error){
    console.error(error);
    return null;
  }
}
}