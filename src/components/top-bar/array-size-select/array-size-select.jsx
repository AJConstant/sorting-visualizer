import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { array_sizes } from '../../../algorithms/algorithms';

const styles = theme => ({
    selectionButton: {
        paddingTop: theme.spacing(1),
        minWidth: 120,
    },
});

class ArraySizeSelect extends React.Component {
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
    handleArraySizeSelection = (index) => {
        this.props.setArraySize(index);
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
        const {arraySize} = this.props;
        return (
            <div className={classes.selectionButton}>
                <Button aria-controls="array-size-select" aria-haspopup="true" onClick={this.openMenu}>
                    {`Array size: ${arraySize}`}
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
                    {array_sizes.map(size => (
                        <MenuItem
                            key={size}
                            onClick={() => this.handleArraySizeSelection(size)}
                        >{size}</MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(ArraySizeSelect);