import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
      width: 200,
      backgroundColor: theme.palette.background.paper,
    },
});

class SideBarList extends Component {

    render() {
        const { classes } = this.props;
        const logoStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10
        };
        return(
            <div className={classes.root}>
                <img src="https://image.flaticon.com/icons/png/512/20/20673.png" width='150' style={logoStyle}/>
                <List>
                    <ListItem button>
                        <ListItemText primary="About Me"/>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Projects"/>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Contact"/>
                    </ListItem>
                    <Divider />
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(SideBarList);