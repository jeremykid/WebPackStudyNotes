// var React = require('react'),
//     Editor = require('react-md-editor');

// var App = React.createClass({
//     getInitialState: function() {
//         return {
//             code: "# Markdown"
//         };
//     },
//     updateCode: function(newCode) {
//         this.setState({
//             code: newCode
//         });
//     },
//     render: function() {
//         return <Editor value={this.state.code} onChange={this.updateCode} />
//     }
// });

// React.render(<App />, document.getElementById('app'));

// var React = require('react');
// var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
 
// var TestComponent = React.createClass({
//     render: function() {
//         return (
//             <MarkdownEditor initialContent="Test" iconsSet="font-awesome"/>
//         );
//     }
// });
 
// React.render(<TestComponent />, document.getElementById('content'));

var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});