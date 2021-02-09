import React, { Component } from "react";
import TopBar from "./top-bar/top-bar-container";
import VisualizerBody from "./visualizer-body/visualizer-body-container";
import {  withStyles, ThemeProvider, CssBaseline } from "@material-ui/core";
import { darkTheme, lightTheme } from '../theme';

const styles = theme => ({
    appRoot: {

    },
    bodyRoot: {

    }
})

class App extends Component {
    // Create initial array
    componentDidMount() {
        this.props.createArray(this.props.arraySize);
    }
    render() {
        const { classes, 
            darkMode } = this.props;
        return (
            <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
                <CssBaseline />
                <div className={classes.appRoot}>
                    <TopBar></TopBar>
                    <div className={classes.bodyRoot}>
                        <VisualizerBody></VisualizerBody>
                    </div>
                </div>
            </ThemeProvider>    
        )
    }
}

export default withStyles(styles)(App);