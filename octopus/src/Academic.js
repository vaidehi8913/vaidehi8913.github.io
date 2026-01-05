import React, { Component } from "react";
import "./Academic.css";
// import { useRef } from 'react';
import FindMe from "./Map";

import CV from "./files/SrinivasCVFall25.pdf";
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
import FOCSScavHunt from "./files/focs24-scavenger-hunt.pdf";
import Srislides from "./files/slides-Sri26.pdf";

import arxivMainImg from "./img/arxiv-main.png";
import arxivAltImg from "./img/arxiv-alt.png";
import videoMainImg from "./img/video-main.png";
import videoAltImg from "./img/video-alt.png";
import slidesMainImg from "./img/slides-main.png";
import slidesAltImg from "./img/slides-alt.png";
import webMainImg from "./img/web-main.png";
import webAltImg from "./img/web-alt.png";
import posterMainImg from "./img/poster-main.png";
import posterAltImg from "./img/poster-alt.png";
import paperMainImg from "./img/paper-main.png";
import paperAltImg from "./img/paper-alt.png";
import googleScholarMainImg from "./img/google-scholar-main.png";
import googleScholarAltImg from "./img/google-scholar-alt.png";
import profileMainImg from "./img/profile.jpg";
import profileAltImg from "./img/profile-alt.png";
import plusMainImg from "./img/plus-main.png";
import plusAltImg from "./img/plus-alt.png";
import minusMainImg from "./img/minus-main.png";
import minusAltImg from "./img/minus-alt.png";
import cvMainImg from "./img/cv-main.png";
import cvAltImg from "./img/cv-alt.png";
import emailMainImg from "./img/email-main.png";
import emailAltImg from "./img/email-alt.png";



/*  
    PROPS:
        imgMain
        imgAlt
        imgWidth
        maxWidth
        borderRadius
        altText
        link
        onClick
*/
class HoverButton extends Component{

    constructor(props) {
        super(props);

        this.state = ({
            hover: false
        });

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
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

    onClick(){
        this.props.onClick()
    }

    render () {

        var imgSource = this.props.imgMain;

        if (this.state.hover) {
            imgSource = this.props.imgAlt;
        }

        var imageStyle = {
            width: this.props.imgWidth ? this.props.imgWidth : "40px",
            maxWidth: this.props.maxWidth ? this.props.maxWidth : "40px",
            borderRadius: this.props.borderRadius ? this.props.borderRadius : "50%"
        }

        return(
            <a href={this.props.link}><img src={imgSource} 
                 alt={this.props.altText} 
                 style={imageStyle} 
                 onMouseEnter={this.onMouseEnter} 
                 onMouseLeave={this.onMouseLeave} 
                 onClick={this.props.onClick}
            /></a>
        );
    }
}



/* PROPS
    mainPaperInfo (formatted)
    paperDescription (dropdown)
    arxiv
    video
    slides
    web
    poster
    paper
    plusToSide : bool
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

        var dropDownBox = null;
        
        var arXivLink = this.props.arxiv ? <HoverButton imgMain={arxivMainImg} 
                                                        imgAlt={arxivAltImg}
                                                        link={this.props.arxiv}/> 
                                         : null

        var videoLink = this.props.video ? <HoverButton imgMain={videoMainImg} 
                                                        imgAlt={videoAltImg}
                                                        link={this.props.video}/> 
                                         : null

        var slidesLink = this.props.slides ? <HoverButton imgMain={slidesMainImg} 
                                                        imgAlt={slidesAltImg}
                                                        link={this.props.slides}/> 
                                         : null

        var webLink = this.props.web ? <HoverButton imgMain={webMainImg} 
                                                        imgAlt={webAltImg}
                                                        link={this.props.web}/> 
                                         : null

        var posterLink = this.props.poster ? <HoverButton imgMain={posterMainImg} 
                                                        imgAlt={posterAltImg}
                                                        link={this.props.poster}/> 
                                         : null

        var paperLink = this.props.paper ? <HoverButton imgMain={paperMainImg} 
                                                        imgAlt={paperAltImg}
                                                        link={this.props.paper}/> 
                                         : null

        var moreButton = <HoverButton imgMain={plusMainImg} 
                                      imgAlt={plusAltImg}
                                      imgWidth="40px"
                                      onClick={this.onClick}/> 

        var lessButton = <HoverButton imgMain={minusMainImg} 
                                      imgAlt={minusAltImg}
                                      imgWidth="40px"
                                      onClick={this.onClick}/> 

        var allLinks = this.props.arxiv ? 
                        <div className="links">
                            {arXivLink}
                            {videoLink}
                            {slidesLink}
                            {webLink}
                            {posterLink}
                            {paperLink}
                        </div> :
                        <div className="links">
                            {paperLink}
                            {videoLink}
                            {slidesLink}
                            {webLink}
                            {posterLink}
                        </div>

        var allButtons = <div id="all-buttons">
                            {allLinks}
                            {this.props.paperDescription ? this.state.dropDown ? lessButton : moreButton
                                             : null}
                         </div>

        if (this.state.dropDown) {
            dropDownBox = <div>{this.props.paperDescription}</div>;
        }

        return(
            <div className="paper-wrapper">
                <div className="perma-box">
                    <div className="paper-wrapper">
                        {this.props.mainPaperInfo}
                        {this.props.plusToSide ? allLinks : allButtons}
                    </div>

                    {this.props.plusToSide ? (this.props.paperDescription ? (this.state.dropDown ? lessButton : moreButton)
                                                : null) : null}
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
    }

    render () {

        /* STYLES */

        this.longSpacerStyle = {
            height: this.state.isDesktop ? "100px" : "25px"
        }

        this.academicBoxStyle = {
            flexDirection: this.state.isDesktop ? "row" : "column",
            alignItems: this.state.isDesktop ? "flex-start" : "center",
        }

        this.leftBoxStyle = {
            maxWidth: this.state.isDesktop ? "30%" : "70%",
        }

        this.rightBoxStyle = {
            maxWidth: this.state.isDesktop ? "50%" : "80%",
        }

        /* CONTENT */

        var findMe = <FindMe/>;
            

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
                        fly <a href="https://arxiv.org/abs/2502.16658">[GS<b>S</b>V ICML'25]</a> <a href="https://arxiv.org/abs/2504.02723">[GS<b>S</b>V COLT'25]</a>  <a href="https://arxiv.org/abs/2507.02496">[<b>S</b> SODA'26]</a>.</li>
                </ul>
            </p>

        var bio = 
            <div>
                <p>
                    I am a fifth-year Ph.D. student in the Computer
                    Science <a href= "https://theory.cs.northwestern.edu/">Theory group</a> at Northwestern 
                    University, advised  
                    by <a href="http://users.eecs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>.    
                </p>

                <PaperWrapper mainPaperInfo={bioMainInfo}
                                paperDescription={bioDescription}
                                plusToSide={true}/>

                <p>
                    Before Northwestern, I was 
                    a <a href="https://us.fulbrightonline.org/countries/europe-and-eurasia/austria/255">Fulbright </a> 
                    visiting student at the University of Vienna in 
                    the <a href="https://taa.cs.univie.ac.at">Theory and Applications of Algorithms group</a>, 
                    and I earned my B.S. in Computer Science at Carnegie Mellon University. 
                    I am grateful to have been supported by the <a href="https://www.tgs.northwestern.edu/funding/fellowships-and-grants/internal-fellowships-grants/presidential-fellowship-winners/fellowship-winners.html">Northwestern Presidential Fellowship</a>. 
                </p>
            </div>

        var confidenceEllipsoidPaperMainInfo =
            <div> 
                <b>Learning Confidence Ellipsoids and Applications to Robust Subspace Recovery</b> <br/> 
                <i>with <a href="https://www.stat.uchicago.edu/~chaogao/">Chao Gao</a>, <a href="https://lirenshan.github.io/">Liren Shan</a>, <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>,</i><br/>
                preprint. 
            </div>;

        var confidenceEllipsoidPaperDescription = 
            <p>
                We study the problem of finding confidence ellipsoids for arbitrary distributions.  In particular, 
                given sample access to a distribution <i>D</i>, we want to find an ellipsoid <i>E</i> that covers a prescribed 1 - α 
                probability mass of the distribution, and as small volume as possible.  We give an approximation 
                algorithm for this problem.  Our algorithm and analysis establish nice properties of the SDP 
                for finding the minimum volume enclosing ellipsoid (MVEE) (of all of the points), and we show that 
                sampling from the dual solution of this program allows us to remove outliers effectively.
            </p>;

        var confidenceEllipsoid = 
            <PaperWrapper mainPaperInfo={confidenceEllipsoidPaperMainInfo}
                          paperDescription={confidenceEllipsoidPaperDescription}
                          arxiv="https://arxiv.org/abs/2512.16875"/>

        var alsPaperMainInfo = 
            <div> 
                <b>Guarantees for Alternating Least Squares in Overparameterized Tensor Decompositions</b>  <br/> 
                <i> with <a href="https://dion11ar.github.io/">Dionysis Arvanitakis</a>, <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a>,</i><br/>
                <a href="https://neurips.cc/virtual/2025/loc/san-diego/poster/119560">NeurIPS 2025</a> (spotlight). 
            </div>;

        var alsPaperDescription = 
            <p>
                Alternating Least Squares (ALS) is the most popular method to compute tensor CP decompositions 
                in practice.  We provide convergence guarantees for this method in the overparameterized regime 
                by establishing a new connection to random matrix theory.  Our analysis provides new ways to 
                argue about overparameterization and random initialization.  
            </p>;

        var als = 
            <PaperWrapper mainPaperInfo={alsPaperMainInfo}
                          paperDescription={alsPaperDescription}
                          paper="https://openreview.net/attachment?id=9FDErIfoVE&name=pdf"
                          slides={ASVslides}/>

        var onlineConformalPaperMainInfo = 
            <div> 
                <b>Online Conformal Prediction with Efficiency Guarantees</b> <br/>
                <a href="https://www.siam.org/conferences-events/siam-conferences/soda26/">SODA 2026</a>. 
            </div>;

        var onlineConformalPaperDescription = 
            <p>
                Conformal prediction is the problem of generating confidence sets.  We study this problem 
                in an online formulation, while explicitly optimizing for efficiency (size of the confidence 
                sets).  We show that this problem admits very different guarantees than online learning, which
                can be thought of as its unconstrained counterpart. 
            </p>;
        
        var onlineConformal = 
            <PaperWrapper mainPaperInfo={onlineConformalPaperMainInfo}
                          paperDescription={onlineConformalPaperDescription}
                          arxiv="https://arxiv.org/abs/2507.02496"
                          slides={Srislides}/>

        var highDimConformalPaperMainInfo =
            <div> 
                <b>Computing High-Dimensional Confidence Sets for Arbitrary Distributions</b> <br/>
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

        var highDimConformal = 
            <PaperWrapper mainPaperInfo={highDimConformalPaperMainInfo}
                          paperDescription={highDimConformalPaperDescription}
                          arxiv="https://arxiv.org/abs/2504.02723"
                          video="https://youtu.be/0YFXx70cPWw?si=mxA1wnuv4XrzA9PG&t=2170"
                          slides={GSSVaslides}/>



        var conformalDPPaperMainInfo = 
            <div> 
                <b>Volume Optimality in Conformal Prediction with Structured Prediction Sets</b> <br/>
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

        var conformalDP = 
            <PaperWrapper mainPaperInfo={conformalDPPaperMainInfo}
                          paperDescription={conformalDPPaperDescription}
                          arxiv="https://arxiv.org/abs/2502.16658"
                          poster={GSSVbposter}/>

        var warmStartsPaperMainInfo = 
            <div> 
                <b>Competitive strategies to use "warm start" algorithms with predictions</b> <br/>
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

        var warmStarts = 
            <PaperWrapper mainPaperInfo={warmStartsPaperMainInfo}
                          paperDescription={warmStartsPaperDescription}
                          arxiv="https://arxiv.org/abs/2405.03661"
                          slides={SBslides}/>


        var predictedUpdatesPaperMainInfo = 
            <div> 
                <b>The Predicted-Updates Dynamic Model: Offline, Incremental, and Decremental to Fully Dynamic Transformations</b> <br/>
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

        var predictedUpdates = 
            <PaperWrapper mainPaperInfo={predictedUpdatesPaperMainInfo}
                          paperDescription={predictedUpdatesPaperDescription}
                          arxiv="https://arxiv.org/abs/2307.08890"
                          slides={LSslides}
                          poster={LSposter}/>


        var smoothedStuffPaperMainInfo = 
            <div> 
                <b>New Tools for Smoothed Analysis: Least Singular Value Bounds for Random Matrices with Dependent Entries</b> <br/>
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

        var smoothedStuffPaper =
            <PaperWrapper mainPaperInfo={smoothedStuffPaperMainInfo}
                            paperDescription={smoothedStuffPaperDescription}
                            arxiv="https://arxiv.org/abs/2405.01517"
                            video="https://www.youtube.com/watch?v=KTFfq4q2kHc&list=PL2200vk1q4pnoZJZphNyvIFzB3UnUZEmj&index=35"
                            slides={BESVslides}
                            poster={BESVposter}
                            paper={SmoothedStuff}/>

        var burerMonteiroPaperMainInfo = 
            <div> 
                <b>The Burer-Monteiro SDP method can fail even above the Barvinok-Pataki bound</b> <br/>
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

        var burerMonteiro = 
            <PaperWrapper mainPaperInfo={burerMonteiroPaperMainInfo}
                            paperDescription={burerMonteiroPaperDescription}
                            arxiv="https://arxiv.org/abs/2211.12389"
                            slides={OSVslides}
                            web="https://vaidehi8913.github.io/burer-monteiro/"/>

        var expertsPaperMainInfo = 
            <div>
                <b>Memory Bounds for the Experts Problem</b> <br/>
                <i> with <a href="http://www.cs.cmu.edu/~dwoodruf/">David P. Woodruff</a>, <a href="https://neilzxu.me/">Ziyu Xu</a>, <a href="https://samsonzhou.github.io/">Samson Zhou</a>, </i><br/>
                <a href="http://acm-stoc.org/stoc2022/">STOC 2022</a>.
            </div>;

        var expertsPaperDescription = 
            <p>
                We initiate the study of the online learning with expert advice problem in the streaming (low-memory) setting.  
                Our upper and lower bounds give a smooth tradeoff between memory and regret (accuracy). 
            </p>;

        var experts = 
            <PaperWrapper mainPaperInfo={expertsPaperMainInfo}
                            paperDescription={expertsPaperDescription}
                            arxiv="http://arxiv.org/abs/2204.09837"
                            video="https://www.youtube.com/watch?v=kIwS5Z3PF3M"
                            slides={SWXZslides}
                            poster={SWXZposter}/>

        var steinerTreePaperMainInfo = 
            <div>
                <b>Simpler Approximations for the Network-Steiner Tree Problem</b> <br/> 
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

        var steinerTree = 
            <PaperWrapper mainPaperInfo={steinerTreePaperMainInfo}
                            paperDescription={steinerTreePaperDescription}
                            paper={SeniorThesis}
                            slides={seniorthesisslides}
                            poster="https://www.cs.cmu.edu/~tcortina/thesis/srinivas.pdf"/>

        var profilePicture = 
            <div className="name">
                <HoverButton imgMain={profileMainImg} 
                                     imgAlt={profileAltImg} 
                                     altText="Vaidehi"
                                     imgWidth="80%"
                                     maxWidth="250px"/>
            </div>


        /* OBJECT */

        return (
            <div className="background-box">

            <div className="inner-wrapper" >

                <div className="spacer"/>   

                <div className="academic-box" style={this.academicBoxStyle}>

                    <div className="left-box" style={this.leftBoxStyle}>

                        <div className="longspacer" style={this.longSpacerStyle}/>
                        
                        {profilePicture}
                        
                        <div className="name-spacer" />
                        <div className="name">
                            Vaidehi Srinivas
                        </div>

                        <div className="name-spacer"/>
                        <div className="pronouns">
                            (she/her)<br/>
                        </div>

                        <div className="name-spacer"/>
                        <div className="email">
                            vaidehi@u.northwestern.edu
                        </div>

                        <div className="name-spacer"/>
                        <div className="name">
                            <div className="links">
                            <HoverButton imgMain={emailMainImg} 
                                     imgAlt={emailAltImg} 
                                     altText="email"
                                     link="mailto:vaidehi@u.northwestern.edu"/>

                            <HoverButton imgMain={googleScholarMainImg} 
                                     imgAlt={googleScholarAltImg} 
                                     altText="Google Scholar"
                                     link="https://scholar.google.com/citations?user=OIJtMzEAAAAJ&hl=en"/>

                            <HoverButton imgMain={cvMainImg} 
                                     imgAlt={cvAltImg} 
                                     altText="CV"
                                     link={CV}/>
                            </div>
                        </div>

                        {this.state.isDesktop ? findMe : null}

                        
                    </div>

                    <div className="right-box" style={this.rightBoxStyle}>
                        <div>

                            {this.state.isDesktop ? <br/> : null}

                            {bio}

                            <br/><br/>

                            <font size="+2">Research</font><br/><br/>

                            {confidenceEllipsoid}

                            <br/>
                            
                            {onlineConformal}

                            <br/>

                            {als}

                            <br/>

                            {highDimConformal}

                            <br/>

                            {conformalDP}

                            <br/>

                            {warmStarts}

                            <br/>
                            
                            {predictedUpdates}

                            <br/>

                            {smoothedStuffPaper}

                            <br/>

                            {burerMonteiro}

                            <br/>

                            {experts}

                            <br/>
                            
                            {steinerTree}
                    
                            <br/><br/>

                            <font size="+2">Other</font>

                            <p>I gave part 2 of the <b>Mini-Tutorial on Learning-Augmented 
                            Algorithms</b> at <a href="https://www.siam.org/conferences-events/siam-conferences/acda25/program/program-abstracts/">ACDA 2025</a>.  
                            You can find my slides here: <a href={ACDAslidesWTransitions}>with transitions</a>, <a href={ACDAslides}>and without</a>.</p>

                            <p>I co-organized the <b><a href="https://vaidehi8913.github.io/predictions-and-uncertainty-colt25">Workshop on 
                            Predictions and Uncertainty</a></b> at <a href="https://learningtheory.org/colt2025/">COLT 2025</a>. 
                            The materials are up on the workshop website if you are interested in what we got up to.</p>

                            <p>I organized a <b><a href={FOCSScavHunt}>Chicago scavenger hunt</a></b> as a social event 
                            for <a href="https://focs.computer.org/2024/">FOCS 2024</a>.</p>
                            
                            <p>A more complete list of my projects and interests are in my <a href={CV}><b>CV</b></a> (last 
                            updated fall 2025).</p> <br/>

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