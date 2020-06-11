import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import  { createUser1, createUser2} from '../../store/actions/users'
import { connect } from 'react-redux';
import SimpleAlert from '../../components/UI/Alert/Alert';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Topbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/Sidebar';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { setAlert } from '../../store/actions/alert';

const EditUser = ({history, createUser1, createUser2, location, setAlert}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
  
          },
          users: {
              backgroundColor: '#E7E7E7',
              minHeight: '93.5vh',
              padding: '4rem 6rem',
              width: '84%',
              display: 'flex',
              justifyContent: 'space-between'
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
              background: '#4597D6',
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
              marginTop:'3rem',
              textDecoration: 'none',
              padding: '0.8rem 0',
              fontSize: '1rem',
              width: '13%',
              backgroundColor: '#7E909A'
          }
      }));

    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        institution: '',
        level: '',
        image: ''
    })

   

    useEffect(() => {
            setFormData({
                username: location.state.user.username,
                fullname: location.state.user.fullname,
                institution: location.state.user.institution,
                level: location.state.user.level,
                image: location.state.user.image
            }) 


    }, [])

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(_.isEqual(formData, location.state.user)){
            setAlert('There is no change to update', 'warning')
        }else{
            
        formData.level==='Level 1'
        ? createUser1(formData, history, true) 
        : createUser2(formData, history, true);
        }

        
    };

    const { username, fullname, institution, level, image} = formData;

    const classes = useStyles();
    return (
        <div>
            <Topbar /> 
            <div className = {classes.root}>
                 <SideBar />

                {/* Main Create User Component */}
               
                <Grid container className = {classes.users}>
                <SimpleAlert />

                    <Paper className = {classes.layout}>
                        <Grid item xs={12}>

                        
                            <Typography variant='h4' className={classes.header}>EDIT USER</Typography>
                           
                            	 <form className={classes.form} onSubmit={onSubmit}>
                          
                                        <TextField margin='normal' onChange={onChange} name='username' value={username} id="standard-basic" label="User Name" required />
                                        <TextField margin='normal' onChange={onChange} name='fullname' value={fullname} id="standard-basic" label="Full Name" required/>
                                        <TextField margin='normal' onChange={onChange} name='institution' value={institution} id="standard-basic" label="Institution"  required/>
                                        
                                        <FormControl margin='normal' className={classes.formControl} required>
                                            <InputLabel id="demo-simple-select-label" required >Level</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            onChange={onChange} name= 'level' value = {level}
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
                                            <Link to='/users' style={{textDecoration:'none', color: 'white'}}>
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
           
           

        </div>
    )
}

EditUser.propTypes = {

}

    


export default connect(null, {createUser1, createUser2, setAlert})(withRouter(EditUser))
