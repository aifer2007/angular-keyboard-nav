[![NPM Version](https://badge.fury.io/js/angular-keyboard-nav.svg)](https://badge.fury.io/js/angular-keyboard-nav)
[![Build Status](https://travis-ci.org/justinlettau/angular-keyboard-nav.svg?branch=master)](https://travis-ci.org/justinlettau/angular-keyboard-nav)
[![Dependency Status](https://david-dm.org/justinlettau/angular-keyboard-nav.svg)](https://david-dm.org/justinlettau/angular-keyboard-nav)
[![Dev Dependency Status](https://david-dm.org/justinlettau/angular-keyboard-nav/dev-status.svg)](https://david-dm.org/justinlettau/angular-keyboard-nav?type=dev)

# Angular Keyboard Nav
Angular directive to navigate elements with keyboard arrow keys.

# Demo
[https://justinlettau.github.io/angular-keyboard-nav/](https://justinlettau.github.io/angular-keyboard-nav/)

# Installation
```bash
npm install angular-keyboard-nav --save
```

Once installed you need to import the module and list the imported module in your application module:

```js
import { KeyboardNavModule } from 'angular-keyboard-nav';

@NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    KeyboardNavModule,
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Usage
Add the `jlKeyboardNav` directive to the container, and `jlKeyboardNavItem` to each item.
Navigation is triggered only when focus is within the `jlKeyboardNav` element, so it works
great with dropdown menus like [ng-bootstrap dropdown](https://ng-bootstrap.github.io/#/components/dropdown/examples).

```html
<div class="list-group" jlKeyboardNav>
  <button type="button" class="list-group-item" jlKeyboardNavItem>
    Luke Skywalker
  </button>
  <button type="button" class="list-group-item" jlKeyboardNavItem>
    Darth Vadar
  </button>
  <button type="button" class="list-group-item" jlKeyboardNavItem>
    Obi-Wan Kenobi
  </button>
</div>
```
