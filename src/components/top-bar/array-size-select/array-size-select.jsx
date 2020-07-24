import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import { array_sizes } from '../../../algorithms/algorithm-util';

const styles = theme => ({
    root: {
        marginRight: theme.spacing(1)
    },
});

class ArraySizeSelect extends React.Component {
    constructor(props) {
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
    handleArraySizeSelection = (size) => {
        this.props.setSize(size);
        this.props.createArray(size);
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
        const {
            classes,
            inPlayback,
            arraySize
        } = this.props;
        return (
            <div className={classes.root}>
                <Button
                    variant="outlined"
                    disabled={inPlayback}
                    onClick={this.openMenu}
                    endIcon={<ArrowDropDownSharpIcon />}>
                    {`Array size: ${arraySize}`}
                </Button>
                <Menu
                    id="algorithm-select-menu"
                    anchorEl={this.state.anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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