import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import { array_sizes } from '../../../algorithms/algorithm-util';

const styles = theme => ({
    selectionButton: {
        minWidth: 120,
    },
});

class ArraySizeSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arraySizeSelected: this.props.initialArraySize,
            anchorEl: null
        }
    }

    openMenu = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    }
    handleArraySizeSelection = (size) => {
        this.props.createArray(size);
        this.setState({
            arraySizeSelected: size,
            anchorEl: null
        });
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    render() {
        const {
            classes,
            running
        } = this.props;
        return (
            <div className={classes.selectionButton}>
                <Button 
                    aria-controls="array-size-select" 
                    aria-haspopup="true"
                    disabled={running} 
                    onClick={this.openMenu}>
                    {`Array size: ${this.state.arraySizeSelected}`}
                    <ArrowDropDownSharpIcon></ArrowDropDownSharpIcon>
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