import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";

export default function CodeFrequency(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    if (!props.data) {
      return;
    }
    props.data.tooltip = {
      trigger: "axis",
    };
    setOption(props.data);
  }, [props.data]);

  return (
    <div>
      <Chart option={option} loading={option ? false : true} />
    </div>
  );
}
