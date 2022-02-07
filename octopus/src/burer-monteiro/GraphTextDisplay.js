import React, { Component } from "react";

/*
    PROPS
    graph
    vecs
    updateGraph
*/
class GraphTextDisplay extends Component {

    constructor(props) {
        super(props);

        this.graphCellWidth = "50px";
        this.graphCellGap = "15px";
        this.graphRowStyle = {
            display: "flex",
            flexDirection: "row",
            gap: this.graphCellGap
        };

        this.generateGraphRow = this.generateGraphRow.bind(this);
        this.generateGraphDisplay = this.generateGraphDisplay.bind(this);
    }

    generateGraphRow (label, data, row) {
        var cellStyle = {
            width: this.graphCellWidth,
            height: this.graphCellWidth,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            //backgroundColor: "#ffbcb8"
        }

        var inputStyle = {
            width: "40px"
        };

        var formattedData = data.map((value, col) => 
            {
                if (row > col || row < 0) {
                    return (
                        <div style={cellStyle}>
                            {value}
                        </div>
                    );
                } else {
                    return (
                        <div style={cellStyle}>
                            <input type="text"
                                   value={value}
                                   onChange={(event) => this.props.updateGraph(row, col, event.target.value)}
                                   style={inputStyle}/>
                        </div>
                    )
                };
            }
        );

        return (
            <div style={this.graphRowStyle}>
                <div style={cellStyle}>
                    {label}
                </div>

                {formattedData}
            </div>
        );

    }


    generateGraphDisplay () {
        var graphWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            gap: this.graphCellGap
        }

        var vectorLabels = this.props.vecs.map((elem) => <b>{elem.label}</b>);

        var headerRow = this.generateGraphRow("", vectorLabels, -1);

        var dataRows = this.props.graph.map((rowData, rowIndex) =>
            this.generateGraphRow(vectorLabels[rowIndex], rowData.row, rowIndex)
        );

        return (
            <div style={graphWrapperStyle}>
                {headerRow}
                {dataRows}
            </div>
        );
    }


    render () {

        var vectorDisplayWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "600px",
            //backgroundColor: "#d5ffcc"
        };

        return (
            <div style={vectorDisplayWrapperStyle}>
                <b>Graph:</b>
                {this.generateGraphDisplay()}
            </div>
        );
    }
}

export default GraphTextDisplay;