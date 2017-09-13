import * as React from 'react';
import * as plotlyInstance from 'plotly.js/dist/plotly.js';
import {cloneDeep} from 'lodash';

export interface IPlotlyChartProps {
    data: any[];
    layout?: any;
    config?: any;
    onClick?: (data: { points: any, event: any }) => any;
    onBeforeHover?: (data: { points: any, event: any }) => any;
    onHover?: (data: { points: any, event: any }) => any;
    onUnHover?: (data: { points: any, event: any }) => any;
    onSelected?: (data: { points: any, event: any }) => any;
}

/***
 * Usage:
 *  <PlotlyChart data={toJS(this.model_data)}
 *               layout={layout}
 *               onClick={({points, event}) => console.log(points, event)}>
 */
class PlotlyChart extends React.Component<IPlotlyChartProps, any> {

    container: any = null;

    attachListeners() {
        if (this.props.onClick) {
            this.container.on('plotly_click', this.props.onClick);
        }
        if (this.props.onBeforeHover) {
            this.container.on('plotly_beforehover', this.props.onBeforeHover);
        }
        if (this.props.onHover) {
            this.container.on('plotly_hover', this.props.onHover);
        }
        if (this.props.onUnHover) {
            this.container.on('plotly_unhover', this.props.onUnHover);
        }
        if (this.props.onSelected) {
            this.container.on('plotly_selected', this.props.onSelected);
        }
        window.addEventListener('resize', this.resize);
    }

    resize = () => {
        plotlyInstance.Plots.resize(this.container);
    }

    draw = (props: IPlotlyChartProps) => {
        const {data, layout, config} = props;
        // We clone the layout as plotly mutates it.
        plotlyInstance.newPlot(this.container, data, cloneDeep(layout), config);
        this.attachListeners();
    }


    componentWillReceiveProps(nextProps: IPlotlyChartProps) {
        this.draw(nextProps);
    }

    componentDidMount() {
        this.draw(this.props);
    }

    componentWillUnmount() {
        plotlyInstance.purge(this.container);
        window.removeEventListener('resize', this.resize);
    }

    render() {
        const {data, layout, config, onClick, onBeforeHover, onHover, onSelected, onUnHover, ...other} = this.props;
        return <div {...other} ref={(node) => this.container = node}/>;
    }
};

export default PlotlyChart;
