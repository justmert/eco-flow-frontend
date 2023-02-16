import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import CommitHistory from "../CommitHistory/commitHistory";
import CodeFrequency from "../CodeFrequency/codeFrequency";
import IssueActivity from "../IssueActivity/issueActivity";
import PullRequestActivity from "../PullRequestActivity/pullRequestActivity";
import StarActivity from "../StarActivity/starActivity";
import IssueCount from "../IssueCount/issueCount";
import PullRequestCount from "../PullRequestCount/pullRequestCount";
import "../../Layouts/Containers/containers.css";

export default function ChartContainer(props) {
  const [chart, setChart] = useState(null);
  useEffect(() => {
    if (props.chartType === "commit_history") {
      setChart(<CommitHistory data={props.data} />);
    } else if (props.chartType === "code_frequency") {
      setChart(<CodeFrequency data={props.data} />);
    } else if (props.chartType === "issue_count") {
      setChart(<IssueCount data={props.data} />);
    } else if (props.chartType === "issue_activity") {
      setChart(<IssueActivity data={props.data} />);
    } else if (props.chartType === "pull_request_activity") {
      setChart(<PullRequestActivity data={props.data} />);
    } else if (props.chartType === "pull_request_count") {
      setChart(<PullRequestCount data={props.data} />);
    } else if (props.chartType === "star_activity") {
      setChart(<StarActivity data={props.data} />);
    }
  }, [props]);

  return (
    <div className="p-6 rounded-xl chart-container flex flex-col">
      <div className="w-auto mb-3">
        <h3 className="text-lg text-gray-400 font-medium">
          {props.chartHeader}
        </h3>
      </div>
      <div>{chart}</div>
    </div>
  );
}
