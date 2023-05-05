import "./noData.css";

/**
* No Data Element Displays a message if there are no data to display. This is used to indicate that the user didn't have a data set for some reason.
* 
* 
* @return { JSX. Element } The HTML for the No Data Element. It contains a div with class " flex " and the data
*/
export default function NoData() {
  return (
    <div className="flex flex-col justify-center items-center pt-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#595959"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      
      <span className="mt-2 block text-center text-sm font-medium text-gray-400">No Data Exist</span>
    </div>
  );
}
