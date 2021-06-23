import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import { logO } from "../actions/login";
import { useDispatch } from "react-redux";

function Drarwer() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const handlesignout = () => {
    dispatch(logO()).then((res) => {
      window.location.reload();
    });
  };

  const useStyles = makeStyles({
    list: {
      width: 200,
      backgroundColor: "#ff6606",
      color: "white",
      height: "100%",
    },
    fullList: {
      width: "auto",
    },
  });

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <div className="d-flex m-0 p-0" style={{ width: "100%" }}>
            <ul className="gggcsses mr-auto">
              <li className="mb-4 mt-3">
                <NavLink to="/" className="gggcss">
                  Inicio
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/shop" className="gggcss">
                  Tienda
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/about" className="gggcss">
                  Nosotros
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/contact" className="gggcss">
                  Contacto
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/blog" className="gggcss">
                  Blog
                </NavLink>
              </li>
              {token ? (
                <li>
                  <NavLink to="#" onClick={handlesignout}>
                    Cerrar sesión
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="mt-3">
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {anchor}
            {
              <div className="make__ham">
                <p className="line__1"></p>
                <p className="line__2"></p>
                <p className="line__3"></p>
              </div>
            }
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Drarwer;
