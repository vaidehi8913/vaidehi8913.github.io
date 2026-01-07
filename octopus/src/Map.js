import React, { Component } from "react";
import "./Map.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import ColorHash from 'color-hash';

import mapjson from "./land-50m.json"; // https://github.com/topojson/world-atlas?tab=readme-ov-file
import plusMainImg from "./img/plus-main.png";
import plusAltImg from "./img/plus-alt.png";
import minusMainImg from "./img/minus-main.png";
import minusAltImg from "./img/minus-alt.png";
import { ReactComponent as HouseIcon } from './img/house.svg';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Optional, default styles are injected automatically in v5.13.0+

// suggestion: lightness: [0.35, 0.5, 0.65], saturation: [0.35, 0.5, 0.65]
const colorHash = new ColorHash({ lightness: [0.5, 0.5, 0.5], saturation: [0.7, 0.7, 0.7] });
// usage: colorHash.hex(locName + time)

const homes = [{locName: "Evanston, IL, US",
                locCoords: [-87.6872, 42.0568]},
               {locName: "Vienna, AT",
                locCoords: [16.3713, 48.2081]},
               {locName: "Pittsburgh, PA, US",
                locCoords: [-79.9972, 40.4387]},
               {locName: "Bangalore, IN",
                locCoords: [77.5775, 12.9629]},
               {locName: "Palo Alto, CA, US",
                locCoords: [-122.1430, 37.4419]}];

const locations = [{time: "Jan '26", 
                    desc: <text><a href="https://www.siam.org/conferences-events/siam-conferences/soda26/">SODA</a> (Symposium on Discrete Algorithms)</text>,
                    locName: "Vancouver, BC, CA",
                    locCoords: [-123.1207, 49.2827]},
                    {time: "Dec '25", 
                    desc: <text><a href="https://neurips.cc/virtual/2025/loc/san-diego/poster/119560">NeurIPS</a> (Conference on Neural Information Processing Systems)</text>,
                    locName: "San Diego, CA, US",
                    locCoords: [-117.1611, 32.7157]},
                    {time: "Oct '25", 
                    desc: <text><a href="https://risingstars-eecs.mit.edu/">MIT Rising Stars in EECS workshop</a></text>,
                    locName: "Cambridge, MA, US",
                    locCoords: [-71.1057, 42.3666]},
                    {time: "Aug '25", 
                    desc: <text><a href="https://optimization-unplugged.github.io/">Optimization Unplugged</a> workshop at the Bernoulli Center of EPFL</text>,
                    locName: "Lausanne, CH",
                    locCoords: [6.6323, 46.5197]},
                    {time: "Jul '25", 
                    desc: <text><a href="https://www.siam.org/conferences-events/siam-conferences/acda25/program/program-abstracts/">ACDA</a> (SIAM Conference on Applied and Computational Discrete Algorithms)</text>,
                    locName: "Montreal, QC, CA",
                    locCoords: [-73.5674, 45.5019]}, 
                    {time: "Jul '25", 
                    desc: <text><a href="https://icml.cc/">ICML</a> (International Conference on Machine Learning)</text>,
                    locName: "Vancouver, BC, CA",
                    locCoords: [-123.1207, 49.2827]}, 
                    {time: "Jun '25", 
                    desc: <text><a href="https://learningtheory.org/colt2025/">COLT</a> (Conference on Learning Theory)</text>,
                    locName: "Lyon, FR",
                    locCoords: [4.8357, 45.7640]}, 
                    {time: "Jan '25",
                    desc: <text><a href="https://www.siam.org/conferences-events/siam-conferences/soda25/program/">SODA</a> (Symposium on Discrete Algorithms)</text>,
                    locName: "New Orleans, LA, US",
                    locCoords: [-90.0758, 29.9509]},
                    {time: "Oct '24", 
                    desc: <text><a href="https://focs.computer.org/2024/">FOCS</a> (Symposium on the Foundations of Computer Science)</text>,
                    locName: "Chicago, IL, US",
                    locCoords: [-87.6324, 41.8832]}, 
                    {time: "Jul '24", 
                    desc: <text><a href="https://ismp2024.gerad.ca/">ISMP</a> (International Symposium on Mathematical Programming)</text>,
                    locName: "Montreal, QC, CA",
                    locCoords: [-73.5674, 45.5019]}, 
                    {time: "Jun '24",
                    desc: <text><a href="https://learningtheory.org/colt2024/index.html">COLT</a> (Conference on Learning Theory)</text>,
                    locName: "Edmonton, AB, CA",
                    locCoords: [-113.4937, 53.5462]},
                    {time: "Jun '24",
                    desc: <text><a href="http://acm-stoc.org/stoc2024/">STOC</a> (Symposium on the Theory of Computation)</text>,
                    locName: "Vancouver, BC, CA",
                    locCoords: [-123.1207, 49.2827]},
                    {time: "Mar '24",
                    desc: <text>Stanford University Theory Lunch</text>,
                    locName: "Palo Alto, CA, US",
                    locCoords: [-122.1430, 37.4419]},
                    {time: "Nov '23",
                    desc: <text><a href="https://focs.computer.org/2023/">FOCS</a> (Symposium on the Foundations of Computer Science)</text>,
                    locName: "Santa Cruz, CA, US",
                    locCoords: [-122.0288, 36.9741]},
                    {time: "Oct '23",
                    desc: <text><a href="https://meetings.informs.org/wordpress/phoenix2023/">INFORMS Annual Meeting</a></text>,
                    locName: "Phoenix, AZ, US",
                    locCoords: [-112.0725, 33.4483]},
                    {time: "Apr '23",
                    desc: <text>Capital Area Theory Seminar at University of Maryland</text>,
                    locName: "College Park, MD, US",
                    locCoords: [-76.9378, 38.9897]},
                    {time: "Dec '22",
                     desc: <text><a href="https://neurips.cc/Conferences/2022">NeurIPS</a> (Conference on Neural Information Processing Systems)</text>,
                     locName: "New Orleans, LA, US",
                     locCoords: [-90.0758, 29.9509]},
                    {time: "Jun '22",
                     desc: <text><a href="http://acm-stoc.org/stoc2022/">STOC</a> (Symposium on the Theory of Computation)</text>,
                     locName: "Rome, IT",
                     locCoords: [12.4822, 41.8967]}
                 ];

const uniqueLocations = Array.from(new Set(locations.map(({locName}) => (locName))))

const indexedLocations = locations.map(item => {
    var index = uniqueLocations.findIndex(uniqueItem => (uniqueItem === item.locName))

    return ({
        ...item, 
        index: index
    });
});

const uniqueLocationsAndDescriptions = uniqueLocations.map(locName => {
    var repeats = locations.filter(sameLoc => (locName == sameLoc.locName))
    var times = repeats.reverse().reduce((accumulator, y) => {

        if (accumulator === ""){
            return y.time;
        }

        return(accumulator + ", " + y.time);
    }
    , "") // (lambda (accumulator, currentValue) => something, initialValue)

    var desc = locName + "\n\n" + times ;

    return({
        locName: locName, 
        locCoords: repeats[0].locCoords,
        times: times,
        desc: desc  
    });
});


/*
    PROPS
    house 
    coords 
    outsideHover
    desc
    color
    key
*/
class HoverMarker extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            hover: false
        });

        this.onMarkerMouseEnter = this.onMarkerMouseEnter.bind(this);
        this.onMarkerMouseLeave = this.onMarkerMouseLeave.bind(this);
        // this.onClick = this.onClick.bind(this);
    }

    onMarkerMouseEnter () {
        this.setState({
            hover: true
        });
        this.props.hoverHook(true);
    }

    onMarkerMouseLeave (){
        this.setState({
            hover: false
        });
        this.props.hoverHook(false);
    }

    render () {

        return(
            <Marker  key={this.props.key} coordinates={this.props.coords}> 

                {this.props.house ? 
                  <HouseIcon fill={this.props.color}
                             opacity="80%"
                                // stroke="#000000"
                                // stroke-width="3px"
                                width={this.state.hover ? 40 : 20} 
                                height={this.state.hover ? 40 : 20} 
                                x={this.state.hover ? -20 : -10} 
                                y={this.state.hover ? -20 : -10} 
                                onMouseEnter={this.onMarkerMouseEnter}
                                onMouseLeave={this.onMarkerMouseLeave}
                                data-tooltip-id="map-tooltip"
                                data-tooltip-content={this.props.desc}
                                data-tooltip-place="top"/>
                : <circle r={(this.props.outsideHover || this.state.hover) ? 15 : 7} 
                        fill={this.props.color} 
                        opacity="80%"
                        // stroke="#fff" 
                        strokeWidth={2} 
                        onMouseEnter={this.onMarkerMouseEnter}
                        onMouseLeave={this.onMarkerMouseLeave}
                        data-tooltip-id="map-tooltip"
                        data-tooltip-html={this.props.desc}
                        data-tooltip-place="top"/>
                }

            </Marker>
        );
    }
}




/*
    PROPS
    locations
    locHover: boolean array of same length as locations
*/
class MapChart extends Component{

    constructor(props) {
        super(props);

        this.state = ({
            homeHover: this.props.homes.map(() => false),
            mapLocHover: this.props.locations.map(() => false)
        });

        this.hoverHome = this.hoverHome.bind(this);
        this.hoverLoc = this.hoverLoc.bind(this)        
    }

    hoverHome(index, isHover) {
        var homeHoverCopy = this.state.homeHover;
        homeHoverCopy[index] = isHover;
        this.setState({homeHover: homeHoverCopy});
    }

    hoverLoc(index, isHover) {
        var locHoverCopy = this.state.mapLocHover;
        locHoverCopy[index] = isHover;
        this.setState({mapLocHover: locHoverCopy});
    }

    render () {

        var allHomeMarkers = this.props.homes.map(({locCoords, locName}, itemNumber) => (
                    <HoverMarker key={locName + itemNumber + "home"}
                                 coords={locCoords}
                                 color={(itemNumber == 0) ? "#000000" : "#b3b3b3"}
                                 desc={locName}
                                //  descLineTwo={locName}
                                 house={true}
                                 hoverHook={(isHover) => this.hoverHome(itemNumber, isHover)}
                                 />
                ));

        var allLocMarkers = this.props.locations.map(({locCoords, locName, times, desc}, itemNumber) => (
                    <HoverMarker key={locName + itemNumber + "loc"}
                                 coords={locCoords}
                                 color={colorHash.hex(locName)}
                                 outsideHover={this.props.locHover[itemNumber]}
                                //  descLineOne={locName}
                                //  descLineTwo={times}
                                 desc={"<center>" + locName + " <br /> " + times + "</center>"}
                                 hoverHook={(isHover) => this.hoverLoc(itemNumber, isHover)}
                                />
                )).reverse();

        return (
            <ComposableMap 
                projection = "geoMercator"
            >
            <ZoomableGroup center={[-30, 40]} zoom={1.3}>

                <Geographies geography={mapjson}>
                    {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        //   stroke="#D6D6DA"
                        />
                    ))
                    }
                </Geographies>

                {/* {allHomeMarkers.filter((marker, index) => this.state.homeHover[index])}

                {allLocMarkers.filter((marker, index) => this.state.mapLocHover[index])}

                {allHomeMarkers.filter((marker, index) => !this.state.homeHover[index])}

                {allLocMarkers.filter((marker, index) => !this.state.mapLocHover[index])} */}

                {allHomeMarkers}

                {allLocMarkers}


            </ZoomableGroup>
            </ComposableMap>
        );
    }
}

/*
    PROPS
    info = {time, desc, locName, locCoords}
    itemNumber 
*/
class LocationItem extends Component {

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

        this.props.mouseEnterHook(this.props.info.index);
    }

    onMouseLeave(){
        this.setState({
            hover: false
        });

        this.props.mouseLeaveHook(this.props.info.index);
    }

    onClick(){
        // do nothing
    }

    render () {
        return (
            <a onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}
               onClick={this.onClick}>
                <div className="loc-item-wrap">
                    <div className="loc-item-key" style={{
                            backgroundColor: colorHash.hex(this.props.info.locName),
                        }} />

                    <div className="loc-info">
                        <b>{this.props.info.time} @ {this.props.info.locName}:</b> {this.props.info.desc}
                    </div>
                </div>
            </a>
        );
    }

}



class FindMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // locHover: locations.map((loc) => false),
            locHover: uniqueLocations.map((loc) => false),

            dropDown: false, 
            hover: false
        };

        this.onItemMouseEnter = this.onItemMouseEnter.bind(this);
        this.onItemMouseLeave = this.onItemMouseLeave.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.onPlusMouseEnter = this.onPlusMouseEnter.bind(this);
        this.onPlusMouseLeave = this.onPlusMouseLeave.bind(this);
    }
    
    onItemMouseEnter(itemNumber) {
        var locHoverCopy = this.state.locHover;
        locHoverCopy[itemNumber] = true;
        this.setState({locHover: locHoverCopy});
    }

    onItemMouseLeave(itemNumber) {
        var locHoverCopy = this.state.locHover;
        locHoverCopy[itemNumber] = false;
        this.setState({locHover: locHoverCopy});
    }

    dropDown() {
        this.setState({dropDown: !this.state.dropDown});
    }

    onPlusMouseEnter() {
        this.setState({hover: true});
    }

    onPlusMouseLeave() {
        this.setState({hover: false});
    }

    render () {
        var locationComps = indexedLocations.map((item) => <LocationItem info={item}
                                                                         mouseEnterHook={this.onItemMouseEnter}
                                                                         mouseLeaveHook={this.onItemMouseLeave} />);

        if (!this.state.dropDown) {
            locationComps = locationComps.slice(0, 3)
        }

        
        var mapChart = <MapChart locations={uniqueLocationsAndDescriptions} locHover={this.state.locHover} homes={homes}/>;

        var altText = this.state.dropDown ? "less" : "more";

        var imgSource = this.state.dropDown ? (this.state.hover ? minusAltImg : minusMainImg) 
                                            : (this.state.hover ? plusAltImg : plusMainImg);

        var imageStyle = {
            width: this.props.imgWidth ? this.props.imgWidth : "40px",
            maxWidth: this.props.maxWidth ? this.props.maxWidth : "40px",
            borderRadius: this.props.borderRadius ? this.props.borderRadius : "50%"
        };
                            
        return (
            <div className="find-me">
                <br/><br/>
                
                <div className="with-dropdown">
                    <div><font size="+2">Find me!</font></div>

                    <img src={imgSource} 
                        alt={altText} 
                        style={imageStyle} 
                        onMouseEnter={this.onPlusMouseEnter} 
                        onMouseLeave={this.onPlusMouseLeave} 
                        onClick={this.dropDown}/>
                    
                </div>

                {/* <div><font size="+2">Find me!</font></div> */}
                
                {/* <br/> */}

                <Tooltip id="map-tooltip"/>

                <div className="map-wrap">
                    {mapChart}
                </div>

                {/* <br/> */}

                {locationComps}
                
                {/* <div className="with-dropdown">
                    <div className="vertical-stack">
                        {locationComps}
                    </div>

                    <img src={imgSource} 
                        alt={altText} 
                        style={imageStyle} 
                        onMouseEnter={this.onPlusMouseEnter} 
                        onMouseLeave={this.onPlusMouseLeave} 
                        onClick={this.dropDown}/>
                    
                </div> */}

            </div>
        );
    }
}

export default FindMe; 