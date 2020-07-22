import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    runButton: {
        paddingRight: '10px',
        color: theme.palette.primary.dark
    },
    runButtonDisabled: {
        paddingRight: '10px',
        color: theme.palette.secondary.main
    },
    circularProgress: {
        color: theme.palette.secondary.main,
        marginLeft: theme.spacing(1)
    },
});

class RunButton extends React.Component {
    handleClick = () => {
        this.props.beginSort(this.props.selectedIndex, this.props.array);
    }
    render() {
        const {
            classes,
            running,
        } = this.props;
        return (
            <div>
                <Button
                    variant="contained"
                    className={running ? classes.runButtonDisabled : classes.runButton}
                    disabled={running}
                    onClick={this.handleClick}
                    endIcon={running ?
                        <CircularProgress className={classes.circularProgress} size={20}></CircularProgress> :
                        <ArrowForwardIosSharpIcon />
                    }>{`Sort`}
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(RunButton);