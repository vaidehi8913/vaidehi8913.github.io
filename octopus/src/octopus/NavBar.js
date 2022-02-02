import React, { Component } from "react";
import OctoButton from "./OctoButton";

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/


/*
    PROPS
    currentSelection 
    color
*/
class NavBar extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        var navBarStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px"
        };

        var mostRecentIsSelected = false;
        var byTopicIsSelected = false;
        var aboutMeIsSelected = false;
        var mostRecentLinkTo = "/octopus";
        var byTopicLinkTo = "/octopus/topics";
        var aboutMeLinkTo = "/"; 

        if (this.props.currentSelection === "most_recent") {
            mostRecentIsSelected = true;
            mostRecentLinkTo = false;
        } else if (this.props.currentSelection === "by_topic") {
            byTopicIsSelected = true;
            byTopicLinkTo = false;
        } else if (this.props.currentSelection === "about_me") {
            // this should never be the case
            aboutMeIsSelected = true;
            aboutMeLinkTo = false;
        }

        return (
            <div style={navBarStyle}>
                <OctoButton label="Most Recent" 
                            color={this.props.color} 
                            isSelected={mostRecentIsSelected} 
                            disableHover={mostRecentIsSelected}
                            linkTo={mostRecentLinkTo}/>
                <OctoButton label="By Topic" 
                            color={this.props.color} 
                            isSelected={byTopicIsSelected} 
                            disableHover={byTopicIsSelected}
                            linkTo={byTopicLinkTo}/>
                <OctoButton label="About Me" 
                            color={this.props.color} 
                            isSelected={aboutMeIsSelected} 
                            disableHover={aboutMeIsSelected}
                            linkTo={aboutMeLinkTo}/>
            </div>
        );
    }
}

export default NavBar;