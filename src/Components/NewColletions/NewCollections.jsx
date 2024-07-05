import React from 'react'
import '../NewColletions/NewCollections.css'
import new_collections from '../Assest/new_collections'
import Items from '../Items/Items'


const NewCollections = () => {
  return (
    <div className='new-collections'>
    <h1>NEW COLLECTIONS</h1>
    <hr/>
    <div className='collections'>
    {new_collections.map((v,i)=>{
        return <Items key={i} id={v.id} name={v.name} image={v.image} new_price={v.new_price} old_price={v.old_price}/>
    })}
    </div>
      
    </div>
  )
}

export default NewCollections
