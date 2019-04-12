import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={1000}
        height={300}
        data={this.props.monthlyPlot}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="salty comments monthly sentiment" type="monotone" dataKey="t_s" stroke="#F4A000" />
        <Line name="sweet comments monthly sentiment" type="monotone" dataKey="t_h" stroke="#74B816" />
      </LineChart>
    );
  }
}
