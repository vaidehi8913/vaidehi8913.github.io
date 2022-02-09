import React, { Component } from "react";
import { Stage, 
    Layer, 
    Line, 
    Circle,
    Ellipse,
    Text } from "react-konva";

/*
    PROPS
    vectorList
    graph
    displayGraph (boolean)
*/
class ThreeDVectorDisplay extends Component {

    constructor(props) {
        super(props);

        this.stageWidth = 400;
        this.stageHeight = this.stageWidth;
        this.midX = this.stageWidth / 2;
        this.midY = this.stageWidth / 2;
        this.circMargin = 50;
        this.circRadius = (this.stageWidth)/2 - this.circMargin;
        this.zaxisX = 0.25;
        this.zaxisY = -0.25; // how we are going to project the z direction
    }

    project3dto2d (vec) {
        var newX = vec.vec[0] + vec.vec[2] * this.zaxisX;
        var newY = vec.vec[0] + vec.vec[2] * this.zaxisY;
    }



    render() {

        var vectorDisplayWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "400px",
            //backgroundColor: "#cfecff"
        };

        var xaxisLinePoints = [this.midX - this.circRadius, this.midY, this.midX + this.circRadius, this.midY];
        var yaxisLinePoints = [this.midX, this.midY - this.circRadius, this.midX, this.midY + this.circRadius];
        var zaxisLinePoints = [this.zaxisX * this.circRadius + this.midX, 
                               this.zaxisY * this.circRadius + this.midY,
                               -1 * this.zaxisX * this.circRadius + this.midX, 
                               -1 * this.zaxisY * this.circRadius + this.midY];

        var yZeroEllipseWidth = this.circRadius;
        var yZeroEllipseHeight = this.circRadius / Math.sqrt(15);
        var yZeroEllipseRadius = {x: yZeroEllipseWidth, y: yZeroEllipseHeight};
        var xZeroEllipseRadius = {x: yZeroEllipseHeight, y: yZeroEllipseWidth};

        return (
            <div style={vectorDisplayWrapperStyle}>

                <b>3D Vector Display:</b>

                <Stage width={this.stageWidth} height={this.stageHeight}>
                    <Layer>
                        <Circle radius={this.circRadius} 
                                x={this.midX} 
                                y={this.midY} 
                                stroke="gray"/>
                        <Line points={xaxisLinePoints} 
                              stroke="gray"
                              dash={[5, 5]}/>
                        <Line points={yaxisLinePoints} 
                              stroke="gray"
                              dash={[5, 5]}/>
                        <Line points={zaxisLinePoints} 
                              stroke="gray"
                              dash={[5, 5]}/>
                        <Ellipse radius={yZeroEllipseRadius} 
                                 x={this.midX}
                                 y={this.midY}
                                 stroke="gray"
                                 dash={[5, 5]}/>
                        <Ellipse radius={xZeroEllipseRadius} 
                                 x={this.midX}
                                 y={this.midY}
                                 stroke="gray"
                                 dash={[5, 5]}/>
                    </Layer> 

                </Stage>

            </div>
        );
    }

}

export default ThreeDVectorDisplay;