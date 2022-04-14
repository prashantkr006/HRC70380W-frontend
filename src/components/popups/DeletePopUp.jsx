import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeletePopUp({isDelete,handleCloseDelete, handleDelete}) {
  return (
    <div>
      <Dialog
        open={isDelete}
        onClose={handleCloseDelete}
        onChange={handleDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: '#1d456ae2',
            boxShadow: 'none',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title"><span style={{color: 'white'}}>{"Delete Records ?"}</span></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <span style={{color: 'white'}}>Are you sure you want to delete these record[s] ?</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseDelete} color="primary" style={{width:'200px',right:'0%', color:'white', border: "1px solid white"}}>
            CANCEL
          </Button>
          <Button variant="outlined" color="primary" autoFocus onClick={handleDelete} style={{width:'200px',color:'white', border: "1px solid white"}}>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}