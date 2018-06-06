import { Directive, ElementRef } from '@angular/core';

import { KeyboardNavDirective } from '../keyboard-nav/keyboard-nav.directive';

@Directive({
  selector: '[jlKeyboardNavItem]'
})
export class KeyboardNavItemDirective {
  constructor(
    private elementRef: ElementRef,
    private parent: KeyboardNavDirective
  ) { }

  /**
   * Host native element.
   */
  public element: HTMLElement = this.elementRef.nativeElement;
}
