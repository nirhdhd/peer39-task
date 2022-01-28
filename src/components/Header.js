import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header
        onClick={() => {
          navigate("/main");
        }}
        style={styles.header}
      >
        <div style={styles.title}>
          <span style={styles.letterB}>Br</span>eaking{" "}
          <span style={styles.letterB}>Ba</span>d
        </div>
        <img
          style={{ height: 42, cursor: "pointer", }}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5Ny4zNjUgMzk3LjM2NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk3LjM2NSAzOTcuMzY1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNjY1QTUyOyIgZD0iTTI0OC4wMzgsMjIwLjMzNWMwLjE5LDAuMDUsMC4zOSwwLjA5LDAuNTgsMC4xNGMxMC40NiwyLjUzLDIwLjE5LDYuOTMsMjguODMsMTIuODENCgkJYzIzLjM5LDE1LjkyLDM4Ljc1LDQyLjc3LDM4Ljc1LDczLjE5djg0Ljg5aC00Ny4wNGgtMTQwLjk2aC00Ny4wM3YtODQuODljMC0zMC40MiwxNS4zNS01Ny4yNywzOC43NC03My4xOQ0KCQljOC42NC01Ljg4LDE4LjM3LTEwLjI4LDI4LjgzLTEyLjgxYzAuMTktMC4wNSwwLjM5LTAuMDksMC41OC0wLjE0Ii8+DQoJPGc+DQoJCTxnPg0KCQkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZEM0FFOyIgY3g9IjExOC4xMSIgY3k9IjEyNC4zNjUiIHI9IjI3Ljg5Ii8+DQoJCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkQzQUU7IiBjeD0iMjc5LjI0NSIgY3k9IjEyNC4zNjUiIHI9IjI3Ljg5Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTExOC4xMSwxNTguMjU1Yy0xOC42ODcsMC0zMy44OS0xNS4yMDMtMzMuODktMzMuODlzMTUuMjAzLTMzLjg5LDMzLjg5LTMzLjg5DQoJCQkJUzE1MiwxMDUuNjc4LDE1MiwxMjQuMzY1UzEzNi43OTcsMTU4LjI1NSwxMTguMTEsMTU4LjI1NXogTTExOC4xMSwxMDIuNDc1Yy0xMi4wNywwLTIxLjg5LDkuODItMjEuODksMjEuODkNCgkJCQlzOS44MiwyMS44OSwyMS44OSwyMS44OXMyMS44OS05LjgyLDIxLjg5LTIxLjg5QzE0MCwxMTIuMjk1LDEzMC4xODEsMTAyLjQ3NSwxMTguMTEsMTAyLjQ3NXoiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjc5LjI0NSwxNTguMjU1Yy0xOC42ODgsMC0zMy44OTEtMTUuMjAzLTMzLjg5MS0zMy44OXMxNS4yMDMtMzMuODksMzMuODkxLTMzLjg5DQoJCQkJYzE4LjY4NywwLDMzLjg5LDE1LjIwMywzMy44OSwzMy44OVMyOTcuOTMyLDE1OC4yNTUsMjc5LjI0NSwxNTguMjU1eiBNMjc5LjI0NSwxMDIuNDc1Yy0xMi4wNywwLTIxLjg5MSw5LjgyLTIxLjg5MSwyMS44OQ0KCQkJCXM5LjgyLDIxLjg5LDIxLjg5MSwyMS44OXMyMS44OS05LjgyLDIxLjg5LTIxLjg5QzMwMS4xMzUsMTEyLjI5NSwyOTEuMzE2LDEwMi40NzUsMjc5LjI0NSwxMDIuNDc1eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzQUU7IiBkPSJNMjQ4LjAzOCwyMjAuMzM1Yy0xNC4xLDkuNDktMzEuMDgsMTUuMDMtNDkuMzYsMTUuMDNzLTM1LjI2LTUuNTQtNDkuMzYtMTUuMDMNCgkJYy0wLjE5LTAuMTMtMC4zOS0wLjI2LTAuNTgtMC40Yy0yMy4yOC0xNS45NC0zOC41Ni00Mi43Mi0zOC41Ni03My4wN3YtMjIuNXYtNTEuNWMwLTQ4Ljg3NywxNzctNDguODc3LDE3NywwdjUxLjV2MjIuNQ0KCQljMCwzMC4zNS0xNS4yOCw1Ny4xMy0zOC41Niw3My4wN0MyNDguNDI4LDIyMC4wNzUsMjQ4LjIyOCwyMjAuMjA1LDI0OC4wMzgsMjIwLjMzNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNjY1QTUyOyIgZD0iTTEyOC4xOTgsMjY3LjM2NXYxMjRoLTQ3LjAzdi04NC44OWMwLTMwLjQyLDE1LjM1LTU3LjI3LDM4Ljc0LTczLjE5DQoJCUMxMjUuMjA4LDI0My40ODUsMTI4LjE5OCwyNTUuMDc1LDEyOC4xOTgsMjY3LjM2NXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNjY1QTUyOyIgZD0iTTMxNi4xOTgsMzA2LjQ3NXY4NC44OWgtNDcuMDR2LTEyNGMwLTEyLjI5LDIuOTktMjMuODgsOC4yOS0zNC4wOA0KCQlDMzAwLjgzOCwyNDkuMjA1LDMxNi4xOTgsMjc2LjA1NSwzMTYuMTk4LDMwNi40NzV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0xOTguNjc4LDI0MS4zN2MtMTguODgsMC0zNy4xMDctNS41NTEtNTIuNzEtMTYuMDUybC0wLjE2Ny0wLjExMw0KCQljLTAuMTc1LTAuMTE4LTAuMzUxLTAuMjM4LTAuNTI0LTAuMzYzYy0yNS43MzctMTcuNjU2LTQxLjA5OS00Ni43OTgtNDEuMDk5LTc3Ljk3MnYtNzRjMC0wLjI0OSwwLTAuNDk3LDAuMDA1LTAuNzQ2DQoJCWMtMC4wMjEtMC43MzIsMC4wODgtMS40NjMsMC4zMjctMi4xNjNsMTEuMzU2LDMuODc4YzAuMzY3LTEuMDc2LDAuNDE1LTIuMjIxLDAuMTM4LTMuMzE0YzAuMTQsMC41NTEsMC4yLDEuMTE5LDAuMTgsMS42ODgNCgkJYy0wLjAwOCwwLjIxOS0wLjAwNiwwLjQzOS0wLjAwNiwwLjY1OHY3NGMwLDI3LjI0MSwxMy40MzksNTIuNzA2LDM1Ljk1LDY4LjExOWMwLjA1NywwLjAzOSwwLjExMywwLjA3OSwwLjE2OCwwLjEyDQoJCWMwLjA2OCwwLjA1LDAuMTQsMC4wOTYsMC4yMSwwLjE0NGwwLjE5OSwwLjEzNWMxMy41NzksOS4xMzksMjkuNDg5LDEzLjk4Myw0NS45NzMsMTMuOTgzYzE2LjQ4NSwwLDMyLjM5NS00Ljg0NCw0Ni4wMDktMTQuMDA4DQoJCWwwLjE1Ny0wLjEwNmMwLjA2OS0wLjA0NywwLjE0Mi0wLjA5MywwLjIxLTAuMTQzYzAuMDU0LTAuMDQsMC4xMTgtMC4wODYsMC4xNzQtMC4xMjRjMjIuNTExLTE1LjQxMywzNS45NS00MC44NzgsMzUuOTUtNjguMTE5di03NA0KCQljMC0wLjIxNiwwLjAwMS0wLjQzMi0wLjAwNy0wLjY0OGMtMC4wMjEtMC41OTksMC4wNDYtMS4xOTgsMC4yMDEtMS43NzdjLTAuMzA0LDEuMTMxLTAuMjUyLDIuMzY1LDAuMTQ2LDMuNDc2bDExLjI5OS00LjA0Mg0KCQljMC4yNjEsMC43MywwLjM4LDEuNDkzLDAuMzU2LDIuMjU3YzAuMDA0LDAuMjQ1LDAuMDA1LDAuNDg5LDAuMDA1LDAuNzM0djc0YzAsMzEuMTcyLTE1LjM2Myw2MC4zMTQtNDEuMDk4LDc3Ljk3DQoJCWMtMC4xNzcsMC4xMjctMC4zNTcsMC4yNTEtMC41MzYsMC4zNzFsLTAuMTI2LDAuMDg1QzIzNS43ODYsMjM1LjgxOSwyMTcuNTU4LDI0MS4zNywxOTguNjc4LDI0MS4zN3oiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0yMTAuNjc4LDE5My42OTloLTI0Yy0zLjMxMywwLTYtMi42ODYtNi02czIuNjg3LTYsNi02aDI0YzMuMzEzLDAsNiwyLjY4Niw2LDYNCgkJCVMyMTMuOTkyLDE5My42OTksMjEwLjY3OCwxOTMuNjk5eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTIwMi44NzIsMTAwaC01MS4wNTZjLTMuMzEzLDAtNi0yLjY4Ni02LTZzMi42ODctNiw2LTZoNTEuMDU2YzMuMzEzLDAsNiwyLjY4Niw2LDYNCgkJCQlTMjA2LjE4NiwxMDAsMjAyLjg3MiwxMDB6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI0NS41MzksMTAwaC0yMGMtMy4zMTMsMC02LTIuNjg2LTYtNnMyLjY4Ny02LDYtNmgyMGMzLjMxMywwLDYsMi42ODYsNiw2DQoJCQkJUzI0OC44NTMsMTAwLDI0NS41MzksMTAweiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTIwNC4wNjgsMjEzaC0xMC43OGMtMy4zMTMsMC02LTIuNjg2LTYtNnMyLjY4Ny02LDYtNmgxMC43OGMzLjMxMywwLDYsMi42ODYsNiw2DQoJCQlTMjA3LjM4MSwyMTMsMjA0LjA2OCwyMTN6Ii8+DQoJPC9nPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjc1LjE1OCwzOTEuMzY1aC0xMnYtMTI0YzAtMTIuODE2LDMuMTAxLTI1LjU1OCw4Ljk2Ni0zNi44NDZsMTAuNjQ4LDUuNTMzDQoJCWMtNS4wNTMsOS43MjQtNy42MTQsMjAuMjU5LTcuNjE0LDMxLjMxNFYzOTEuMzY1eiIvPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjQ0O2ZpbGw6IzMzMzMzMztlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iTTEyNC44NDgsMjQ1LjI4NWMtMTUuMjEsMTUuODktMjQuNTYsMzcuNDUtMjQuNTYsNjEuMTkNCgkJCVYzOTBoLTE5LjEydi04My41MjVjMC0zMC40MiwxNS4zNS01Ny4yNywzOC43NC03My4xOUMxMjEuODg4LDIzNy4xMDUsMTIzLjU0OCwyNDEuMTE1LDEyNC44NDgsMjQ1LjI4NXoiLz4NCgk8L2c+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zMTYuMTk4LDM5Ny4zNjVIODEuMTY4Yy0zLjMxNCwwLTYtMi42ODYtNi02di04NC44OWMwLTMxLjMwNiwxNS40NjMtNjAuNTIxLDQxLjM2NC03OC4xNQ0KCQljOS40MTctNi40MDgsMTkuNzYyLTExLjAwOCwzMC43NTItMTMuNjcxYzAuMTI5LTAuMDMzLDAuMjYxLTAuMDY0LDAuMzkzLTAuMDk0bDAuMTItMC4wMjhsMy4wNSwxMS42MDYNCgkJYy0wLjE1NSwwLjA0MS0wLjMxNCwwLjA3OS0wLjQ3NCwwLjExNWwtMC4xMiwwLjAyOGMtMC4wMTcsMC4wMDQtMC4wODcsMC4wMjItMC4xMDQsMC4wMjZjLTkuNTk3LDIuMzIxLTE4LjYzNSw2LjMzOC0yNi44NjUsMTEuOTM4DQoJCWMtMjIuNjE0LDE1LjM5My0zNi4xMTUsNDAuODk5LTM2LjExNSw2OC4yM3Y3OC44OWgyMjMuMDN2LTc4Ljg5YzAtMjcuMzI2LTEzLjUwNS01Mi44MzMtMzYuMTI2LTY4LjIzDQoJCWMtOC4yMjktNS42LTE3LjI2OC05LjYxNy0yNi44NjQtMTEuOTM4Yy0wLjAzOS0wLjAwOS0wLjA3Ny0wLjAxOS0wLjExNS0wLjAyOWwtMC4xMTItMC4wMjZjLTAuMTU3LTAuMDM2LTAuMzE0LTAuMDczLTAuNDY4LTAuMTE0DQoJCWwzLjA0NC0xMS42MDhsMC4xMiwwLjAyOGMwLjEzNCwwLjAzMSwwLjI2NywwLjA2MiwwLjM5NywwLjA5NWMxMC45ODksMi42NjQsMjEuMzM1LDcuMjYzLDMwLjc1LDEzLjY3MQ0KCQljMjUuOTA3LDE3LjYzNCw0MS4zNzQsNDYuODQ5LDQxLjM3NCw3OC4xNXY4NC44OUMzMjIuMTk4LDM5NC42NzksMzE5LjUxMSwzOTcuMzY1LDMxNi4xOTgsMzk3LjM2NXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTEzNC4xOTgsMzkxLjM2NWgtMTJ2LTEyNGMwLTExLjA1NS0yLjU2Mi0yMS41OTEtNy42MTQtMzEuMzEzbDEwLjY0OC01LjUzMw0KCQljNS44NjUsMTEuMjg4LDguOTY2LDI0LjAyOSw4Ljk2NiwzNi44NDdWMzkxLjM2NXoiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zMzAuMTgzLDM5Ny4zNjVINjcuNDEzYy0zLjMxMywwLTYtMi42ODYtNi02czIuNjg3LTYsNi02aDI2Mi43N2MzLjMxMywwLDYsMi42ODYsNiw2DQoJCQlTMzMzLjQ5NiwzOTcuMzY1LDMzMC4xODMsMzk3LjM2NXoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNjIuMTgzLDM5Ny4zNjVoLTExYy0zLjMxMywwLTYtMi42ODYtNi02czIuNjg3LTYsNi02aDExYzMuMzEzLDAsNiwyLjY4Niw2LDYNCgkJCVMzNjUuNDk2LDM5Ny4zNjUsMzYyLjE4MywzOTcuMzY1eiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTQ2LjE4MiwzOTcuMzY1aC0xMWMtMy4zMTMsMC02LTIuNjg2LTYtNnMyLjY4Ny02LDYtNmgxMWMzLjMxMywwLDYsMi42ODYsNiw2DQoJCQlTNDkuNDk2LDM5Ny4zNjUsNDYuMTgyLDM5Ny4zNjV6Ii8+DQoJPC9nPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMzQwLjE3OCw3OGgtMjgzYy0zLjMxMywwLTYtMi42ODYtNi02czIuNjg3LTYsNi02aDI4M2MzLjMxMywwLDYsMi42ODYsNiw2UzM0My40OTIsNzgsMzQwLjE3OCw3OHoNCgkJIi8+DQoJPHBhdGggc3R5bGU9Im9wYWNpdHk6MC40NDtmaWxsOiMzMzMzMzM7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9Ik0xNDIuNDA3LDEyNC4zMzRjNS4wNzgtMC4yNTcsOS41NDMtMi4xODUsMTMuMDcyLTUuMTQ5DQoJCWwxMzEuNjk5LTIxLjU1OVY3MmwtMTM2LjExLTIybC01LjAzMywxNC44OTdjLTUuODMyLTE5LjUzMi0zNS44NTctNzkuNTMxLTM1Ljg1Nyw1OS40Njl2MjIuNWMwLDMwLjM1LDE1LjI4LDU3LjEzLDM4LjU2LDczLjA3DQoJCWMwLjE5LDAuMTQsMC4zOSwwLjI3LDAuNTgsMC40YzE0LjEsOS40OSwzMS4wOCwxNS4wMyw0OS4zNiwxNS4wM2M1LjI5LDAsMTAuNDctMC40NiwxNS41LTEuMzVjLTEyLjM2LTIuMTktMjMuODQtNi45NC0zMy44Ni0xMy42OA0KCQljLTAuMTktMC4xMy0wLjM5LTAuMjYtMC41OC0wLjRjLTIwLjI4NC0xMy44ODktMzQuNDktMzYuMDA4LTM3LjgxMi02MS41NDdsOTAuMTQyLTQuMDU1bDAuNjY3LTI4TDE2Mi40MDEsMTE5bC0yMS4xNDMsMzEuNDUxDQoJCWMtMC4wNDctMS4xOS0wLjA4LTIuMzg0LTAuMDgtMy41ODV2LTIyLjVDMTQxLjU5LDEyNC4zNjUsMTQyLDEyNC4zNTUsMTQyLjQwNywxMjQuMzM0eiIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NjVBNTI7IiBwb2ludHM9IjI3Ni4xMzcsNiAxMjEuMjE4LDYgMTEwLjE3OCw3MiAyODcuMTc4LDcyIAkiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0xOTEuNzM0LDE3NmMtMy4zMTMsMC02LTIuNjg2LTYtNnYtNDAuMzAxaC0zNC4zOWMtMy4zMTMsMC02LTIuNjg2LTYtNnMyLjY4Ny02LDYtNmg0MC4zOQ0KCQkJYzMuMzEzLDAsNiwyLjY4Niw2LDZWMTcwQzE5Ny43MzQsMTczLjMxNCwxOTUuMDQ4LDE3NiwxOTEuNzM0LDE3NnoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0yNDYuMDExLDEyOS42OTloLTI0Yy0zLjMxMywwLTYtMi42ODYtNi02czIuNjg3LTYsNi02aDI0YzMuMzEzLDAsNiwyLjY4Niw2LDYNCgkJCVMyNDkuMzI1LDEyOS42OTksMjQ2LjAxMSwxMjkuNjk5eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTE2OC4yMDUsMTUxSDE0Mi4xNWMtOC43NTUsMC0xNS44NTItNy4wOTctMTUuODUyLTE1Ljg1MlYxMTloNjQuNjY3bC03Ljg2NywyMS41NzgNCgkJCQlDMTgwLjgxNiwxNDYuODM2LDE3NC44NjYsMTUxLDE2OC4yMDUsMTUxeiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0yMjkuMTUxLDE1MWgyNi4wNTVjOC43NTUsMCwxNS44NTItNy4wOTcsMTUuODUyLTE1Ljg1MlYxMTloLTY0LjY2N2w3Ljg2NywyMS41NzgNCgkJCQlDMjE2LjUzOSwxNDYuODM2LDIyMi40OSwxNTEsMjI5LjE1MSwxNTF6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTE2OC4yMDUsMTU3aC0yNi4wNTZjLTEyLjA0OSwwLTIxLjg1Mi05LjgwMi0yMS44NTItMjEuODUyVjExOWMwLTMuMzE0LDIuNjg3LTYsNi02aDY0LjY2Nw0KCQkJCWMxLjk1OCwwLDMuNzkzLDAuOTU2LDQuOTE2LDIuNTZzMS4zOTIsMy42NTYsMC43MjEsNS40OTVsLTcuODY3LDIxLjU3OEMxODUuNjAyLDE1MS4yMjYsMTc3LjM1MiwxNTcsMTY4LjIwNSwxNTd6IE0xMzIuMjk4LDEyNQ0KCQkJCXYxMC4xNDhjMCw1LjQzMiw0LjQxOSw5Ljg1Miw5Ljg1Miw5Ljg1MmgyNi4wNTZjNC4xMjQsMCw3Ljg0My0yLjYwMyw5LjI1NS02LjQ3N2w0LjkzLTEzLjUyM0gxMzIuMjk4eiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0yNTUuMjA2LDE1N0gyMjkuMTVjLTkuMTQ2LDAtMTcuMzk3LTUuNzc0LTIwLjUyOS0xNC4zNjdsLTcuODY3LTIxLjU3OA0KCQkJCWMtMC42NzEtMS44NC0wLjQwMi0zLjg5MSwwLjcyMS01LjQ5NWMxLjEyMy0xLjYwNCwyLjk1OC0yLjU2LDQuOTE2LTIuNTZoNjQuNjY3YzMuMzEzLDAsNiwyLjY4Niw2LDZ2MTYuMTQ4DQoJCQkJQzI3Ny4wNTgsMTQ3LjE5OCwyNjcuMjU1LDE1NywyNTUuMjA2LDE1N3ogTTIxNC45NjUsMTI1bDQuOTMsMTMuNTIzYzEuNDEzLDMuODc0LDUuMTMyLDYuNDc3LDkuMjU2LDYuNDc3aDI2LjA1Ng0KCQkJCWM1LjQzMywwLDkuODUyLTQuNDE5LDkuODUyLTkuODUyVjEyNUgyMTQuOTY1eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjA2LjM5MSwxMjVoLTE1LjQyNmMtMy4zMTMsMC02LTIuNjg2LTYtNnMyLjY4Ny02LDYtNmgxNS40MjZjMy4zMTMsMCw2LDIuNjg2LDYsNg0KCQlTMjA5LjcwNCwxMjUsMjA2LjM5MSwxMjV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0yNzEuMDYzLDEyNS4wMDFjLTIuMjA4LDAtNC4zMzItMS4yMjMtNS4zOC0zLjMzNGMtMS40NzMtMi45NjgtMC4yNjEtNi41NjksMi43MDgtOC4wNDJsMTYuMTItOA0KCQljMi45NjktMS40NzQsNi41NjktMC4yNiw4LjA0MiwyLjcwN2MxLjQ3MywyLjk2OCwwLjI2MSw2LjU2OS0yLjcwOCw4LjA0MmwtMTYuMTIsOEMyNzIuODY5LDEyNC44LDI3MS45NTgsMTI1LjAwMSwyNzEuMDYzLDEyNS4wMDENCgkJeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMTI2LjI5MywxMjUuMDAxYy0wLjg5NiwwLTEuODA2LTAuMjAxLTIuNjYzLTAuNjI3bC0xNi4xMi04Yy0yLjk2OC0xLjQ3My00LjE4LTUuMDczLTIuNzA3LTguMDQyDQoJCWMxLjQ3NC0yLjk2OSw1LjA3My00LjE4LDguMDQyLTIuNzA3bDE2LjEyLDhjMi45NjgsMS40NzMsNC4xOCw1LjA3MywyLjcwNyw4LjA0MkMxMzAuNjI0LDEyMy43NzgsMTI4LjUsMTI1LjAwMSwxMjYuMjkzLDEyNS4wMDF6Ig0KCQkvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjYyLjA2OCwxNDVjLTMuMzEzLDAtNi0yLjY4Ni02LTZ2LTEwLjU3MWMwLTMuMzE0LDIuNjg3LTYsNi02czYsMi42ODYsNiw2VjEzOQ0KCQlDMjY4LjA2OCwxNDIuMzE0LDI2NS4zODEsMTQ1LDI2Mi4wNjgsMTQ1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTc1LjA2OCwxNDVjLTMuMzEzLDAtNi0yLjY4Ni02LTZ2LTEwLjU3MWMwLTMuMzE0LDIuNjg3LTYsNi02czYsMi42ODYsNiw2VjEzOQ0KCQlDMTgxLjA2OCwxNDIuMzE0LDE3OC4zODEsMTQ1LDE3NS4wNjgsMTQ1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjI4LjQyOCwyMzYuMjRjLTMuMzEzLDAtNi0yLjY4Ni02LTZ2LTQ3LjE1N2MwLTMuOTA2LTMuMTc4LTcuMDgzLTcuMDg0LTcuMDgzaC0zMy4zMzMNCgkJYy0zLjkwNiwwLTcuMDgzLDMuMTc3LTcuMDgzLDcuMDgzdjQ3LjE1N2MwLDMuMzE0LTIuNjg3LDYtNiw2cy02LTIuNjg2LTYtNnYtNDcuMTU3YzAtMTAuNTIyLDguNTYxLTE5LjA4MywxOS4wODMtMTkuMDgzaDMzLjMzMw0KCQljMTAuNTIyLDAsMTkuMDg0LDguNTYxLDE5LjA4NCwxOS4wODN2NDcuMTU3QzIzNC40MjgsMjMzLjU1NCwyMzEuNzQyLDIzNi4yNCwyMjguNDI4LDIzNi4yNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTE2OC4wNjksMjc4LjVjLTEuNDM0LDAtMi44NTEtMC41MTQtMy45NjktMS40OTljLTEuMTE5LTAuOTg3LTI3LjM5MS0yNC41MjQtMjUuNjM1LTU1LjcwNw0KCQlsMTEuOTgxLDAuNjc0Yy0wLjg5LDE1Ljc5OSw3LjY2OSwyOS43NDQsMTQuMjc2LDM4LjAzN2M3Ljc5NS0xOC4xOTksMzAuMTUzLTI5LjQ0OCwzMS4yOTctMzAuMDE0YzEuNjc2LTAuODI4LDMuNjQyLTAuODI4LDUuMzE3LDANCgkJYzEuMTQ0LDAuNTY1LDIzLjUwMiwxMS44MTUsMzEuMjk3LDMwLjAxNGM2LjYwNS04LjI5LDE1LjE2Ni0yMi4yMzYsMTQuMjc2LTM4LjAzN2wxMS45OC0wLjY3NQ0KCQljMS43NTYsMzEuMTgzLTI0LjUxNiw1NC43Mi0yNS42MzUsNTUuNzA3Yy0xLjc3MSwxLjU2LTQuMjg5LDEuOTM4LTYuNDM3LDAuOTY4Yy0yLjE0OS0wLjk3LTMuNTMxLTMuMTEtMy41MzEtNS40NjkNCgkJYzAtMTMuMzk4LTE1Ljg3OC0yNS4yOTgtMjQuNjEtMzAuMzE4Yy04LjcyNyw1LjAxNy0yNC42MDksMTYuOTE4LTI0LjYwOSwzMC4zMThjMCwyLjM1OC0xLjM4MSw0LjQ5OC0zLjUzMSw1LjQ2OQ0KCQlDMTY5Ljc0NSwyNzguMzI2LDE2OC45MDQsMjc4LjUsMTY4LjA2OSwyNzguNXoiLz4NCgk8cmVjdCB4PSIxOTIuNjgyIiB5PSIyMzUuMzciIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiB3aWR0aD0iMTIiIGhlaWdodD0iMTU1Ljk5NiIvPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMTgwLjA3OCwzMDUuMTU0Yy0wLjM5LDAtMC43OS0wLjA0LTEuMTctMC4xMWMtMC4zOC0wLjA4LTAuNzYtMC4yLTEuMTItMC4zNQ0KCQkJCWMtMC4zNy0wLjE1LTAuNzEtMC4zMy0xLjA0LTAuNTVjLTAuMzMtMC4yMi0wLjY0LTAuNDctMC45MS0wLjc0Yy0wLjI4LTAuMjgtMC41My0wLjU5LTAuNzUtMC45MmMtMC4yMi0wLjMyLTAuNC0wLjY3LTAuNTUtMS4wMw0KCQkJCWMtMC4xNS0wLjM2LTAuMjctMC43NC0wLjM0LTEuMTJjLTAuMDgtMC4zOS0wLjEyLTAuNzktMC4xMi0xLjE4YzAtMC4zOSwwLjA0LTAuNzgsMC4xMi0xLjE3YzAuMDctMC4zOCwwLjE5LTAuNzYsMC4zNC0xLjEyDQoJCQkJczAuMzMtMC43MSwwLjU1LTEuMDRjMC4yMi0wLjMzLDAuNDctMC42MywwLjc1LTAuOTFjMC4yNy0wLjI4LDAuNTgtMC41MywwLjkxLTAuNzVjMC4zMy0wLjIxLDAuNjctMC40LDEuMDQtMC41NQ0KCQkJCWMwLjM2LTAuMTUsMC43NC0wLjI2LDEuMTItMC4zNGMxLjk1LTAuMzksNC4wMiwwLjI1LDUuNDEsMS42NGMwLjI4LDAuMjgsMC41MywwLjU4LDAuNzUsMC45MWMwLjIyLDAuMzMsMC40LDAuNjgsMC41NSwxLjA0DQoJCQkJYzAuMTUsMC4zNiwwLjI3LDAuNzQsMC4zNCwxLjEyYzAuMDgsMC4zOSwwLjEyLDAuNzgsMC4xMiwxLjE3cy0wLjA0LDAuNzktMC4xMiwxLjE4Yy0wLjA3LDAuMzgtMC4xOSwwLjc2LTAuMzQsMS4xMg0KCQkJCXMtMC4zMywwLjcxLTAuNTUsMS4wM2MtMC4yMiwwLjMzLTAuNDcsMC42NC0wLjc1LDAuOTJDMTgzLjIwOCwzMDQuNTE1LDE4MS42NTgsMzA1LjE1NCwxODAuMDc4LDMwNS4xNTR6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTE4MC4wNzgsMzcwLjcwNGMtMC4zOSwwLTAuNzktMC4wNC0xLjE3LTAuMTFjLTAuMzgtMC4wOC0wLjc2LTAuMi0xLjEyLTAuMzUNCgkJCQljLTAuMzctMC4xNS0wLjcxLTAuMzMtMS4wNC0wLjU1Yy0wLjMzLTAuMjItMC42NC0wLjQ3LTAuOTEtMC43NGMtMC4yOC0wLjI4LTAuNTMtMC41OS0wLjc1LTAuOTJjLTAuMjItMC4zMi0wLjQtMC42Ny0wLjU1LTEuMDMNCgkJCQljLTAuMTUtMC4zNi0wLjI3LTAuNzQtMC4zNC0xLjEyYy0wLjA4LTAuMzktMC4xMi0wLjc5LTAuMTItMS4xOGMwLTAuMzksMC4wNC0wLjc4LDAuMTItMS4xN2MwLjA3LTAuMzgsMC4xOS0wLjc2LDAuMzQtMS4xMg0KCQkJCXMwLjMzLTAuNzEsMC41NS0xLjA0YzAuMjItMC4zMywwLjQ3LTAuNjMsMC43NS0wLjkxYzAuMjctMC4yOCwwLjU4LTAuNTMsMC45MS0wLjc1YzAuMzMtMC4yMSwwLjY3LTAuNCwxLjA0LTAuNTUNCgkJCQljMC4zNi0wLjE1LDAuNzQtMC4yNiwxLjEyLTAuMzRjMS45NS0wLjM5LDQuMDIsMC4yNSw1LjQxLDEuNjRjMC4yOCwwLjI4LDAuNTMsMC41OCwwLjc1LDAuOTFjMC4yMiwwLjMzLDAuNCwwLjY4LDAuNTUsMS4wNA0KCQkJCWMwLjE1LDAuMzYsMC4yNywwLjc0LDAuMzQsMS4xMmMwLjA4LDAuMzksMC4xMiwwLjc4LDAuMTIsMS4xN3MtMC4wNCwwLjc5LTAuMTIsMS4xOGMtMC4wNywwLjM4LTAuMTksMC43Ni0wLjM0LDEuMTINCgkJCQlzLTAuMzMsMC43MS0wLjU1LDEuMDNjLTAuMjIsMC4zMy0wLjQ3LDAuNjQtMC43NSwwLjkyQzE4My4yMDgsMzcwLjA2NCwxODEuNjU4LDM3MC43MDQsMTgwLjA3OCwzNzAuNzA0eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0xODAuMDc4LDMzNy45MjljLTAuMzksMC0wLjc5LTAuMDQtMS4xNy0wLjExYy0wLjM4LTAuMDgtMC43Ni0wLjItMS4xMi0wLjM1DQoJCQkJYy0wLjM3LTAuMTUtMC43MS0wLjMzLTEuMDQtMC41NWMtMC4zMy0wLjIyLTAuNjQtMC40Ny0wLjkxLTAuNzRjLTAuMjgtMC4yOC0wLjUzLTAuNTktMC43NS0wLjkyYy0wLjIyLTAuMzItMC40LTAuNjctMC41NS0xLjAzDQoJCQkJYy0wLjE1LTAuMzYtMC4yNy0wLjc0LTAuMzQtMS4xMmMtMC4wOC0wLjM5LTAuMTItMC43OS0wLjEyLTEuMThjMC0wLjM5LDAuMDQtMC43OCwwLjEyLTEuMTdjMC4wNy0wLjM4LDAuMTktMC43NiwwLjM0LTEuMTINCgkJCQlzMC4zMy0wLjcxLDAuNTUtMS4wNGMwLjIyLTAuMzMsMC40Ny0wLjYzLDAuNzUtMC45MWMwLjI3LTAuMjgsMC41OC0wLjUzLDAuOTEtMC43NWMwLjMzLTAuMjEsMC42Ny0wLjQsMS4wNC0wLjU1DQoJCQkJYzAuMzYtMC4xNSwwLjc0LTAuMjYsMS4xMi0wLjM0YzEuOTUtMC4zOSw0LjAyLDAuMjUsNS40MSwxLjY0YzAuMjgsMC4yOCwwLjUzLDAuNTgsMC43NSwwLjkxYzAuMjIsMC4zMywwLjQsMC42OCwwLjU1LDEuMDQNCgkJCQljMC4xNSwwLjM2LDAuMjcsMC43NCwwLjM0LDEuMTJjMC4wOCwwLjM5LDAuMTIsMC43OCwwLjEyLDEuMTdzLTAuMDQsMC43OS0wLjEyLDEuMThjLTAuMDcsMC4zOC0wLjE5LDAuNzYtMC4zNCwxLjEyDQoJCQkJcy0wLjMzLDAuNzEtMC41NSwxLjAzYy0wLjIyLDAuMzMtMC40NywwLjY0LTAuNzUsMC45MkMxODMuMjA4LDMzNy4yODksMTgxLjY1OCwzMzcuOTI5LDE4MC4wNzgsMzM3LjkyOXoiLz4NCgkJPC9nPg0KCTwvZz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI1Mi40MDEsMzEzLjMzM2gtMjhjLTMuMzEzLDAtNi0yLjY4Ni02LTZzMi42ODctNiw2LTZoMjhjMy4zMTMsMCw2LDIuNjg2LDYsNg0KCQlTMjU1LjcxNCwzMTMuMzMzLDI1Mi40MDEsMzEzLjMzM3oiLz4NCgk8cG9seWdvbiBzdHlsZT0ib3BhY2l0eTowLjQ0O2ZpbGw6IzMzMzMzMztlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgcG9pbnRzPSIyODMuMjI4LDQ4LjM5IDI4Ny4xNzgsNzIgMTEwLjE3OCw3MiAxMTQuMTI4LDQ4LjQgDQoJCTI4My4xNzgsNDguNCAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0yODMuMTc4LDU0LjRoLTE2OS4wNWMtMy4zMTMsMC02LTIuNjg2LTYtNnMyLjY4Ny02LDYtNmgxNjkuMDVjMy4zMTMsMCw2LDIuNjg2LDYsNg0KCQlTMjg2LjQ5Miw1NC40LDI4My4xNzgsNTQuNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI2MS43MjMsNDEuNDQ3Yy0yLjg3OSwwLTUuNDItMi4wNzgtNS45MTEtNS4wMTFsLTMuMDM4LTE4LjE2MQ0KCQljLTAuNTQ3LTMuMjY4LDEuNjYtNi4zNjEsNC45MjgtNi45MDhjMy4yNzEtMC41NSw2LjM2LDEuNjYsNi45MDgsNC45MjhsMy4wMzgsMTguMTYxYzAuNTQ3LDMuMjY4LTEuNjYsNi4zNjEtNC45MjgsNi45MDgNCgkJQzI2Mi4zODUsNDEuNDE5LDI2Mi4wNTEsNDEuNDQ3LDI2MS43MjMsNDEuNDQ3eiIvPg0KCTxwb2x5Z29uIHN0eWxlPSJvcGFjaXR5OjAuNDQ7ZmlsbDojMzMzMzMzO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBwb2ludHM9IjE1NS4yMTgsNiAxNDQuMTc4LDcyIDExMC4xNzgsNzIgMTIxLjIxOCw2IAkiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI4Ny4xNzgsNzhoLTE3N2MtMS43NjUsMC0zLjQzOS0wLjc3Ny00LjU4LTIuMTIzYy0xLjE0LTEuMzQ3LTEuNjI5LTMuMTI3LTEuMzM4LTQuODY3bDExLjA0LTY2DQoJCWMwLjQ4NC0yLjg5MiwyLjk4Ni01LjAxLDUuOTE4LTUuMDFoMTU0LjkyYzIuOTMyLDAsNS40MzUsMi4xMTksNS45MTgsNS4wMWwxMS4wNCw2NmMwLjI5MSwxLjc0LTAuMTk4LDMuNTItMS4zMzksNC44NjcNCgkJQzI5MC42MTgsNzcuMjIzLDI4OC45NDMsNzgsMjg3LjE3OCw3OHogTTExNy4yNjYsNjZoMTYyLjgyNmwtMi43ODEtMTYuNjJsMCwwTDI3MS4wNTgsMTJoLTE0NC43NkwxMTcuMjY2LDY2eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
        />
      </header>
    </>
  );
};

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    //boxShadow: "1px 3px 1px #9E9E9E",
    shadowColor: "#52006A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    marginLeft: 50,
    marginRight: 10,
    fontSize: 20,
    cursor: "pointer",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    backgroundColor: "#5f945d",
    width: "100%",
    height: 45,
    paddingRight: 20,
    alignItems: "center",
    color: "#fff",
   
  },
  letterB: {
    backgroundColor: "#146356",
    padding: 3,
  },
};

export default Header;