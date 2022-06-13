export class Socio {
  nombre: string;
  apellidos: string;
  socio: number;
  dni: string;
  telefono: string;
  sexo: string;

  constructor(_nombre: string, _apellidos: string, _socio:number, _dni:string, _telefono:string, _sexo:string) {
      this.nombre = _nombre;
      this.apellidos = _apellidos;
      this.socio = _socio;
      this.dni = _dni;
      this.telefono = _telefono;
      this.sexo = _sexo;
  }

}
