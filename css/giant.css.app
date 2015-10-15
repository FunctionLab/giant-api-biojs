/**
 * D3 components
 */
.node {
    stroke: rgb(91,4,0);
    stroke-width: 2px;
}

.node text {
    font: 12px sans-serif;
    pointer-events: none;
    stroke: rgb(91,4,0);
    stroke-width: 0.5px;
}

.circle.queryGene {
    fill: rgb(166,20,7);
    r: 12px;
}

.circle.otherGene {
    fill: rgb(3,99,143);
    r: 10px;
}

.link {
    stroke: rgb(179,130,53);
    stroke-opacity: 0.6;
    stroke-width: 6px;
}

.link.over {
    stroke: rgb(166,20,7);
}

.link.selected {
    stroke: rgb(91,4,0);
    stroke-dasharray: 10px 3px;
}

/**
 * D3 tooltip
 */
div.d3tooltip {
    background-color: rgb(182,222,211);
    border-radius: 5px;
    opacity: 0.9;
    padding: 5px;
}

table.d3tooltip {
    font-size: small;
    margin: 0 auto;
    text-align: center;
}

table.d3tooltip td {
    border-color: rgb(91,4,0);
    border-style: solid;
    border-width: 1px;
    color: rgb(91,4,0);
    padding: 2px 5px 2px 5px;
}

/**
 * Layout tables
 */

/* Form table */
table.formTable {
    background: rgb(243,247,223);
    border: 1px solid rgb(91,4,0);
    color: rgb(91,4,0);
    margin: 10px auto 10px auto;
    width: 450px;
}

table.formTable td.formTableTd {
    padding: 3px 5px 3px 5px;
}

td.centered {
    text-align: center;
}

#graphButton {
    height: 27px;
}

/* Main table */
table.mainTable {
    background: rgb(243,247,223);
    margin: 0 auto;
}

table.mainTable td.mainTableTd {
    border-color: rgb(91,4,0);
    border-style: solid;
    border-width: 1px;
}

table.mainTable td.mainTableTd.clear {
    background: white;
    border-style: none;
}

/* Filter table */
table.filterTable {
    /* Necessary for filter labels. */
    color: rgb(91,4,0);
    font-size: small;

    /* This must match filterTableTd below. */
    margin: 0 0 5px 0;

    /* This is necessary otherwise filter table aligns left. */
    width: 100%;

    /* debug */
    border-style_: solid;
}

table.filterTable td.filterTableTd {
    padding: 5px 10px 0 10px;

    /* This is needed only for first and last columns but it's been refactored
     * up to here. */
    white-space: nowrap;

    /* debug */
    border-style_: solid;
}

/* Specify minimum width for first and last columns so the slider will have
/* maximum space and will be correctly centered. */
table.filterTable td.filterTableTdLeft {
    width: 1px;
}

table.filterTable td.filterTableTdRight {
    text-align: right;

    /* This seems to be the correct width. */
    width: 60px;
}

/* Summary table */
table.summaryTable {
    background: rgb(243,247,223);
    color: rgb(91,4,0);
    font-size: small;

    /* This must match neighboring cells. */
    margin: 10px auto 10px auto;

    text-align: center;
    width: 100%;

    /* debug */
    border-style_: solid;
}

table.summaryTable td {
    border-color: rgb(91,4,0);
    border-style: solid;
    border-width: 1px;
    padding: 2px 5px 2px 5px;
    width: 33%;
}

table .header {
    background: rgb(182,222,211);
    font-weight: bold;
}

/* Dataset table */
table.datasetTable {
    background: rgb(243,247,223);
    color: rgb(91,4,0);
    font-size: small;

    /* This must match neighboring cells. */
    margin: 10px auto 10px auto;

    text-align: center;
    width: 450px;

    /* debug */
    border-style_: solid;
}

table.datasetTable td {
    border-color: rgb(91,4,0);
    border-style: solid;
    border-width: 1px;
    padding: 2px 5px 2px 5px;
}

table.datasetTable td.left {
    text-align: left;
}

table.datasetTable td.left.nowrap {
    text-align: left;
    white-space: nowrap;
}

/**
 * Match slider color to theme
 */
div.ui-slider-range {
    background: rgb(182,222,211);
}

/**
 * Match multiselect button width
 */
ul.token-input-list-facebook {
    width: 300px;
}