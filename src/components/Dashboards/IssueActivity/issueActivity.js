import { useState } from "react";
import React from "react";
import Chart from "../../Repository/Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Layouts/Loading/loading";
import NoData from "../../Layouts/NoData/noData";

/**
* The activity component for the Issue Activity component. This component is used to display data to the user in a chart
* 
* @param props - Props from the component's props
* 
* @return { ReactElement } React element to be rendered on the Issue Activity component with data and zooming to
*/
export default function DashboardIssueActivity(props) {
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
    // Set the chart data.
    } else if (props.data === null) {
      setOption(
        <div>
          <NoData />{" "}
        </div>
      );
      return;
    } else {
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
      setOption(<Chart option={props.data} />);
    }
  }, [props.data]);

  return <div>{option}</div>;
}
