import React from 'react'
import Footer from './Footer'

export default function Roboclub() {
  return (
    <>
    {/* <div style={{ backgroundImage: "linear-gradient(#d4faf4 10%, #ccfaff 15%, #c9f0fb 20%, #d4faf4 10%)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", }}> */}
    <div style={{ backgroundColor: "#1f0660", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center",}}>
      <div className="has-bg-img text-center d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
        <div className="d-flex align-items-center justify-content-center">
            <div class="col-sm">
              <h1  style={{fontFamily: 'JMH Robotus', fontSize:"60px",color: "white" }}><strong>ROBOCLUB GCEK</strong></h1>
              <h2 style={{color: "white"}}>ADRAK LASUN KANDA KISUN</h2>
            </div>
            <div className='col-sm ' style={{ height: "350px", width: "47px", marginTop: "1rem"}}>
              {/* <img className="bg-img my-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu01i5r_V30CkDBsorNL-2hduxYb1H96dIWg&usqp=CAU" alt="" style={{borderRadius: "108px"}}/> */}
              <img className="bg-img my-3" src="https://static.vecteezy.com/system/resources/previews/010/434/272/original/artificial-intelligence-glyph-icon-silhouette-symbol-robot-human-head-with-chip-digital-network-robotics-negative-space-isolated-illustration-vector.jpg" alt="" style={{maxWidth: "20rem", maxHeight: "20rem" ,borderRadius: "90px", marginTop: "80%"}}/>
            </div>
            <div className="col-sm" style={{color: "white"}}>
              <h2>ROBOTICS</h2>
              <h4>Tech yourself before you wreck yourself Tech yourself before you wreck yourself</h4>
            </div>
        </div>
      </div>
        <Footer/>
        </div>
    </>
  )
}
