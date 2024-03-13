import React from 'react'
import NavBar from '../components/NavBar'
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import ProCard from '../components/ProCard';

const ProjectPage = (props) => {
    const image1 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/04/4685192/1.jpg?1723'
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/3355072/1.jpg?5389'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/1142352/1.jpg?6986'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/1218882/1.jpg?3148'
  const image5 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/2221591/1.jpg?8659'

  return (
    <div>
        <NavBar/>
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

export default ProjectPage