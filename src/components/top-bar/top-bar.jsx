import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import RunButton from './run-button/run-button-container';
import RandomizeButton from './randomize-button/randomize-button-container';
import { Typography, Grid, IconButton } from "@material-ui/core";
import SortingSelect from "./sorting-select/sorting-select-container";
import ArraySizeSelect from "./array-size-select/array-size-select-container";
import { withStyles } from '@material-ui/core/styles';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: theme.palette.primary.light
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
        alignSelf: 'start'
    },
    appButtons: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        marginTop: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    settingsButton: {
        marginLeft: theme.spacing(37)
    }
});

class TopBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <ToolBar>
                        <Grid container justify="space-between">
                            <Typography variant="h3"
                                noWrap
                                className={classes.title}>
                                Sorting Visualizer
                            </Typography>
                            <div className={classes.appButtons}>
                                <SortingSelect className={classes.button}></SortingSelect>
                                <ArraySizeSelect className={classes.button}></ArraySizeSelect>
                                <RandomizeButton className={classes.button}></RandomizeButton>
                                <RunButton className={classes.button}></RunButton>
                            </div>
                            <IconButton className={classes.settingsButton} aria-label="settings">
                                <SettingsSharpIcon />
                            </IconButton>
                        </Grid>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(TopBar);