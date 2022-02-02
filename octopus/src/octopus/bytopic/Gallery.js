import React, { Component } from "react";
import * as Constants from "../Constants";
import {
    Link
} from "react-router-dom";


/* 
    PROPS
    comicList (filtered list to display)
*/

class Gallery extends Component {

    render () {

        var galleryWrapperStyle = {
            width: "1000px",
            //backgroundColor: "#ffcbc7",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap"
        };

        var comicImages = this.props.comicList.map((comicInfo) =>
            {
                var linkTo = "/octopus/id/" + comicInfo.id;
                var imagePath = require("../../img/" + comicInfo.imageFile); 
                var imageStyle = {
                    width: "300px",
                    height: "auto",
                    border: "2px solid"
                };
                
                return (
                    <Link to={linkTo} style={{textDecoration: "none"}}>
                        <img src={imagePath}
                             style={imageStyle}/>
                    </Link>
                );
            }
        );

        return (
            <div style={galleryWrapperStyle}>
                {comicImages}
            </div>
        );
    }
}

export default Gallery;