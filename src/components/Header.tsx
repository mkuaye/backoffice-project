import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

export function Header() {
  const [openLeftMenu, setOpenLeftMenu] = useState<boolean>(false);

  console.log('openLeftMenu', openLeftMenu);
  const toggleLeftMenu = (): void => {
    setOpenLeftMenu(!openLeftMenu);
  };

  return (
    <div className='flex h-fit justify-center items-center '>
      <div className='flex justify-between w-11/12 items-center'>
        <button onClick={toggleLeftMenu}>
          <IoMenu className='size-12' />
        </button>
        <h1 className='text-4xl text-center py-5 font-semibold'>
          Backoffice Example
        </h1>
        <div />
      </div>
    </div>
  );
}
