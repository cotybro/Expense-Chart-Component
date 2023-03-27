
import React, { Component } from "react";
import Chart from "react-apexcharts";
import data from "./data";
import './BarChart.css';

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          chart: {
            id: "bar"
          },
          xaxis: {
            categories: data.map(data => data.day),
            axisTicks: {
                show: false,
            }
          },
          yaxis: {
            show: false
          },
          grid: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          theme: {
            mode: 'light',
            palette: 'palette9',
            monochrome: {
              enabled: true,
              color: '#EC755D'
            }
          },
          plotOptions: {
            bar: {
                borderRadius: 5,
            }
          }
        },
        series: [
          {
            name: "Daily Spending",
            data: data.map(data => data.amount)
          }
        ],
        

    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width='100%'
              height='120%'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;