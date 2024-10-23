//Block 1
// This block imports necessary dependencies and components:
// - useEffect and useState are React hooks for managing side effects and state
// - SideBar, Main, and Footer are custom components used in the app
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

//Block 2
// This block defines the main App component and initializes state variables:
// - data: stores the NASA APOD data fetched from the API
// - NASA_KEY: retrieves the NASA API key from environment variables
// - showModel: controls the visibility of the SideBar component
export default function App() {
  const [data, setData] = useState(null);
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModel, setShowModel] = useState(false);

  //Block 3
  // This function toggles the showModel state:
  // - It's used to show/hide the SideBar component when called
  function handleToggleModel() {
    setShowModel(!showModel);
  }

  //Block 4
  // This useEffect hook manages the data fetching process:
  // - It runs once when the component mounts (empty dependency array)
  // - Constructs the API URL using the NASA_KEY
  // - Checks local storage for cached data using the current date as a key
  // - If cached data exists, it's used instead of making an API call
  // - If no cached data, it fetches data from the NASA API
  // - Stores the fetched data in local storage and updates the data state
  // - Handles errors and logs them to the console
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localkey = `NASA-${today}`;
      if (localStorage.getItem(localkey)) {
        const apiData = JSON.parse(localStorage.getItem(localkey));
        setData(apiData);
        console.log("Fetching from local storage cache");
        return;
      }
      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localkey, JSON.stringify(apiData));
        setData(apiData);
        console.log(`DATA\n`, apiData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [NASA_KEY]); // Adding NASA_KEY to dependency array ensures useEffect re-runs if API key changes
  // This helps maintain data consistency if the key is updated during runtime

  //Block 5
  // This block returns the JSX for rendering the app:
  // - Conditionally renders either the Main component or a loading indicator
  // - Renders the SideBar component when showModel is true
  // - Renders the Footer component when data is available
  // - Passes necessary props (data and handleToggleModel) to child components//Block 1
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && (
        <SideBar data={data} handleToggleModel={handleToggleModel} />
      )}
      {data && <Footer data={data} handleToggleModel={handleToggleModel} />}
    </>
  );
}
