import "./App.css";
import NavBar from "../NavBar/NavBar";
import Button from "../UI/Button/Button";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import useActivities from "../../hooks/useActivities/useActivities";
import { Activity } from "../../types";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_TYPE } from "../../constants/default_values";

function App() {
  const [searchParams] = useSearchParams();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const type = searchParams.get("type") ?? DEFAULT_TYPE;
  const { getActivities } = useActivities();

  useEffect(() => {
    getActivities(type)
      .then((activity) => {
        setActivity(activity);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
        setError("Failed to fetch activities. Please try again.");
      });
  }, [getActivities, type]);

  const handleGenerate = () => {
    getActivities(type)
      .then((activity) => {
        setActivity(activity);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
        setError("Failed to fetch activities. Please try again.");
      });
  };

  return (
    <>
      <Header />
      <div className="content-container">
        <div className="left-content">
          <NavBar />
          <img
            src="/puppet.webp"
            alt="mascot of boored"
            width="167px"
            height="181px"
          />
          <div className="text-container">
            <h2 className="title">Trova alguna cosa a fer</h2>
            <Button variant="dark" onClick={handleGenerate}>
              Generate
            </Button>
            {error && <p className="error">{error}</p>}
          </div>
        </div>

        <div className="right-content">
          <h2 className="title">Activity:</h2>
          <p className="description">{activity?.activity}</p>
        </div>
      </div>
    </>
  );
}

export default App;
