import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  /**
   * Navigable items.
   */
  @ViewChildren('item', { read: ElementRef })
  public items: QueryList<ElementRef>;

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
   * After view init.
   */
  public ngAfterViewInit(): void {
    this.items.first.nativeElement.focus();
  }

  /**
   * On hero selection.
   */
  public onSelect(hero: string): void {
    this.selected = hero;
  }
}
