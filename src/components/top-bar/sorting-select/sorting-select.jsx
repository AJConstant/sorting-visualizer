import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import { available_algorithms } from '../../../algorithms/algorithm-util';

const styles = theme => ({
    root: {
        marginRight: theme.spacing(1)
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
        const {
            classes,
            selectedAlgorithm,
            inPlayback
        } = this.props;
        return (
            <div className={classes.root}>
                <Button 
                    variant="outlined"
                    disabled={inPlayback} 
                    onClick={this.openMenu}
                    endIcon={<ArrowDropDownSharpIcon />}>
                    {selectedAlgorithm}
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