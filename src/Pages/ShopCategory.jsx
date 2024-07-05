import React, { useContext } from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assest/dropdown_icon.png'
import Items from '../Components/Items/Items'


const ShopCategory = (props) => {

  const {all_products} =useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 produtcs
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {
          all_products.map((v,i)=>{
            if(props.category===v.category)
            {
            return <Items key={i} id={v.id} name={v.name} image={v.image} new_price={v.new_price} old_price={v.old_price}/>
            }
            else
            {
              return null;
            }
          })
        }
         
       
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
