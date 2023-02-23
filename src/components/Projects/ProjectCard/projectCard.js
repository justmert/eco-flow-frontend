import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import StarSvg from '../../../assets/star.svg'
import './projectCard.css'
export default function ProjectCard(props) {
  return (
    <div>
      <div className="w-full p-3 rounded-xl project-item min-h-[11rem]">
        <Link
          to={`/projects/${props.info.owner.login}/${props.info.name}`}
          state={{ info: props.info }}
        >
          <div className="shadow-dashboard">
            <div className="flex flex-row justify-between items-center p-2 border-b border-coolGray-100">
              <div className="w-full lg:w-auto p-2">
                <div className="flex flex-row items-center -m-3">
                  <div className="w-auto p-2">
                    <img
                      src={props.info.owner.avatar_url}
                      className="h-12 w-12 mr-3 rounded-full"
                      alt="owner avatar"
                    />
                  </div>
                  <div className="w-auto p-2">
                    <h2 className="text-base font-bold text-coolGray-900 line-clamp-1 project-repo">
                      {props.info.name}
                    </h2>
                    <h3 className=" font-medium text-coolGray-400 line-clamp-1 project-owner">
                      {props.info.owner.login}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-row space-x-2 relative justify-end content-end text-end">
              <img width={16} height={16} src={StarSvg} />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg> */}
                <h3 className="text-xs font-medium text-coolGray-400 line-clamp-1"> 
                  {props.info.stargazers_count}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap px-4 py-4 mx-auto">
              <div className="w-full pt-2">
                <div className="text-center">
                  <p className="mb-1 text-xs text-coolGray-900 line-clamp-2 project-desc">
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
