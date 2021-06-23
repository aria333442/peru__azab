import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TreeItem from "@material-ui/lab/TreeItem";
import { Button, Checkbox } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../css/_sidebox.scss";
const useStyles = makeStyles({
  root: {
    Height: 240,
    flexGrow: 1,
    maxWidth: 100,
    flexDirection: "row-reverse",
  },
});

const SideBox = () => {
  const classes = useStyles();
  const [minimum, setminimum] = useState();
  const [maximum, setmaximum] = useState();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="sideBox">
      <div className="sideBox__top">
        <h2>Buscar</h2>
        <div>
          <input type="text" placeholder="¿Qué buscas?" />
          <SearchIcon></SearchIcon>
        </div>
      </div>
      <div className="sideBox__range">
        <h2>Rango de Precio</h2>
        <div>
          <div>
            <p>Mínimo</p>
            <div>
              <p>$</p>
              <input
                type="text"
                placeholder="549"
                value={minimum}
                onChange={(e) => setminimum(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Máximo</p>
            <div>
              <p>$</p>
              <input
                type="text"
                placeholder="549"
                value={maximum}
                onChange={(e) => setmaximum(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="h2">Categoría</h2>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
          defaultExpandIcon={<ExpandMoreIcon />}
        >
          <TreeItem nodeId="1" label="Muebles">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
          <TreeItem nodeId="2" label="Niños">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
          <TreeItem nodeId="3" label="Mascotas">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
          <TreeItem nodeId="4" label="Decoracion">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
        </TreeView>
      </div>
      <div className="sideBox__colorCheck">
        <h2 className="h2">Color</h2>
        <div>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <p>Todos</p>
        </div>
      </div>
    </div>
  );
};

export default SideBox;
