import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "@mui/material";
const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?page=1&pageSize=30")
      .then((response) => {
        setUser(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section
        style={{ display: "flex", flexWrap: "wrap", backgroundColor: "cyan" }}
      >
        {user &&
          user.map((use) => {
            return (
              <>
                <div style={{ margin: "auto", marginTop: 5 }}>
                  <img src={use.images.small} alt="not found" />
                  <h3 key={use.id + use.name}>{use.name}</h3>
                  <p>Attacks:{use.attacks.name}</p>
                  <p>Abilities: N/A</p>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default App;
