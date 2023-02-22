import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import "./search.css";
import { Link } from "react-router-dom";

const Hit = ({ hit }) => (
  <div className="w-full cursor-pointer">
  <Link
    to={`/projects/${hit.info.owner.login}/${hit.info.name}`}
    state={{ info: hit.info }}
  >
    <div className="flex items-center rounded-lg  p-2 hit-item  ">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={hit.info.owner.avatar_url}
        alt="project avatar url"
      />
      <div className="ml-4">
        <h3 className="font-medium leading-6 text-gray-900">
          {hit.info.name}/{hit.info.owner.login}
        </h3>
        <p className="text-sm line-clamp-1 text-gray-500">
          {hit.info.description}
        </p>
      </div>
    </div>
  </Link>
  </div>
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
      indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox
        autoFocus={true}
        placeholder="Search for projects"
        showLoadingIndicator={true}
        searchAsYouType={true}
      />
      <Hits
        hitComponent={Hit}
        classNames={{
          list: "absolute max-w-lg w-full mt-8 shadow-lg overflow-hidden z-10 max-h-[24rem] overflow-y-auto ",
          item: "",
        }}
      />
    </InstantSearch>
  );
}
