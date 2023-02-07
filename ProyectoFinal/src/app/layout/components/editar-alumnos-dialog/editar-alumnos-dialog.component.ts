import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from '../../../models/alumnos';

@Component({
  selector: 'app-editar-alumnos-dialog',
  templateUrl: './editar-alumnos-dialog.component.html',
  styleUrls: ['./editar-alumnos-dialog.component.css']
})
export class EditarAlumnosDialogComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre ),
      apellido: new FormControl(data.apellido),
      email: new FormControl(data.email),
      ci: new FormControl(data.ci),
      domicilio: new FormControl(data.domicilio),
      telefono: new FormControl(data.telefono),
    });
  }

}
