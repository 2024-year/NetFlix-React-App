import React from 'react'
import Header,{DropdownItemTagsExample}  from '../../components/Header/header';
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Row/RowList/RowList'
import Banner2 from '../../components/Banner/Banner2'
const Home = () => {
  return (
    <div>
     
    <Header/>
    <DropdownItemTagsExample/>
    {/* <Banner2/> */}
    <Banner/>
    <RowList/>
    <Footer/>
    </div>
  )
}

export default Home
