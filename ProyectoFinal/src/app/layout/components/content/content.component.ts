import { Component } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  alumnos: Alumnos[] = [
    {
      nombre: 'Jose',
      apellido: 'Carrion',
      email: 'jlcarrion90@gmail.com',
      ci: '0927509118',
      domicilio: 'Guayaquil',
      telefono: '042344710',
      cursos: {
        nombre: 'Angular',
        comision: '49533',
        profesor: {
          nombre: 'Luis',
          apellido: 'Molineros',
          correo: 'Luisr@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      },
    },
    {
      nombre: 'Luciana',
      apellido: 'Aldas',
      email: 'lualdas@gmail.com',
      ci: '0927509999',
      domicilio: 'Ambato',
      telefono: '042344711',
      cursos: {
        nombre: 'Ionic',
        comision: '49999',
        profesor: {
          nombre: 'Francisco',
          apellido: 'Gallo',
          correo: 'Fgallo@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      },
    },
    {
      nombre: 'Sara',
      apellido: 'Ushina',
      email: 'sara@gmail.com',
      ci: '2315486987',
      domicilio: 'Guayaquil',
      telefono: '042458796',
      cursos: {
        nombre: 'SQL',
        comision: '50000',
        profesor: {
          nombre: 'Omar',
          apellido: 'Rodrigueaz',
          correo: 'orodriguez@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      },
    }
  ]
  dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.alumnos);
  columnas: string[] = ['nombre', 'email', 'ci', 'domicilio', 'telefono', 'acciones'];


}
