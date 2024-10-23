export default function Main(props) {
  // Destructure 'data' from props
  const { data } = props;

  return (
    // Container for the background image
    <div className="imgContainer">
      {/*
        Display the high-definition image
        - src: Uses the 'hdurl' property from the data object
        - alt: Uses the 'title' property if available, otherwise defaults to "bg-img"
        - className: Applies the "bgImage" CSS class for styling

        This component is responsible for rendering the main background image of the application.
        It expects to receive image data through props, which likely comes from an API or parent component.
        The image displayed here serves as a focal point or backdrop for the entire project.
      */}
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}
