import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
 nombre: string='Susana';
 genero: string= 'femenino';
 invitacionMapa= {
   'masculino': 'invitarlo',
   'femenino': 'invitarla'
 } 

 cambiarCliente(){
    if(this.genero==='femenino'){
      this.genero = 'masculino';
      this.nombre = 'Freddy'
    }else {
      this.genero = 'femenino';
      this.nombre = 'Sofia'
    }
    
 }

 //i18nPlural
 clientes:string[]=['Jose','Maria','Juan','Manuel',"Elena"];
 clientesMapa= {
   '=0':'no tenemos ningun cliente esperando',
   '=1': 'tenemos un cliente esperando',
   '=2': 'tenemos 2 clientes esperando',
   'other': 'tenemos # clientes esperando'
 }

 borrarCliente(){
    // this.clientes = this.clientes.slice(0,this.clientes.length-1);
    this.clientes.pop();
 }

 //key value pipe
 persona = {
   nombre :'Freddy',
   edad: 47,
   direccion: 'Cochabamba, Bolivia'
 }

 //Json Pipe
 heroes =[
   {
     nombre: 'Superman',
     vuela: true
   },
   {
    nombre: 'Acuaman',
    vuela: false
  },
  {
    nombre: 'Batman',
    vuela: false
  }
 
 ];

 //Async Pipe
 miObservable = interval(1000);

 valorPromesa = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve ('Tenemos data de la promesa');
   },3500)
 })
}
