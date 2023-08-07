import React from 'react'
import {Routes, Route} from "react-router-dom";
import FormPage from "../Pages/FormPage"
import AllDataPage from "../Pages/AllDataPage"

export default function AllRoutes() {
  return <Routes>
    <Route path="/PostClassifieds" element={<FormPage/>}></Route>
    <Route path="/BrowseClassifieds" element={<AllDataPage/>}></Route>
  </Routes>
}
