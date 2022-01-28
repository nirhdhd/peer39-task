import React from "react";
import { useNavigate } from "react-router-dom";

const EpisodeItem = (props) => {
  const navigate = useNavigate();
  let { id, title, air_date, episode, season } = props.data;

  const goToEpisode = () => {
    navigate("/main/" + season + "/" + episode, { state: { props } });
    //props.history.push("/main/" + season + "/", { props });
  };

  return (
    <>
      <div key={id} style={styles.container}>
        <div style={styles.episode}>{episode}</div>
        <div style={styles.subcontainer}>
          <div
            onClick={goToEpisode}
            style={{ fontWeight: "bold", margin: 2, cursor: "pointer" }}
          >
            {title}
          </div>
          <div style={{ margin: 3, fontSize: 10 }}>{air_date}</div>
        </div>
      </div>
    </>
  );
};

let styles = {
  container: {
    width: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    padding: 20,
    height: 60,
    margin: 5,
    boxSizing: "border-box",
    padding: 0,
    backgroundColor: "#a8d3a6",
    borderRadius: 5,
    overflow: "hidden",
    fontFamily: "roboto",
    fontSize: 13,
    ///boxShadow: "1px 3px 1px #9E9E9E",
  },
  episode: {
    display: "flex",
    justifyContent: "center",
    fontSize: 15,
    alignItems: "center",
    backgroundColor: "#4444",
    width: 25,
    height: "100%",
    marginRight: 10,
  },
  subcontainer: {
    display: "flex",
    flexDirection: "column",
    fontSize: 12,
  },
};

export default EpisodeItem;
