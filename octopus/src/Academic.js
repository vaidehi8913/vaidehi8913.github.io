import React, { Component } from "react";
//import {TouchableOpacity} from "react-native";
// import {
//     Link
// } from "react-router-dom";
import { useRef } from 'react';
// import 'katex/dist/katex.min.css';
// import Latex from 'react-latex-next';
// import Latex from 'react-latex';
// import MathJax from 'react-mathjax2';

import CV from "./files/SrinivasCVSummer25.pdf";
import SeniorThesis from "./files/SimplerApproximationsForNetworkSteinerTree.pdf";
import SmoothedStuff from "./files/STOC2024_smoothedanalysis.pdf";
import seniorthesisslides from "./files/slides-seniorthesis.pdf";
import SWXZslides from "./files/slides-SWXZ22.pdf";
import OSVslides from "./files/slides-OSV22.pdf";
import BESVslides from "./files/slides-BESV24.pdf";
import LSslides from "./files/slides-LS24.pdf";
import SBslides from "./files/slides-SB24.pdf";
import BESVposter from "./files/poster-BESV24.pdf";
import LSposter from "./files/poster-LS24.pdf";
import SWXZposter from "./files/poster-SWXZ22.pdf";
import GSSVaslides from "./files/slides-GSSV25a.pdf";
import ASVslides from "./files/slides-ASV25.pdf";
// import OnlineConformalPDF from "./files/draft-online-conformal.pdf";
import ACDAslidesWTransitions from "./files/slides-ACDA-tutorial-transitions.pdf";
import ACDAslides from "./files/slides-ACDA-tutorial.pdf";
import GSSVbposter from "./files/poster-GSSV25b.pdf";


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
            alignItems: "flex-start",
            justifyContent: "space-between"
        }

        var dropDownBox = null;

        var invertColorScheme = this.state.dropDown || this.state.hovering;

        var foregroundColor = this.props.buttonColor ? this.props.buttonColor : "black";
        var backgroundColor = "#fffcf0";

        // var mainColor = invertColorScheme ? null : "black";
        // var textColor = invertColorScheme ? "black" : "#fffcf0";
        var mainColor = invertColorScheme ? null : foregroundColor;
        var textColor = invertColorScheme ? foregroundColor : backgroundColor;

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
            borderColor: foregroundColor, //"black",
            borderWidth: "3px",
            borderStyle: "solid"
        };

        if (this.state.dropDown) {
            dropDownBox = <div>{this.props.paperDescription}</div>;
        }

        return(
            <div style={permanentBoxStyle}>
                <div>
                    {this.props.mainPaperInfo}
                    {dropDownBox}
                </div>

                {this.props.paperDescription ? 
                <div style={feedbackButtonStyle}
                    onClick={this.onClick}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}>
                    {this.state.dropDown ? "less!" : "more!"}
                </div> : null}
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

        this.findMeStyle = {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            margin: "5px"
            // maxWidth: this.state.isDesktop ? "50%" : "80%",
            // scrollBehavior: "smooth"
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

        var niceGreen = "#14871e"; //"#22a82d";

        var announcementStyle = {
            color: niceGreen
        };

        /* CONTENT */

        // var acdaTutorialMainInfo = 
        //     <div style={announcementStyle}>
        //         <b>
        //             I am co-organizing a mini-tutorial on <i>Learning-Augmented Algorithms</i> at <a href="https://www.siam.org/conferences-events/siam-conferences/acda25/">ACDA 2025</a>, on 
        //             July 31 in Montreal, Canada.  
        //         </b>
        //     </div>;

        // var coltWorkshopDescription = 
        //     <p>
        //         The goal of the workshop is to bring together researchers working on diverse areas 
        //         of algorithms and statistics that develop techniques for quantifying and mitigating 
        //         the uncertainty of potentially unreliable predictions.  Some examples include 
        //         conformal prediction, algorithms with predictions, robust statistics, and 
        //         decision making.  We have a great lineup, please do spread the word!
        //     </p>;

        var findMe = 
            <div style={this.findMeStyle}>
                
                <font size="+2">Find me at</font> 

                <ul>
                    <li> <b>Oct '25 @ MIT, Boston, US:</b> <a href="https://risingstars-eecs.mit.edu/">MIT Rising Stars in EECS workshop</a> <br/><br/></li>
                    <li> <b>Aug '25 @ EPFL, Lausanne, CH:</b> <a href="https://optimization-unplugged.github.io/">Optimization Unplugged</a> workshop at the Bernoulli Center of EPFL <br/><br/></li>
                    <li> <b>Jul '25 @ Montreal, CA:</b> <a href="https://www.siam.org/conferences-events/past-event-archive/acda25/">ACDA</a> (SIAM Conference on Applied and Computational Discrete Algorithms)<br/><br/> </li>
                    <li> <b>Jul '25 @ Vancouver, CA:</b> <a href="https://icml.cc/">ICML</a> (International Conference on Machine Learning)<br/><br/> </li>
                    <li> <b>Jun '25 @ ENS Lyon, FR:</b> <a href="https://learningtheory.org/colt2025/">COLT</a> (Conference on Learning Theory)<br/><br/> </li>
                    <li> ... </li>
                </ul>
            </div>

        var bioMainInfo = 
            <p>
                I work on providing provable guarantees for machine learning tasks. A running technical 
                theme in my work has been the use of <i>beyond worst-case analysis</i> to 
                establish new kinds of theoretical guarantees.
            </p>;

        var bioDescription = 
            <p>
                There is a large 
                gap between the sophisticated machine learning methods that practitioners develop, 
                and the methods that we can analyze in theory.  I work towards closing this gap in two ways.

                <ul>
                    <li>The long-term research goal of machine learning theory is to understand why practical 
                        methods work so well in solving problems that are <i>intractable</i> in the worst case.  
                        I am interested in reasoning about how these methods perform in <i>non-worst-case</i> settings. 
                        This includes understanding when problems are tractable under paradigms 
                        like <i>smoothed analysis</i> <a href="https://arxiv.org/abs/2405.01517">[BE<b>S</b>V STOC'24]</a>, and applying these insights to study iterative 
                        optimization techniques in non-convex settings <a href="https://arxiv.org/abs/2211.12389">[O<b>S</b>V NeurIPS'22]</a> <a href={ASVslides}>[A<b>S</b>V NeurIPS'25]</a>. <br/><br/></li>

                    <li>In the meantime, new paradigms treat learned models as inherently unreliable, and design 
                        principled methods to use them as a black box.  My work in this space has focused 
                        on <i>algorithms with predictions</i>, which incorporates machine learned predictions into 
                        algorithmic decisions in a "risk-free" way <a href="https://arxiv.org/abs/2307.08890">[L<b>S</b> COLT'24]</a><a href="https://arxiv.org/abs/2405.03661">[B<b>S</b> SODA'25]</a>, 
                        and <i>conformal prediction</i>, which 
                        estimates the uncertainty of model predictions on the 
                        fly <a href="https://arxiv.org/abs/2502.16658">[GS<b>S</b>V ICML'25]</a> <a href="https://arxiv.org/abs/2504.02723">[GS<b>S</b>V COLT'25]</a>  <a href="https://arxiv.org/abs/2507.02496">[<b>S</b> '25]</a>.</li>
                </ul>
            </p>

        var alsPaperMainInfo = 
            <div> 
                <b>Guarantees for Alternating Least Squares in Overparameterized Tensor Decompositions</b> 
                    &nbsp;[paper coming soon...]<a href={ASVslides}>[slides]</a><br/>
                <i>with <a href="https://dion11ar.github.io/">Dionysis Arvanitakis</a>, <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>,</i><br/>
                NeurIPS 2025 (spotlight). 
            </div>;

        var alsPaperDescription = 
            <p>
                Alternating Least Squares (ALS) is the most popular method to compute tensor CP decompositions 
                in practice.  We provide convergence guarantees for this method in the overparameterized regime 
                by establishing a new connection to random matrix theory.  Our analysis provides new ways to 
                argue about overparamterization and random initialization.  
            </p>;

        var onlineConformalPaperMainInfo = 
            <div> 
                <b>Online Conformal Prediction with Efficiency Guarantees</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2507.02496">[arXiv]</a><br/>
                <i>preprint</i>. 
            </div>;

        var onlineConformalPaperDescription = 
            <p>
                Conformal prediction is the problem of generating confidence sets.  We study this problem 
                in an online formulation, while explicitly optimizing for efficiency (size of the confidence 
                sets).  We show that this problem admits very different guarantees than online learning, which
                can be thought of as its unconstrained counterpart. 
            </p>;
        
        var highDimConformalPaperMainInfo =
            <div> 
                <b>Computing High-Dimensional Confidence Sets for Arbitrary Distributions</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2504.02723">[arXiv]</a> <a href={GSSVaslides}>[slides]</a><br/>
                <i>with <a href="https://www.stat.uchicago.edu/~chaogao/">Chao Gao</a>, <a href="https://lirenshan.github.io/">Liren Shan</a>, <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>,</i><br/>
                <a href="https://learningtheory.org/colt2025/">COLT 2025</a>. 
            </div>;

        var highDimConformalPaperDescription = 
            <p>
                We learn the high-density region of an arbitrary distribution.  Given a target coverage, 
                and sample access to a distribution <i>D</i> over <i>n</i> dimensional space, we want to find a 
                set <i>S</i> such that the probability of a point from <i>D</i> landing in <i>S</i> is at
                least delta, and <i>S</i> is as small as possible.  Specifically, we restrict our attention
                to considering sets <i>S</i> that are Euclidean balls, and we provide approximation 
                algorithms that compete with the best ball.  This problem is spiritually related to robust
                statistics, in that we can think of it as trying to recover a delta fraction of "inliers"
                from the corrupted distribution <i>D</i>.  We show that using insights from robust 
                statistics, we can design a surprisingly simple algorithm that works, even assuming no
                structural properties about the inliers. 
            </p>;

        var conformalDPPaperMainInfo = 
            <div> 
                <b>Volume Optimality in Conformal Prediction with Structured Prediction Sets</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2502.16658">[arXiv]</a> <a href={GSSVbposter}>[poster]</a><br/>
                <i>with <a href="https://www.stat.uchicago.edu/~chaogao/">Chao Gao</a>, <a href="https://lirenshan.github.io/">Liren Shan</a>, <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>,</i><br/>
                <a href="https://icml.cc/virtual/2025/poster/44066">ICML 2025</a>. 
            </div>;

        var conformalDPPaperDescription = 
            <p>
                The goal of conformal prediction is to produce a confidence interval for a distribution 
                given samples.  A conformal predictor must achieve a given target coverage, assuming only 
                the exchangeability of the training examples and test example.  Among the many possible 
                ways to construct conformal predictors, one measure of efficiency that we may want to 
                optimize, is the volume of the output confidence set (i.e., a trivial predictor can always
                output the whole space, and a more efficient predictor outputs a lower volume set in expectation).
                In general, finding the lowest volume valid confidence interval is statistically intractable. 
                We observe that the problem becomes tractable when we restrict to comparing to confidence sets 
                that come from a family of bounded VC-dimension.  In one dimension, we give an efficient 
                distribution-free dynamic programming algorithm that competes with the best union 
                of <i>k</i> intervals. We also show how to combine this with the framework of 
                (Chernozhukov et al, 2021) to handle supervised learning problems.   
            </p>;


        var warmStartsPaperMainInfo = 
            <div> 
                <b>Competitive strategies to use "warm start" algorithms with predictions</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2405.03661">[arXiv]</a> 
                    <a href={SBslides}>[slides]</a><br/>
                <i>with <a href="https://home.ttic.edu/~avrim/">Avrim Blum</a>, </i><br/>
                <a href="https://www.siam.org/conferences-events/siam-conferences/soda25/program/">SODA 2025</a>. 
            </div>;

        var warmStartsPaperDescription = 
            <p>
                A "warm start" algorithm is one that takes an instance <i>I</i> and a predicted 
                solution <i>P</i> as input, and outputs the true solution <i>S</i> to <i>I</i> in time proportional 
                to the distance between <i>P</i> and <i>S</i> ("error" of the prediction).  Such algorithms 
                are useful when solving sequences of related instances.  We give competitive guarantees in 
                settings where instances come from a mixture of "clusters." 
            </p>;


        var predictedUpdatesPaperMainInfo = 
            <div> 
                <b>The Predicted-Updates Dynamic Model: Offline, Incremental, and Decremental to Fully Dynamic Transformations</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2307.08890">[arXiv]</a> 
                    <a href={LSslides}>[slides]</a>
                    <a href={LSposter}>[poster]</a><br/>
                <i>with <a href="https://quanquancliu.com/">Quanquan C. Liu</a>, </i><br/>
                <a href="https://learningtheory.org/colt2024/index.html">COLT 2024</a>. 
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
                <b>New Tools for Smoothed Analysis: Least Singular Value Bounds for Random Matrices with Dependent Entries</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2405.01517">[arXiv]</a> 
                    <a href="https://www.youtube.com/watch?v=KTFfq4q2kHc&list=PL2200vk1q4pnoZJZphNyvIFzB3UnUZEmj&index=34">[video]</a> 
                    <a href={BESVslides}>[slides]</a>
                    <a href={BESVposter}>[poster]</a>
                    <a href={SmoothedStuff}>[conference version]</a> <br/>
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
                <b>The Burer-Monteiro SDP method can fail even above the Barvinok-Pataki bound</b> 
                    &nbsp;<a href="https://arxiv.org/abs/2211.12389">[arXiv]</a> 
                    <a href={OSVslides}>[slides]</a>
                    <a href="https://vaidehi8913.github.io/burer-monteiro/">[webapp]</a> <br/>
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
                <b>Memory Bounds for the Experts Problem</b> 
                    &nbsp;<a href="http://arxiv.org/abs/2204.09837">[arXiv]</a> 
                    <a href="https://www.youtube.com/watch?v=kIwS5Z3PF3M">[video]</a>
                    <a href={SWXZslides}>[slides]</a>
                    <a href={SWXZposter}>[poster]</a><br/>
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
                <b>Simpler Approximations for the Network-Steiner Tree Problem</b> 
                    &nbsp;<a href={SeniorThesis}>[pdf]</a>
                    <a href={seniorthesisslides}>[slides]</a>
                    <a href="https://www.cs.cmu.edu/~tcortina/thesis/srinivas.pdf">[poster]</a><br/> 
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
                            vaidehi@u.northwestern.edu
                        </div>

                        {/* <div className="longspacer" style={this.longSpacerStyle}/> */}
                        <br/><br/> 

                        {this.state.isDesktop ? findMe : null}

                        
                    </div>

                    <div className="right-box" style={this.rightBoxStyle}>
                        <div>
                            <p>
                                I am a fifth-year Ph.D. student in the Computer
                                Science <a href= "https://theory.cs.northwestern.edu/">Theory group</a> at Northwestern 
                                University, advised  
                                by <a href="http://users.eecs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>.    
                            </p>

                            <PaperWrapper mainPaperInfo={bioMainInfo}
                                          paperDescription={bioDescription}/>

                            <p>
                                Before Northwestern, I was 
                                a <a href="https://us.fulbrightonline.org/countries/europe-and-eurasia/austria/255">Fulbright </a> 
                                visiting student at the University of Vienna in 
                                the <a href="https://taa.cs.univie.ac.at">Theory and Applications of Algorithms group</a>, 
                                and I earned my B.S. in Computer Science at Carnegie Mellon University. 
                                I am grateful to have been supported by the <a href="https://www.tgs.northwestern.edu/funding/fellowships-and-grants/internal-fellowships-grants/presidential-fellowship-winners/fellowship-winners.html">Northwestern Presidential Fellowship</a>. 
                            </p>

                            


                            <br/>

                            <font size="+2">Research</font><br/><br/>

                            <PaperWrapper mainPaperInfo={onlineConformalPaperMainInfo}
                                          paperDescription={onlineConformalPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={alsPaperMainInfo}
                                          paperDescription={alsPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={highDimConformalPaperMainInfo}
                                          paperDescription={highDimConformalPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={conformalDPPaperMainInfo}
                                          paperDescription={conformalDPPaperDescription}/>

                            <br/>

                            <PaperWrapper mainPaperInfo={warmStartsPaperMainInfo}
                                          paperDescription={warmStartsPaperDescription}/>

                            <br/>
                            
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

                            <font size="+2">Other</font>

                            <p>I gave part 2 of the <b>Mini-Tutorial on Learning-Augmented 
                            Algorithms</b> at <a href="https://www.siam.org/conferences-events/siam-conferences/acda25/program/program-abstracts/">ACDA 2025</a>.  
                            You can find my slides here: <a href={ACDAslidesWTransitions}>with transitions</a>, <a href={ACDAslides}>and without</a>.</p>

                            <p>I co-organized the <b><a href="https://vaidehi8913.github.io/predictions-and-uncertainty-colt25">Workshop on 
                            Predictions and Uncertainty</a></b> at <a href="https://learningtheory.org/colt2025/">COLT 2025</a>. 
                            The materials are up on the workshop website if you are interested in what we got up to.</p>
                            
                            <p>A more complete list of my projects and interests are in my <a href={CV}><b>CV</b></a> (last 
                            updated summer 2025).</p> <br/>

                            {/* I also draw <Link to="/octopus">comics</Link>. Some are even CS related!  */}

                            {this.state.isDesktop ? null : findMe }

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