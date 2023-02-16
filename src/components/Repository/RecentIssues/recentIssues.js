import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Layouts/Loading/loading";

export default function RecentIssues(props) {
  const [option, setOption] = useState(null);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const humanReadableDate = date.toLocaleDateString("en-US", options);
    return humanReadableDate;
  }
  useEffect(() => {
    if (!props.data) {
      return;
    }
    const editedData = [];
    for (let i = 0; i < props.data.length; i++) {
      editedData.push(
        <div
          key={i}
          className="flex py-3 items-center justify-between bg-gray-500 rounded-md"
        >
          <div className="flex items-center">
            <a
              href={props.data[i].user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-12 w-12 mr-3 rounded-full"
                src={props.data[i].user.avatar_url}
                alt=""
                style={{
                  minWidth: "48px",
                  minHeight: "48px",
                  maxWidth: "48px",
                  maxHeight: "48px",
                  marginRight: "20px",
                }}
              />
            </a>
            <div>
              <h5 className="text-sm leading-none text-gray-400 font-medium break-all max-h-[1em] overflow-hidden">
                <a
                  // className="text-gray-300 hover:text-gray-200"
                  href={props.data[i].html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.data[i].title}
                </a>
              </h5>
              <span className="text-xs font-medium text-gray-400">
                {props.data[i].user.login} • {props.data[i].state.toUpperCase()}{" "}
                • {props.data[i].comments} comments • Created at{" "}
                {formatDate(props.data[i].created_at)}
              </span>
            </div>
          </div>
          <div></div>
        </div>
      );
    }

    setOption(editedData);
  }, [props.data]);

  return <div>{option ? option : <LoadingSpinner />}</div>;
}
