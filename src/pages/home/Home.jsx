import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import Card from './Card'
import MiddleBanner from './MiddleBanner'
import MiddleBanner2 from './MiddleBanner2'
import FeedBack from './FeedBack'
import Footer from './Footer'

const Home = () => {
  return (
  <>
  <Banner></Banner>
  <Categories></Categories>
  <Card></Card>
  {/* <MiddleBanner></MiddleBanner> */}
  <MiddleBanner2></MiddleBanner2>
  <FeedBack></FeedBack>
 
  </>
  )
}

export default Home