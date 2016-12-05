import React, { PropTypes } from 'react';
import echarts from 'echarts'
require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title')
require('echarts/lib/chart/graph');


class Echart extends React.Component {
	componentDidMount(){
		let myChart = echarts.init(document.getElementById('main1'));
		myChart.setOption({
    		// title: { text: '我的技能' },
    		// tooltip: {},
    		// xAxis: {
      //   	data: ["挖掘机","挖掘机","挖掘机","挖掘机","挖掘机","挖掘机"]
    		// },
   	 	// 	yAxis: {},
    		// series: [{
      //   	name: '娴熟度',
      //   	type: 'force',
      //   	data: [5, 20, 36, 10, 10, 20]
    		// }]
            title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        // legend: [{
        //     // selectedMode: 'single',
        //     data: categories.map(function (a) {
        //         return a.name;
        //     })
        // }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
    series: [{
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 50,
                y: 50
            }, {
                name: '节点2',
                x: 150,
                y: 50
            }, {
                name: '节点3',
                x: 100,
                y: 80
            }, {
                name: '节点4',
                x: 100,
                y: 20
            }],
           
            links: [{
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        },{
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点5',
                x: 300,
                y: 300
            }, {
                name: '节点6',
                x: 400,
                y: 300
            }, {
                name: '节点7',
                x: 350,
                y: 350
            }, {
                name: '节点8',
                x: 350,
                y: 250
            }],
            // links: [],
            links: [ {
                source: '节点5',
                target: '节点7'
            }, {
                source: '节点6',
                target: '节点7'
            }, {
                source: '节点6',
                target: '节点8'
            }, {
                source: '节点5',
                target: '节点8'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            },
            force: {
                    repulsion: 100
                }
        }
        ]
		});
		myChart.setOption(option);


		
	}
 render () {
    
    return(
    	<div>
            <div>

            </div>
    		<div id="main1" style={{width:"600px",height:"600px"}}></div>
    		
    	</div>
      
    )
  }
}


export default Echart ;