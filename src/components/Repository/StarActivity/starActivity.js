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
    //   .get(`${props.backend_url}star_activity/${props.repo}`)
    //   .then((props) => {
      if (!props.data) {
        return;
      }
        props.data.tooltip = {
          trigger: "axis",
        }
        for (let i = 0; i < props.data.series.length; i++) {
          props.data.series[i].showSymbol = false;
          props.data.series[i].smooth = true;
          props.data.series[i].itemStyle = {
            color: '#5C88DB'
          }
          props.data.series[i].areaStyle = {
          "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 161, 223, 1)'
              },
              {
                offset: 1,
                color: 'rgba(235,235,235,0)'
              }
            ])
          }

        }
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
