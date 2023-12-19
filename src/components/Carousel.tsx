import React from 'react';

const Carousel = () => {
  return (
    <div>
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      style={{objectFit:"contain"}}
    >
      <div className="carousel-inner" id='carousel'>
        <div className='carousel-caption' style={{zIndex:"10"}}>
          <form className='d-flex'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label="Search"/>
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
        <div className="carousel-item active" >
          <img className="d-block w-100 h-100" src="burger.jpeg" style={{filter:"brightness(70%)"}} alt="First slide" />
        </div>
        <div className="carousel-item" >
          <img className="d-block w-100 h-100" src="pizza.jpeg" style={{filter:"brightness(70%)"}} alt="Second slide" />
        </div>
        <div className="carousel-item" >
          <img className="d-block w-100 h-100" src="wrap.webp" style={{filter:"brightness(70%)"}} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    </div>
  );
};

export default Carousel;













// "use client";
// import React from 'react';


// const Carousel = () => {
//   return (
    
//       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="d-block w-100" src="burger.jpeg" alt="First slide"></img>
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="pizza.jpeg" alt="Second slide"></img>
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="wrap.webp" alt="Third slide"></img>
//           </div>
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </a>

//       </div>
    
//   );
// };

// export default Carousel;
