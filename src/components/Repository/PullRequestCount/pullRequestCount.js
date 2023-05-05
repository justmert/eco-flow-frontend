import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Layouts/Loading/loading";
import NoData from "../../Layouts/NoData/noData";

/**
* Component for displaying pull request count. This component is responsible for populating the data and chart. You can use it to add or remove items from the chart by passing an object with data and / or series properties.
* 
* @param props - React props to pass to component. Must contain data and series properties.
* 
* @return { ReactElement } React element for displaying pull request count with series and / or chart properties. Note that data will be replaced with values from the chart
*/
export default function PullRequestCount(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    // This method is used to set the chart options.
    if (props.data === undefined) {
      setOption(
        <div>
          <LoadingSpinner />{" "}
        </div>
      );
      return;
    // Set the chart options for the pull request count
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

      // This method will add series to the series
      for (let i = 0; i < props.data.series.length; i++) {
        const addVal = {
          name: "Pull Request Count",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
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
