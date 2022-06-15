import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
      formularioDeEmpleado:FormGroup;


  constructor(public formulario:FormBuilder) { 

    this.formularioDeEmpleado}=this.formulario.group({
      egreso1=[''],
      egreso2=['']
    })

  }



  ngOnInit(): void {
  }
  enviarDatos():any {
console.log("me presionan no se que hacer");
console.log(this.formularioDeEmpleado.value);


  }
}
