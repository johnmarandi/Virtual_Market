import React from 'react'
import Hero from '../Components/Hero/Hero'
import Items from '../Components/Items/Items'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offer/Offers'
import NewCollections from '../Components/NewColletions/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
     <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
    </div>
  )
}

export default Shop
