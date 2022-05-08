import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import './Home.css';
import PropertyList from '../../components/ProperyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes guest love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home