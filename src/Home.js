import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Articles from './Articles'

function Home(props) {
    return (
        <>
            <div>
                <Link to="/Article">Articles</Link>
            </div>

            <h1>This is the home page</h1>
        </>
    )
}

export default Home;