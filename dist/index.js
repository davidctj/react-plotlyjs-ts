"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var plotlyInstance = require("plotly.js/dist/plotly.js");
var lodash_1 = require("lodash");
/***
 * Usage:
 *  <PlotlyChart data={toJS(this.model_data)}
 *               layout={layout}
 *               onClick={({points, event}) => console.log(points, event)}>
 */
var PlotlyChart = /** @class */ (function (_super) {
    __extends(PlotlyChart, _super);
    function PlotlyChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = null;
        _this.resize = function () {
            plotlyInstance.Plots.resize(_this.container);
        };
        _this.draw = function (props) {
            var data = props.data, layout = props.layout, config = props.config;
            // We clone the layout as plotly mutates it.
            plotlyInstance.newPlot(_this.container, data, lodash_1.cloneDeep(layout), config);
            _this.attachListeners();
        };
        return _this;
    }
    PlotlyChart.prototype.attachListeners = function () {
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
    };
    PlotlyChart.prototype.componentWillReceiveProps = function (nextProps) {
        this.draw(nextProps);
    };
    PlotlyChart.prototype.componentDidMount = function () {
        this.draw(this.props);
    };
    PlotlyChart.prototype.componentWillUnmount = function () {
        plotlyInstance.purge(this.container);
        window.removeEventListener('resize', this.resize);
    };
    PlotlyChart.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, layout = _a.layout, config = _a.config, onClick = _a.onClick, onBeforeHover = _a.onBeforeHover, onHover = _a.onHover, onSelected = _a.onSelected, onUnHover = _a.onUnHover, other = __rest(_a, ["data", "layout", "config", "onClick", "onBeforeHover", "onHover", "onSelected", "onUnHover"]);
        return React.createElement("div", __assign({}, other, { ref: function (node) { return _this.container = node; } }));
    };
    return PlotlyChart;
}(React.Component));
;
exports.default = PlotlyChart;
