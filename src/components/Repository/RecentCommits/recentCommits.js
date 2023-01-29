import { useState } from "react";
import React from "react";
import Chart from "../chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../Loading/loading";

export default function RecentCommits(props) {
  const [option, setOption] = useState(null);

  function formatDate(dateString) {
    console.log(dateString)
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const humanReadableDate = date.toLocaleDateString("en-US", options);
    console.log(humanReadableDate)

    return humanReadableDate;
  }
  useEffect(() => {

    if (!props.data) {
        return;
      }
    // axios
    //   .get(`${props.backend_url}recent_commits/${props.repo}`)
    //   .then((props) => {
        const editedData = [];
        for (let i = 0; i < props.data.length; i++) {
          editedData.push(
            <div
              key={i}
              className="flex py-3 items-center justify-between bg-gray-500 rounded-md"
            >
              <div className="flex items-center">
                <a
                  href={props.data[i].author.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-12 w-12 mr-3 rounded-full"
                    src={props.data[i].author.avatar_url}
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
                  <h5 className="text-sm leading-none text-gray-400 font-bold font-medium break-all max-h-[1em] overflow-hidden">
                    <a
                      // className="text-gray-300 hover:text-gray-200"
                      href={props.data[i].html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {props.data[i].commit.message}
                    </a>
                  </h5>
                  <span className="text-xs font-medium text-gray-400">
                    {props.data[i].author.login} •{" "}
                    {props.data[i].commit.comment_count} comments • Created
                    at {formatDate(props.data[i].commit.author.date)}
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          );
        }

        setOption(editedData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [props.data]);

  return (
    <section className="">
      <div className="container px-4">
        <div
          className="flex flex-col p-8 bg-gray-500 rounded-xl table-container"
          style={{ minHeight: "480px" }}
        >
          <div className="flex flex-wrap mb-4 items-center justify-between -m-2">
            <div className="w-auto p-2">
              <h4 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                Recent Commits
              </h4>
            </div>
          </div>
          {option ? option : <LoadingSpinner />}
        </div>
      </div>
    </section>
  );
}
