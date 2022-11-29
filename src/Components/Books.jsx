import React from 'react'
import Romance from './Books/romance.json'
import {Carousel, Row, Col} from 'react-bootstrap'
const Books = () => {
  return (
    <div className='row '>

<Carousel>
          <Carousel.Item>
            <div className="movie-row">
              <Row>
                {Romance.map((movie) => (
                  <Col md={2}>
                    <a href="d" className="movie-cover">
                      <img src={movie.img}  alt="image"/>
                    </a>
                    <h3>{movie.title}</h3>
                  </Col>
                ))}
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>




    

    </div>  
  )
}

export default Books