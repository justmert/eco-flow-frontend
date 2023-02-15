import { useEffect, useState } from "react";
import React from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import "../styles/projects.css";
import ProjectCard from "../components/Projects/ProjectCard/projectCard";
import Navbar from "../components/Layouts/Navbar/navbar.js";

export default function Projects(props) {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getDocs(
      collection(props.db, process.env.REACT_APP_FIREBASE_INFO_COLLECTION)
    )
      .then((querySnapshot) => {
        const repoCards = [];
        function compare(a, b) {
          if (a.data.stargazers_count < b.data.stargazers_count) {
            return 1;
          } else {
            return -1;
          }
        }
        const allData = [];
        // querySnapshot.sort( compare );
        querySnapshot.forEach((doc) => {
          allData.push({
            id: doc.id,
            data: doc.data().info,
          });
        });

        allData.sort(compare);
        allData.forEach((docPair, index) => {
          // doc.data() is never undefined for query doc snapshots
          repoCards.push(
            <div className="px-4 py-4 md:min-w-[22rem]">
              <ProjectCard key={docPair.id} info={docPair.data} />
            </div>
          );
        });

        setProjectList(repoCards);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [props.db]);

  return (
    <div>
      <title>Page title</title>
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

      <div className="projects">
        {/* <section className="bg-coolGray-50 py-4"> */}
        <div className="container mx-auto max-w-7xl py-10 ">
          <div className="mt-4 mx-auto">
            <section className="py-3">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="bg-gray-500 rounded-xl">
                <div className="container px-4">
                  <div className="pb-2 pt-2 bg-gray-500 rounded-xl ">
                    <div className="w-auto mb-2">
                      <h1 className="text-4xl mb-1 text-gray-400 font-bold font-medium">
                        Projects
                      </h1>
                      <h2 className="text-gray-400 font-medium">
                        All projects building on{" "}
                        {process.env.REACT_APP_ECOSYSTEM} ecosystem.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-between grid-wrap">
            {projectList}
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
  );
}
