import { useState } from "react";
import React from "react";
import Chart from "../chart";
import { useEffect } from "react";
import axios from "axios";

export default function CodeFrequency(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    // axios
    //   .get(`${props.backend_url}issue_activity/${props.repo}`)
    //   .then((props) => {
    if (!props.data) {
      return;
    }
    props.data.tooltip = {
      trigger: "axis",
    };
    console.log(props.data);

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
