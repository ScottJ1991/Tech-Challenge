import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = props => {
  let chartLabels = [];
  let chartClour = [
    "rgba(225, 99,132,0.6)",
    "rgba(54,162,235, 0.6)",
    "rgba(235, 238, 36, 0.6)",
    "rgba(242, 156, 58, 0.6)"
  ];
  let labelText = "";

  if (props.eventType === "E") {
    chartLabels = ["Beginner", "Intermediate", "Advanced", "SME"];
    labelText = "Num of events";
  } else {
    chartLabels = ["0", "1 to 10", "10+"];
    labelText = "Total events with this attendees range";
  }

  let chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: labelText,
        data: props.dataValues,
        backgroundColor: chartClour
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
