import React, { Component } from "react";
import NavBar from "../NavBar";
import Gallery from "./Gallery";
import * as Constants from "../Constants";
import TopicSelector from "./TopicSelector";

//https://www.kindacode.com/snippet/react-router-dom-parsing-query-string-parameters/

/* 
    PROPS
    topicString
*/
class ByTopic extends Component {

    constructor(props){
        super(props);

        // this.state = {
        //     allSelected: true,
        //     noneSelected: false,
        //     selectedTopics: Constants.possibleTags.map((e) => false)
        // };

        //this.topicStatePasser = this.topicStatePasser.bind(this);
        this.stringToSelectedTopics = this.stringToSelectedTopics.bind(this);
        this.selectedTopicsToString = this.selectedTopicsToString.bind(this);
    }

    // topicStatePasser(s) {
    //     this.setState(s);
    // };

    stringToSelectedTopics(str) {
        var charArray = Array.from(str);
        return(
            charArray.map((e) => 
                {
                    if (e === '0') return false;
                    return true;
                }
            )
        );
    }

    selectedTopicsToString(tpcs) {
        var charArray = tpcs.map((e) => e ? '1' : '0');
        return(charArray.join(""));
    }

    render () {

        var topicWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        };

        var selectedTopics;
        var allSelected;
        var noneSelected;

        if (!this.props.topicString) {
            allSelected = true;
            noneSelected = false;
            selectedTopics = Constants.possibleTags.map((e) => false);
        } else if (this.props.topicString === "none"){
            allSelected = false;
            noneSelected = true;
            selectedTopics = Constants.possibleTags.map((e) => false);
        } else {
            allSelected = false;
            noneSelected = false;
            selectedTopics = this.stringToSelectedTopics(this.props.topicString);
        }

        var filteredComicList = Constants.comicList.filter((comicInfo) =>
            {
                var lookUpTags = comicInfo.tags.map((tag) =>
                    {
                        var tagIndex = Constants.possibleTags.findIndex((possibleTag) =>
                            possibleTag.tagID === tag
                        );

                        return (selectedTopics[tagIndex]);
                    }
                );

                var includeComic = lookUpTags.reduce((currElem, nextElem) => currElem || nextElem, false);

                return (includeComic);
            }
        );

        if (allSelected) {
            filteredComicList = Constants.comicList;
        } else if (noneSelected) {
            filteredComicList = [];
        }

        return (
            <div>
                <NavBar color={Constants.navBarColor} currentSelection="by_topic"/>

                <br/><br/><br/>

                <div style={topicWrapperStyle}>
                    
                    <TopicSelector selectedTopics={selectedTopics} 
                                   allSelected={allSelected} 
                                   noneSelected={noneSelected}
                                   stringToSelectedTopics={this.stringToSelectedTopics}
                                   selectedTopicsToString={this.selectedTopicsToString}/>

                    <br/><br/>

                    <Gallery comicList={filteredComicList}/>

                <br/><br/><br/>
                </div>
            </div>
        );
    }
}

export default ByTopic;