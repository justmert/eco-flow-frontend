import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import algoliasearch from "algoliasearch/lite";
// import {connectHighlight } from 'react-instantsearch-dom';
import "instantsearch.css/themes/satellite.css";
import "../../../styles/search.css";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

// const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
//     const parsedHit = highlight({
//       highlightProperty: '_highlightResult',
//       attribute,
//       hit
//     });

//     return (
//       <div>
//         {parsedHit.map(
//           part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
//         )}
//       </div>
//     );
//   });

const Hit = ({ hit }) => (
  <Link
    to={`/projects/${hit.info.owner.login}/${hit.info.name}`}
    state={{ info: hit.info }}
  >
    <div className="flex items-center rounded-lg  p-2 hit-item cursor-pointer">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={hit.info.owner.avatar_url}
        alt="project avatar url"
      />
      <div className="ml-4">
        <h3 className="font-medium leading-6 text-gray-900">
          {hit.info.name}/{hit.info.owner.login}
        </h3>
        <p className="text-sm leading-none break-word max-h-[2em] overflow-hidden text-gray-500">
          {hit.info.description}
          {/* <a href="#">k</a> */}
        </p>
      </div>
    </div>
  </Link>
);

export default function Search(props) {
  const algoliaClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
    process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
  );

  const searchClient = {
    ...algoliaClient,
    search(requests) {
      if (
        requests.every(({ params }) => !params.query || params.query.length < 2)
      ) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
            hitsPerPage: 0,
            exhaustiveNbHits: false,
            query: "",
            params: "",
          })),
        });
      }

      return algoliaClient.search(requests);
    },
  };

  return (
    <InstantSearch
      indexName= {process.env.REACT_APP_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox
        autoFocus={true}
        placeholder="Search for projects"
        showLoadingIndicator={true}
        searchAsYouType={true}
      />
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div> */}

      <Hits
        hitComponent={Hit}
        classNames={{
          list: "absolute max-w-lg w-full mt-8 shadow-lg overflow-hidden z-10 ",
          item: "",
        }}
      />
    </InstantSearch>
  );
}
