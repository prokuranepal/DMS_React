import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const LineChartWithXAxisPading = (data) => (
  <ResponsiveContainer width="100%" height={data.height} data-test="responsive-component">
    <LineChart data-test="linechart-component" data={data.data} margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="month" padding={{left: 30, right: 30}}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <Line type="monotone" dataKey="deliveries" stroke="#3367d6" activeDot={{r: 8}}/>
      {/* <Line type="monotone" dataKey="Drone" stroke="#ffc658"/> */}
    </LineChart>
  </ResponsiveContainer>
)

export default LineChartWithXAxisPading