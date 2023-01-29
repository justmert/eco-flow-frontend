import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  //   const [option, setOption] = useState(null);
  //   useEffect(() => {
  //     if (!props.data) {
  //       return;
  //     }
  //     setOption(props.data);
  //   }, [props.data]);

  return (
    <div>
      {/* <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-3"> */}
      <div className="w-full p-3 rounded-xl project-item min-h-[11rem]">
        <Link
          to={`/projects/${props.info.owner.login}/${props.info.name}`}
          state={{ info: props.info }}
        >
          <div className="shadow-dashboard">
            <div className="flex flex-wrap justify-between items-center p-2  border-b border-coolGray-100">
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
              {/* <div className="w-full lg:w-auto p-2">
              <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button">
                <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16666 15H7.69999C7.80966 15.0006 7.91838 14.9796 8.01991 14.9381C8.12144 14.8967 8.21379 14.8356 8.29166 14.7583L14.0583 8.98333L16.425 6.66667C16.5031 6.5892 16.5651 6.49703 16.6074 6.39548C16.6497 6.29393 16.6715 6.18501 16.6715 6.075C16.6715 5.96499 16.6497 5.85607 16.6074 5.75452C16.5651 5.65297 16.5031 5.5608 16.425 5.48333L12.8917 1.90833C12.8142 1.83023 12.722 1.76823 12.6205 1.72592C12.5189 1.68362 12.41 1.66183 12.3 1.66183C12.19 1.66183 12.0811 1.68362 11.9795 1.72592C11.878 1.76823 11.7858 1.83023 11.7083 1.90833L9.35832 4.26667L3.57499 10.0417C3.49776 10.1195 3.43665 10.2119 3.39518 10.3134C3.35371 10.4149 3.33269 10.5237 3.33332 10.6333V14.1667C3.33332 14.3877 3.42112 14.5996 3.5774 14.7559C3.73368 14.9122 3.94564 15 4.16666 15ZM12.3 3.675L14.6583 6.03333L13.475 7.21667L11.1167 4.85833L12.3 3.675ZM4.99999 10.975L9.94166 6.03333L12.3 8.39167L7.35832 13.3333H4.99999V10.975ZM17.5 16.6667H2.49999C2.27898 16.6667 2.06701 16.7545 1.91073 16.9107C1.75445 17.067 1.66666 17.279 1.66666 17.5C1.66666 17.721 1.75445 17.933 1.91073 18.0893C2.06701 18.2455 2.27898 18.3333 2.49999 18.3333H17.5C17.721 18.3333 17.933 18.2455 18.0892 18.0893C18.2455 17.933 18.3333 17.721 18.3333 17.5C18.3333 17.279 18.2455 17.067 18.0892 16.9107C17.933 16.7545 17.721 16.6667 17.5 16.6667Z" fill="#D5DAE1" />
                </svg>
                <p>Edit</p>
              </button>
            </div> */}
            </div>
            {/* <div className="flex flex-wrap px-4 py-6 border-b border-coolGray-100 -m-2">
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="text-center">
                <p className="mb-1 text-xs text-coolGray-900 font-semibold">24</p>
                <p className="text-xs text-coolGray-400 font-medium">Images</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="text-center">
                <p className="mb-1 text-xs text-coolGray-900 font-semibold">420</p>
                <p className="text-xs text-coolGray-400 font-medium">Posts</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="text-center">
                <p className="mb-1 text-xs text-coolGray-900 font-semibold">2.7k</p>
                <p className="text-xs text-coolGray-400 font-medium">Followers</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="text-center">
                <p className="mb-1 text-xs text-coolGray-900 font-semibold">2.7k</p>
                <p className="text-xs text-coolGray-400 font-medium">Followers</p>
              </div>
            </div>
          </div> */}
            <div className="flex flex-wrap px-4 py-4 mx-auto">
              <div className="w-full p-2">
                <div className="text-center">
                  <p className="mb-1 text-xs text-coolGray-900 font-semibold leading-none break-word max-h-[2em] overflow-hidden">
                    {props.info.description}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-wrap justify-between p-6 -m-2">
                  <div className="w-full lg:w-auto p-2">
                    <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button">
                      <p>Message</p>
                    </button>
                  </div>
                  <div className="w-full lg:w-auto p-2">
                    <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                      <p>Follow</p>
                    </button>
                  </div>
                </div> */}
          </div>
        </Link>
      </div>
    </div>
    //     </div>
    //   </section>
    // </div>
  );
}
