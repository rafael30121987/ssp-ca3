import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "../HomePage";
import Delete from "../Delete";
import Register from "../Register";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/'   element={<HomePage/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/register'  element={<Register/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;