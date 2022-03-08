import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapointvalue = props.datapoint.map((datapoints) => datapoints.value);
  const totalMaximun = Math.max(...datapointvalue);

  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMaximun}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
