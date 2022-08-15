import React from 'react';
import { Featured } from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import MailList from '../../components/mailLIst/MailList';
import { Navbar } from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyLIst/PropertyList';
import "./home.css"

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Home guests love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
      </div>
      </div>
  )
}
