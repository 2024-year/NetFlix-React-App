import React from 'react'
import Header,{DropdownItemTagsExample}  from '../../components/Header/header';
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Row/RowList/RowList'

const Home = () => {
  return (
    <div>
     
    <Header/>
    <DropdownItemTagsExample/>
    <Banner/>
    <RowList/>
    <Footer/>
    </div>
  )
}

export default Home
