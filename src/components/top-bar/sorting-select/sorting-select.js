import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const styles = theme => ({
    selectionButton: {
        paddingTop: theme.spacing(1),
        minWidth: 120,
    },
});

class SortingSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            algorithms: [
                "Bubble Sort",
                "Merge Sort",
                "Insertion Sort",
                "Quick Sort",
            ],
            algorithmIndex: 0,
            anchorEl: null,
        }
    }

    handleMenuOpen = (event) => {
        this.setState({
            ...this.state,
            anchorEl: event.currentTarget
        });
    }

    handleMenuOptionSelect = (event, index) => {
        this.setState({
            ...this.state,
            algorithmIndex: index,
            anchorEl: null
        })
    }

    handleClose = (event) => {
        this.setState({
            ...this.state,
            anchorEl: null
        });
    }

    //TODO: Actually use react-redux state
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.selectionButton}>
                <Button aria-controls="algorithm-select" aria-haspopup="true" onClick={this.handleMenuOpen}>
                    {this.state.algorithms[this.state.algorithmIndex]}
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </Button>
                <Menu
                    id="algorithm-select-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    {this.state.algorithms.map((algo, index) => (
                        <MenuItem
                            key={algo}
                            selected={index === this.state.algorithmIndex}
                            onClick={(event) => this.handleMenuOptionSelect(event, index)}
                        >{algo}</MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(SortingSelect);