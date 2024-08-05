import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:"Itau Unibanco",
        p:"Analista de Engenharia de Software"
        
      },
      text:"<p> Atuo com as tecnologias: C#, .NET, WPF, Splunk, SCRUM </p>"
    },
    {
      summary: {
        strong:"Avanade",
        p:"Analista de Sistemas"
        
      },
      text:"<p>Atuei em um projeto com as tecnologias .NET, C#, Javascript, Jquery, Ajax e SCRUM (maio a junho).</p>"
    },
  ])

}
