// import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="name">{menuItem.name}</div>
      <div className="emoji flex-ctr-ctr">{menuItem.state}</div>
      <div className="buy">
        <span>Lift:{menuItem.lift.toFixed(2)}</span>
        {/* <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button> */}
      </div>
    </div>
  );
}