/// <reference types="react" />
import * as React from 'react';
export interface IPlotlyChartProps {
    data: any[];
    layout?: any;
    config?: any;
    onClick?: (data: any) => any;
    onBeforeHover?: (data: any) => any;
    onHover?: (data: any) => any;
    onUnHover?: (data: any) => any;
    onSelected?: (data: any) => any;
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
