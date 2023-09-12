import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
// import * as ordersAPI from '../../utilities/orders-api';
// import './ItemDetailPage.css';


export default function ItemDetailPage() {
    const [selectedItem, setSelectedItem] = useState({});
    const { itemId } = useParams();
    
    useEffect(function() {
      async function getItemDetails() {
        const item = await itemsAPI.getDetails(itemId);
        setSelectedItem(item);
      }
      getItemDetails();
    }, [itemId]);
  
   
    
    return (
      <main className='ItemDetailPage'>
        <div className="details-container columns">
          <section className='details-image column is-half'>
            <div className="details-img-container flex-ctr-ctr">
              <img src={selectedItem.picture} alt={selectedItem.name} />
            </div>
          </section>
          <section className='details-info column auto'>
            <p className='right'>SKU: {selectedItem.itemSKU}</p>
            <h1>{selectedItem.name}</h1>
            <h2>${selectedItem.state?.toFixed(2)}</h2>
            <h5>: &nbsp;{selectedItem.lift}</h5>
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