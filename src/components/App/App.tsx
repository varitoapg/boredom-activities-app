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
  const [type, setType] = useState<string>(
    searchParams.get("type") ?? DEFAULT_TYPE,
  );
  const { getActivities } = useActivities();

  useEffect(() => {
    const newType = searchParams.get("type") ?? DEFAULT_TYPE;

    if (newType !== type) {
      setType(newType);
    }
  }, [searchParams, type]);

  useEffect(() => {
    getActivities(type)
      .then((activities) => {
        setActivity(activities[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [getActivities, type]);

  const handleGenerate = async () => {
    getActivities()
      .then((activities) => {
        setActivity(activities[0]);
      })
      .catch((error) => {
        console.error(error);
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
            <Button variant="dark" onClick={() => handleGenerate()}>
              Generate
            </Button>
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
