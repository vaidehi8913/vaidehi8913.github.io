import React, { Component } from "react";


/*
    PROPS
    passUpVectors
    addNewVectorToGraph
    isRunning
    controlRun
    updateStepSize
    stepSize
    initVectors
    currentVectors
*/
class VectorTextDisplay extends Component {

    constructor(props) {
        super(props);

        this.vectorHeaderWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            gap: "15px"
        };

        this.labelWidth = "50px";
        this.vectorIndexWidth = "50px";

        this.buildStepSizeEntry = this.buildStepSizeEntry.bind(this)
        this.formatDataRow = this.formatDataRow.bind(this)
        this.addEmptyVector = this.addEmptyVector.bind(this)
        this.updateVectorIndex = this.updateVectorIndex.bind(this)
        this.updateVectorLabel = this.updateVectorLabel.bind(this)
        this.displayVectorInputs = this.displayVectorInputs.bind(this)
        this.displayVectorValues = this.displayVectorValues.bind(this)
    }


    buildStepSizeEntry () {

        var stepSizeWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            gap: "15px"
        }

        return(
            <div style={stepSizeWrapperStyle}>
                Step size: 

                <input type="text"
                    value={this.props.stepSize}
                    onChange={(event) => this.props.updateStepSize(event.target.value)}
                    style={{width: this.labelWidth}}/>
            </div>
        );

    }


    formatDataRow (label, x, y) {
        return (
            <div style={this.vectorHeaderWrapperStyle}>
                <div style={{width: this.labelWidth}} >
                    {label}
                </div>
                <div style={{width: this.vectorIndexWidth}}>
                    {x}
                </div>
                <div style={{width: this.vectorIndexWidth}}>
                    {y}
                </div>
            </div>
        );

    }



    addEmptyVector () {
        var newVectors = this.props.initVectors.concat({label: null, vec:[null, null]});

        this.props.passUpVectors(newVectors);
        this.props.addNewVectorToGraph();
    }



    updateVectorIndex (vectorNumber, index, newValue) {
        var newVectors = this.props.initVectors.map((elem, listIndex) =>
            {
                if (listIndex === vectorNumber) {
                    var newVector = elem.vec.map((el, vecIndex) =>
                        {
                            if (vecIndex === index) {
                                return newValue;
                            } else {
                                return el;
                            }
                        }
                    );

                    return ({
                        label: elem.label,
                        vec: newVector
                    });

                } else {
                    return elem;
                }
            }
        );

        this.props.passUpVectors(newVectors);
    }



    updateVectorLabel (vectorNumber, newLabel) {
        var newVectors = this.props.initVectors.map((elem, listIndex) =>
            {
                if (listIndex === vectorNumber) {
                    return ({
                        label: newLabel,
                        vec: elem.vec
                    });

                } else {
                    return elem;
                }
            }
        );

        this.props.passUpVectors(newVectors);
    }



    displayVectorInputs (vec, vectorNumber) {

        return (
            this.formatDataRow(
                <input type="text"
                       value={vec.label}
                       onChange={(event) => this.updateVectorLabel(vectorNumber, event.target.value)}
                       style={{width: this.labelWidth}}/>,
                <input type="text"
                       value={vec.vec[0]}
                       onChange={(event) => this.updateVectorIndex(vectorNumber, 0, event.target.value)}
                       style={{width: this.vectorIndexWidth}}/>,
                <input type="text"
                       value={vec.vec[1]}
                       onChange={(event) => this.updateVectorIndex(vectorNumber, 1, event.target.value)}
                       style={{width: this.vectorIndexWidth}}/>
            )
        );
    }


    displayVectorValues (vec) {

        // var label = "";
        var x = "";
        var y = "";

        // if (vec.label != null) {
        //     label = vec.label;
        // } 

        if (vec.vec[0] != null) {
            x = Number(vec.vec[0]).toFixed(4);
        }

        if (vec.vec[1] != null) {
            y = Number(vec.vec[1]).toFixed(4);
        }

        return (
            this.formatDataRow(
                <div style={{width: this.labelWidth}}>
                    {vec.label}
                </div>,
                <div style={{width: this.vectorIndexWidth}}>
                    {x}
                </div>,
                <div style={{width: this.vectorIndexWidth}}>
                    {y}
                </div>
            )
        );
    }


    render () {

        var vectorDisplayWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "250px",
            //backgroundColor: "#ffcfff"
        };

        var addVectorButtonStyle = {
            width: "100px"
        };

        var controlRunButtonStyle = {
            width: "200px"
        };

        var controlRunButtonText = "Run Burer-Monteiro";
        
        if (this.props.isRunning) {
            controlRunButtonText = "Pause Burer-Monteiro";
        }

        var vectorHeader = 
                this.formatDataRow(
                    <div style={{width: this.labelWidth}}>
                        Label
                    </div>,
                    <div style={{width: this.vectorIndexWidth}}>
                        x
                    </div>,
                    <div style={{width: this.vectorIndexWidth}}>
                        y
                    </div>
                );

        var vectorInputDisplays = this.props.initVectors.map(this.displayVectorInputs);

        var vectorValueDisplays = this.props.currentVectors.map(this.displayVectorValues);

        var stepSizeEntry = this.buildStepSizeEntry();

        return (
            <div style={vectorDisplayWrapperStyle}>
                <b>Initialize Vectors:</b>

                {vectorHeader}

                {vectorInputDisplays}

                <button onClick={this.addEmptyVector}
                        style={addVectorButtonStyle}>
                    Add vector
                </button>

                <br/>

                <b> Where are they now?</b>

                {stepSizeEntry}

                <button onClick={this.props.controlRun}
                        style={controlRunButtonStyle}>
                    {controlRunButtonText}
                </button>

                {vectorHeader}

                {vectorValueDisplays}

            </div>
        );
    }

}

export default VectorTextDisplay;