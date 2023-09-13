import { useState, useEffect, useRef  } from 'react';
import * as itemsAPI from '../../../utilities/items-api'
// import './NewOrderPage.css';
// import { Link } from 'react-router-dom';
// import Logo from '../../../components/Logo/Logo';
import MenuList from '../../../components/MenuList/MenuList';
import CategoryList from '../../../components/CategoryList/CategoryList';
// import ItemDetail from '../../../';
// import UserLogOut from '../../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({user, setUser}) {
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);
  const [activeCat, setActiveCat] = useState('');
  // - Fetch the menuItems from the server via AJAX
  // - When the data comes back, call setMenuItems to save in state

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0])
    }
    getItems();
  }, []);


  return (
    // <h1>NewOrderPage</h1>
    <main >
      <div id="idx-inner" className='columns'>
        <div className='filter-container column is-one-fifth is-responsive'></div>
        {/* <aside> */}
        {/* <Logo /> */}
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        {/* <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link> */}
        {/* <UserLogOut user={user} setUser={setUser} /> */}
        {/* </aside> */}
        

        <div >
          <MenuList
            menuItems={menuItems.filter(item => item.category.name === activeCat)}
          />
          {/* <OrderDetail /> */}
        </div>
      </div>
    </main>

  );
}