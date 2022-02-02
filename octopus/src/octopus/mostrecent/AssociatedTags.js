import React, { Component } from "react";
import OctoButton from "../OctoButton";
import * as Constants from "../Constants";

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/


/*
    PROPS
    comicInfo
*/
class AssociatedTags extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        var rawTagList = this.props.comicInfo.tags;

        console.log(rawTagList);

        var tagInfoList = rawTagList.map((tagID) => 
                            Constants.possibleTags.find((tag) =>
                                tagID === tag.tagID));

        var tagButtonList = tagInfoList.map((tagInfo) =>
            {
                console.log("tagInfo.tagID: " + tagInfo.tagID);
                console.log(Constants.possibleTags);

                var linkCharArray = Constants.possibleTags.map((elem) =>
                    {
                        console.log("elem.tagID: " + elem.tagID);
                        if (elem.tagID === tagInfo.tagID) return '1';
                        return '0';
                    }
                );

                console.log("linkCharArray: " + linkCharArray);

                var linkString = "/octopus/topics/" + linkCharArray.join("");

                return(<OctoButton label={tagInfo.title}
                            color={tagInfo.color}
                            isSelected={true}
                            linkTo={linkString}/>);
            }
        );

        console.log(tagButtonList);

        var tagWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: "10px",
            width: "700px",
            //backgroundColor: "#ffe08c",
        };

        return (
            <div style={tagWrapperStyle}>
                {tagButtonList}
            </div>
        );
    }
}

export default AssociatedTags;