import { useState } from "react";
import React from "react";
import ReactECharts from "echarts-for-react"; // or var ReactECharts = require('echarts-for-react');

export default function Chart(props) {
  return (
    <ReactECharts
      showLoading={props.loading}
      option={props.option ? props.option : {}}
      notMerge={true}
      lazyUpdate={true}
      theme={"vintage"}
      loadingOption={{
        text: "",
        textColor: "white",
        maskColor: "rgba(0, 0, 0, 0.0)",
        zlevel: 0,
      }}
      style={{ height: "300px", width: "100%" }}
      opts={{ renderer: "canvas" }}
    />
  );
}
