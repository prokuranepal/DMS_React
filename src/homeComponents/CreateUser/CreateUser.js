import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import  { createUser1, createUser2, getUsers } from '../../store/actions/users'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const CreateUser = ({history, createUser1, createUser2}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          width: '100%'
        },
        users: {
            backgroundColor: '#E7E7E7',
            minHeight: '93.5vh',
            padding: '2rem 0rem',
            margin: 'auto',
            width: '80%'
        },
        form: {
            display:'flex',
            flexDirection: 'column',    
            padding:'1rem 6rem'
        },
        layout: {
            width: '100%',
            height: '600px'
            
        },
        header:{
            background:'red',
            padding: '1rem 6rem',
            backgroundColor: '#4597D6',
            color:'white'
            
        },
        submit:{
            marginTop:'3rem',
            textDecoration: 'none',
            backgroundColor: '#EA6A47',
            color: 'white',
            padding: '0.8rem 0',
            fontSize: '1rem',
            width: '13%',
            marginRight: '20px'
        },
        back: {
            // margin: theme.spacing(1),
            marginTop:'3rem',
            
            textDecoration: 'none',
            padding: '0.8rem 0',
            fontSize: '1rem',
            width: '20%',
            backgroundColor: '#7E909A'
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

    useEffect(() => {
            console.log("getUsers called")
         getUsers();  

    }, [])

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log("level",formData.level)
        formData.level==='Level 1'
            ? createUser1(formData, history, false) 
            : createUser2(formData, history, false);
        
    };

    const classes = useStyles();
    return (
            <div className = {classes.root} data-test="container-component">
                <Grid container className = {classes.users}>
                    <Paper className={classes.layout}>
                    
                        <Grid item xs={12}>
                        <Typography variant='h4' className={classes.header}>ADD USER</Typography>
                        <form className = {classes.form}  onSubmit={onSubmit} data-test="formSubmit">
                        

                            <TextField margin='normal' onChange={onChange} name='username' value={username} data-test="username" id="standard-basic" label="User Name" required/>
                            <TextField margin='normal' onChange={onChange} name='fullname' value={fullname} id="standard-basic" label="Full Name" required/>
                            <TextField margin='normal' onChange={onChange} name='institution' value={institution} id="standard-basic" label="Institution" required />
                            
                            <FormControl margin='normal' className={classes.formControl} required >
                                <InputLabel id="demo-simple-select-label"  >Level</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={onChange} name= 'level' value = {level}
                                data-test="selectOnChange" 
                                >
                                    <MenuItem value='Level 1'>Level 1</MenuItem>
                                    <MenuItem value='Level 2'>Level 2</MenuItem>
                                </Select>
                            </FormControl>
                        
                            <TextField margin='normal' onChange={onChange} name= 'image' value= {image} id="standard-basic" label="Image" />

                            <div>
                                <Button className={classes.submit}  type='submit' variant="contained" color='primary'>
                                    SUBMIT
                                </Button>
                                <Link to='/app/users/list-users' style={{textDecoration:'none', color: 'white'}}>
                                    <Button className={classes.back} variant="contained" color='secondary' startIcon={<KeyboardBackspaceIcon/>} >
                                    Go Back
                                    </Button>
                                </Link> 
                            </div>
                            
                            
                        </form>
                        </Grid>
                </Paper>
                </Grid> 
                
                 
            </div>
           
    )
}

CreateUser.propTypes = {

}

const mapStateToProps = state => ({
    state: state.users  
}
)
    


export default connect(mapStateToProps, {createUser1, createUser2})(withRouter(CreateUser))
