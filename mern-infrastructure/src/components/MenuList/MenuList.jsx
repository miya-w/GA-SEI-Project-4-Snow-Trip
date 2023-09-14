
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems,}) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
    />
  );
  return (
    <main >
    <dl className="dictionary">
    {items}
    </dl>
    </main>
  );
}