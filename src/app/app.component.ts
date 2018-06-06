import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Available heros.
   */
  public heros: string[] = [
    'Luke Skywalker',
    'Kylo Ren',
    'Darth Vadar',
    'Yoda',
    'Obi-Wan Kenobi'
  ];

  /**
   * Currently selected hero.
   */
  public selected: string;

  /**
   * On hero selection.
   */
  public onSelect(hero: string): void {
    this.selected = hero;
  }
}
