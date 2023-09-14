import { useState, useEffect, useRef  } from 'react';
import * as itemsAPI from '../../../utilities/items-api'
import './NewOrderPage.css';
// import { Link } from 'react-router-dom';
import MenuList from '../../../components/MenuList/MenuList';
import CategoryList from '../../../components/CategoryList/CategoryList';
import Banner from '../../../components/Banner/Banner';



export default function NewOrderPage({user, setUser}) {
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);
  const [activeCat, setActiveCat] = useState('');


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
    <div className='main-main'>
    
    <aside className='cat-list'>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
       </aside>
 
    <main className='main-page'>
    <div className='main-banner'>
      <Banner/>
      </div> 
   
    <div >
          <MenuList
            menuItems={menuItems.filter(item => item.category.name === activeCat)}
          />
        </div>
        </main>
    </div>

  );
}