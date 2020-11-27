import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import UserList from "./UserList";
import CardMenu from "components/dashboard/Common/CardMenu";


function TabContainer({children, dir}) {
    return (
        <div dir={dir}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const LatestNotifications = (props) => {

    const [value, setValue] = useState(0);
    const [anchorE1, setAnchorE1] = useState(undefined);
    const [menuState, setMenuState] = useState(false);

    const handleChange = (event, value) => {
        setValue(value);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const onOptionMenuSelect = event => {
        setMenuState(true);
        setAnchorE1(event.currentTarget);
    };
    const handleRequestClose = () => {
        setMenuState(false);
    };
    const {theme} = props;

    return (
        <div className="jr-card jr-card-notifications">
            <div className="jr-card-header mb-3 d-flex align-items-center">
                <div className="mr-auto">
                    <h3 className="card-heading mb-0">
                        <i className="zmdi zmdi-notifications-active mr-2"/>
                        Latest Notifications
                    </h3>
                </div>
                <IconButton className="size-30 jr-fs-xl text-light p-0" onClick={onOptionMenuSelect}>
                    <i className="zmdi zmdi-more-vert"/>
                </IconButton>
            </div>

            <div className="tab-notifications">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    variant="fullWidth"
                >
                    <Tab className="tab text-capitalize" label="App Notifications"/>

                    <Tab className="tab text-capitalize" label="Announcements"/>
                </Tabs>
            </div>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabContainer dir={theme.direction}>
                    <UserList users={props.appNotification}/>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                    <UserList users={props.announcementsNotification}/>
                </TabContainer>

            </SwipeableViews>
            <CardMenu menuState={menuState} anchorEl={anchorE1}
                      handleRequestClose={handleRequestClose}/>
        </div>

    );
};

LatestNotifications.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(LatestNotifications);