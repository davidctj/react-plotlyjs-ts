# React-PlotlyJS-Typescript [![npm version](https://badge.fury.io/js/react-plotlyjs-ts.svg)](https://badge.fury.io/js/react-plotlyjs-ts)

A react-typescript component for Plotly.JS graphs.

Self-redraw when props changed. 

<p align="center">
    <img src="https://github.com/davidctj/react-plotlyjs-ts/blob/master/images/example.png" />
</p>

## Usage

```bash
$ npm i -S react react-dom typescript
$ npm i -D @types/plotly.js
$ npm i -S plotly.js react-plotlyjs-ts
```

```typescript
import * as React from 'react';
import PlotlyChart from 'react-plotlyjs-ts';

class App extends React.Component {
    public handleClick = (evt: any) => alert('click')
    public handleHover = (evt: any) => alert('hover')

    public render() {
        const data = [
            {
                marker: {
                    color: 'rgb(16, 32, 77)'
                },
                type: 'scatter',
                x: [1, 2, 3],
                y: [6, 2, 3]
            },
            {
                name: 'bar chart example',
                type: 'bar',
                x: [1, 2, 3],
                y: [6, 2, 3],
            }
        ];
        const layout = {
            annotations: [
                {
                    text: 'simple annotation',
                    x: 0,
                    xref: 'paper',
                    y: 0,
                    yref: 'paper'
                }
            ],
            title: 'simple example',
            xaxis: {
                title: 'time'
            },
        };
        return (
            <PlotlyChart data={data}
                         layout={layout}
                         onClick={this.handleClick}
                         onHover={this.handleHover}
            />
        );
    }
}

export default App;
```

## Documentation
Define PlotlyChart props below:
```typescript
   config?: any;
    data: any;
    layout?: any;
    onClick?: (event: plotly.PlotMouseEvent) => void;
    onBeforeHover?: (event: plotly.PlotMouseEvent) => void;
    onHover?: (event: plotly.PlotMouseEvent) => void;
    onUnHover?: (event: plotly.PlotMouseEvent) => void;
    onSelected?: (event: plotly.PlotSelectionEvent) => void;
```
* data, layout, config are the same as in the [plotly.js](https://www.npmjs.com/package/plotly.js).
* <b>onClick, onBeforeHover, onHover, onUnHover, onSelected</b> are on event functions. 
Use ES6 destructuring to get the points and event.


## Todo
Add testing

## Thanks
Inspired by [React-PlotlyJS](https://github.com/benjeffery/react-plotlyjs), many thanks!