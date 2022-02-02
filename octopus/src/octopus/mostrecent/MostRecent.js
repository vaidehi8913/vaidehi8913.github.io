import React, { Component } from "react";
import NavBar from "../NavBar";
import ComicDisplay from "./ComicDisplay";
import * as Constants from "../Constants";

class MostRecent extends Component {

    render () {
        return (
            <div>
                <NavBar color={Constants.navBarColor} currentSelection="most_recent"/>
                <ComicDisplay comicInfo={Constants.comicList[0]} />
            </div>
        );
    }
}

export default MostRecent;