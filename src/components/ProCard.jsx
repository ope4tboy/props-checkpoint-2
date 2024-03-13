import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

const ProCard = (props) => {
  return (
    <div>
        <div class="ProCard" style={{ width: "18rem" }}>
                <img src={props.image}/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
                <p class="card-text">${props.price}</p>
                    <div className='mb-3 d-flex justify-content-between'>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                    </div>
                    <br />
                    <a href="#" class="btn btn-primary w-100 Toheeb" ><FaCartArrowDown/> Add to Cart</a>
                </div>
            </div>
    </div>
  )
}

export default ProCard