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

var giantapibiojs;
module.exports = giantapibiojs = function(opts) {
  this.el = opts.el;
  this.el.textContent = giantapibiojs.hello(opts.text);
};

/**
 * Private Methods
 */

/**
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

/**
 * GIANT functions
 */
giantapibiojs.graphBasic = function(opts) {
    giant.graph({
        el: opts.el,
        tissue: opts.tissue,
        genes: opts.genes,
        filters: false,
        datasets: false
    });
};

giantapibiojs.graphWithFilters = function(opts) {
    giant.graph({
        el: opts.el,
        tissue: opts.tissue,
        genes: opts.genes,
        filters: true,
        datasets: false
    });
};

giantapibiojs.graphWithFiltersAndDatasets = function(opts) {
    giant.graph({
        el: opts.el,
        tissue: opts.tissue,
        genes: opts.genes,
        filters: true,
        datasets: true
    });
};

giantapibiojs.graphWithFormFields = function(opts) {

    // Target div to display form fields
    var el = opts.el;

    // Map tissues to tissue IDs until migration
    var tissue2id = {};

    var tableHtml = "<table id='formTable' class='formTable'>" +
        "<tr>" +
        "<td class='formTableTd'><b>Tissue</b></td>" +
        "<td class='formTableTd centered'><select id='tissueSel'></select></td>" +
        "<td></td>" +
        "</tr>" +
        "<tr>" +
        "<td class='formTableTd'><b>Gene[s]</b></td>" +
        "<td class='formTableTd'><div id='geneSelDiv'></div></td>" +
        "<td class='formTableTd'><button id='graphButton' disabled='true'>Graph</button></td>" +
        "</tr>" +
        "</table>";
    el.innerHTML += tableHtml;

    // Init tissue selector options
    var url = "http://giant-api.princeton.edu/networks/tissue-ids";
    console.log("API call:", url);
    d3.json(url, function(error, response) {
        if(error)
            throw error;
        for (var i = 0; i < response.length; i++) {
            var tissue = response[i].name;
            tissue2id[tissue] = response[i].id;
            var tissueSelEl = document.getElementById("tissueSel");
            var option = document.createElement("option");
            option.text = tissue;
            if (tissue == 'lung')
                option.selected = "selected";
            tissueSelEl.add(option);
        }
        $('#tissueSel').multiselect({
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true,
            maxHeight: 250,
            buttonWidth: '300px',
            templates: {filterClearBtn:''}
        });
    });

    // Init gene selector options
    var url = "http://giant-api.princeton.edu/networks/genes?tokeninput=true";
    console.log("API call:", url);
    d3.json(url, function(error, response) {
        if(error)
            throw error;
        $("#geneSelDiv").tokenInput(response, {
            theme: 'facebook',
            minChars: 2,
            preventDuplicates: true,
            tokenLimit: 100,
            hintText: "Type in a gene name",
            noResultsText: "No gene found",
            onAdd: function() {
                if ( $("#tissueSel").val() && $("#geneSelDiv").tokenInput('get').length > 0 )
                    $("#graphButton").removeAttr('disabled');
            },
            onDelete: function() {
                if (!$("#tissueSel").val())
                    $("#graphButton").prop('disabled', 'true');
                if ($("#geneSelDiv").tokenInput('get').length == 0)
                    $("#graphButton").prop('disabled', 'true');
            },
        });
    });

    // Process graph button click event
    $(document).on('click', '#graphButton', function() {

        // Remove any existing summary and dataset tables
        $("#dataTablesTr").remove();

        // Pack parameters
        var tissue = document.getElementById("tissueSel").value;
        tissue = tissue.replace(/ /g, '_').toLowerCase();
        var selectedGenes = $("#geneSelDiv").tokenInput("get");
        var genes = "";
        for (var i = 0; i < selectedGenes.length; i++ ) {
            genes += selectedGenes[i].name + ",";
        }
        genes = genes.replace(/,+$/, "");

        // Call graph function
        giant.graph({
            el: el,
            tissue: tissue,
            genes: genes,
            filters: true,
            datasets: true
        });
    });
};
