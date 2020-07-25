import React, { Component } from "react";
import TopBar from "./top-bar/top-bar-container";
import VisualizerBody from "./visualizer-body/visualizer-body-container";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
    divider : {
        marginTop: '95px',
        height: '180px'
    }
})

class App extends Component {
    // Create initial array
    componentDidMount() {
        this.props.createArray(this.props.settings.arraySize);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.appRoot}>
                <TopBar></TopBar>
                <div className={classes.divider}></div>
                <div className={classes.bodyRoot}>
                    <VisualizerBody></VisualizerBody>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(App);