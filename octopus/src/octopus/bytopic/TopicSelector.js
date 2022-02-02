import React, { Component } from "react";
import * as Constants from "../Constants";
import OctoButton from "../OctoButton";

/*
    PROPS
    selectedTopics (a list of bools in the same order as Constants.possibleTags)
    allSelected
    noneSelected
    topicStatePasser
*/

class TopicSelector extends Component {

    constructor(props) {
        super(props);

        this.onClickSelectAll = this.onClickSelectAll.bind(this);
        this.onClickSelectNone = this.onClickSelectNone.bind(this);
        this.onClickSelectIndex = this.onClickSelectIndex.bind(this);
        this.selectIndexString = this.selectIndexString.bind(this);
    }

    onClickSelectAll() {
        this.props.topicStatePasser({
            allSelected: true,
            noneSelected: false,
            selectedTopics: Constants.possibleTags.map((e) => true)
        });
    }

    onClickSelectNone() {
        this.props.topicStatePasser({
            allSelected: false,
            noneSelected: true,
            selectedTopics: Constants.possibleTags.map((e) => false)
        });
    }

    onClickSelectIndex(i) {
        var newSelectedTopics = this.props.selectedTopics.map((e, index) => 
                {
                    if (index === i) {
                        return (!e);
                    } else return (e);
                }
            );

        this.props.topicStatePasser({
            allSelected: false,
            noneSelected: false,
            selectedTopics: newSelectedTopics
        });
    }

    selectIndexString(i) {
        var newSelectedTopics = this.props.selectedTopics.map((e, index) => 
                {
                    if (index === i) {
                        return (!e);
                    } else return (e);
                }
        );

        return this.props.selectedTopicsToString(newSelectedTopics);
    }

    render () {

        var topicButtons = Constants.possibleTags.map((tagInfo, index) =>
            {
                var isSelected = this.props.selectedTopics[index];

                if (this.props.allSelected) {
                    isSelected = true;
                } else if (this.props.noneSelected) {
                    isSelected = false;
                }

                var linkTo = "/octopus/topics/" + this.selectIndexString(index);

                return (
                    <OctoButton label={tagInfo.title}
                                color={tagInfo.color}
                                isSelected={isSelected}
                                linkTo={linkTo}/>
                );
            }
        );

        var topicButtonWrapperStyle = {
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px"
        };

        return (
            <div style={topicButtonWrapperStyle}>
                <OctoButton label={"All"}
                            color={Constants.nextPrevButtonColor}
                            isSelected={this.props.allSelected}
                            linkTo={"/octopus/topics"}/>
                <OctoButton label={"None"}
                            color={Constants.nextPrevButtonColor}
                            isSelected={this.props.noneSelected}
                            linkTo={"/octopus/topics/none"}/>
                {topicButtons}
            </div>
        );
    }
}

export default TopicSelector;