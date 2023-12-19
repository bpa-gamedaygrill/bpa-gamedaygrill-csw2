"use client";
import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chart.js/auto";

interface BarChartInterface {
  chartData: any;
  titleText: string;
}

const BarChart: React.FC<BarChartInterface> = ({ chartData, titleText }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: titleText as string,
      },
    },
    backgroundColor: "#de2f2fcc",
    maintainAspectRatio: true,
    scales: {
      y: {
        display: true,
        scaleLabel: {
          display: true,
        },
        ticks: {
          min: 0,
          stepSize: 1,
        }
      }
    }
  }
  return <Bar data={chartData} options={options as any} />;
}

export default BarChart;
