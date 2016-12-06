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
        var graph_data = {
            nodes:[{
                    name: '1',
                    x: 50,
                    y: 50
                }, {
                    name: '2',
                    x: 150,
                    y: 50
                }, {
                    name: '3',
                    x: 100,
                    y: 80
                }, {
                    name: '4',
                    x: 100,
                    y: 20
                },{
                    name: '5',
                    x: 10,
                    y: 20
                }],
            links:[{
                    source: '1',
                    target: '3'
                }, {
                    source: '2',
                    target: '3'
                }, {
                    source: '2',
                    target: '4'
                }, {
                    source: '3',
                    target: '4'
                },{
                    source: '5',
                    target: '1'
                }]
        }
        graph_data.nodes.forEach(function(node) {
            // node.itemStyle = null;
            // node.symbolSize = 10;
            // node.value = node.symbolSize;
            // node.category = node.attributes.modularity_class;
            // // Use random x, y
            // node.x = node.y = null;
            node.draggable = true;
        });
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
                layout: 'force',
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
                data: graph_data.nodes,
               
                links: graph_data.links ,
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