import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( {
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

export default function EditPopUp({open,handleClose,useInv,usecustPay, handlechnageInv, handlechnagecustPay, handleEdit}) { 
  const classes = useStyles();

  return (
    <div>
    <Dialog 
      open={open} 
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: '#1d456ae2',
          boxShadow: 'none',
          minHeight: '27vh',
          maxHeight: '27vh',
          minWidth: '70vh',
          maxWidth: '80vh'
        },
      }}>
        <DialogTitle><span style={{color: 'white'}}>{"EDIT"}</span></DialogTitle>
        <DialogContent className={classes.MuiDialogContentRoot}>
              <TextField
                label="Invoice Currency"
                value={useInv}
                onChange={handlechnageInv}
                className={classes.MuiOutlinedInputRoot}
                />
                <TextField
                  label="Customer Payment Terms"
                  value={usecustPay}
                  onChange={handlechnagecustPay}
                className={classes.MuiOutlinedInputRoot}
                />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleEdit}style={{width:"50%",color:'white',border: "1px solid white"}}>EDIT</Button>
          <Button variant="outlined" onClick={handleClose} style={{width:"50%",color:'white',border: "1px solid white"}}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
