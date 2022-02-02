import React, { Component } from "react";
//import NavBar from "./NavBar";
import ByTopic from "./bytopic/ByTopic";
import ByID from "./mostrecent/ByID";
import MostRecent from "./mostrecent/MostRecent";
import {
    Route,
    Routes,
    useParams
} from "react-router-dom";

function ByTopicWrapper () {
    const { topics } = useParams()

    return (
        <ByTopic topicString={topics}/>
    );
}

class Octopus extends Component {

    render () {

        // https://ui.dev/react-router-nested-routes/

        return (
            <div>
                <br/>
                <Routes>
                    <Route exact path="/" element={<MostRecent/>}/>
                    <Route path="/topics" element={<ByTopic/>}/>
                    <Route path="/topics/:topics" element={<ByTopicWrapper/>}/>
                    <Route path="/id/:id" element={<ByID/>}/>
                </Routes>
            </div>
        );
    }
}

export default Octopus;