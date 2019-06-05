import * as plotly from 'plotly.js';
import * as React from 'react';
export interface IPlotlyChartProps {
    config?: any;
    data: any;
    layout?: any;
    onAfterExport?: () => void;
    onAfterPlot?: () => void;
    onAnimated?: () => void;
    onAnimatingFrame?: (event: plotly.FrameAnimationEvent) => void;
    onAnimationInterrupted?: () => void;
    onAutoSize?: () => void;
    onBeforeExport?: () => void;
    onClick?: (event: plotly.PlotMouseEvent) => void;
    onClickAnnotation?: (event: plotly.ClickAnnotationEvent) => void;
    onDeselect?: () => void;
    onDoubleClick?: () => void;
    onFramework?: () => void;
    onHover?: (event: plotly.PlotMouseEvent) => void;
    onLegendClick?: (event: plotly.LegendClickEvent) => boolean;
    onLegendDoubleClick?: (event: plotly.LegendClickEvent) => boolean;
    onRelayout?: (event: plotly.PlotRelayoutEvent) => void;
    onRestyle?: (evemt: plotly.PlotRestyleEvent) => void;
    onRedraw?: () => void;
    onSelected?: (event: plotly.PlotSelectionEvent) => void;
    onSelecting?: (event: plotly.PlotSelectionEvent) => void;
    onSliderChange?: (event: plotly.SliderChangeEvent) => void;
    onSliderEnd?: (event: plotly.SliderEndEvent) => void;
    onSliderStart?: (event: plotly.SliderEndEvent) => void;
    onTransitioning?: () => void;
    onTransitionInterrupted?: () => void;
    onUnHover?: (event: plotly.PlotMouseEvent) => void;
    onEvent?: (data: any) => void;
    onBeforePlot?: (event: plotly.BeforePlotEvent) => void;
}
/***
 * Usage:
 *  <PlotlyChart data={toJS(this.model_data)}
 *               layout={layout}
 *               onClick={({points, event}) => console.log(points, event)}>
 */
declare class PlotlyChart extends React.Component<IPlotlyChartProps, any> {
    container: plotly.PlotlyHTMLElement | null;
    attachListeners(): void;
    resize: () => void;
    draw: (props: IPlotlyChartProps) => Promise<void>;
    componentWillReceiveProps(nextProps: IPlotlyChartProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default PlotlyChart;
