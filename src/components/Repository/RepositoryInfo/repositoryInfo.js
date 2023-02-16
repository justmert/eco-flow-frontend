import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import './repositoryInfo.css'

function RepositoryInfoCard(option) {
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
    <div className="p-6 rounded-xl awesome-info">
      <figure className="md:flex bg-slate-100 rounded-xl p-0 ">
        <div className="flex place-content-center">
          <a
            className="text-gray-300 hover:text-gray-200 "
            href={option.owner.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="float-left mx-auto rounded-full"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
                width: "100px",
                height: "100px",
              }}
              src={option.owner.avatar_url}
              alt=""
            />
          </a>
        </div>
        <div className="text-center md:text-left md:pl-8 align-middle	space-y-4 w-full">
          <a href={option.html_url} target="_blank" rel="noreferrer">
            <span className="text-3xl text-gray-400 font-black font-heading">
              {option.owner.login}/{option.name}
            </span>
          </a>
          {/* <blockquote> */}
          <p className="text-lg">{option.description}</p>
        </div>
      </figure>
      <div className="mx-auto items-center mt-3 sm:mx-auto ">
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
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg px-4 py-5 shadow sm:p-6 awesome-stats bg-gray-100 bg-opacity-30"
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
  );
}

export default function RepositoryInfo(props) {
  return <>{props.data && RepositoryInfoCard(props.data)}</>;
}
