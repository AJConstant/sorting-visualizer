import React, { Component } from "react";
import TopBar from "./top-bar/top-bar";
import { ThemeProvider } from "@material-ui/core";


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TopBar></TopBar>
        )
    }
}

export default App;