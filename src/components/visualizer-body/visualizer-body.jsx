import React from 'react';
import { withStyles, Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: theme.spacing(2),
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyConent: 'center'
    },
    arrayElement: {
        backgroundColor: theme.palette.primary.light,
        marginLeft: '3px',
    },
    arrayElementCompared: {
        backgroundColor: theme.palette.warning.light,
        marginLeft: '3px',
    },
    arrayElementToSwap: {
        backgroundColor: theme.palette.error.light,
        marginLeft: '3px',
    },
    arrayElementSorted: {
        backgroundColor: theme.palette.success.light,
        marginLeft: '3px'
    },
    arrayElementPartition: {
        backgroundColor: theme.palette.secondary.light,
        marginLeft: '3px'
    }
})

class VisualizerBody extends React.Component {
    getWidth = (num) => {
        switch (num) {
            case 5:
                return 40;
            case 10:
                return 20;
            case 25:
                return 10;
            case 50:
                return 9;
            case 75:
                return 8;
            case 100:
                return 6;
            case 150:
                return 5;
            default:
                return 5;
        }
    }

    render() {
        const {
            classes,
            array,
            compared,
            toSwap,
            sorted,
            pivot,
        } = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    className={classes.arrayBody}>
                    {array && array.length ? array.map((num, index) => {
                        return (
                            <div
                                className={
                                    toSwap.includes(index) ? classes.arrayElementToSwap :
                                        compared.includes(index) ? classes.arrayElementCompared :
                                            sorted.includes(index) ? classes.arrayElementSorted :
                                                pivot.includes(index) ? classes.arrayElementPartition :
                                                    classes.arrayElement}
                                style={{
                                    width: `${this.getWidth(array.length)}px`,
                                    height: `${2 * num}px`
                                }}
                                key={index}></div>
                        )
                    }) : null}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(VisualizerBody)