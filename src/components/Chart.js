import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = props => {
  let chartData = {
    //labels: [props.label[0], props.label[1]],
    labels: ["Beginner", "Intermediate"],
    datasets: [
      {
        label: "Num of events",
        data: props.dataValues,
        //data: [10, 8, 0],
        backgroundColor: ["rgba(225, 99,132,0.6)", "rgba(54,162,235, 0.6)"]
      }
    ]
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        //width={100}
        //height={50}
        options={{
          title: { display: true, text: props.chartTitle },
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: props.y
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default Chart;
