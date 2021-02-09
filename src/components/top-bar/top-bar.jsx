import React from "react";
import ToolBar from '@material-ui/core/Toolbar';
import RunButton from './run-button/run-button-container';
import RandomizeButton from './randomize-button/randomize-button-container';
import { Switch, Typography } from "@material-ui/core";
import SortingSelect from "./sorting-select/sorting-select-container";
import ArraySizeSelect from "./array-size-select/array-size-select-container";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        margin: 0,
        width: '100%',
        backgroundColor: theme.palette.primary.light
    },
    grid: {
        width: '50%',
    },
    title: {
        width: '35%',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4)
    },
    button: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    toggle: {
        marginLeft: 'auto'
    }
});

class TopBar extends React.Component {

    toggleDarkMode = () => {
        this.props.toggleDarkMode();
    }

    render() {
        const { classes, 
            darkMode } = this.props;
        return (
            <div className={classes.root}>
                <ToolBar className={classes.root} position="static">
                    <Typography variant="h3"
                        noWrap
                        className={classes.title}>
                        Sorting Visualizer
                    </Typography>
                    <SortingSelect className={classes.button}></SortingSelect>
                    <ArraySizeSelect className={classes.button}></ArraySizeSelect>
                    <RandomizeButton className={classes.button}></RandomizeButton>
                    <RunButton className={classes.button}></RunButton>
                    <section className={classes.toggle}>
                        <Switch checked={darkMode}
                                onClick={this.toggleDarkMode}></Switch>
                    </section>
                </ToolBar>
            </div >
        )
    }
}

export default withStyles(styles)(TopBar);