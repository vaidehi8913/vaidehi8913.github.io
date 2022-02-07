import React, { Component } from "react";

import TwoDVectorDisplay from "./TwoDVectorDisplay";
import VectorTextDisplay from "./VectorTextDisplay";
import GraphTextDisplay from "./GraphTextDisplay";

class BurerMonteiro extends Component {

    constructor(props){
        super(props);

        this.state = {
            initialVectors: [],
            // vectors are stored as {label: ..., vec: [..., ...]}
            graph: [],
            // graphs are stored as lists of rows
            // {row:[]}
            currentVectors: [],
            isRunning: false,
            stepSize: 0.5 
        };

        this.updateStepSize = this.updateStepSize.bind(this);
        this.logVectors = this.logVectors.bind(this);
        this.logGrad = this.logGrad.bind(this);
        this.calculateGradient = this.calculateGradient.bind(this);
        this.moveAgainstGradient = this.moveAgainstGradient.bind(this);
        this.normalizeVector = this.normalizeVector.bind(this);
        this.stepBurerMonteiro = this.stepBurerMonteiro.bind(this);
        this.tick = this.tick.bind(this);
        this.controlRun = this.controlRun.bind(this);
        this.passUpVectors = this.passUpVectors.bind(this);
        this.addNewVectorToGraph = this.addNewVectorToGraph.bind(this);
        this.updateGraph = this.updateGraph.bind(this);
    }


    updateStepSize (newStepSize) {
        this.setState({
            stepSize: newStepSize
        });
    }


    logVectors (vecs) {
        
        console.log("VECTORS ------");

        var garbage = vecs.map((vec, index) =>
            {
                console.log("label: " + vec.label 
                            + ", index: " + index 
                            + ", coords: (" + vec.vec[0] + ", " + vec.vec[1] + ")");
            }
        );

        console.log("-------------");
    }

    logGrad (grad) {

        console.log("GRADIENT ------");

        var garbage = grad.map((indivgrad, index) =>
            {
                console.log("index: " + index + ", grads: (" + indivgrad.grad[0] + ", " + indivgrad.grad[1] + ")");
            }
        );

        console.log("-------------");
    }

    /* These actually run Burer-Monteiro */

    calculateGradient () {
        
        // should generate a list that of items that look like 
        // {grad: [x, y]}

        var grad = this.state.currentVectors.map((vec, vecIndex) =>
            {
                var xGrads = this.state.currentVectors.map((dotWith, dotWithIndex) =>
                    (this.state.graph[vecIndex].row[dotWithIndex] * dotWith.vec[0])
                );

                var yGrads = this.state.currentVectors.map((dotWith, dotWithIndex) =>
                    (this.state.graph[vecIndex].row[dotWithIndex] * dotWith.vec[1])
                );

                var xGrad = xGrads.reduce((a, b) => a + b, 0);
                var yGrad = yGrads.reduce((a, b) => a + b, 0);

                return ({grad: [xGrad, yGrad]});
            }
        );

        return grad;
    }

    moveAgainstGradient (vecs, grad) {
        // move vectors in the direction of the minimum gradient

        var newVectors = vecs.map((vec, vecIndex) =>
            {
                var oldX = vec.vec[0];
                var oldY = vec.vec[1];

                var xGrad = grad[vecIndex].grad[0];
                var yGrad = grad[vecIndex].grad[1];

                var newX = Number(oldX) + (xGrad * this.state.stepSize * -1);
                var newY = Number(oldY) + (yGrad * this.state.stepSize * -1);

                return ({label: vec.label, vec: [newX, newY]});
            }
        );

        return newVectors;
    }

    normalizeVector (vec) {
        var oldX = vec.vec[0];
        var oldY = vec.vec[1];
        var oldNorm = Math.sqrt((oldX * oldX) + (oldY * oldY));

        var newX = oldX / oldNorm;
        var newY = oldY / oldNorm;

        return ({label: vec.label, vec: [newX, newY]});
    }

    stepBurerMonteiro () {
        // should add a catch here to stop updating once the gradient is basically 0
        var grad = this.calculateGradient();

        var unnormedVecs = this.moveAgainstGradient(this.state.currentVectors, grad);

        var normedVecs = unnormedVecs.map(this.normalizeVector);

        this.setState({
            currentVectors: normedVecs
        });
    }

    tick () {
        //console.log("tick");

        if (this.state.isRunning) {
            this.stepBurerMonteiro();
        }
    }

    componentDidMount () {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    controlRun () {
        this.setState({
            isRunning: !this.state.isRunning
        });
    }

    /* The rest of this is for UI and input */

    passUpVectors(newVecs) {
        this.setState({
            initialVectors: newVecs,
            currentVectors: newVecs,
            isRunning: false
        });
    }

    addNewVectorToGraph () {

        if (this.state.graph.length === 0) {
            this.setState({
                graph: [{row: [0]}]
            });
        } else {
            
            var addColumns = this.state.graph.map((r) =>
                {
                    return({row: r.row.concat(0)});
                }
            );

            var someRow = addColumns[0].row;

            var newRow = {row: someRow.map((r) => 0)};

            var totalGraph = addColumns.concat(newRow);

            this.setState({
                graph: totalGraph
            });

        }

    }

    updateGraph (row, column, newValue) {

        var newGraph = this.state.graph.map((rowData, rowIndex) =>
            {
                if (rowIndex === row || rowIndex === column) {

                    var newRowData = rowData.row.map((value, colIndex) =>
                        {
                            if ((rowIndex === row && colIndex === column)
                                || (rowIndex === column && colIndex === row)) {
                                return newValue;
                            } else {
                                return value;
                            }
                        }
                    );

                    return ({row: newRowData});

                } else {
                    return rowData;
                }
            }
        );

        this.setState({
            graph: newGraph
        });
    }

    render() {

        var topLevelWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            marginTop: "100px"
        };

        return (
            <div style={topLevelWrapperStyle}>
                <TwoDVectorDisplay vectorList={this.state.currentVectors}
                                   graph={this.state.graph}
                                   displayGraph={true}/>
                <VectorTextDisplay passUpVectors={this.passUpVectors}
                                   addNewVectorToGraph={this.addNewVectorToGraph}
                                   isRunning={this.state.isRunning}
                                   controlRun={this.controlRun}
                                   updateStepSize={this.updateStepSize}
                                   stepSize={this.state.stepSize}
                                   initVectors={this.state.initialVectors}
                                   currentVectors={this.state.currentVectors}/>
                <GraphTextDisplay graph={this.state.graph}
                                  vecs={this.state.initialVectors}
                                  updateGraph={this.updateGraph}/>
            </div>
        );
    }
}

export default BurerMonteiro; 