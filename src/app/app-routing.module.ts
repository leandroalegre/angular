import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'agregar-empleado'},
  {path:'agregar-empleado', component:AgregarEmpleadoComponent},
  {path:'editar-empleado/:id', component:EditarEmpleadoComponent},
  {path:'listar-empleado', component:ListarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
