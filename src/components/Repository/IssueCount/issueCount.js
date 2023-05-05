import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Layouts/Loading/loading";
import NoData from "../../Layouts/NoData/noData";

/**
* Component for displaying a pie chart of issue counts. It is used to display the number of issues per type and for each series in the chart
* 
* @param props - props to pass to component
* 
* @return { ReactElement } React element for displaying issue count in the chart ( s ) or null if there was
*/
export default function IssueCount(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    // Set the chart options.
    if (props.data === undefined) {
      setOption(
        <div>
          <LoadingSpinner />{" "}
        </div>
      );
      return;
    // Set the chart options for the chart
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

      // Creates a series of issue count data.
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
