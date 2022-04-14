import React, { useState } from "react";
import "./buttons.css";
import AddPopUp from "../popups/AddPopUp";
import EditPopUp from "../popups/EditPopUp";
import {
  Button,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    backgroundColor: "#1d456ae2",
    color: "#fff",
  },
  dialogButton: {
    border: "1px solid rgba(255, 255, 255)",
    color: "#fff",
    width: "100%",
  },
  buttonWrapper: {
    border: "1px solid #4db5ff",
    color: "#fff",
    padding: "0 80px",
  },
}));

const Buttons = (props) => {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const handleOpenAdd = () => {
    setOpenAdd(true);
  }
  const handleAddClose = () => {
    setOpenAdd(false);
  }
  const handleOpenEdit = () => {
    setOpenEdit(true);
  }
  const handleEditClose = () => {
    setOpenEdit(false);
  }

  return (
    <ButtonGroup className="btn__container">
      <Button
        className={classes.buttonWrapper}
        variant="outlined"
        onClick={handleOpenAdd}
      >
        ADD
      </Button>
      <AddPopUp open={openAdd} handleClose={handleAddClose}/>
      <Button
        className={classes.buttonWrapper}
        variant="outlined"
        disabled = {props.currentRow == null ? true : false}
        onClick={handleOpenEdit}
    >
        EDIT
      </Button>
      <EditPopUp open={openEdit} handleClose={handleEditClose} rowData={props.currentRow}/>
     <Button
        className={classes.buttonWrapper}
        variant="outlined"
      >
        DELETE
      </Button>
</ButtonGroup>
  );
};

export default Buttons;
