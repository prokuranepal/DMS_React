import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const LineChartWithXAxisPading = (data) => (
  <ResponsiveContainer width="100%" height={data.height}>
    <LineChart data={data.data} margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <Line type="monotone" dataKey="Medicine" stroke="#3367d6" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="Drone" stroke="#ffc658"/>
    </LineChart>
  </ResponsiveContainer>
)

export default LineChartWithXAxisPading