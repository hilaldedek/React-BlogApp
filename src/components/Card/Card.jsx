import React from 'react';
import "../Card/Card.css";
import defaultImg from "../../assets/world.png";

const Card = () => {
  return (
    <div>
        <div className='cardStyle'>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg' />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg' />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" alt='defaultImg' src={defaultImg} />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
    </div>
    </div>
  )
}

export default Card