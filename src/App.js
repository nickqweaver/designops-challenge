import React, { useState } from "react";
import "./App.css";
// Users data here
import users from "./data/users.json";
import { ExpandedUserCard } from "./components/expandedCard/expandedUserCard";
import { Grid } from "./components/grid/grid";
import { Modal } from "./components/modal/modal";

function App() {
  const [activeUserIndex, setActiveUserIndex] = useState(-1);
  return (
    <div className="app">
      <Grid>
        {/* Map over users array and return a UserCard for each here (pass in the appropriate data)}*/}
      </Grid>
      {activeUserIndex > -1 && (
        <Modal onClose={() => setActiveUserIndex(-1)}>
          <ExpandedUserCard user={users[activeUserIndex]} />
        </Modal>
      )}
    </div>
  );
}

export default App;
