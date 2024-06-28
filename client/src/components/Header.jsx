import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-stone-500 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm  sm:text-2xl flex flex-wrap'>
            <span className='text-amber-600'>Naya </span>
            <span className='text-neutral-800'>Nivas</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-stone-100 p-3 rounded-2xl flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent text-orange-900 focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-stone-500' />
          </button>
        </form>
        <ul className='flex  items-center gap-4'>
          <Link to='/'>
            <li className='font-bold text-sm sm:text-xl hidden sm:inline text-stone-800 hover:text-stone-900'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='font-bold text-sm sm:text-xl hidden sm:inline text-stone-800 hover:text-stone-900'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-12 w-12 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <button className='font-bold border text-white p-2 rounded-xl bg-stone-800 text-sm sm:text-xl shadow-inner border-stone-600 hover:text-stone-200'> Sign in</button>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
