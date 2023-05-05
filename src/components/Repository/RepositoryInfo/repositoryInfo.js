import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./repositoryInfo.css";
import LoadingSpinner from "../../Layouts/Loading/loading";
import NoData from "../../Layouts/NoData/noData";

export default function RepositoryInfo(props) {
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
    console.log(props)
    if (props.data === undefined) {
      setOption(
        <div>
          <LoadingSpinner />{" "}
        </div>
      );
      return;
    } else if (props.data === null) {
      setOption(
        <div>
          <NoData />{" "}
        </div>
      );
      return;
    } else {
      const stats = [
        { name: "Stars", stat: props.data.stargazers_count },
        { name: "Watchers", stat: props.data.watchers_count },
        { name: "Forks", stat: props.data.forks_count },
      ];
      let categories = []
      props.category.forEach(element => {
        categories.push(
          <span
          // style={{ backgroundColor: "rgba(244, 132, 132, 0.4)" }}
          className="inline-flex border-pink-500 border-2 text-center rounded-full py-1 px-2 text-xs font-medium text-gray-400 bg-pink-200/40"
        >
          {element}
        </span>
        )
      });
      // setitemCategory(categories)
    
      setOption(
        <div>
          <div className="mx-auto p-6 rounded-xl awesome-info">
            <div className="flex flex-col ">
              <div className="md:space-x-0 space-x-4 space-y-4 md:space-y-0">
                <div className="justify-center md:justify-start">
                  <a
                    className="text-gray-300 hover:text-gray-200 "
                    href={props.data.owner.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="md:float-left max-h-[8rem] mx-auto rounded-full object-left object-scale-down md:mr-8"
                      src={props.data.owner.avatar_url}
                      alt="project avatar url"
                    />
                  </a>
                </div>
                <div className="text-center md:text-left align-middle w-full">
                  <div className="space-y-4">
                    <a
                      href={props.data.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-3xl text-gray-400 font-black font-heading">
                        {props.data.owner.login}/{props.data.name}
                      </p>
                    </a>
                    <p className="text-lg text-gray-400 font-medium">
                      {props.data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0 mx-auto items-center justify-center place-content-center md:items-start md:justify-start md:place-content-start">

            {categories}
            </div>

            <div className="mt-6 flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0 mx-auto items-center justify-center place-content-center md:items-start md:justify-start md:place-content-start">
              {props.data.license && (
                <span
                  // style={{ backgroundColor: "rgba(72, 209, 107, 0.4)" }}
                  className="inline-flex info-badge text-center rounded-full py-1 px-2 text-sm font-medium text-gray-400"
                >
                  License: {props.data.license.name}
                </span>
              )}
              {props.data.language && (
                <span
                  // style={{ backgroundColor: "rgba(251, 194, 82, 0.4)" }}
                  className="inline-flex info-badge text-center rounded-full py-1 px-2 text-sm font-medium text-gray-400"
                >
                  Language: {props.data.language}
                </span>
              )}
              <span
                // style={{ backgroundColor: "rgba(134, 163, 184, 0.4)" }}
                className="inline-flex info-badge text-center rounded-full py-1 px-2 text-sm font-medium text-gray-400"
              >
                Created At: {formatDate(props.data.created_at)}
              </span>
              <span
                // style={{ backgroundColor: "rgba(244, 132, 132, 0.4)" }}
                className="inline-flex info-badge text-center rounded-full py-1 px-2 text-sm font-medium text-gray-400"
              >
                Last Updated At: {formatDate(props.data.updated_at)}
              </span>
            </div>
          </div>
          <div>
            <div>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                {stats.map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-lg px-4 py-5 shadow sm:p-6 awesome-stats "
                  >
                    <dt className="truncate text-sm font-medium text-gray-500">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                      {item.stat}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      );
    }
  }, [props]);

  return (<div>{option}</div>);
}

// export default function RepositoryInfo(props) {
//   return <>{props.data && RepositoryInfoCard(props.data)}</>;
// }
