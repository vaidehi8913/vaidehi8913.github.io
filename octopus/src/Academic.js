import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

import CV from "./files/SrinivasCVFall21.pdf";
import SeniorThesis from "./files/SimplerApproximationsForNetworkSteinerTree.pdf";


class ProfilePicture extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            hover: false
        });

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        this.setState({
            hover: true
        });
    }

    onMouseLeave(){
        this.setState({
            hover: false
        });
    }

    render () {

        var imgSource = require("./img/profile.jpg");

        if (this.state.hover) {
            imgSource = require("./img/profile-alt.png");
        }

        var imageStyle = {
            width: "250px",
            borderRadius: "50%"
        }

        return(
            <img src={imgSource} alt="Vaidehi" style={imageStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} 
            />
        );
    }
}


class Academic extends Component {

    constructor(props){
        super(props);

        this.backgroundBoxStyle = {
            backgroundColor: "#fffcf0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100vh"
        }

        this.spacerStyle = {
            height: "25px"
        }

        this.academicBoxStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "700px",
            //backgroundColor: "#f2c7f2"
        }

        this.innerWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }

        this.leftBoxStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1",
            margin: "5px",
            maxWidth: "40%",
            fontFamily: "'Open Sans', sans-serif"
        }

        this.rightBoxStyle = {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            margin: "5px",
            maxWidth: "40%"
        }

        this.nameStyle = {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "200%"
        }

        this.pronounsStyle = {
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "120%"
        }

        this.emailStyle = {
            fontFamily: "monospace",
            fontSize: "120%"
        }
    }

    render () {

        return (
            <div className="background-color" style={this.backgroundBoxStyle}>

            <div className="inner-wrapper" stype={this.innerWrapperStyle}>

                <div className="spacer" style={this.spacerStyle}/>   

                <div className="academic-box" style={this.academicBoxStyle}>
                    

                    <div className="left-box" style={this.leftBoxStyle}>
                        
                        <ProfilePicture />
                        
                        <div style={{height: "15px"}}/>
                        <div className="name" style={this.nameStyle}>
                            Vaidehi Srinivas
                        </div>

                        <div style={{height: "10px"}}/>
                        <div className="pronouns" style={this.pronounsStyle}>
                            (she/her)<br/>
                        </div>

                        <div style={{height: "15px"}}/>
                        <div className="email" style={this.emailStyle}>
                            [firstname] AT u DOT northwestern DOT edu
                        </div>
                    </div>

                    <div className="right-box" style={this.rightBoxStyle}>
                        <div>
                            <p>
                                I am a first-year Ph.D. student in the <a href= "https://theory.cs.northwestern.edu/"> 
                                Computer Science Theory group at Northwestern University</a>.    
                            </p>

                            <p>
                                Before that, I was a <a href="https://us.fulbrightonline.org/countries/europe-and-eurasia/austria/255">Fulbright</a> visting student at the <a href="https://taa.cs.univie.ac.at">University of Vienna</a>, 
                                and I earned by B.S. in Computer Science at <a href="https://www.cs.cmu.edu//">Carnegie Mellon University</a>.
                            </p>
                            
                            <br/>

                            <font size="+2">Research Projects</font><br/><br/>
                            
                            <b>Memory Bounds for the Experts Problem</b><br/>
                            <i> with <a href="http://www.cs.cmu.edu/~dwoodruf/">David P. Woodruff</a>, <a href="https://neilzxu.me/">Ziyu Xu</a>, <a href="https://samsonzhou.github.io/">Samson Zhou</a>. in submission 2021.</i><br/><br/>
                            
                            <b>Simpler Approximations for the Network-Steiner Tree Problem</b> <a href={SeniorThesis}>(pdf)</a><br/> <i> Senior Thesis, advised by <a href="http://www.cs.cmu.edu/~anupamg/">Anupam Gupta</a>, 2020.</i><br/><br/>
                            
                            <br/>

                            <font size="+2">Other</font><br/><br/>
                            
                            A more complete list of my projects and interests are in my <a href={CV}><b>CV</b></a> (last updated fall 2021).<br/><br/>

                            I also draw <Link to="/octopus">comics</Link>. Some are even CS related! 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Academic;