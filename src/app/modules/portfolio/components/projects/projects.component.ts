import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
       src: 'assets/img/projects/heart.svg',
        alt:'Projeto',
        title:'Portfólio',
        with:'100px',
        height:'51px',
        description: 'Projeto desenvolvido em angular',
        links:[
          {
            name:'Github',
            href: 'https://google.com'
          },
   
  ],
},
{
  src: 'assets/img/projects/heart.svg',
   alt:'Projeto',
   title:'Vida',
   with:'100px',
   height:'51px',
   description: 'odivsonvsnvgsns',
   links:[
     {
       name:'Veja o blog',
       href: 'https://google.com'
     },

],
},
{
  src: 'assets/img/projects/heart.svg',
   alt:'Projeto',
   title:'Vida',
   with:'100px',
   height:'51px',
   description: 'odivsonvsnvgsns',
   links:[
     {
       name:'Veja o blog',
       href: 'https://google.com'
     },

],
},
{
  src: 'assets/img/projects/heart.svg',
   alt:'Projeto',
   title:'Vida',
   with:'100px',
   height:'51px',
   description: 'odivsonvsnvgsns',
   links:[
     {
       name:'Veja o blog',
       href: 'https://google.com'
     },

],
}
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
