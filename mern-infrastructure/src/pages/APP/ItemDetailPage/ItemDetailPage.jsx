import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../../utilities/items-api';
// import * as ordersAPI from '../../utilities/orders-api';
import './ItemDetailPage.css';


export default function ItemDetailPage( ) {
    const [selectedItem, setSelectedItem] = useState(null);
    const { id} = useParams();
    
    useEffect(function() {
      async function getItemDetails() {
        const item = await itemsAPI.getDetails(id);
        setSelectedItem(item);
      }
      getItemDetails();
    }, [id]);
  
   if (selectedItem === null){
    return (
      <>
        <p>Loading</p>
      </>
    )

   }
    
    return (
      <main className='ItemDetailPage'>
        <div className="details-container columns">
          <section className='details-image column is-half'>
            <div className="details-img-container flex-ctr-ctr">
              {/* <img src={selectedItem.picture} alt={selectedItem.name} /> */}
            </div>
          </section>
          <section className='details-info column auto'>
            {/* <p className='right'>SKU: {selectedItem.itemSKU}</p> */}
            <h1>{selectedItem.name}</h1>
            <h2>{selectedItem.state}</h2>
            <h5>Lift: &nbsp;{selectedItem.lift}</h5>
            <p>{selectedItem.website}</p>
            {/* <button 
              className='button is-rounded is-responsive' 
              onClick={() => handleAddToCart(itemId)}
            >Add to Cart</button> */}
          </section>
        </div>
      </main>
    );
  }