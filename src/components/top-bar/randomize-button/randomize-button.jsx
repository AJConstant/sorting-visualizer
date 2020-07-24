import React from 'react';
import { withStyles } from '@material-ui/core';
import LoopSharpIcon from '@material-ui/icons/LoopSharp';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        marginRight: theme.spacing(1)
    },
    randomizeButton: {
        paddingRight: '10px',
    },
    randomizeButtonDisabled: {
        paddingRight: '10px',
    },
});


class RandomizeButton extends React.Component {
    handleClickRandomize = () => {
        this.props.randomizeArray(this.props.array.length);
    }

    handleClickReset = () => {
        this.props.reset(this.props.array.length);
    }


    render() {
        const {
            classes,
            running,
            inPlayback
        } = this.props;
        return (
            <div className={classes.root}>
                <Button
                    variant="outlined"
                    className={running? classes.randomizeButtonDisabled : classes.randomizeButton}
                    disabled={running}
                    onClick={inPlayback? 
                        this.handleClickReset :
                        this.handleClickRandomize}
                    startIcon={<LoopSharpIcon/>}
                    >{inPlayback? 'Reset' : 'Randomize'}
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(RandomizeButton);

