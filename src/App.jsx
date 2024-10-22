import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModel, setShowModel] = useState(false);

  function handleToggleModel() {
    setShowModel(!showModel);
  }

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
  }, []);

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
