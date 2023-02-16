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
import TopContributors from "../TopContributors/topContributos";
import RecentCommits from "../RecentCommits/recentCommits";
import RecentIssues from "../RecentIssues/recentIssues";
import RepositoryInfo from "../RepositoryInfo/repositoryInfo";

export default function TableContainer(props) {
  const [chart, setChart] = useState(null);
  useEffect(() => {
    if (props.chartType === "top_contributors") {
      setChart(<TopContributors data={props.data} />);
    } else if (props.chartType === "recent_commits") {
      setChart(<RecentCommits data={props.data} />);
    } else if (props.chartType === "recent_issues") {
      setChart(<RecentIssues data={props.data} />);
    } else if (props.chartType === "repository_info") {
      setChart(<RepositoryInfo data={props.data} />);
    }
  }, [props]);

  return (
    <div className="flex flex-col p-6 bg-gray-500 rounded-xl table-container">
      <div className="flex flex-wrap mb-4 items-center justify-between -m-2">
        <div className="w-auto p-2">
          <h4 className="text-lg mb-1 text-gray-400 font-medium">
            {props.chartHeader}
          </h4>
        </div>
      </div>
      {chart}
    </div>
  );
}
