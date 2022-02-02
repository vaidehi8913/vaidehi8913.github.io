import React, { Component } from "react";
import NavBar from "../NavBar";
import ComicDisplay from "./ComicDisplay";
import * as Constants from "../Constants";
import { useParams } from "react-router-dom";

export default function ByID () {

    const { id } = useParams()

    var idNum = Number(id);

    var comicInfo = Constants.comicList.find((element) => element.id === idNum);

    return (
        <div>
            <NavBar color={Constants.navBarColor} />
            <ComicDisplay comicInfo={comicInfo}/>
        </div>
    );

}