import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide carousel-dark" >
  <div className="carousel-inner" style={{border:"2px solid", borderColor:"black", opacity:"0.8",}}>
    <div className="carousel-item active " style={{height:"600px",objectPosition:"center"}} >
      <img style={{objectPosition:"center center",transform: "translate(0%, -30%)"}}src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block fw-bold fs-1">
        <h5 className='fs-1 fw-bold '><strong>Blocks Studios</strong></h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" style={{height:"600px",objectPosition:"center center",}} >
      <img style={{objectPosition:"center center",transform: "translate(0%, -50%)"}} src="https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" style={{height:"600px",objectPosition:"center center"}}>
      <img style={{objectPosition:"center center",transform: "translate(0%, -30%)"}} src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next btn-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{color:"black"}} >
    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
