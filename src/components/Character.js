import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const Character = () => {
  const navigate = useNavigate();
  const { s, e, c } = useParams();

  let [isLoaded, setIsLoaded] = useState(true);
  let [occupation, setoccupation] = useState("");
  let [dialogOpen, setDialogOpen] = useState(false);
  const [charcterData, setCharcterData] = useState("");
  let component;

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://breakingbadapi.com/api/characters?name=" + c,
        requestOptions
      )
        .then((res) => {
          setIsLoaded(false);

          return res.json();
        })
        .then((val) => {
          if (val[0] !== undefined) {
            setCharcterData(val[0]);
            setoccupation(
              val[0].occupation.map((item) => (
                <div style={styles.occ}>{item}</div>
              ))
            );
          } else {
            setDialogOpen(true);
            setTimeout(() => {
              navigate("/main");
            }, 2000);
          }
        });
    }
    fetchMyAPI();
  }, []);

  console.log("charcterData: ", charcterData);

  const handleClose = () => {
    navigate("/");
  };

  if (isLoaded) {
    component = <Loader />;
  } else {
    component = (
      <div style={styles.container}>
        <Dialog
          open={dialogOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"server Error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Sorry but there is no information about the player
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <span>{<img style={styles.img} src={charcterData.img} />}</span>
        <span>
          <div style={styles.mf}>
            <h3 style={styles.field}>Name: </h3>
            {charcterData.name}
          </div>
          <div style={styles.mf}>
            <h3 style={styles.field}>nickname: </h3>
            {charcterData.nickname}
          </div>
          <div style={styles.mf}>
            {" "}
            <h3 style={styles.field}>birthday: </h3>
            {charcterData.birthday}
          </div>
          <div style={styles.mf}>
            {" "}
            <h3 style={styles.field}>status: </h3>
            {charcterData.status}
          </div>
          <h3 style={styles.field}>occupation: </h3>
          {occupation}
        </span>
        <div onClick={() => navigate(-1)} style={styles.back}>
          go Back
        </div>
      </div>
    );
  }

  return <>{component}</>;
};

let styles = {
  container: {
    height: "fit-contect",
    backgroundColor: "rgb(168, 211, 166)",
    minWidth: 500,
    maxWidth: "70%",
    margin: "auto",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
    padding: 10,
    fontFamily: "roboto",
    borderRadius: 15,
    fontSize: 20,
    position: "relative",
  },
  img: {
    height: 295,
    marginRight: 25,
  },
  field: {
    fontSize: 20,
    marginRight: 5,
  },
  mf: { display: "flex", marginBottom: 10 },
  occ: {
    backgroundColor: "rgb(95, 148, 93)",
    width: "auto",
    height: "fit-contect",
    color: "#fff",
    borderRadius: 50,
    padding: 5,
    diplay: "flex",
    textAlign: "center",
    fontSize: 15,
    margin: 5,
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

export default Character;
