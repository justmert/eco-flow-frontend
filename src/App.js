import './styles/App.css'
import { useEffect } from 'react'
import Repository from './pages/repository'
import * as echarts from 'echarts/core'
import { chartTheme } from './theme'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import Projects from './pages/projects'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/error'
import { getDocs, collection } from 'firebase/firestore'
import { useState } from 'react'
import Dashboard from './pages/dashboard'

function App() {
  echarts.registerTheme('vintage', chartTheme)
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  }
  const [allProjectInfo, setAllProjectInfo] = useState({})
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // const analytics = getAnalytics(app)
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app)

  useEffect(() => {
    getDocs(collection(db, process.env.REACT_APP_FIREBASE_INFO_COLLECTION))
      .then((querySnapshot) => {
        const allData = []
        querySnapshot.forEach((doc) => {
          allData.push({
            id: doc.id,
            data: doc.data().info,
          })
        })
        setAllProjectInfo(allData)
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }, [db])
  return (
    <>
      {allProjectInfo ? (
        <div className="page-bg">
          <Routes>
            <Route
              path="/"
              element={<Dashboard db={db} info={allProjectInfo} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard db={db} info={allProjectInfo} />}
            />
            <Route path="/projects">
              <Route
                index
                element={<Projects db={db} info={allProjectInfo} />}
              />
              <Route
                path=":owner/:repo"
                element={<Repository db={db} info={allProjectInfo} />}
              />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  )
}

export default App
