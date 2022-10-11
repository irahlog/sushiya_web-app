import OrderItems from './OrderItems';
import { useSession, signIn, signOut } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className='hidden col-span-3 border-l-2 lg:inline lg:max-w-7xl mx-auto'>
      <div className='flex flex-col mx-5'>
        <h2 className='px-4 py-3 font-bold text-2xl'>Your Order</h2>
        <button
          disabled={!session}
          className=' bg-sushiya text-white rounded-full py-2 px-5'
        >
          <span className=''>Checkout</span>
          <span>$30.95</span>
        </button>
        <OrderItems />
        <OrderItems />
        <OrderItems />
        <OrderItems />
      </div>
    </div>
  );
};

export default Sidebar;
