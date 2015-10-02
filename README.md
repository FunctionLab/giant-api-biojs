# giant-api-biojs

[![NPM version](http://img.shields.io/npm/v/giant-api-biojs.svg)](https://www.npmjs.org/package/giant-api-biojs)

> Visualization of tissue-specific functional gene networks

## About

[GIANT](http://giant.princeton.edu) allows prediction and visualization of gene networks that capture tissue-specific functional interactions.

This module is a connector to GIANT, which enables (i) visualizing gene networks using the BioJS snippet server, and (ii) embedding network graphs in other websites using simple API calls.

## Getting Started

**Installing from GitHub**

```shell
git clone git@github.com:amr4/giant-api-biojs.git
cd giant-api-biojs/
npm update
npm run w
```

You can now visit `http://localhost:9090/examples/` on your browser to experiment with demos.

**Using NPM**

To install as a Node dependency:

```shell
npm install giant-api-biojs
```

Then, in JavaScript:

```javascript
var giant = require('giant-api-biojs');
giant.graphBasic({el: myDiv, tissue: 'Lung', genes: 'BRCA1,BRCA2'}); 
```

This will display the requested gene network in a DIV identified by `id='myDiv'`.

## Support

Please visit https://github.com/amr4/giant-api-biojs/issues.

## References

1. **Greene CS^, Krishnan A^, Wong AK^, Ricciotti E, Zelaya RA, Himmelstein DS, Zhang R, Hartmann BM, Zaslavsky E, Sealfon SC, Chasman DI, FitzGerald GA, Dolinski K, Grosser T, Troyanskaya OG.** (2015). [Understanding multicellular function and disease with human tissue-specific networks.](http://www.nature.com/ng/journal/v47/n6/full/ng.3259.html) *Nature Genetics.* 10.1038/ng.3259w.
2. [GIANT website](http://giant.princeton.edu/)
