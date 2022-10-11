import { useState } from 'react';

import MenuItem from './MenuItem';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';

const MenuItems = ({
  id,
  name,
  description,
  image,
  availability,
  associatedMenuItems,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItem, setMenuItem] = useState({});

  const toggleMenuCard = (menuItem) => {
    setMenuItem(menuItem);
    setIsModalOpen(true);
  };
  // const showMenuCard = useSelector((state) => state.menuCard.menuCardIsVisible);

  return (
    <>
      <div className='relative z-1'>
        <div className='font-bold text-2xl px-4 pt-4'>{name}</div>
        <div className='text-xs text-description px-4'>{description}</div>

        <div className='columns-2'>
          <div className='w-full'>
            <MenuModal
              isModalOpen={isModalOpen}
              menuItem={menuItem}
              setIsModalOpen={setIsModalOpen}
            />

            {associatedMenuItems?.map((item) => (
              <div key={item._id} onClick={() => toggleMenuCard(item)}>
                <MenuItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MenuItems;
