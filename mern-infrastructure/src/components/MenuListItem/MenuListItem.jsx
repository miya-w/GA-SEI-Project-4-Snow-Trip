// import './MenuListItem.css';
import { Link } from 'react-router-dom';

export default function MenuListItem({ menuItem }) {
  return (
    <div className="MenuListItem">
    <Link to={`/items/${ menuItem._id}`}>
      <div className="name">{menuItem.name}</div>
      <div className="emoji flex-ctr-ctr">{menuItem.state}</div>
      <div className="buy">
        <span>Lift:{menuItem.lift}</span>
        {/* <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button> */}
      </div>
      </Link>
    </div>
  );
}