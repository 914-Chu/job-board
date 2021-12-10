import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import Login from "./components/login";
import Main from "./components/main";
import Detail from "./components/detail";
import Review from "./components/review";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostJob from "./components/postJob";

const rootElement = document.getElementById("root");
render(
    <div id="background">
        <BrowserRouter>
            <div>
                <NavBar/>
                <Routes>

                </Routes>
            </div>
            <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/main" element={<Main />}/>
            <Route path="/detail" element={<Detail />}/>
            <Route path="/review" element={<Review />}/>
            <Route path="/postJob" element={<PostJob />}/>
            </Routes>
        </BrowserRouter>
    </div>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
