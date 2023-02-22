import { useEffect, useState } from "react";
import React from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import "../styles/dashboard.css";
import ProjectCard from "../components/Projects/ProjectCard/projectCard";
import Navbar from "../components/Layouts/Navbar/navbar.js";
import ChartContainer from "../components/Layouts/Containers/chartContainer";
import TableContainer from "../components/Layouts/Containers/tableContainer";
import StarCount from "../components/Dashboards/StarCount/starCount";
import Footer from "../components/Layouts/Footer/footer";
import { Link } from "react-router-dom";
import TopContributors from "../components/Repository/TopContributors/topContributors";
import DashboardIssueActivity from "../components/Dashboards/IssueActivity/issueActivity";

export default function Dashboard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const docRef = doc(
      props.db,
      process.env.REACT_APP_FIREBASE_OVERALL_COLLECTION,
      `_overall`
    );
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [props.db]);

  return (
    <>
      <head>
        <title>LensPulse</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <div>
        <Navbar />

        <div className="dashboard">
          <div className="container mx-auto max-w-7xl px-4 pt-10">
            <div className="container mx-auto px-4 ">
              <div className="bg-tra overflow-hidden rounded-lg">
                <div className="px-8 py-10">
                  <div className="flex flex-col text-center mx-auto justify-center  items-center">
                    <h1 className="mb-6 text-5xl max-w-3xl  banner tracking-tight ">
                      Explore the activities of{" "}
                      <span className="underline">
                        {data.total_project_count}
                      </span>{" "}
                      projects building on{" "}
                      <span className="rounded-full eco-bg ecosystem-box text-4xl border-b-2 font-bold inline-flex px-7 py-1.5 m-4">
                        {process.env.REACT_APP_ECOSYSTEM}{" "}
                      </span>
                      ecosystem.
                    </h1>
                    <div className="flex flex-wrap justify-center -m-2">
                      <div className="w-full md:w-auto p-2">
                        <Link to={`/projects`}>
                          <div className="flex-row flex w-full px-8 py-3.5 text-lg text-center font-bold border-2 see-projects border-gray-600 rounded-full">
                            Explore Projects
                            <span className="ml-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 16"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto">
              {/* <div>
                <section className="py-3">
                  <div>
                    <RepositoryInfo data={data.repository_info} />
                  </div>
                </section>
              </div>
 */}
              <div>
                <section className="py-3">
                  <ChartContainer
                    chartType="commit_history"
                    chartHeader="Commit History by Weeks"
                    data={data.commit_history}
                  />
                </section>
              </div>

              <section className="py-3">
                <ChartContainer
                  chartType="code_frequency"
                  chartHeader="Weekly Code Frequency"
                  data={data.code_frequency}
                />
              </section>

              <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 ">
                  <section className="py-3">
                    <div className="flex flex-col p-6 bg-gray-500 rounded-xl top-cont-container">
                      <div className="flex flex-wrap mb-2 items-center justify-between -m-2 ">
                        <div className="w-auto p-2 pl-4">
                          <h3 className="text-lg text-gray-400 font-medium">
                            Top Contributors
                          </h3>
                        </div>
                      </div>
                      <div>
                        <TopContributors data={data.top_contributors} />
                      </div>
                    </div>
                  </section>
                </div>

                <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0">
                  <section className="py-3">
                    <div className="p-6 rounded-xl chart-container flex flex-col">
                      <div className="w-auto mb-3">
                        <h3 className="text-lg pl-2 text-gray-400 font-medium">
                          Issue Activity
                        </h3>
                      </div>
                      <div>
                        <DashboardIssueActivity data={data.issue_activity} />
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                  <section className="py-3">
                    <ChartContainer
                      chartType="issue_count"
                      chartHeader="Total Issue Count"
                      data={data.issue_count}
                    />
                  </section>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                  <div className="py-3">
                    <StarCount
                      chartHeader="Ecosystem Star Count"
                      data={data.total_star_count}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 ">
                  <section className="py-3">
                    <ChartContainer
                      chartType="pull_request_count"
                      chartHeader="Total Pull Request Count"
                      data={data.pull_request_count}
                    />
                  </section>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                  <section className="py-3">
                    <TableContainer
                      chartType="recent_issues"
                      chartHeader="Recent Issues"
                      data={data.recent_issues}
                    />
                  </section>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                  <section className="py-3">
                    <TableContainer
                      chartType="recent_commits"
                      chartHeader="Recent Commits"
                      data={data.recent_commits}
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bottom-0 left-0 right-0 flex justify-center content-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
