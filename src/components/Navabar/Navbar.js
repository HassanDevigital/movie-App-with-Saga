import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 20,
    width: 150,
    marginRight: 30,
  },

  root: {
    flexGrow: 1,
    top: 0,
    width: "100%",
    marginBottom: 10,
    position: "fixed",
    zIndex: 1,
  },

  title: {
    flexGrow: 1,
    display: "none",
    fontSize: "20px",
    fontStyle: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(35),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  navhieht: {
    height: "1ch",

    paddingBottom: 65,
  },
  link: {
    color: "white",
    textAlign: "center",
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navhieht} position="static">
        <Toolbar>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="show" />
          </Link>

          <Typography className={classes.title} variant="p" noWrap>
            <Link className={classes.link} to="/upcomming">
              Upcommings
            </Link>
          </Typography>
          <Typography className={classes.title} variant="p" noWrap>
            <Link className={classes.link} to="/trending">
              Trendings
            </Link>
          </Typography>
          <Typography className={classes.title} variant="p" noWrap>
            <Link className={classes.link} to="/tvshows">
              TV Shows
            </Link>
          </Typography>
          <Typography className={classes.title} variant="p" noWrap>
            <Link className={classes.link} to="/people">
              People
            </Link>
          </Typography>
          <Link className={classes.link} to="/search">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
