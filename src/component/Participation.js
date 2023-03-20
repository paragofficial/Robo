import React from 'react'
import Footer from './Footer'

export default function Participation() {
  return (
    <>
    <div style={{ backgroundColor: "#1f0660", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", color: "white" }}>
      <div className="has-bg-img" style={{height: "100vh"}}>

<h1 style={{ textAlign: 'center', padding: "30px",fontFamily: 'Fira Sans' }}> <strong>Participations</strong> </h1>

<div className="container text-center d-flex align-items-center justify-content-center" >

  {/* <div className="d-flex align-items-center justify-content-center"> */}

  <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="false" >
    <div className="carousel-indicators" >

      {/* Designing buttons start */}
      <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
      {/* Designing buttons end  */}

    </div>
    <div className="carousel-inner" style={{ height: "30rem", width: "60rem"}}>

      {/* first slide  */}
      <div className="carousel-item active" style={{height: "30rem", width: "60rem"}}>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200615/pngtree-abstract-illustration-of-blue-middle-size-hexagon-background-image_339157.jpg" className="d-block mx-auto w-auto" style={{height: "30rem", width: "60rem"}} alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Event name event name 2019</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptates id atque vel suscipit saepe!</p>
        </div>
      </div>

      {/* second slide  */}
      <div className="carousel-item" style={{ height: "30rem", width: "60rem"}}>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200615/pngtree-abstract-illustration-of-blue-middle-size-hexagon-background-image_339157.jpg" className="d-block mx-auto w-auto" style={{height: "30rem", width: "60rem"}} alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Event name event name 2020</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptates id atque vel suscipit saepe!</p>
        </div>
      </div>

      {/* third slide  */}
      <div className="carousel-item" style={{height: "30rem", width: "60rem"}}>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200615/pngtree-abstract-illustration-of-blue-middle-size-hexagon-background-image_339157.jpg" className="d-block mx-auto w-auto" style={{height: "30rem", width: "60rem"}} alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Event name event name 2021</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptates id atque vel suscipit saepe!</p>
        </div>
      </div>

    </div>

    {/* prev and next buttons  */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    {/* buttons end  */}

  </div>
</div>
</div>
{/* </div> */}
<Footer/>
</div>
    </>
  )
}
