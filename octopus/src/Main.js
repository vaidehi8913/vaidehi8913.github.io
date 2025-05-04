import React, { Component } from "react";
import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";

import Octopus from "./octopus/Octopus";
import Academic from "./Academic";
import BurerMonteiro from "./burer-monteiro/BurerMonteiro";
import PredictionsAndUncertainty from "./workshop/PredictionsAndUncertainty";

class Main extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Academic/>}/>
                    {/*<Route path="/octopus/*" element={<Octopus/>}/>*/}
                    {/*<Route path="/burer-monteiro" element={<BurerMonteiro/>}/>*/}
                    <Route path="/predictions-and-uncertainty" element={<PredictionsAndUncertainty/>}/>
                </Routes>
            </BrowserRouter>

            // <Academic />

            // Useful HashRouter Info
            // https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
        );
    }
}

export default Main;