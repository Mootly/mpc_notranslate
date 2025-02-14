/* ---------------------------------------------------------------------------- */
/*! --- Implementation Examples Scripts --------------------------------------- *
 * Copyright (c) 2024 Mootly Obviate -- See /LICENSE.md
 * ---------------------------------------------------------------------------- */
                    // Notranslate variables                                    *
                    // All are optional if you want to use the defaults         *
const notrans_list  = 'abbr, acronym, address, cite, code, kbd, pre, samp, var, , *[lang]:not([lang=en-US])';
const notrans_auto  = true;
                    // All scripts in the mp namespace to avoid collisions.     *
 let mp = {
  sticky: new mpc_notranslate(notrans_auto, notrans_list),
// ...
};
                    // only invoke these manually if auto=false                 *
// window.addEventListener('load',     (e) => { mp.notranslate.protect(); });
/* ---------------------------------------------------------------------------- */
