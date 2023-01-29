import { useEffect, useState } from "react";
import React from "react";
import "../styles/repository.css";
import CommitHistory from "../components/Repository/CommitHistory/commitHistory";
import CodeFrequency from "../components/Repository/CodeFrequency/codeFrequency";
import IssueActivity from "../components/Repository/IssueActivity/issueActivity";
import PullRequestActivity from "../components/Repository/PullRequestActivity/pullRequestActivity";
import StarActivity from "../components/Repository/StarActivity/starActivity";
import IssueCount from "../components/Repository/IssueCount/issueCount";
import PullRequestCount from "../components/Repository/PullRequestCount/pullRequestCount";
import TopContributors from "../components/Repository/TopContributors/topContributos";
import RecentCommits from "../components/Repository/RecentCommits/recentCommits";
import RecentIssues from "../components/Repository/RecentIssues/recentIssues";
import RepositoryInfo from "../components/Repository/RepositoryInfo/repositoryInfo";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar/navbar.js";

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
          // doc.data() will be undefined in this case
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
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="shuffle-for-tailwind.png"
      />
      <div></div>

      <Navbar />

      <div className="repository">
        <div className="container px-12 mx-auto">
          <div className="mert-first">
            <section className="py-3">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="bg-gray-500 rounded-xl">
                {/* <div cla≥ssName="p-6 bg-gray-500 rounded-xl chart-container"> */}
                {/* <div className="w-auto mb-2"> */}
                {/* <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">Commit History by Weeks</h3> */}
                {/* </div> */}
                <div>
                  <RepositoryInfo data={data.repository_info} />
                </div>
              </div>

              {/* </div> */}
              {/* </div> */}
            </section>
          </div>

          <div className="mert-first">
            <section className="py-3">
              <div className="container px-4 mx-auto">
                <div className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col">
                  <div className="w-auto mb-2">
                    <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                      Commit History by Weeks
                    </h3>
                  </div>
                  <div>
                    <CommitHistory data={data.commit_history} />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mert-second" />
          <section className="py-3">
            <div className="container px-4 mx-auto">
              <div className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col">
                <div className="w-auto mb-2">
                  <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                    Weekly Code Frequency
                  </h3>
                </div>
                <div>
                  <CodeFrequency data={data.code_frequency} />
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
            <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 mert-third">
              <section className="py-3">
                <div className="container px-4 mx-auto">
                  <div className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col">
                    <div className="w-auto mb-2">
                      <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                        Total Issue Count
                      </h3>
                    </div>
                    <div>
                      <IssueCount data={data.issue_count} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0 mert-forth">
              <section className="py-3">
                <div className="container px-4 mx-auto">
                  <div className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col">
                    <div className="w-auto mb-2">
                      <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                        Recent Issue Activity
                      </h3>
                    </div>

                    <div>
                      <IssueActivity data={data.issue_activity} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
            <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 mert-seven">
              <section className="py-3">
                {/* <div className="container px-4 mx-auto"> */}
                <div className="bg-gray-500 rounded-xl">
                  <div>
                    <TopContributors data={data.top_contributors} />
                  </div>
                </div>
                {/* </div> */}
              </section>
            </div>
            <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0 mert-eight">
              <section className="py-3">
                <div className="container px-4 mx-auto">
                  <div
                    className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col"
                    style={{ minHeight: "410px" }}
                  >
                    <div className="w-auto mb-2">
                      <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                        Recent Stargazing Activity
                      </h3>
                    </div>

                    <div>
                      <StarActivity data={data.star_activity} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
            <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0 mert-forth">
              <section className="py-3">
                <div className="container px-4 mx-auto">
                  <div className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col">
                    <div className="w-auto mb-2">
                      <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                        Recent Pull Request Activity
                      </h3>
                    </div>

                    <div>
                      <PullRequestActivity data={data.pull_request_activity} />
                      {/* <IssueCount backend_url={backend_url} repo={repo} /> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 mert-third">
              <section className="py-3">
                <div className="container px-4 mx-auto">
                  <div className="p-6 bg-gray-500 rounded-xl chart-container flex flex-col">
                    <div className="w-auto mb-2">
                      <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">
                        Total Pull Request Count
                      </h3>
                    </div>

                    <div>
                      <PullRequestCount data={data.pull_request_count} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mert-forth">
              <section className="py-3">
                {/* <div className="container px-4 mx-auto"> */}
                <div className="bg-gray-500 rounded-xl">
                  <div>
                    <RecentIssues data={data.recent_issues} />
                  </div>
                </div>
                {/* </div> */}
              </section>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mert-third">
              <section className="py-3">
                {/* <div className="container px-4 mx-auto"> */}
                <div className="bg-gray-500 rounded-xl">
                  <div>
                    <RecentCommits data={data.recent_commits} />
                  </div>
                </div>
                {/* </div> */}
              </section>
            </div>
          </div>

          <div className="mert-first">
            <section className="py-3">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="bg-gray-500 rounded-xl">
                {/* <div cla≥ssName="p-6 bg-gray-500 rounded-xl chart-container"> */}
                {/* <div className="w-auto mb-2"> */}
                {/* <h3 className="text-lg mb-1 text-gray-400 font-bold font-medium">Commit History by Weeks</h3> */}
                {/* </div> */}
                <section className="">
                  <div className="container px-4">
                    <div className="p-6 bg-gray-500 rounded-xl table-container mx-auto text-center">
                      <p>Made with ♥ by Mert Köklü</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* </div> */}
              {/* </div> */}
            </section>
          </div>

          {/* <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mert-seven">
            <section className="py-3">
              <div className="container px-4 mx-auto">
              <div className="p-6 bg-gray-500 rounded-xl chart-container">
                      <div>
                        <CommitHistory backend_url={backend_url} repo={repo} />
                      </div>                  
                </div>
              </div>
            </section>

              
              </div>
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mert-eight">
            <section className="py-3">
              <div className="container px-4 mx-auto">
              <div className="p-6 bg-gray-500 rounded-xl chart-container">
                      <div>
                        <CommitHistory backend_url={backend_url} repo={repo} />
                      </div>                  
                </div>
              </div>
            </section>

              </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
