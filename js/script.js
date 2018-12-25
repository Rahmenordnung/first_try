queue()
    .defer(d3.csv, "data/Leb.csv")
    .await(makeGraphs);
    
function makeGraphs(error, ValueData) {
    var ndx = crossfilter( ValueData);
    
    show_geo_correlate(ndx);
        
        dc.renderAll();

}

function show_geo_correlate(ndx) {
    var dim = ndx.dimension(dc.pluck("Flag_and_Footnotes"));
    var group = dim.group();
    
    dc.barChart("#geo-correlate")
        .width(400)
        .height(3000)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(20);
}
    