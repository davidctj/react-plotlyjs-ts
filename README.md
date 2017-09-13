# React-PlotlyJS-Typescript [![npm version](https://badge.fury.io/js/react-plotlyjs-ts.svg)](https://badge.fury.io/js/react-plotlyjs-ts)

Inspired by [React-PlotlyJS](https://github.com/benjeffery/react-plotlyjs), many thanks!

A react-typescript component for Plotly.JS graphs.

Self-redraw when props changed. 

## Usage

```typescript
import PlotlyChart from 'react-plotlyjs-ts';

...
render(){    
     const data = [
          {
            type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
            x: [1, 2, 3],     // more about "x": #scatter-x
            y: [6, 2, 3],     // #scatter-y
            marker: {         // marker is an object, valid marker keys: #scatter-marker
              color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
            }
          },
          {
            type: 'bar',      // all "bar" chart attributes: #bar
            x: [1, 2, 3],     // more about "x": #bar-x
            y: [6, 2, 3],     // #bar-y
            name: 'bar chart example' // #bar-name
          }
        ];
        const layout = {                     // all "layout" attributes: #layout
          title: 'simple example',  // more about "layout.title": #layout-title
          xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
            title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
          },
          annotations: [            // all "annotation" attributes: #layout-annotations
            {
              text: 'simple annotation',    // #layout-annotations-text
              x: 0,                         // #layout-annotations-x
              xref: 'paper',                // #layout-annotations-xref
              y: 0,                         // #layout-annotations-y
              yref: 'paper'                 // #layout-annotations-yref
            }
          ]
        };        
    return (
        <PlotlyChart data={data} layout={layout} />
    )
}


```