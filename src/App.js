import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Signin from "./Components/Signin";
import {Toaster} from 'react-hot-toast';


function App() {
    return(
        <>
            <div>
                <Toaster position="top-right" toastOptions={
                    {
                        duration: 5000,
                        style: {
                            fontFamily: 'monospace'
                        }
                    }
                    
                }></Toaster>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" element={<Signin />}/>
                            <Route path="/dash" element={<Dashboard />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;