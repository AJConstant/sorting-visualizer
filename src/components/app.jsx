import React, { Component } from "react";
import TopBar from "./top-bar/top-bar-container";
import VisualizerBody from "./visualizer-body/visualizer-body";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar></TopBar>
                <VisualizerBody></VisualizerBody>
            </div>
        )
    }
}

export default App;