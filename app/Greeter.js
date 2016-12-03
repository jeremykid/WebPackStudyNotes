// Greeter.js
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi there and greetings!";
//   return greet;
// };


var config = require('./config.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};

// var echarts = require('echarts');

// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
// // 绘制图表
// myChart.setOption({
//     title: { text: 'ECharts 入门示例' },
//     tooltip: {},
//     xAxis: {
//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// });
// import React, {Component} from 'react'
// import config from './config.json';
// import styles from './Greeter.css';//导入

// class Greeter extends Component{
//   render() {
//     return (
//       <div className={styles.root}>
//         {config.greetText}
//       </div>
//     );
//   }
// }

// export default Greeter