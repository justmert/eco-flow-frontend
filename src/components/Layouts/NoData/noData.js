import "./noData.css";

export default function NoData() {
  return (
    <div className="flex flex-col justify-center items-center pt-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#595959"
        class="w-12 h-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      
      <span className="mt-2 block text-center text-sm font-medium text-gray-400">No Data Exist</span>
    </div>
  );
}
