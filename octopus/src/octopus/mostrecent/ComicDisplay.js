import React, { Component } from "react";
import OctoButton from "../OctoButton";
import * as Constants from "../Constants";
import AssociatedTags from "./AssociatedTags";

/* 
    PROPS
    comicInfo
*/
class ComicDisplay extends Component {

    render () {

        var outerWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            //backgroundColor: "#80d9be"
        };

        var innerWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: this.props.comicInfo.imageWidth || "500px", // this constant can be adjusted
            //backgroundColor: "#713999"
        };

        var comicImageStyle = {
            width: "100%",
            height: "auto",
            border: "2px solid"
        };

        var buttonWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px"
        };

        var comicInfo = this.props.comicInfo;
        var imagePath = require("../../img/" + comicInfo.imageFile); 

        var prevIsSelected = true;
        var nextIsSelected = true;

        var prevPath = false;
        var nextPath = false;

        if (comicInfo.prevID) {
            prevPath = "/octopus/id/" + comicInfo.prevID;
            prevIsSelected = false;
        }

        if (comicInfo.nextID) {
            nextPath = "/octopus/id/" + comicInfo.nextID;
            nextIsSelected = false;
        }


        return (
            <div style={outerWrapperStyle}>
                <div style={innerWrapperStyle}>
                    
                    <br/><br/>

                    <div style={buttonWrapperStyle}>
                        <OctoButton color={Constants.nextPrevButtonColor}
                                    label={"<<"}
                                    width={"50px"}
                                    linkTo={"/octopus/id/1"}
                                    isSelected={prevIsSelected}
                                    disableHover={prevIsSelected}/>
                        <OctoButton color={Constants.nextPrevButtonColor}
                                    label={"< prev"}
                                    width={"75px"}
                                    linkTo={prevPath}
                                    isSelected={prevIsSelected}
                                    disableHover={prevIsSelected}/>
                        <OctoButton color={Constants.nextPrevButtonColor}
                                    label={"next >"}
                                    width={"75px"}
                                    linkTo={nextPath}
                                    isSelected={nextIsSelected}
                                    disableHover={nextIsSelected}/>
                        <OctoButton color={Constants.nextPrevButtonColor}
                                    label={">>"}
                                    width={"50px"}
                                    linkTo={"/octopus"}
                                    isSelected={nextIsSelected}
                                    disableHover={nextIsSelected}/>
                    </div>
                    
                    <br/><br/>
                    
                    <img src={imagePath}
                         style={comicImageStyle}/>

                    <br/>

                    <i> {comicInfo.date} </i>

                    <br/>

                    {comicInfo.caption}

                </div>

                <br/>

                <AssociatedTags comicInfo={comicInfo}/>
            </div>
        );
    }
}

export default ComicDisplay;