import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";


function RepositoryInfoCard3(option) {
  const stats = [
    { name: "Stars", stat: option.stargazers_count },
    { name: "Watchers", stat: option.watchers_count },
    { name: "Forks", stat: option.forks_count },
  ];

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

  return (
    <section className="">
      <div className="container px-4">
        <div className="p-6 bg-gray-500 rounded-xl table-container">
          <figure className="md:flex bg-slate-100 rounded-xl p-0 ">
            <div className="flex place-content-center">
              <a
                className="text-gray-300 hover:text-gray-200 "
                href={option.owner.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  // className="lg:mb-0 w-full rounded-lg object-cover  md:rounded-none rounded-full mx-auto mb-5 md:w-48 md:h-auto"
                  className="float-left mx-auto rounded-full"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100px",
                    width: "100px",
                    height: "100px",
                    // borderRadius: 1.25 + "rem",
                  }}
                  src={option.owner.avatar_url}
                  alt=""
                />
              </a>
            </div>
            <div className="text-center md:text-left md:pl-8 align-middle	space-y-4 w-full">
              <a
                // className="text-gray-300 hover:text-gray-200 "
                href={option.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-3xl text-gray-400 font-black font-heading">
                  {option.owner.login}/{option.name}
                </span>
              </a>
              {/* <blockquote> */}
              <p className="text-lg">{option.description}</p>
              </div>

          </figure>
          <div className="mx-auto items-center mt-3 sm:mx-auto ">
              {/* </blockquote> */}
              {/* <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption> */}

              {option.license && (
                <span
                  style={{ backgroundColor: "rgba(72, 209, 107, 0.4)" }}
                  className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-800 mr-5"
                >
                  License: {option.license.name}
                </span>
              )}
              {option.language && (
                <span
                  style={{ backgroundColor: "rgba(251, 194, 82, 0.4)" }}
                  className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-800 mr-5"
                >
                  Language: {option.language}
                </span>
              )}
              <span
                style={{ backgroundColor: "rgba(134, 163, 184, 0.4)" }}
                className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-800 mr-5"
              >
                Created At: {formatDate(option.created_at)}
              </span>
              <span
                style={{ backgroundColor: "rgba(244, 132, 132, 0.4)" }}
                className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-800  mr-5"
              >
                Last Updated At: {formatDate(option.updated_at)}
              </span>
            </div>
          <div>
            {/* <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3> */}
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-lg px-4 py-5 shadow sm:p-6 stat-container bg-gray-100 bg-opacity-30"
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
    </section>
  );
}

export default function RepositoryInfo(props) {
  // const [option, setOption] = useState(null);
  // useEffect(() => {
  //   axios
  //     // .get(`${props.backend_url}repository_info/${props.repo}`)
  //     .then((response) => {
  //       setOption(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [props.backend_url, props.repo]);

  return <>{props.data && RepositoryInfoCard3(props.data)}</>;
}
