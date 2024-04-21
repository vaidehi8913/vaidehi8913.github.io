import React, { Component } from "react";
//import {TouchableOpacity} from "react-native";
// import {
//     Link
// } from "react-router-dom";
import { useRef } from 'react';

import CV from "./files/SrinivasCVWinter24.pdf";
import SeniorThesis from "./files/SimplerApproximationsForNetworkSteinerTree.pdf";
import SmoothedStuff from "./files/STOC2024_smoothedanalysis.pdf";


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
            width: "80%",
            maxWidth: "250px",
            borderRadius: "50%"
        }

        return(
            <img src={imgSource} alt="Vaidehi" style={imageStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} 
            />
        );
    }
}

/* PROPS
mainPaperInfo (formatted)
paperDescription (dropdown)
*/
class PaperWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDown: false,
            hovering: false
        }

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onClick(e) {
        var isDropped = this.state.dropDown;
        this.setState({dropDown: !isDropped});
    }

    onMouseEnter(e) {
        this.setState({hovering: true});
    }    

    onMouseLeave(e) {
        this.setState({hovering: false});
    }

    render () {

        var permanentBoxStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between"
        }

        var dropDownBox = null;

        var invertColorScheme = this.state.dropDown || this.state.hovering;

        var mainColor = invertColorScheme ? null : "black";
        var textColor = invertColorScheme ? "black" : "#fffcf0";

        var feedbackButtonStyle = {
            width: "15px",
            height: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 100,
            backgroundColor: mainColor,
            margin: "15px",
            color: textColor,
            fontSize: "65%",
            borderColor: "black",
            borderWidth: "3px",
            borderStyle: "solid"
        };

        if (this.state.dropDown) {
            dropDownBox = <div>{this.props.paperDescription}</div>;
        }

        return(
            <div>
                <div style={permanentBoxStyle}>
                    {this.props.mainPaperInfo}

                    <div style={feedbackButtonStyle}
			      	  onClick={this.onClick}
                      onMouseEnter={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}>
		              {this.state.dropDown ? "less!" : "more!"}
		            </div>
                
                </div>

                {dropDownBox}

            </div>
        );
    }

}


class Academic extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDesktop: false 
        }

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    
    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 850 });
        // console.log("new width: " + window.innerWidth );
        // console.log("what? " + window.innerWidth > 500);
        // console.log("isDesktop: " + this.state.isDesktop);
    }

    render () {

        /* STYLES */

        this.backgroundBoxStyle = {
            backgroundColor: "#fffcf0",
            overflow: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100vh"
        }

        this.spacerStyle = {
            height: "25px"
        }

        this.longSpacerStyle = {
            height: this.state.isDesktop ? "100px" : "25px"
        }

        this.academicBoxStyle = {
            display: "flex",
            flexDirection: this.state.isDesktop ? "row" : "column",
            justifyContent: "space-around",
            alignItems: this.state.isDesktop ? "flex-start" : "center",
            //height: "700px",
            //backgroundColor: "#f2c7f2"
        }

        this.innerWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
        }

        this.leftBoxStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1",
            margin: "5px",
            maxWidth: this.state.isDesktop ? "30%" : "70%",
            fontFamily: "'Open Sans', sans-serif"
        }

        this.rightBoxStyle = {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            margin: "5px",
            maxWidth: this.state.isDesktop ? "50%" : "80%",
            scrollBehavior: "smooth"
        }

        this.nameStyle = {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "200%",
            textAlign: "center"
        }

        this.pronounsStyle = {
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "120%",
            textAlign: "center"
        }

        this.emailStyle = {
            fontFamily: "monospace",
            fontSize: "120%",
            textAlign: "center"
        }



        /* CONTENT */


        var predictedUpdatesPaperMainInfo = 
            <div> 
                <b>The Predicted-Updates Dynamic Model: Offline, Incremental, and Decremental to Fully Dynamic Transformations</b> <a href="https://arxiv.org/abs/2307.08890">[arXiv]</a> <br/>
                <i>with <a href="https://quanquancliu.com/">Quanquan C. Liu</a>, </i><br/>
                Preprint. 
            </div>;

        var predictedUpdatesPaperDescription = 
            <p>
                We introduce the predicted-updates dynamic model, one of the first beyond-worst-case models 
                for dynamic algorithms.  We give a novel framework that "lifts" offline divide-and-conquer 
                algorithms to the fully dynamic setting, when given predictions of update times.  Our 
                runtime matches that of the offline algorithm when the L1 prediction error is near-linear 
                in the number of updates, does no worse than a fully-dynamic algorithm when the prediction 
                error is high, and exhibits a graceful linear tradeoff between the two cases.  We further 
                generalize our result to lift incremental and decremental algorithms to the fully dynamic 
                setting given predictions of only the deletion and insertion updates, respectively.
            </p>;


        var smoothedStuffPaperMainInfo = 
            <div> 
                <b>New Tools for Smoothed Analysis: Least Singular Value Bounds for Random Matrices with Dependent Entries</b> <a href={SmoothedStuff}>[conference version]</a> <br/>
                <i>with <a href="https://users.cs.utah.edu/~bhaskara/">Aditya Bhaskara</a>, <a href="https://ericevert.com/">Eric Evert</a>, <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>, </i><br/>
                <a href="http://acm-stoc.org/stoc2024/">STOC 2024</a>. 
            </div>;

        var smoothedStuffPaperDescription = 
            <p>
                We develop new techniques for proving lower bounds on the least singular value of structured 
                random matrices with limited randomness.  Showing that such matrices are well-conditioned is 
                a key step in providing "smoothed analysis" guarantees in many settings.  Our new techniques
                both simplify known results and generalize to new settings, allowing us to get smoothed 
                analysis results for previously open settings.  Statements of this form are
                matrix "anti-concentration" inequalities, which require a different set of techniques and are 
                not as well-understood as matrix concentration (or large deviation) bounds.
            </p>;    


        var burerMonteiroPaperMainInfo = 
            <div> 
                <b>The Burer-Monteiro SDP method can fail even above the Barvinok-Pataki bound</b> <a href="https://arxiv.org/abs/2211.12389">[arXiv]</a> <a href="https://vaidehi8913.github.io/burer-monteiro/">[webapp]</a> <br/>
                <i>with <a href="https://liamocarroll.github.io">Liam O'Carroll</a>, <a href="http://users.eecs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>, </i><br/>
                <a href="https://nips.cc/virtual/2022/poster/54028">NeurIPS 2022</a>. 
            </div>;

        var burerMonteiroPaperDescription = 
            <p>
                The Burer-Monteiro method is a practical and popular heuristic for solving semidefinite programs 
                (SDPs).  We provide a family of instances that have spurious local minima for high rank
                (so Burer-Monteiro could indeed fail), which justifies the use of beyond-worst-case paradigms 
                like smoothed analysis to obtain guarantees.
            </p>;

        var expertsPaperMainInfo = 
            <div>
                <b>Memory Bounds for the Experts Problem</b> <a href="http://arxiv.org/abs/2204.09837">[arXiv]</a> 
                    <a href="https://www.youtube.com/watch?v=kIwS5Z3PF3M">[video]</a><br/>
                <i> with <a href="http://www.cs.cmu.edu/~dwoodruf/">David P. Woodruff</a>, <a href="https://neilzxu.me/">Ziyu Xu</a>, <a href="https://samsonzhou.github.io/">Samson Zhou</a>, </i><br/>
                <a href="http://acm-stoc.org/stoc2022/">STOC 2022</a>.
            </div>;

        var expertsPaperDescription = 
            <p>
                We initiate the study of the online learning with expert advice problem in the streaming (low-memory) setting.  
                Our upper and lower bounds give a smooth tradeoff between memory and regret (accuracy). 
            </p>;

        var steinerTreePaperMainInfo = 
            <div>
                <b>Simpler Approximations for the Network-Steiner Tree Problem</b> <a href={SeniorThesis}>[pdf]</a><br/> 
                <i>advised by <a href="http://www.cs.cmu.edu/~anupamg/">Anupam Gupta</a>,</i><br/>
                Undergraduate Thesis, 2020.
            </div>;

        var steinerTreePaperDescription = 
            <p>
                The 11/6 and 1.55-approximation algorithms for the Network-Steiner tree problem given by Zelikovsky 
                (&#39;93) and Robins and Zelikovsky (&#39;05) are classic results in approximation algorithms.  They are 
                also notorious for their very technical analyses.  We provide a simple modular analysis by reducing to 
                submodular function optimization under knapsack constraints (idea due to Deeparnab Chakrabarty). 
            </p>;


        /* OBJECT */

        return (
            <div className="background-color" style={this.backgroundBoxStyle}>

            <div className="inner-wrapper" stype={this.innerWrapperStyle}>

                <div className="spacer" style={this.spacerStyle}/>   

                <div className="academic-box" style={this.academicBoxStyle}>
                    

                    <div className="left-box" style={this.leftBoxStyle}>

                        <div className="longspacer" style={this.longSpacerStyle}/>
                        
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

                        <div className="longspacer" style={this.longSpacerStyle}/>
                    </div>

                    <div className="right-box" style={this.rightBoxStyle}>
                        <div>
                            <p>
                                I am a third-year Ph.D. student in the Computer
                                Science <a href= "https://theory.cs.northwestern.edu/">Theory group</a> at Northwestern 
                                University, advised  
                                by <a href="http://users.eecs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>.    
                            </p>

                            <p>
                                I am interested in designing and analyzing simple algorithms that are practical for 
                                real-world input.
                            </p>

                            <p>
                                Before Northwestern, I was 
                                a <a href="https://us.fulbrightonline.org/countries/europe-and-eurasia/austria/255">Fulbright </a> 
                                visting student at the University of Vienna in 
                                the <a href="https://taa.cs.univie.ac.at">Theory and Applications of Algorithms group</a>, 
                                and I earned my B.S. in Computer Science at Carnegie Mellon University. 
                                I am grateful to be supported by the <a href="https://www.tgs.northwestern.edu/funding/fellowships-and-grants/internal-fellowships-grants/presidential-fellowship-winners/fellowship-winners.html">Northwestern Presidential Fellowship</a>. 
                            </p>

                            {/*<p>
                                <i>Ich spreche auch gerne Deutsch!</i>
                            </p>*/}
                            
                            <br/>

                            <font size="+2">Research</font><br/><br/>
                            
                            <PaperWrapper mainPaperInfo={predictedUpdatesPaperMainInfo}
                                          paperDescription={predictedUpdatesPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={smoothedStuffPaperMainInfo}
                                          paperDescription={smoothedStuffPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={burerMonteiroPaperMainInfo}
                                          paperDescription={burerMonteiroPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={expertsPaperMainInfo}
                                          paperDescription={expertsPaperDescription}/>

                            <br/>
                            
                            <PaperWrapper mainPaperInfo={steinerTreePaperMainInfo}
                                          paperDescription={steinerTreePaperDescription}/>
                    
                            <br/>
                            <br/>

                            <font size="+2">Other</font><br/><br/>
                            
                            A more complete list of my projects and interests are in my <a href={CV}><b>CV</b></a> (last updated winter 2024).<br/><br/>

                            {/* I also draw <Link to="/octopus">comics</Link>. Some are even CS related!  */}

                            <div className="longspacer" style={this.longSpacerStyle}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Academic;