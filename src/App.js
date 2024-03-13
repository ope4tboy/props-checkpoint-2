import React from 'react'
import ProCard from './components/ProCard'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Homepage from './pages/Homepage'
import ProjectPage from './pages/ProjectPage'
import TestimonialPage from './pages/TestimonialPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const image1 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/04/4685192/1.jpg?1723'
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/3355072/1.jpg?5389'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/1142352/1.jpg?6986'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/1218882/1.jpg?3148'
  const image5 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/2221591/1.jpg?8659'
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/testimonial' element={<TestimonialPage/>}/>
       </Routes>
      </BrowserRouter>
      <ProCard image={image1} name='Mobile phone' description='Nec phone' price={150000} />
      <ProCard image={image2} name='Mobile phone' description='Techno phone' price={450000} />
      <ProCard image={image3} name='Mobile phone' description='David phone' price={550000} />
      <ProCard image={image4} name='Mobile phone' description='Femi phone' price={750000} />
      <ProCard image={image5} name='Mobile phone' description='Omoh phone' price={500000} />
    </div>
  )
}

export default App