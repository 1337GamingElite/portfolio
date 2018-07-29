import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import SideBarList from './SideBarList';

class SideBar extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            sideBarOn: false,
        }
    }

    toggleSideBar() {
        this.setState(prevState => ({
            sideBarOn: !prevState.sideBarOn
        }));
    }
    
    render() {
        return (
            <div>
                <Drawer open={this.state.sideBarOn} onClose={this.toggleSideBar.bind(this)}>
                    <div tabIndex={0} role="button" onClick={this.toggleSideBar.bind(this)} onKeyDown={this.toggleSideBar.bind(this)}>
                        <SideBarList />
                    </div>
                </Drawer>
            </div>
        );
    }

}

export default SideBar