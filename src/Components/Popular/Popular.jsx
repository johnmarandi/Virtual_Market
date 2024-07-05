import React from 'react'
import '../Popular/Popular.css'
import data_product from '../Assest/data'
import Items from '../Items/Items'

const Popular = () => {

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className='popular-item'>
        {
          data_product.map((v,i)=>{
            return <Items key={i} id={v.id} name={v.name} image={v.image} new_price={v.new_price} old_price={v.old_price}/>
          })
        }
      </div>
    </div>
  )
}

export default Popular
