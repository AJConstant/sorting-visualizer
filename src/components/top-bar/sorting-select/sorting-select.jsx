import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { available_algorithms } from '../../../algorithms/algorithms';

const styles = theme => ({
    selectionButton: {
        paddingTop: theme.spacing(1),
        minWidth: 120,
    },
});

class SortingSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null
        }
    }
    openMenu = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    }
    handleAlgorithmSelection = (index) => {
        this.props.setAlgorithm(index);
        this.setState({
            anchorEl: null
        });
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    render() {
        const {classes} = this.props;
        const {selectedAlgorithm} = this.props;
        return (
            <div className={classes.selectionButton}>
                <Button aria-controls="algorithm-select" aria-haspopup="true" onClick={this.openMenu}>
                    {selectedAlgorithm}
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </Button>
                <Menu
                    id="algorithm-select-menu"
                    anchorEl={this.state.anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    {available_algorithms.map((algo, index) => (
                        <MenuItem
                            key={algo}
                            onClick={() => this.handleAlgorithmSelection(index)}
                        >{algo}</MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(SortingSelect);