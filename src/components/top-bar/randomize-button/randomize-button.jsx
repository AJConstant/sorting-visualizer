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
    handleClick = () => {
        this.props.randomizeArray(this.props.array.length);
    }

    render() {
        const {
            classes,
            running
        } = this.props;
        return (
            <div className={classes.root}>
                <Button
                    variant="outlined"
                    className={running? classes.randomizeButtonDisabled : classes.randomizeButton}
                    disabled={running}
                    onClick={this.handleClick}
                    startIcon={<LoopSharpIcon/>}
                    >{`Randomize`}
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(RandomizeButton);

