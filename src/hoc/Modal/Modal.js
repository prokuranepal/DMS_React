import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 40;
    const left = 0;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#343a40',
        borderRadius: '10px',
        padding: theme.spacing(1, 2, 1, 1),
        color: 'white',
        width: '320px'
    }
}));
const CustomModal = (props) => {
    const classes = useStyles();
    const style = getModalStyle();
    return <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.close}
        closeAfterTransition
    >
        <Fade in={props.open}>
            <div className={classes.paper} style={style}>
                {props.component}

            </div>
        </Fade>
    </Modal>
}

export default CustomModal;