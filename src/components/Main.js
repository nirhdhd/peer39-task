import React, { useEffect, useState } from "react";
import EpisodeItem from "./EpisodeItem";
import Loader from "./Loader";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const Main = () => {
  let itemList = [];
  let [isLoaded, setIsLoaded] = useState(true);
  const [seasonsData, setSeasonsData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      ///let response = await fetch("api/data");
      let response = await fetch(
        "https://www.breakingbadapi.com/api/episodes",
        requestOptions
      )
        .then((response) => {
          setIsLoaded(false);
          return response.json();
        })
        .then((result) =>
          result.filter((item) => item.series == "Breaking Bad")
        );
      setSeasonsData(response);
      //console.log(seasonsData);
    }
    fetchMyAPI();
  }, []);

  for (let i = 1; i < 6; i++) {
    itemList.push(
      <div key={i} style={styles.season}>
        <div style={styles.h2}>Season {i} </div>
        {seasonsData.map((item) => {
          if (item.season === i.toString()) return <EpisodeItem data={item} />;
        })}
      </div>
    );
  }

  let component;
  if (isLoaded) {
    component = <Loader />;
  } else {
    component = (
      <div style={styles.container}>
        <div style={styles.seasons}>{itemList}</div>
      </div>
    );
  }

  return <>{component}</>;
};

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    marginLeft: 50,
    marginRight: 10,
    fontSize: 35,
  },
  h2: {
    color: "#146356",
    fontSize: 20,
  },
  seasons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    margin: "auto",
    marginTop: 20,
    width: "80%",
    minWidth: 828,
  },
  season: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    width: 110,
    alignItems: "center",
  },
};

export default Main;
