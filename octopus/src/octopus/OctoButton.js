import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

/*
    PROPS:
    color
    isSelected (initial setting, optional)
    label
    link
    disableHover (optional)
    width (optional)
*/
class OctoButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({
            hover: true
        });
    }

    onMouseLeave() {
        this.setState({
            hover: false
        });
    }

    render () {
        var backgroundColor;
        var textColor;

        var boldScheme = false; // fill in with color not white

        if (this.props.isSelected) {
            boldScheme = true;
        } if (this.state.hover && !this.props.disableHover) {
            boldScheme = !boldScheme;
        }

        if (boldScheme){
            backgroundColor = this.props.color;
            textColor = "white";
        } else {
            backgroundColor = "white";
            textColor = this.props.color;
        }

        var octoButtonStyle = {
            color: textColor,
            backgroundColor: backgroundColor,
            borderStyle: "solid",
            borderWidth: "4px",
            borderColor: this.props.color,
            minWidth: this.props.width || "125px",
            padding: "10px",
            fontSize: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        };

        var innerButton = 
            <div style={octoButtonStyle} onMouseEnter={this.onMouseEnter} 
                                         onMouseLeave={this.onMouseLeave}> 
                <b>{this.props.label}</b> 
            </div>;

        if (this.props.linkTo){
            return (
                <Link to={this.props.linkTo} style={{textDecoration: "none"}}>
                    {innerButton}
                </Link>
            );
        } else {
            return (
                <div onClick={this.props.onClick}>
                    {innerButton}
                </div>
            );
        }
    }
}

export default OctoButton;