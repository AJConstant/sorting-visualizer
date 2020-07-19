import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";
import SortingSelect from "./sorting-select/sorting-select-container";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.light
    },
    appBar: {

    },
    sortingSelect: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
    }
});

class TopBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.root} position="static">
                    <ToolBar>
                        <Typography variant="h4" className={classes.sortingSelect}>
                            Sorting Visualizer
                    </Typography>
                        <SortingSelect className={classes.sortingSelect}></SortingSelect>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(TopBar);