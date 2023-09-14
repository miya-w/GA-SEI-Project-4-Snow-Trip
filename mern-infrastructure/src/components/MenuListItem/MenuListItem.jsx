import './MenuListItem.css';
import { Link } from 'react-router-dom';

export default function MenuListItem({ menuItem }) {
  return (
    <div className="term">
    <Link to={`/items/${ menuItem._id}`}>
    <dt className='item-card flex-col '>
    <img className="cover-img" src={menuItem.image} alt={menuItem.title} />
    <div>
    <span className="name">{menuItem.name}</span> 
    
   
    </div>
     
    </dt>
    <dd>
    <span className='item-state'>{menuItem.state}</span>
    </dd>
    <dd>
    <span className='item-state'>lift: {menuItem.lift}</span>
    &nbsp;
    <span className='item-state'>slope: {menuItem.slope}KM</span>
    &nbsp;
   
    </dd>
      
    </Link>
    </div>
  );
}