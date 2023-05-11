import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import './containers.css'
import TopContributors from '../../Repository/TopContributors/topContributors'
import RecentCommits from '../../Repository/RecentCommits/recentCommits'
import RecentIssues from '../../Repository/RecentIssues/recentIssues'
import RepositoryInfo from '../../Repository/RepositoryInfo/repositoryInfo'

/**
 * A container for the table. It is used to display the data and a chart in the right place
 *
 * @param props - The props to be passed to the chart
 *
 * @return { JSX. Element } The container for the table in the right place ( after the chart is rendered
 */
export default function TableContainer(props) {
  const [chart, setChart] = useState(null)
  useEffect(() => {
    // Set chart data to the chart
    if (props.chartType === 'top_contributors') {
      setChart(<TopContributors data={props.data} />)
      // Set the chart to the chart
    } else if (props.chartType === 'recent_commits') {
      setChart(<RecentCommits data={props.data} />)
      // Set chart data for the chart
    } else if (props.chartType === 'recent_issues') {
      setChart(<RecentIssues data={props.data} />)
      // Set chart data to the chart
    } else if (props.chartType === 'repository_info') {
      setChart(<RepositoryInfo data={props.data} category={props.category} />)
    }
  }, [props])

  return (
    <div className="flex flex-col p-6 bg-gray-500 rounded-xl table-container">
      <div className="flex flex-wrap mb-2 items-center justify-between -m-2 ">
        <div className="w-auto p-2 pl-4">
          <h3 className="text-lg text-gray-400 font-medium capitalize">
            {props.chartHeader}
          </h3>
        </div>
      </div>
      <div>{chart}</div>
    </div>
  )
}
