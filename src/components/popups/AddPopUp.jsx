import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  MuiDialogContentRoot: {
    display: 'Grid',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: '30px',
    rowGap: '20px',
  },
  MuiOutlinedInputRoot: {
    backgroundColor: '#fff'
  },
  MuiFormControlRoot:{
    backgroundColor: '#fff'
  }
})

export default function AddPopUp({isAdd,handleAddClose,handleAdd,handleChangebuss,handleChangeslno,useSl,useBuss,usePosting,
  useClear,useDoc,useDue,useBase,setPosting,setClear,setDoc,setDue,setBase,useBusCode,handleBusCode,useCustNo,handleCustNo,
  useDocID,useInvID,useCPT,useTOA,usePostId,useDocType,useInvCur,handleInvID,handleCPT,handleTOA,handlePostID,
  handleDocType,handleDocID,handleInvCur}) {  
    const classes = useStyles(); 
    return (
    <div>
      <Dialog 
        open={isAdd}
        onClose={handleAddClose}
        PaperProps={{
          style: {
            backgroundColor: "#1d456ae2",
            boxShadow: 'none',
            minHeight: '50vh',
            maxHeight: '65vh',
            minWidth: '80vh',
            maxWidth: '132vh',
          }
        }}
      >
        <DialogTitle>
          <span style={{ color: "white" }}>{"ADD"}</span>
        </DialogTitle>
        <DialogContent className={classes.MuiDialogContentRoot}>
              <TextField
                label="Sl No"
                value={useSl}
                onChange={handleChangeslno}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Business Code"
                value={useBusCode}
                onChange={handleBusCode}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Customer Number"
                value={useCustNo}
                onChange={handleCustNo}
                className={classes.MuiOutlinedInputRoot} />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Clear Date"
                  value={useClear}
                  format="yyyy-MM-dd"
                  onChange={(newValue) => {
                    setClear(newValue);
                  }}
                  renderInput={(params) => <TextField className={classes.MuiFormControlRoot} {...params} />} />
              </LocalizationProvider>
              <TextField
                label="Business Year"
                value={useBuss}
                onChange={handleChangebuss}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Documnet ID"
                value={useDocID}
                onChange={handleDocID}
                className={classes.MuiOutlinedInputRoot} />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Posting Date"
                  value={usePosting}
                  format="yyyy-MM-dd"
                  onChange={(newValue) => {
                    setPosting(newValue);
                  } }
                  renderInput={(params) => <TextField className={classes.MuiFormControlRoot} {...params} />} />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Document Create Date"
                  value={useDoc}
                  format="yyyy-MM-dd"
                  onChange={(newValue) => {
                    setDoc(newValue);
                  } }
                  renderInput={(params) => <TextField className={classes.MuiFormControlRoot} {...params} />} />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Due In Date"
                  value={useDue}
                  format="yyyy-MM-dd"
                  onChange={(newValue) => {
                    setDue(newValue);
                  } }
                  renderInput={(params) => <TextField className={classes.MuiFormControlRoot} {...params} />} />
              </LocalizationProvider>
              <TextField
                label="Invoice Currency"
                value={useInvCur}
                onChange={handleInvCur}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Document Type"
                value={useDocType}
                onChange={handleDocType}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Posting ID"
                value={usePostId}
                onChange={handlePostID}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Total Open Amount"
                value={useTOA}
                onChange={handleTOA}
                className={classes.MuiOutlinedInputRoot} />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Baseline Create Date"
                  value={useBase}
                  format="yyyy-MM-dd"
                  onChange={(newValue) => {
                    setBase(newValue);
                  } }
                  renderInput={(params) => <TextField className={classes.MuiFormControlRoot} {...params} />} />
              </LocalizationProvider>
              <TextField
                label="Customer Payment Terms"
                value={useCPT}
                onChange={handleCPT}
                className={classes.MuiOutlinedInputRoot} />
              <TextField
                label="Invoice ID"
                value={useInvID}
                onChange={handleInvID}
                className={classes.MuiOutlinedInputRoot} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            style={{ width: "48%", color: "white", right: '2%', border: "1px solid white" }}
            onClick={handleAdd}
          >
            ADD
          </Button>
          <Button
            variant="outlined"
            style={{ width: "48%", color: "white", right: '2%', border: "1px solid white" }}
            onClick={handleAddClose}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}