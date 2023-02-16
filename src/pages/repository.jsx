import { useEffect, useState } from "react";
import React from "react";
import "../styles/repository.css";
import RepositoryInfo from "../components/Repository/RepositoryInfo/repositoryInfo";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar/navbar.js";
import ChartContainer from "../components/Repository/Containers/chartContainer";
import TableContainer from "../components/Repository/Containers/tableContainer";

export default function Repository(props) {
  const [data, setdata] = useState({});
  const { owner, repo } = useParams();
  const location = useLocation();
  if (location.state !== null) {
    var { info } = location.state;
  }
  useEffect(() => {
    const docRef = doc(
      props.db,
      process.env.REACT_APP_FIREBASE_DATA_COLLECTION,
      `${owner}-${repo}`
    );
    getDoc(docRef)
      .then((docSnap) => {
        console.log(docSnap.data());
        if (docSnap.exists()) {
          if (!info) {
            getDoc(
              doc(
                props.db,
                process.env.REACT_APP_FIREBASE_INFO_COLLECTION,
                `${owner}-${repo}`
              )
            )
              .then((infoSnap) => {
                if (infoSnap.exists()) {
                  const repoInfos = infoSnap.data();
                  setdata({
                    ...docSnap.data(),
                    repository_info: repoInfos.info,
                  });
                } else {
                  console.log("No such document!");
                }
              })
              .catch((error) => {
                console.log("Error getting document:", error);
              });
          } else {
            setdata({ ...docSnap.data(), repository_info: info });
          }
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [info, owner, repo, props.db]);

  return (
    <div>
      <title>Project Page</title>
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

      <div>
        <div className="container px-16 mx-auto">
          <div>
            <section className="py-3">
              <div>
                <RepositoryInfo data={data.repository_info} />
              </div>
            </section>
          </div>

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
                  chartHeader="Recent Issue Activity"
                  data={data.top_contributors}
                />
              </section>
            </div>

            <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0 ">
              <section className="py-3">
                <ChartContainer
                  chartType="star_activity"
                  chartHeader="Recent Stargazing Activity"
                  data={data.star_activity}
                />
              </section>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
            <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0 ">
              <section className="py-3">
                <ChartContainer
                  chartType="pull_request_activity"
                  chartHeader="Recent Pull Request Activity"
                  data={data.pull_request_activity}
                />
              </section>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
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
  );
}