import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { IoMdRefresh } from "react-icons/io";
import "./button.css";

function Operations({
  selectionModel,
  handleClickDelete,
  handleClickOpen,
  handleAddOpen,
  handleAdvSearchopen,
  isSearch,
  handleSearchChange,
}) {
  const useButtonStyles = makeStyles((theme) => ({
    btngrp: {
      "& > *": {
        width: "100px",
        height: "40px",
        left: "400px",
      },
    },
    togglegrp: {
      "& > *": {
        width: "160px",
        height: "40px",
        left: "10px"
      },
    },
    root: {
      backgroundColor: "#fff",
      borderRadius: '0.4rem',
      marginLeft: "20px",
      height: "45px",
      color: '#fff',
      input: {
        height: "45px"
      }
    }
  }));

  const Buttonclasses = useButtonStyles();

  // Function for Refresh Button
  const referhpage = () => {
    window.location.reload(false);
  };

  return (
    <div className="btn_container">
      {/* Toggle Button Area */}
      <ToggleButtonGroup
        className={Buttonclasses.togglegrp}
        variant="contained"
        aria-label="toggle-btn-area"
      >
        <ToggleButton
          disabled={!selectionModel.length}
          sx={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            border: "1px solid #fff",
            color: '#fff',
            "&:hover": { backgroundColor: "#4db5ff" },
          }}
        >
          PREDICT
        </ToggleButton>
        <ToggleButton
          sx={{
            border: "1px solid #fff",
            color: '#fff',
            "&:hover": { backgroundColor: "#4db5ff" },

          }}
        >
          ANALYTICS VIEW
        </ToggleButton>
        <ToggleButton
          sx={{
            border: "1px solid #fff",
            color: '#fff',
            "&:hover": { backgroundColor: "#4db5ff" },
          }}
          onClick={handleAdvSearchopen}
        >
          ADVANCE SEARCH
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButton
          sx={{
            marginLeft: 5,
            borderRadius: '0.4rem',
            border: "1px solid #fff",
            "&:hover": { backgroundColor: "#4db5ff" },
          }}
          style={{ width: "5%" }}
          onClick={referhpage}
        >
          <IoMdRefresh style={{ color: "white", fontSize: 20 }} />
        </ToggleButton>

      {/* Search Field Area */}
      <TextField
        id="outlined-search"
        className={Buttonclasses.root}
        label="Search Consumer ID"
        type="numeric"
        value={isSearch}
        onChange={handleSearchChange}
      />
      {/* CRUD Button Area    */}
      <ButtonGroup
        className={Buttonclasses.btngrp}
        variant="outlined"
        aria-label="crud-operation-area"
      >
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #fff",
            color: '#fff',
            "&:hover": { backgroundColor: "#4db5ff" },
          }}
          onClick={handleAddOpen}
        >
          ADD
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #fff",
            color: '#fff',
            "&:hover": { backgroundColor: "#4db5ff" },
          }}
          disabled={!selectionModel.length}
          onClick={handleClickOpen}
        >
          EDIT
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #fff",
            color: '#fff',
            "&:hover": { backgroundColor: "#4db5ff" },
          }}
          disabled={!selectionModel.length}
          onClick={handleClickDelete}
        >
          DELETE
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Operations;
