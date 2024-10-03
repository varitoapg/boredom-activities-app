import "./App.css";
import Header from "../Header/Header";
import ActivityGenerator from "../ActivityGenerator/ActivityGenerator";
import ActivityDisplay from "../ActivityDisplay/ActivityDisplay";
import useActivity from "../../hooks/useActivity/useActivity";

function App() {
  const { activity, error, loading, fetchActivity } = useActivity();

  return (
    <>
      <Header />
      <div className="content-container">
        <ActivityGenerator
          fetchActivity={fetchActivity}
          loading={loading}
          error={error}
        />
        <ActivityDisplay activity={activity} />
      </div>
    </>
  );
}

export default App;
