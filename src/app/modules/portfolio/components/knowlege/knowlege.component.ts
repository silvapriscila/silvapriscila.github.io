import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowlege',
  standalone: true,
  imports: [],
  templateUrl: './knowlege.component.html',
  styleUrl: './knowlege.component.scss'
})
export class KnowlegeComponent {
  public arrayKnowlege = signal([
    {
      src: 'assets/icons/knowlege/html.png',
      alt: 'Icone de html',
    },
    {
      src: 'assets/icons/knowlege/css.png',
      alt: 'Icone de css',
    },    
    {
      src: 'assets/icons/knowlege/js.png',
      alt: 'Icone de JavaScript',
    },    
    {
      src: 'assets/icons/knowlege/c-sharp.png',
      alt: 'Icone de c#',
    },
    {
      src: 'assets/icons/knowlege/sql.png',
      alt: 'Icone de SQL',
    },
  ])

}
