/// <reference types="react" />
import * as React from 'react';
export interface IPlotlyChartProps {
    config?: any;
    data: any[];
    layout?: any;
    onClick?: (data: {
        points: any;
        event: any;
    }) => any;
    onBeforeHover?: (data: {
        points: any;
        event: any;
    }) => any;
    onHover?: (data: {
        points: any;
        event: any;
    }) => any;
    onUnHover?: (data: {
        points: any;
        event: any;
    }) => any;
    onSelected?: (data: {
        points: any;
        event: any;
    }) => any;
}
/***
 * Usage:
 *  <PlotlyChart data={toJS(this.model_data)}
 *               layout={layout}
 *               onClick={({points, event}) => console.log(points, event)}>
 */
declare class PlotlyChart extends React.Component<IPlotlyChartProps, any> {
    container: any;
    attachListeners(): void;
    resize: () => void;
    draw: (props: IPlotlyChartProps) => void;
    componentWillReceiveProps(nextProps: IPlotlyChartProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default PlotlyChart;
