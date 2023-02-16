import { useState } from "react";
import React from "react";
import Chart from "../Chart/chart";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Layouts/Loading/loading";

export default function TopContributors(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    console.log("dataaa",props.data)
    if (!props.data) {
      return;
    }
    const editedData = [];
    for (let i = 0; i < props.data.length; i++) {
      editedData.push(
        <div
          key={i}
          //    pl-4 pr-6
          className="flex py-3  items-center justify-between bg-gray-500 rounded-md"
        >
          <a
            className="text-gray-300 hover:text-gray-200 "
            href={props.data[i].html_url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center">
              <img
                className="h-12 w-12 mr-3 rounded-full"
                src={props.data[i].avatar_url}
                style={{
                  minWidth: "48px",
                  minHeight: "48px",
                  maxWidth: "48px",
                  maxHeight: "48px",
                  marginRight: "20px",
                }}
                alt=""
              />
              <div>
                <h5 className="text-sm leading-none text-gray-400 font-medium break-all">
                  {props.data[i].login}
                </h5>
                <span className="text-xs font-medium text-gray-400">
                  {props.data[i].contributions} commits
                </span>
              </div>
            </div>
            <div></div>
          </a>
        </div>
      );
    }

    setOption(editedData);
  }, [props.data]);

  return <div>{option ? option : <LoadingSpinner />}</div>;
}
