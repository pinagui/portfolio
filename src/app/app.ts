import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { About } from './components/about/about';
import { EducationComponent } from './components/education/education';
import { Skills } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    About,
    EducationComponent,
    Skills,
    ExperienceComponent,
    Projects,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'coffee-portfolio';
}
