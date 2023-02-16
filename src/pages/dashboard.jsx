import { useEffect, useState } from "react";
import React from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import "../styles/dashboard.css";
import ProjectCard from "../components/Projects/ProjectCard/projectCard";
import Navbar from "../components/Layouts/Navbar/navbar.js";
import ChartContainer from "../components/Layouts/Containers/chartContainer";
import TableContainer from "../components/Layouts/Containers/tableContainer";
import StarCount from "../components/Dashboards/StarCount/starCount";
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
    <div>
      <title>Dashboard</title>
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
      <link rel="stylesheet" href="css/tailwind/tailwind.min.css" />
      <link rel="icon" type="image/png" sizes="32x32" href="PNG_ICON" />

      <Navbar />

      <div className="dashboard">
        <div className="container mx-auto max-w-7xl py-10">
          <div className="container mt-4 py-3 px-4 rounded-xl pb-2 pt-4 w-auto mb-2">
            <h1 className="text-4xl mb-1 text-gray-400 font-medium">
              Dashboard
            </h1>
            {/* <h2 className="text-gray-400 font-medium">
              All projects building on {process.env.REACT_APP_ECOSYSTEM}{" "}
              ecosystem.
            </h2> */}
          </div>

          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-between grid-wrap"> */}

          <div>
            <div className="container px-16 mx-auto">
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
                    <ChartContainer
                      chartType="issue_count"
                      chartHeader="Total Issue Count"
                      data={data.issue_count}
                    />
                  </section>
                </div>

                <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0">
                  <section className="py-3">
                    <ChartContainer
                      chartType="issue_activity"
                      chartHeader="Recent Issue Activity"
                      data={data.issue_activity}
                    />
                  </section>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                  
                  <section className="py-3">
                    <TableContainer
                      chartType="top_contributors"
                      chartHeader="Overall Top Contributors"
                      data={data.top_contributors}
                    />
                  </section>

                </div>
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                  
                  <div className="py-3">
                    <StarCount
                      chartHeader="Ecosystem Star Count"
                      data={13}
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

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
