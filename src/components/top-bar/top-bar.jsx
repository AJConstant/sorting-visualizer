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
        width: '50%',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4)
    },
    button: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
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
                            <SortingSelect className={classes.button}></SortingSelect>
                            <ArraySizeSelect className={classes.button}></ArraySizeSelect>
                            <RandomizeButton className={classes.button}></RandomizeButton>
                            <RunButton className={classes.button}></RunButton>
                        </Grid>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(TopBar);