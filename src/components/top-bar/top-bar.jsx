import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import RunButton from './run-button/run-button-container';
import RandomizeButton from './randomize-button/randomize-button-container';
import { Typography } from "@material-ui/core";
import SortingSelect from "./sorting-select/sorting-select-container";
import ArraySizeSelect from "./array-size-select/array-size-select-container";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.primary.light
    },
    grid: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        width: '60%',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4)
    },
    dropdownButton: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        paddingRight: theme.spacing(4),
    },
    runButton: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4)
    }
});

class TopBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.root} position="static">
                    <ToolBar>
                        <Typography variant="h3"
                            noWrap
                            className={classes.title}> 
                            Sorting Visualizer
                        </Typography>
                        <Grid container className={classes.grid}>
                            <SortingSelect className={classes.dropdownButton}></SortingSelect>
                            <ArraySizeSelect className={classes.dropdownButton}></ArraySizeSelect>
                            <RandomizeButton className={classes.runButton}></RandomizeButton>
                            <RunButton className={classes.runButton}></RunButton>
                        </Grid>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(TopBar);