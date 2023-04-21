import React from "react";
import "./catagories.scss";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <div className='catagories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/2531156/pexels-photo-2531156.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/2914284/pexels-photo-2914284.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/5490229/pexels-photo-5490229.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Acessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          {" "}
          <img
            src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
