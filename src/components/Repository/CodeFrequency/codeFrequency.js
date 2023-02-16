import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import * as echarts from "echarts/core";

export default function CodeFrequency(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    if (!props.data) {
      return;
    }

    props.data.dataZoom = [
      {
        type: "slider",
        start: 50,
        bottom: 10,
        xAxisIndex: 0,
        end: 100,
      },
    ];

    props.data.tooltip = {
      trigger: "axis",
    };

    for (let i = 0; i < props.data.series.length; i++) {
      props.data.series[i].showSymbol = false;
      props.data.series[i].smooth = true;
    }
    setOption(props.data);
  }, [props.data]);

  return (
    <div>
      <Chart option={option} loading={option ? false : true} />
    </div>
  );
}
