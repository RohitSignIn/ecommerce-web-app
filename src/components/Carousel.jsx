const Carousel = () => {
  return (
    <div id="carousel-con">
        <div id="carousels">

            <div className="carousel">
                <a href="#">
                    <img loading="lazy" src="/carousel/car1.webp" width="100%" height="250" alt="Banner"/>
                </a>
            </div>

            <div className="carousel">
                <a href="#">
                    <img loading="lazy" src="/carousel/car2.webp" width="100%" height="250" alt="Banner"/>
                </a>
            </div>

            <div className="carousel">
                <a href="#">
                    <img loading="lazy" src="/carousel/car3.webp" width="100%" height="250" alt="Banner"/>
                </a>
            </div>

            <div className="carousel">
                <a href="#">
                    <img loading="lazy" src="/carousel/car4.webp" width="100%" height="250" alt="Banner"/>
                </a>
            </div>

            <div className="carousel">
                <a href="#">
                    <img loading="lazy" src="/carousel/car5.webp" width="100%" height="250" alt="Banner"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Carousel