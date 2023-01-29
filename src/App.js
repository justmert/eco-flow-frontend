import logo from "./logo.svg";
import "./styles/App.css";
import Chart from "./components/Repository/chart.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CodeFrequency from "./components/Repository/CodeFrequency/codeFrequency";
import Repository from "./pages/repository";
import * as echarts from "echarts/core";
import ReactECharts from "echarts-for-react"; // or var ReactECharts = require('echarts-for-react');
import { chartTheme } from "./theme";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { Outlet, Link } from "react-router-dom";
import Projects from "./pages/projects";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error";

function App() {
  echarts.registerTheme("vintage", chartTheme);
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  console.log('hii', process.env.REACT_APP_FIREBASE_CONFIG_API_KEY)
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_CONFIG_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
    messagingSenderId:
      process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID,
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  useEffect(() => {}, []);
  return (
    <div className="near-bg">
      <Routes>
        <Route path="/" element={<Projects db={db} />} />
        <Route path="/projects">
          <Route index element={<Projects db={db} />} />
          <Route path=":owner/:repo" element={<Repository db={db} />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
