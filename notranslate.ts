/** --- No Translation Tweak -------------------------------------------------- *
 * mpc_notranslate 1.0.1
 @copyright 2025 Mootly Obviate -- See /LICENSE.md
 @license   MIT
 @version   1.0.1
 * ---------------------------------------------------------------------------- *
 * A quick cleanup function to set no translate on specified elements..
 * ---------------------------------------------------------------------------- *
 * Methods:
 *  - protect()
 *    Sets speficied elements to no translate.
 * *** Usage Example ---------------------------------------------------------- *
 * let mp = {
 *   notranslate: new mpc_notranslate(exclusions, auto),
 *   ...
 * };
 * if auto set to false, use an event listener
 * window.addEventListener('DOMContentLoaded', (e) => { mp.notranslate.protect(););
 * --- Revision History ------------------------------------------------------- *
 * 2025-03-10 | Added DOMContentLoaded handler to avoid edge cases.
 * 2025-02-25 | Finished draft of typescript version.
 * ---------------------------------------------------------------------------- */
class mpc_notranslate {
  protList          : string;
  protElems         : NodeListOf<HTMLElement>;
  constructor(
    pList : string  = 'abbr, acronym, address, cite, code, kbd, pre, samp, var, *[lang]:not(:lang(en))',
    pAuto : boolean = true
  ) {
    this.protList  = pList;
    if (pAuto) { window.addEventListener('DOMContentLoaded', (ev) => {  this.protect();  }); }
  }
                    // The lone method.                                         *
  protect() {
    this.protElems  = document.querySelectorAll(this.protList);
    this.protElems?.forEach ((el) => {
      el.classList.add('notranslate');
      el.setAttribute('translate','no');
    });
  }
}
/*! --- Copyright (c) 2025 Mootly Obviate -- See /LICENSE.md ------------------ */
