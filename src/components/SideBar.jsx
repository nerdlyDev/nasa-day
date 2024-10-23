export default function SideBar(props) {
  // Destructure props to get handleToggleModel and data
  const { handleToggleModel, data } = props;

  return (
    <div className="sidebar">
      {/* Background overlay that closes the sidebar when clicked */}
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sidebarContents">
        {/* Display the title from the data prop */}
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          {/* Display the date from the data prop */}
          <p className="descriptionTitle">{data?.date}</p>
          {/* Display the explanation from the data prop */}
          <p>{data?.explanation}</p>
        </div>
        {/* Button to close the sidebar */}
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

{
  /*
  This SideBar component is responsible for rendering a sidebar in the project.
  It displays information passed through the data prop and includes a close functionality.
  The component affects the entire project by:
  1. Providing a way to show additional information in a sidebar layout
  2. Allowing users to toggle the sidebar's visibility
  3. Displaying dynamic content based on the data prop
*/
}
