import React from 'react'
import '../RelatedProducts/RelatedProducts.css'
import data_product from '../Assest/data'
import Items from '../Items/Items'

const RelatedProdutcs = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
        {data_product.map((v,i)=>{
            return <Items key={i} id={v.id} name={v.name} image={v.image} new_price={v.new_price} old_price={v.old_price}/>


           

        })}
      </div>
    </div>
  )
}

export default RelatedProdutcs
