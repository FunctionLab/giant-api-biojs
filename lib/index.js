/*
 * giant-api-biojs
 * https://github.com/amr4/giant-api-biojs
 *
 * Copyright (c) 2015 amr4
 * Licensed under the MIT license.
 */

/**
@class giantapibiojs
 */


var  giantapibiojs;
module.exports = giantapibiojs = function(opts){
  this.el = opts.el;
  this.el.textContent = giantapibiojs.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     giantapibiojs.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


giantapibiojs.hello = function (name) {

  return 'hello ' + name;
};

giantapibiojs.graphBasic = function(opts) {
    giant.graph({
        el: opts.el,
        tissue: opts.tissue,
        genes: opts.genes,
        filters: false,
        datasets: false});
};

giantapibiojs.graphWithFilters = function(opts) {
    giant.graph({
        el: opts.el,
        tissue: opts.tissue,
        genes: opts.genes,
        filters: true,
        datasets: false});
};

giantapibiojs.graphWithFiltersAndDatasets = function(opts) {
    giant.graph({
        el: opts.el,
        tissue: opts.tissue,
        genes: opts.genes,
        filters: true,
        datasets: true});
};
