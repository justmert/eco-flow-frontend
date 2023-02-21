import { useEffect, useState } from "react";
import React from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import "../styles/projects.css";
import ProjectCard from "../components/Projects/ProjectCard/projectCard";
import Navbar from "../components/Layouts/Navbar/navbar.js";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../components/Layouts/Footer/footer";

export default function Projects(props) {
  const [projectList, setProjectList] = useState(null);
  useEffect(() => {
    if (Object.keys(props.info).length === 0) {
      return;
    }

    const repoCards = [];
    function compare(a, b) {
      if (a.data.stargazers_count < b.data.stargazers_count) {
        return 1;
      } else {
        return -1;
      }
    }
    props.info.sort(compare);
    props.info.forEach((docPair, index) => {
      repoCards.push(
        <div className="space-x-4 py-4 md:min-w-[22rem]">
          <ProjectCard key={docPair.id} info={docPair.data} />
        </div>
      );
    });

    setProjectList(repoCards);
  }, [props.info]);

  return (
    <div>
      <title>Projects</title>
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

      <div className="projects">
        <div className="container mx-auto max-w-7xl px-4 pt-10">
          <div className="mt-4 py-3 rounded-xl pb-2 pt-4 w-auto mb-2">
            <h1 className="text-4xl mb-1 text-gray-400 font-medium">
              Projects
            </h1>
            <h2 className="text-gray-400 font-medium">
              All projects building on {process.env.REACT_APP_ECOSYSTEM}{" "}
              ecosystem.
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:space-x-4 md:grid-cols-2 lg:grid-cols-3 content-between grid-wrap">
            {projectList}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center content-center">
      <Footer />
      </div>
    </div>
  );
}
