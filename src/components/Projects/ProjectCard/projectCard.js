import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div>
      <div className="w-full p-3 rounded-xl project-item min-h-[11rem]">
        <Link
          to={`/projects/${props.info.owner.login}/${props.info.name}`}
          state={{ info: props.info }}
        >
          <div className="shadow-dashboard">
            <div className="flex flex-wrap justify-between items-center p-2 border-b border-coolGray-100">
              <div className="w-full lg:w-auto p-2">
                <div className="flex flex-wrap items-center -m-3">
                  <div className="w-auto p-2">
                    <img
                      src={props.info.owner.avatar_url}
                      className="h-12 w-12 mr-3 rounded-full"
                      alt="owner avatar"
                    />
                  </div>
                  <div className="w-auto p-2">
                    <h2 className="text-sm font-medium text-coolGray-900">
                      {props.info.name}
                    </h2>
                    <h3 className="text-xs font-medium text-coolGray-400">
                      {props.info.owner.login}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap px-4 py-4 mx-auto">
              <div className="w-full p-2">
                <div className="text-center">
                  <p className="mb-1 text-xs text-coolGray-900 font-semibold leading-none break-word max-h-[2em] overflow-hidden">
                    {props.info.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
