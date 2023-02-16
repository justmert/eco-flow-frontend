export default function LoadingSpinner() {
  return (

    <div className="flex flex-auto flex-col justify-center items-center">
      <div className="flex justify-center">
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full"
          style={{ color: "rgb(90, 111, 192)", borderWidth: "5px", borderRadius: "70%"}}
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
