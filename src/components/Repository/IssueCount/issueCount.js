import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Layouts/Loading/loading";
import NoData from "../../Layouts/NoData/noData";

export default function CodeFrequency(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    if (props.data === undefined) {
      setOption(
        <div>
          <LoadingSpinner />{" "}
        </div>
      );
      return;
    } else if (props.data === null) {
      setOption(
        <div>
          <NoData />{" "}
        </div>
      );
      return;
    } else {
      props.data.tooltip = {
        trigger: "item",
      };

      props.data.legend = {
        top: "5%",
        left: "center",
      };

      for (let i = 0; i < props.data.series.length; i++) {
        const addVal = {
          name: "Issue Count",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#eee",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 15,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
        };
        Object.assign(props.data.series[i], addVal);
      }
      setOption(<Chart option={props.data} />);
    }
  }, [props.data]);
  return <div>{option}</div>;
}
