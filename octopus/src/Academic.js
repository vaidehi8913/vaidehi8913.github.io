import React, { Component } from "react";
// import {
//     Link
// } from "react-router-dom";

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
            maxWidth: "40%",
            scrollBehavior: "smooth"
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
                                I am a first-year Ph.D. student in the Computer Science 
                                <a href= "https://theory.cs.northwestern.edu/"> Theory group</a> at Northwestern University, advised by 
                                <a href="http://users.eecs.northwestern.edu/~aravindv/"> Aravindan Vijayaraghavan</a>.    
                                I am interested in designing and analyzing simple algorithms that are practical for 
                                real-world input.
                            </p>

                            <p>
                                Before Northwestern, I was a 
                                <a href="https://us.fulbrightonline.org/countries/europe-and-eurasia/austria/255"> Fulbright </a> 
                                visting student at the University of Vienna in the 
                                <a href="https://taa.cs.univie.ac.at"> Theory and Applications of Algorithms group</a>, 
                                and I earned my B.S. in Computer Science at 
                                <a href="https://www.cs.cmu.edu//"> Carnegie Mellon University</a>. <i>Ich spreche auch 
                                gerne Deutsch!</i>
                            </p>
                            
                            <br/>

                            <font size="+2">Research Projects</font><br/><br/>
                            
                            <b>The Burer-Monteiro SDP method can fail even above the Barvinok-Pataki bound</b><br/>
                            <i>with Liam O'Carroll, <a href="http://users.eecs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>, </i><br/>
                            in submission. 

                            <p>
                            The Burer-Monteiro method is a practical and popular heuristic for solving semidefinite programs 
                            (SDPs).  We provide a family of instances that have spurious local minima for high rank
                            (so Burer-Monteiro could indeed fail), which justifies the use of beyond-worst-case paradigms 
                            like smoothed analysis to obtain guarantees.
                            </p><br/>

                            <b>Memory Bounds for the Experts Problem</b> <a href="http://arxiv.org/abs/2204.09837">[arXiv]</a> <br/>
                            <i> with <a href="http://www.cs.cmu.edu/~dwoodruf/">David P. Woodruff</a>, <a href="https://neilzxu.me/">Ziyu Xu</a>, 
                            <a href="https://samsonzhou.github.io/">Samson Zhou</a>, </i><br/>
                            to appear in <a href="http://acm-stoc.org/stoc2022/">STOC 2022.</a>

                            <p>
                            We initiate the study of the online learning with expert advice problem in the streaming (low-memory) setting.  
                            Our upper and lower bounds give a smooth tradeoff between memory and regret (accuracy). 
                            </p><br/>
                            
                            <b>Simpler Approximations for the Network-Steiner Tree Problem</b> <a href={SeniorThesis}>[pdf]</a><br/> 
                            <i>advised by <a href="http://www.cs.cmu.edu/~anupamg/">Anupam Gupta</a>,</i><br/>
                            Senior Thesis, 2020.
                            
                            <p>
                            The 11/6 and 1.55-approximation algorithms for the Network-Steiner tree problem given by Zelikovsky 
                            (&#39;93) and Robins and Zelikovsky (&#39;05) are classic results in approximation algorithms.  They are 
                            also notorious for their very technical analyses.  We explore an idea due to Deeparnab Chakrabarty, 
                            and provide a simple modular analysis by reducing to submodular function optimization under knapsack 
                            constraints. 
                            </p><br/>

                            <br/>

                            <font size="+2">Other</font><br/><br/>
                            
                            A more complete list of my projects and interests are in my <a href={CV}><b>CV</b></a> (last updated fall 2021).<br/><br/>

                            {/* I also draw <Link to="/octopus">comics</Link>. Some are even CS related!  */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Academic;