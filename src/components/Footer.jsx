export default function Footer(props) {
  // Destructure props to extract showModel, handleToggleModel, and data
  // This allows us to use these values directly in the component
  const { showModel, handleToggleModel, data } = props;
  return (
    // Render a footer element as the main container
    <footer>
      {/* Add a div with a background gradient class */}
      <div className="bgGradient"></div>
      {/* Use a React fragment to group multiple elements without adding extra

      nodes to the DOM */}
      <>
        {/* Display the main title "NASA DAY" */}
        <h1>NASA DAY</h1>
        {/* Display the title from the data prop, using optional chaining to

        avoid errors if data is undefined */}
        <h2>{data?.title}</h2>
      </>
      {/* Create a button that triggers the handleToggleModel function when

      clicked */}
      <button onClick={handleToggleModel}>
        {/* Add an icon using Font Awesome classes */}
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
