import { useState } from "react";
import React from "react";
import ReactECharts from "echarts-for-react"; // or var ReactECharts = require('echarts-for-react');

/**
* A component for displaying a chart. It is used to render an HTML page with a series of data and other visual elements that can be added to the page.
* 
* @param props - Properties to provide to the chart. Should include : loading : The chart loading icon. option : An object with options for the chart.
* 
* @return { ReactElement } The rendered React element for the chart to be added to the page's DOM
*/
/**
* A component for displaying a chart. It is used to render an HTML page with a series of data and other visual elements that can be added to the page.
* 
* @param props - Properties to provide to the chart. Should include : loading : The chart loading icon. option : An object with options for the chart.
* 
* @return { ReactElement } The rendered React element for the chart to be added to the page's DOM
*/
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
