import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Socio } from './../models/socio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  // public socios: Array<Socio>;
  socios : FormGroup;

  constructor() {
    this.socios = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      socio: new FormControl(''),
      dni: new FormControl(''),
      telefono: new FormControl(''),
      sexo: new FormControl('')
    });
   }

   ngOnInit(): void {
     // Socios mostrado al inicio
    var socio1 = new Socio('Antonio', 'García Estrada', 32, '76056286Y', '927210698', 'Masculino')
    var socio2 = new Socio('María', 'Pascual Sánchez', 98, '76056285Y', '927210698', 'Femenino')
    this.sociosList.push(socio1,socio2);
    }

   sociosList = new Array;
   editarSocio = false;
   indexSocio = 0;
   sociosVacia = false;

   nuevoSocio(){
    // Si el botón es Añadir
    if(!this.editarSocio){
      // Crear Socio con los datos introducidos
      var item = new Socio (this.socios.value.nombre, this.socios.value.apellidos, this.socios.value.socio, this.socios.value.dni, this.socios.value.telefono, this.socios.value.sexo);
      var check = true;
      this.sociosVacia = false;

      // Comprobar que el Nº de socio no existe ya
      for (let index = 0; index < this.sociosList.length; index++) {
        if (this.socios.value.socio == this.sociosList[index].socio) {
          alert("El número de socio introducido ya se encuentra registrado. Por favor, compruébelo de nuevo.");
          check = false;
        }
      }

      if (check){
      // Añadimos el Socio al array de sociosList
      this.sociosList.push(item);

      // Resetea el formulario
      this.socios.reset();
      }


    // Si el botón es Modificar
    } else {
      var check = true;

      // Comprobar que el Nº de socio no existe ya
      for (let index = 0; index < this.sociosList.length; index++) {
        if (index != this.indexSocio && this.socios.value.socio  == this.sociosList[index].socio) {
          alert("El número de socio introducido ya se encuentra registrado. Por favor, compruébelo de nuevo.");
          check = false;
        }
      }
      if (check) {
        // Mostramos los valores actuales en los campos correspondientes
        this.sociosList[this.indexSocio].nombre = this.socios.value.nombre;
        this.sociosList[this.indexSocio].apellidos = this.socios.value.apellidos;
        this.sociosList[this.indexSocio].socio = this.socios.value.socio;
        this.sociosList[this.indexSocio].dni = this.socios.value.dni;
        this.sociosList[this.indexSocio].telefono = this.socios.value.telefono;
        this.sociosList[this.indexSocio].sexo = this.socios.value.sexo;

        // Resetea el formulario
        this.socios.reset();
        this.editarSocio = false;

      }
   }
  }

    // Botón modificar socio del listado
    modificar(i:number) {
      this.editarSocio = true;

      this.socios.setValue({
        nombre: this.sociosList[i].nombre,
        apellidos: this.sociosList[i].apellidos,
        socio: this.sociosList[i].socio,
        dni: this.sociosList[i].dni,
        telefono: this.sociosList[i].telefono,
        sexo: this.sociosList[i].sexo
      });

      this.indexSocio = i;
    }

    // Botón eliminar socio del listado
    eliminar(i:number){
      this.sociosList.splice(i, 1);

      this.editarSocio = false;

      // Muestra un párrafo si no hay socios registrados
      if (this.sociosList.length == 0) {
        this.sociosVacia = true;
      }
    }

    //Botón reset
    reset(){
      this.editarSocio = false;
    }

}
