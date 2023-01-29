import { useState } from "react";
import React from "react";
import Chart from "../chart";
import { useEffect } from "react";
import axios from "axios";
import * as echarts from "echarts/core";

export default function CodeFrequency(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    // axios
    //   .get(`${props.backend_url}code_frequency/${props.repo}`)
    //   .then((response) => {
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

    // response.data.series[0].itemStyle = {
    //   color: '#5C88DB'
    // }

    // response.data.series[0].areaStyle = {
    //   "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(128, 161, 223, 1)'
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgba(255,255,255,1)'
    //       }
    //     ])
    //   }

    // response.data.series[1].itemStyle = {
    //   color: '#df8090'
    // }

    // response.data.series[1].areaStyle = {
    //   "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgba(255,255,255,1)'
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(216, 124, 124)'
    //       }
    //     ])
    //   }
    setOption(props.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, [props.data]);

  return (
    <div>
      <Chart option={option} loading={option ? false : true} />
    </div>
  );
}
