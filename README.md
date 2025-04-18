# MoosePlum No Translation Tweak

Repo: [Mootly/mpc_notranslate](https://github.com/Mootly/mpc_nottranslate)

This is a quick script to add no translation requests to elements. All it does, **THE ONLY THING** it does is add a `notranslate` class and a `translate="no"` attribute to designated elements.

It accepts a comma-spearated list of valid CSS selectors.

The default list contains the following groups:

* Abbreviations and acronmys: `abbr, acronym`
* Addresses: `address`
* Citations: `cite`
* Code elements: `code, kbd, pre, samp, var`
* Elements in other than the main language (default is English): `*[lang]:not(:lang(en))`.

## Dependencies

This was written in TypeScript and exported to ES2020.

## Assets

The files in this set are as follows:

| path                   | description                                        |
| ---------------------- | -------------------------------------------------- |
| CHANGELOG.md           | The changelog for this utility.                    |
| LICENSE.md             | License notice ( [MIT](https://mit-license.org) ). |
| README.md              | This document.                                     |
| notranslate.ts         | The class definition in TypeScript.                |
| notranslate.js         | The class definition in ES2020.                    |
| notranslate.min.js     | Minified version.                                  |
| notranslate.min.js.map | Map file.                                          |
| tsconfig.json          | Example TS > ES2020 config setting.                |
| _invoke.js             | Example implementation code.                       |

## Installation

Download this repo, or just the script, and add it to the script library for your site.

This script has no external dependencies.

### Compiling from the TypeScript

To save to ES 2020in the current folder, assuming you have the correct libraries installed, run the following in this folder:

`tsc -p tsconfig.json`

## Configuration

### Assumptions

This script assumes the default language for the page is English. You can override this by changing the `*[lang]:not(:lang(en))` string in the list of exceptions.

Using tyhe pseudo-class is preferred for `:not(:lang(en))` since it does smart matching. The string "en" will also match "en-US" and other English language designations. The selector `[lang=en]` will only match "en".

### Recommended HTML Code

Set a default language on the html conatiner or the body and override from there.

```html
<html lang="en">
Or
<body lang="en">
```

### Parameters

| name    | type    | default | description                                |
| ------- | ------- | ------- | ------------------------------------------ |
| pBox    | string  | sticky  | Class of sticky slements.                  |
| pMethod | string  | stack   | Whether to stack or layer.                 |
| pAuto   | boolean | true    | Whether to automatically create listeners. |

### Coding Example

Use the `mp` namespace to help avoid collisions.

```js
const notrans_list  = 'abbr, acronym, address, cite, code, kbd, pre, samp, var, *[lang]:not(:lang(en))';
const notrans_auto  = true;

let mp = {
  notranslate: new mpc_notranslate(notrans_list, notrans_auto),
  ⋮
};
```

If auto is set to false, manually invoke the listeners.

```js
window.addEventListener('DOMContentLoaded', (e) => { mp.notranslate.protect(); });
```
