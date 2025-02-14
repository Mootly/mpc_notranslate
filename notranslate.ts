/** --- No Translation Tweak -------------------------------------------------- *
 * mpc_notranslate 1.0.0
 @copyright 2024 Mootly Obviate -- See /LICENSE.md
 @license   MIT
 @version   1.0.0
 * ---------------------------------------------------------------------------- *
 * A quick cleanup function to set no translate on specified elements..
 * ---------------------------------------------------------------------------- *
 * Methods:
 *  - protect()
 *    Sets speficied elements to no translate.
 * *** Usage Example ---------------------------------------------------------- *
 * Need both load and scroll listeners
 * let mp = {
 *   datetime: new mpc_dateTimeOperations(),
 *   ...
 * };
 * let nowDate      = mpw.datetime.getDate();
 * let nowTime      = mpw.datetime.getTime();
 * let nowDateTime  = mpw.datetime.getDateTime();
 * let success      = mpw.datetime.autofill('all|date|time|datetime','classname');
 * let success      = mpw.datetime.countTime('time|datetime''classname');
 * --- Revision History ------------------------------------------------------- *
 * 2023-11-15 | Started typescript version.
 * ---------------------------------------------------------------------------- */
class mpc_notranslate {
  protList          : string;
  protElems         : NodeListOf<HTMLElement>;
  constructor(
    pAuto : boolean = true, 
    pList : string  = 'abbr, acronym, address, cite, code, kbd, pre, samp, var, *[lang]:not([lang=en-US])'
  ) {
    this.protList  = pList;
    if (pAuto) { this.protect(); }
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
/*! --- Copyright (c) 2024 Mootly Obviate -- See /LICENSE.md ------------------ */
 
