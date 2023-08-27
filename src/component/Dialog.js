import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {updateVehicleStatusAsDone} from "./UpdateVehicle";
import {deleteVehicle} from "./DeleteVehicle";

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAction = () => {
        if(props.action === 'delete')
            deleteVehicle(props.vehicle);
        else
            updateVehicleStatusAsDone(props.vehicle);
        handleClose();
        window.location.reload();
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {props.buttonName}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.heading}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleAction}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
