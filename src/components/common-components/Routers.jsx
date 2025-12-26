import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from '../../pages/LayOut'
import Activities from '../../pages/Activities'
import Library from '../../pages/Library'
import People from '../../pages/People'
import Report from '../../pages/Report'

function Routers() {
  return (
    <Routes>
       <Route element={<LayOut/>}>
       <Route path='/activities' element={<Activities/>}/>
       <Route path='/library' element={<Library/>}/>
       <Route path='/people' element={<People/>}/>
       <Route path='report' element={<Report/>}/>
        </Route> 
    </Routes>
  )
}

export default Routers