import { useEffect, useState } from 'react'
import React from 'react'
import '../styles/repository.css'
import RepositoryInfo from '../components/Repository/RepositoryInfo/repositoryInfo'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Layouts/Navbar/navbar.js'
import ChartContainer from '../components/Layouts/Containers/chartContainer'
import TableContainer from '../components/Layouts/Containers/tableContainer'
import Footer from '../components/Layouts/Footer/footer'
import TopContributors from '../components/Repository/TopContributors/topContributors'
export default function Repository(props) {
  const [data, setData] = useState({})
  const { owner, repo } = useParams()
  const location = useLocation()
  if (location.state !== null) {
    var { info, category } = location.state
  }

  useEffect(() => {
    const docRef = doc(
      props.db,
      process.env.REACT_APP_FIREBASE_DATA_COLLECTION,
      `${owner}-${repo}`
    )
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          if (info === undefined) {
            const selectedInfo = props.info.filter(
              (item) => item.id === `${owner}-${repo}`
            )[0]
            setData({
              ...docSnap.data(),
              repository_info: selectedInfo.data,
              category: selectedInfo.category,
            })
          } else {
            setData({
              ...docSnap.data(),
              repository_info: info,
              category: category,
            })
          }
        } else {
          console.log('No such document!')
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }, [owner, repo, info, props.db, props.info, props.category, category])

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
      <Navbar />

      <div>
        <div className="container mx-auto max-w-7xl px-4 ">
          <div>
            <section className="py-3">
              <div>
                <RepositoryInfo
                  data={data.repository_info}
                  category={data.category}
                />
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
                  chartHeader="Issue Count"
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
                  chartHeader="Pull Request Count"
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
      <Footer />
    </div>
  )
}
