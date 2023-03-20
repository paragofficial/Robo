import React from 'react'
import Footer from './Footer'

export default function About() {
  return (
      <>
      <div style={{ backgroundColor: "#1f0660", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", color: "white"}}>
      {/* <div style={{ backgroundImage: "linear-gradient(#d4faf4 10%, #ccfaff 15%, #c9f0fb 20%, #d4faf4 10%)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center",}}> */}
      {/* page background  */}
            <div className="has-bg-img" style={{ height: "100vh" }}>
              <h1 style={{ textAlign: 'center', padding: "30px",fontFamily: 'Fira Sans' }}> <strong>About us</strong> </h1>
              <div className="container text-center d-flex align-items-center justify-content-center">
      
              <div className="d-flex align-items-center justify-content-center">
      
                  {/* video background  */}
                <div style={{  padding: "10px", margin: "60px",  }}>
                  <div className="embed-responsive ">
                    <iframe className="embed-responsive-item" title="myFrame" style={{width: "28rem", height: "15rem"}} src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                  </div>
                </div>
      
      
                  {/* about text  */}
                <div className='container' style={{  padding: "10px", margin: "60px", width: "23rem" }}>
                  <h3 style={{ color: "white", }}>About ROBOCLUB</h3>
                  <div>4x3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta ea dolorum iusto nam odio atque quibusdam. Ex maiores fugit, esse doloremque provident, accusamus obcaecati nostrum voluptates sed asperiores molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, qui?</div>
      
                  {/* follow icons  */}
                  {/* <div className="d-flex align-items-center justify-content-center"> */}
                    {/* <!-- Icon --> */}
                      <h6 style={{ color: "white", margin: "2px", }}>Follow us on</h6>
                    <a className="btn btn-primary mx-2" rel="noreferrer" target="_blank" style={{ backgroundColor: "#0082ca", margin: "2px",  }} href="https://www.instagram.com/anushkasharma/?hl=en" role="button"
                    ><i className="bi bi-linkedin"></i></a>
      
                    <a className="btn btn-primary mx-2" rel="noreferrer" target="_blank" style={{ backgroundColor: "#ac2bac", margin: "2px",  }} href="https://www.instagram.com/virat.kohli/?hl=en" role="button"
                    ><i className="bi bi-instagram"></i></a>
      
                  </div>
                </div>
                </div>
              </div>
              <Footer/>
              </div>
          </>
  )
}
