# React-PlotlyJS-Typescript [![npm version](https://badge.fury.io/js/react-plotlyjs-ts.svg)](https://badge.fury.io/js/react-plotlyjs-ts)

A react-typescript component for Plotly.JS graphs.

Self-redraw when props changed. 

## Usage

```bash
$ npm install react react-dom typescript plotly.js
$ npm install react-plotlyjs-ts
```

```typescript
import PlotlyChart from 'react-plotlyjs-ts';

...
render(){    
     const data = [
          {
            type: 'scatter',  
            x: [1, 2, 3],     
            y: [6, 2, 3],     
            marker: {       
              color: 'rgb(16, 32, 77)'
            }
          },
          {
            type: 'bar',   
            x: [1, 2, 3],  
            y: [6, 2, 3],  
            name: 'bar chart example' 
          }
        ];
        const layout = {           
          title: 'simple example', 
          xaxis: {                 
            title: 'time'         
          },
          annotations: [           
            {
              text: 'simple annotation',    
              x: 0,                         
              xref: 'paper',                
              y: 0,                         
              yref: 'paper'                 
            }
          ]
        };        
    return (
        <PlotlyChart data={toJS(this.model_data)}
                     layout={layout}
                     onClick={({points, event}) => console.log(points, event)}>    )
}
```

## Documentation
Define PlotlyChart props below:
```typescript
   data: any[];
   layout?: any;
   config?: any;
   onClick?: (data: { points: any, event: any }) => any;
   onBeforeHover?: (data: { points: any, event: any }) => any;
   onHover?: (data: { points: any, event: any }) => any;
   onUnHover?: (data: { points: any, event: any }) => any;
   onSelected?: (data: { points: any, event: any }) => any;
```
* data, layout, config are the same as in the [plotly.js](https://www.npmjs.com/package/plotly.js).
* <b>onClick, onBeforeHover, onHover, onUnHover, onSelected</b> are on event functions. 
Use ES6 destructuring to get the points and event.


## Todo
Add testing

## Thanks
Inspired by [React-PlotlyJS](https://github.com/benjeffery/react-plotlyjs), many thanks!