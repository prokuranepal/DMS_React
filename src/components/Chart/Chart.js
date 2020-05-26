import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'

function Chart({chartData, height}) {

    const [graphData, setGraphData] = useState({
        chartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Delivery 1',
                    backgroundColor: 'rgba(0, 145, 213, 0.6)',
                    borderColor: 'rgba(0, 145, 213, 1)',
                    fill:false,
                    data : [10,4,20,30,40,60,40,30,10,20,70,80]
                },
                {
                    label: 'Delivery 2',
                    backgroundColor: 'rgba(234, 106, 71, 0.6)',
                    borderColor: 'rgba(234, 106, 71, 1)',
                    fill:false,
                    data : [10,30, 40, 20, 40, 60, 80,10,20,50, 20, 30]
                },
                {
                    label: 'Delivery 3',
                    backgroundColor: 'rgba(28, 78, 128, 0.6)',
                    borderColor: 'rgba(28, 78, 128, 1)',
                    fill:false,
                    data : [5, 10,30, 40, 35, 60, 70, 50, 40, 10, 30, 20]
                }
            ],
            
        }
    })
    return (
        <div className = "chart">
            <Line data = {graphData.chartData}
                  options = {{
                      maintainAspectRatio: false
                  }}

                  height = {height}
            />
        </div>
    )
}


export default Chart

