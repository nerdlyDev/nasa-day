export default function Main(props) {
  // Destructure 'data' from props
  const { data } = props;

  return (
    // Container for the background image
    <div className="imgContainer">
      {/*
        Display the background image
        - src: Tries to use URL first, falls back to HD URL if available
        - alt: Uses the 'title' property if available, otherwise defaults to "bg-img"
        - className: Applies the "bgImage" CSS class for styling

        This component renders the main background image of the application.
        It receives image data through props from the parent component, using the
        NASA APOD API response. The image serves as a backdrop for the project.
      */}
      <img
        src={data.url || data.hdurl}
        alt={data.title || "bg-img"}
        className="bgImage"
        onError={(e) => {
          console.error("Image failed to load:", e);
          e.target.src = data.url; // Fallback to regular URL if HD fails
        }}
      />
    </div>
  );
}
