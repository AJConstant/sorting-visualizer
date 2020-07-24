import React from 'react';
import { Button } from '@material-ui/core';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import PauseSharpIcon from '@material-ui/icons/PauseSharp';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    runButton: {
        color: theme.palette.primary.dark
    },
    runButtonDisabled: {
        color: theme.palette.secondary.main
    },
    circularProgress: {
        color: theme.palette.secondary.main,
        marginLeft: theme.spacing(1)
    },
});

class RunButton extends React.Component {
    beginSort = () => {
        this.props.beginSort(this.props.selectedIndex, this.props.array);
    }

    resumePlayback = () => {
        this.props.resumePlayback(this.props.array.length);
    }

    pausePlayback = () => {
        this.props.pausePlayback();
    }

    render() {
        const {
            classes,
            running,
            inPlayback
        } = this.props;
        return (
            <div>
                <Button
                    variant="contained"
                    className={running ? classes.runButtonDisabled : classes.runButton}
                    onClick={running ? 
                        this.pausePlayback :
                            inPlayback ?
                                this.resumePlayback : 
                                    this.beginSort
                    }
                    endIcon={running ?
                        <PauseSharpIcon /> :
                        <ArrowForwardIosSharpIcon />
                    }>{running ?
                        'Pause' :
                            inPlayback ? 
                                'Resume' : 'Sort'
                    }
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(RunButton);