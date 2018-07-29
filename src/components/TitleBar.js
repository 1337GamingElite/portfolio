import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import SideBar from './sidebar/SideBar';
import { Divider } from '../../node_modules/@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 10,
        marginLeft: -15,
    },
}

class TitleBar extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    handleMenu() {
        //alert("Open Menu!");
        this.child.current.toggleSideBar();
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <SideBar ref={this.child} />
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                            onClick={this.handleMenu.bind(this)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            John Mabanta - Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(TitleBar);