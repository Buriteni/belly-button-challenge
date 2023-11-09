// Use the D3 library to read in samples.json from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function dropdown(){
d3.json(url).then(function(data) {
    console.log(data);
var names = data.names;
    console.log(names);
var dataid = d3.select ("#selDataset");
names.forEach((sampleid) => {
    dataid.append("option")
    .text(sampleid)
    .property("value", sampleid);
})

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// var data = [{
//     type: 'bar',
//     x: [20, 14, 23],
//     y: ['giraffes', 'orangutans', 'monkeys'],
//         orientation: 'h'
//       }];
      
//     Plotly.newPlot('myDiv', data);
var firstsample = names[0]   
metaD(firstsample)
});
}
dropdown();

function metaD(sample){
    d3.json(url).then(function(data) {
        console.log(data);
    var metadata = data.metadata;
        console.log(metadata);

    var filterdata = metadata.filter(sampleobject => sampleobject.id == sample);
    var result = filterdata[0];
    var display = d3.select("#sample-metadata")
        display.html("");
        Object.entries(result).forEach(([key,value])=>{
            display.append("h6").text(`${key}${value}`)
        })



    });

}


function optionChanged(newsample){
    metaD(newsample);
}