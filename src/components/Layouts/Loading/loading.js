/**
 * A spinner to show loading status. It's used in the loading bar and the progress bar.
 *
 *
 * @return { JSX } The spinner to show loading status. Note that this spinner won't be visible
 */
export default function LoadingSpinner() {
  return (
    <div className="flex flex-grow justify-center items-center pt-32">
      <div className="flex justify-center">
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full"
          style={{
            color: 'rgb(90, 111, 192)',
            borderWidth: '5px',
            borderRadius: '70%',
          }}
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}
