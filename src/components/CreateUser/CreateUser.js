import React, {useState, Fragment} from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Topbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/Sidebar/Sidebar';

const CreateUser = props => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',

        },
        users: {
            backgroundColor: '#E7E7E7',
            minHeight: '93.5vh',
            padding: '3rem',
            display:'flex',
            flexDirection: 'column',
            width: '88%'
        },
      }));

    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        institution: '',
        level: '',
        image: ''
    })

    const { username, fullname, institution, level, image} = formData;

    // const onChange = e =>
    // setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = e => {
    //     e.preventDefault();
    //     createProfile(formData, history, profile ? true : false);
    // };



    const classes = useStyles();
    return (
        <div>
            <Topbar />
            <div className = {classes.root}>
                 <SideBar />

                 {/* Main Create User Component */}
        
                <form className={classes.users}>
                <h1>Add User</h1>

                     <TextField id="standard-basic" label="User Name" />
                     <TextField id="standard-basic" label="Full Name" />
                     <TextField id="standard-basic" label="Institution" />
                    
                     <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Level</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        >
                            <MenuItem value='Level 1'>Level 1</MenuItem>
                            <MenuItem value='Level P2'>Level 2</MenuItem>
                        </Select>
                     </FormControl>
                
                     <TextField id="standard-basic" label="Image" />

                     <Button variant="contained" color="primary">
                        SUBMIT
                    </Button>
                </form>
                 
            </div>
           

        </div>
    )
}

CreateUser.propTypes = {

}

export default CreateUser
