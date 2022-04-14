import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  MuiDialogContentRoot: {
    display: 'Grid',
    gridTemplateColumns: 'auto auto',
    columnGap: '30px',
    rowGap: '20px',
  },
  MuiOutlinedInputRoot: {
    backgroundColor: '#fff'
  },
})

export default function AdvanceSearch({handleAdvSearchClose,useAdv,useDocID,handleDocID,useInvID,handleInvID,useCustNo, handleCustNo,
  useBuss,handleChangebuss,handleAdvSearch }) {
  
  const classes = useStyles();

  return (
    <div>
      <Dialog open={useAdv} onClose={handleAdvSearchClose}
      PaperProps={{
        style: {
          backgroundColor: "#1d456ae2",
          boxShadow: 'none',
          minHeight: '30vh',
          maxHeight: '40vh',
          minWidth: '48vh',
          maxWidth: '65vh'
        }
      }}>
        <DialogTitle><span style={{ color: "white" }}>{"ADVANCE SEARCH"}</span></DialogTitle>
        <DialogContent className={classes.MuiDialogContentRoot}>
          <TextField
            id="documnetid"
            label="Document ID"
            value={useDocID}
            onChange={handleDocID}
            className={classes.MuiOutlinedInputRoot} />
          <TextField
            id="invoiceid"
            label="Invoice Id"
            value={useInvID}
            onChange={handleInvID}
            className={classes.MuiOutlinedInputRoot} />
          <TextField
            id="custnumber"
            label="Customer Number"
            value={useCustNo}
            onChange={handleCustNo}
            className={classes.MuiOutlinedInputRoot} />
          <TextField
            id="businessyear"
            label="Business Year"
            value={useBuss}
            onChange={handleChangebuss}
            className={classes.MuiOutlinedInputRoot} />
        </DialogContent>
        <DialogActions>
        <Button
            variant="outlined"
            fullWidth
            onClick={handleAdvSearch}
            style={{border: "1px solid #fff", color: "#fff"}}
          >
            SEARCH
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleAdvSearchClose}
            style={{border: "1px solid #fff", color: "#fff"}}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
