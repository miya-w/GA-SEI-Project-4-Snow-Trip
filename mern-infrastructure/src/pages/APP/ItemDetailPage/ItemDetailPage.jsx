import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../../utilities/items-api';
import './ItemDetailPage.css';


export default function ItemDetailPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();

  useEffect(function () {
    async function getItemDetails() {
      const item = await itemsAPI.getDetails(id);
      setSelectedItem(item);
    }
    getItemDetails();
  }, [id]);

  if (selectedItem === null) {
    return (
      <>
        <p>Loading</p>
      </>
    )

  }

  return (
    <main className='ItemDetailPage'>
      <div className="details-container">

        <div className="detail ">
          <img className='detail-img' src={selectedItem.image} alt={selectedItem.name}/>
        </div>
        <div className='detail details-info flex-col align-lft  '>
          <h1>{selectedItem.name}</h1>
          <h2>{selectedItem.subtitle}</h2>
          <hr/>
          <p>{selectedItem.state}</p>
          <p>Lift: &nbsp;{selectedItem.lift}</p>
          <p>Slope: &nbsp;{selectedItem.slope}&nbsp;KM</p>
          <p>Elevation:&nbsp;{selectedItem.elevation}</p>
          <a href={selectedItem.website}>WebSite</a> 
        </div> 
        
      </div>
      <hr/>
      <div className='description'>
        <p>{selectedItem.description}</p>
      </div>
      <div className="trail">
          <img className="trail-img" src={selectedItem.trail} alt={selectedItem.name}  />
        </div>
    </main>
  );
}