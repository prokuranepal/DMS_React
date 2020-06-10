import React, { Component } from 'react';
import SideBar from '../../components/Sidebar/Sidebar';
import NavBar from '../../components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import MainRouter from './MainRoute';

const styles = theme => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    nav: {
        height: '7vh'
    },
    section: {
        height: '93vh',
        maxHeight: '93vh',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }

});
class Main extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <Grid className={classes.nav} item xs={12}>
                    <NavBar />
                </Grid>

                <Grid container item component={Paper} >
                    <Grid className={classes.section} item xs={3} sm={3} md={3} lg={2}>
                        <SideBar />
                    </Grid>
                    <Grid className={classes.section} item xs={9} sm={9} md={9} lg={10}>
                        <MainRouter />
                    </Grid>

                </Grid>
            </Grid>
        );
    }
}

export default (withStyles(styles, { withTheme: true }))(Main);