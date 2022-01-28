import React from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Episode.css";

const Episode = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const { props } = state;
  const { data } = props; // Read values passed on state

  const { s, e } = useParams();
  console.log(data);

  const goToEpisode = (ev) => {
    let charcterName = ev.target.innerHTML;
    console.log(charcterName);
    navigate("/main/" + s + "/" + e + "/" + charcterName, {
      state: { charcterName },
    });
  };

  const charctersList = data.characters.map((item) => (
    <div onClick={goToEpisode} className="container" style={styles.charcter}>
      {item}
    </div>
  ));

  return (
    <>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.subHeader}>
            <span style={{ marginRight: 15, textDecoration: "underline" }}>
              Episode Name :
            </span>
            <span style={{ fontWeight: "bold" }}>{data.title}</span>
          </div>
          <div style={styles.subHeader}>
            <span style={{ marginRight: 15, textDecoration: "underline" }}>
              Aired on :
            </span>
            <span style={{ fontWeight: "bold" }}> {data.air_date}</span>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "bold", marginLeft: 10 }}>Charcters:</div>
          <div style={styles.charcters}> {charctersList}</div>
        </div>
        <div onClick={() => navigate(-1)} style={styles.back}>
          go Back
        </div>
      </div>
    </>
  );
};

let styles = {
  container: {
    height: "fit-content",
    backgroundColor: "rgb(168, 211, 166)",
    minWidth: 500,
    maxWidth: "70%",
    margin: "auto",
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    padding: 10,
    fontFamily: "roboto",
    borderRadius: 15,
    position: "relative",
  },
  header: {
    width: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: 20,
  },
  subHeader: { marginBottom: 5 },
  charcters: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "fit-content",
  },
  charcter: {
    margin: 10,
    backgroundColor: "rgb(95, 148, 93)",
    width: "fit-contect",
    height: "fit-contect",
    color: "#fff",
    borderRadius: 50,
    padding: 15,
  },
  back: {
    backgroundColor: "rgb(91 91 91)",
    width: 73,
    height: 28,
    color: "#fff",
    borderRadius: 10,
    padding: 5,
    diplay: "flex",
    textAlign: "center",
    fontSize: 15,
    margin: 2,
    position: "absolute",

    left: "45%",
    bottom: -37,
    cursor: "pointer",
  },
};

export default Episode;
