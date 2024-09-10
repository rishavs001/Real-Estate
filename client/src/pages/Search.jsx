// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ListingItem from '../components/ListingItem';

// export default function Search() {
//   const navigate = useNavigate();
//   const [sidebardata, setSidebardata] = useState({
//     searchTerm: '',
//     type: 'all',
//     parking: false,
//     furnished: false,
//     offer: false,
//     sort: 'created_at',
//     order: 'desc',
//   });

//   const [loading, setLoading] = useState(false);
//   const [listings, setListings] = useState([]);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     const typeFromUrl = urlParams.get('type');
//     const parkingFromUrl = urlParams.get('parking');
//     const furnishedFromUrl = urlParams.get('furnished');
//     const offerFromUrl = urlParams.get('offer');
//     const sortFromUrl = urlParams.get('sort');
//     const orderFromUrl = urlParams.get('order');

//     if (
//       searchTermFromUrl ||
//       typeFromUrl ||
//       parkingFromUrl ||
//       furnishedFromUrl ||
//       offerFromUrl ||
//       sortFromUrl ||
//       orderFromUrl
//     ) {
//       setSidebardata({
//         searchTerm: searchTermFromUrl || '',
//         type: typeFromUrl || 'all',
//         parking: parkingFromUrl === 'true' ? true : false,
//         furnished: furnishedFromUrl === 'true' ? true : false,
//         offer: offerFromUrl === 'true' ? true : false,
//         sort: sortFromUrl || 'created_at',
//         order: orderFromUrl || 'desc',
//       });
//     }

//     const fetchListings = async () => {
//       setLoading(true);
//       setShowMore(false);
//       const searchQuery = urlParams.toString();
//       const res = await fetch(`/api/listing/get?${searchQuery}`);
//       const data = await res.json();
//       if (data.length > 8) {
//         setShowMore(true);
//       } else {
//         setShowMore(false);
//       }
//       setListings(data);
//       setLoading(false);
//     };

//     fetchListings();
//   }, [location.search]);

//   const handleChange = (e) => {
//     if (
//       e.target.id === 'all' ||
//       e.target.id === 'rent' ||
//       e.target.id === 'sale'
//     ) {
//       setSidebardata({ ...sidebardata, type: e.target.id });
//     }

//     if (e.target.id === 'searchTerm') {
//       setSidebardata({ ...sidebardata, searchTerm: e.target.value });
//     }

//     if (
//       e.target.id === 'parking' ||
//       e.target.id === 'furnished' ||
//       e.target.id === 'offer'
//     ) {
//       setSidebardata({
//         ...sidebardata,
//         [e.target.id]:
//           e.target.checked || e.target.checked === 'true' ? true : false,
//       });
//     }

//     if (e.target.id === 'sort_order') {
//       const sort = e.target.value.split('_')[0] || 'created_at';

//       const order = e.target.value.split('_')[1] || 'desc';

//       setSidebardata({ ...sidebardata, sort, order });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams();
//     urlParams.set('searchTerm', sidebardata.searchTerm);
//     urlParams.set('type', sidebardata.type);
//     urlParams.set('parking', sidebardata.parking);
//     urlParams.set('furnished', sidebardata.furnished);
//     urlParams.set('offer', sidebardata.offer);
//     urlParams.set('sort', sidebardata.sort);
//     urlParams.set('order', sidebardata.order);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   const onShowMoreClick = async () => {
//     const numberOfListings = listings.length;
//     const startIndex = numberOfListings;
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('startIndex', startIndex);
//     const searchQuery = urlParams.toString();
//     const res = await fetch(`/api/listing/get?${searchQuery}`);
//     const data = await res.json();
//     if (data.length < 9) {
//       setShowMore(false);
//     }
//     setListings([...listings, ...data]);
//   };
//   return (
//     <div className='bg-stone-100 shadow-md'>
// <div className='flex flex-col md:flex-row'>
//       <div className='p-7  border-b-2 md:border-r-2 md:min-h-full'>
//         <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
//           <div className='flex items-center gap-2'>
//             <label className='whitespace-nowrap font-semibold'>
//               Search Term:
//             </label>
//             <input
//               type='text'
//               id='searchTerm'
//               placeholder='Search...'
//               className='border bg-stone-50 border-stone-600 p-3 rounded-3xl w-full'
//               value={sidebardata.searchTerm}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='flex gap-2 flex-wrap items-center'>
//             <label className='font-semibold'>Type:</label>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='all'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.type === 'all'}
//               />
//               <span>Rent & Sale</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='rent'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.type === 'rent'}
//               />
//               <span>Rent</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='sale'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.type === 'sale'}
//               />
//               <span>Sale</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='offer'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.offer}
//               />
//               <span>Offer</span>
//             </div>
//           </div>
//           <div className='flex gap-2 flex-wrap items-center'>
//             <label className='font-semibold'>Amenities:</label>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='parking'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.parking}
//               />
//               <span>Parking</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='furnished'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.furnished}
//               />
//               <span>Furnished</span>
//             </div>
//           </div>
//           <div className='flex items-center gap-2'>
//             <label className='font-semibold'>Sort:</label>
//             <select
//               onChange={handleChange}
//               defaultValue={'created_at_desc'}
//               id='sort_order'
//               className='border bg-stone-50 border-stone-600 p-3 rounded-3xl'
//             >
//               <option value='regularPrice_desc'>Price high to low</option>
//               <option value='regularPrice_asc'>Price low to hight</option>
//               <option value='createdAt_desc'>Latest</option>
//               <option value='createdAt_asc'>Oldest</option>
//             </select>
//           </div>
//           <button className='bg-stone-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
//             Search
//           </button>
//         </form>
//       </div>
//       <div className='flex-1'>
//         <h1 className='text-3xl font-semibold border-b p-3 text-stone-700 mt-5'>
//           Listing results:
//         </h1>
//         <div className='p-7 flex flex-wrap gap-4'>
//           {!loading && listings.length === 0 && (
//             <p className='text-xl text-stone-700'>No listing found!</p>
//           )}
//           {loading && (
//             <p className='text-xl text-stone-700 text-center w-full'>
//               Loading...
//             </p>
//           )}

//           {!loading &&
//             listings &&
//             listings.map((listing) => (
//               <ListingItem key={listing._id} listing={listing} />
//             ))}

//           {showMore && (
//             <button
//               onClick={onShowMoreClick}
//               className='text-green-700 hover:underline p-7 text-center w-full'
//             >
//               Show more
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
    
//   );
// }


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaParking, FaCouch, FaTags, FaSortAmountDown } from 'react-icons/fa'; // Icons
import ListingItem from '../components/ListingItem';

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const parkingFromUrl = urlParams.get('parking');
    const furnishedFromUrl = urlParams.get('furnished');
    const offerFromUrl = urlParams.get('offer');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        parking: parkingFromUrl === 'true' ? true : false,
        furnished: furnishedFromUrl === 'true' ? true : false,
        offer: offerFromUrl === 'true' ? true : false,
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc',
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, checked, value } = e.target;
    setSidebardata(prevData => ({
      ...prevData,
      [id]: id === 'parking' || id === 'furnished' || id === 'offer'
        ? checked
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(sidebardata);
    navigate(`/search?${urlParams.toString()}`);
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', numberOfListings);
    const res = await fetch(`/api/listing/get?${urlParams.toString()}`);
    const data = await res.json();
    if (data.length < 9) setShowMore(false);
    setListings([...listings, ...data]);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-10 px-2 lg:px-4 flex flex-col md:flex-row gap-4'>
        {/* Sidebar Filter */}
        <div className='w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Filter Listings</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            {/* Search Input */}
            <div className='flex items-center gap-2'>
              <FaSearch className='text-gray-500' />
              <input
                type='text'
                id='searchTerm'
                placeholder='Search...'
                className='border-b border-gray-400 focus:border-indigo-500 outline-none w-full px-3 py-2 text-gray-700'
                value={sidebardata.searchTerm}
                onChange={handleChange}
              />
            </div>

            {/* Property Type */}
            <div className='flex flex-col'>
              <label className='font-semibold text-gray-700 mb-2'>Property Type</label>
              <div className='flex gap-4'>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id='all'
                    name='type'
                    value='all'
                    checked={sidebardata.type === 'all'}
                    onChange={handleChange}
                    className='accent-indigo-600'
                  />
                  <span className='text-gray-700'>All</span>
                </label>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id='rent'
                    name='type'
                    value='rent'
                    checked={sidebardata.type === 'rent'}
                    onChange={handleChange}
                    className='accent-indigo-600'
                  />
                  <span className='text-gray-700'>Rent</span>
                </label>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id='sale'
                    name='type'
                    value='sale'
                    checked={sidebardata.type === 'sale'}
                    onChange={handleChange}
                    className='accent-indigo-600'
                  />
                  <span className='text-gray-700'>Sale</span>
                </label>
              </div>
            </div>

            {/* Amenities */}
            <div className='flex flex-col'>
              <label className='font-semibold text-gray-700 mb-2'>Amenities</label>
              <div className='flex flex-wrap gap-4'>
                <label className='flex items-center gap-2'>
                  <FaParking className='text-gray-500' />
                  <input
                    type='checkbox'
                    id='parking'
                    checked={sidebardata.parking}
                    onChange={handleChange}
                    className='accent-indigo-600'
                  />
                  <span className='text-gray-700'>Parking</span>
                </label>
                <label className='flex items-center gap-2'>
                  <FaCouch className='text-gray-500' />
                  <input
                    type='checkbox'
                    id='furnished'
                    checked={sidebardata.furnished}
                    onChange={handleChange}
                    className='accent-indigo-600'
                  />
                  <span className='text-gray-700'>Furnished</span>
                </label>
              </div>
            </div>

            {/* Offers */}
            <label className='flex items-center gap-2'>
              <FaTags className='text-gray-500' />
              <input
                type='checkbox'
                id='offer'
                checked={sidebardata.offer}
                onChange={handleChange}
                className='accent-indigo-600'
              />
              <span className='text-gray-700'>Offer</span>
            </label>

            {/* Sorting */}
            <div className='flex items-center gap-2'>
              <FaSortAmountDown className='text-gray-500' />
              <select
                id='sort_order'
                value={`${sidebardata.sort}_${sidebardata.order}`}
                onChange={handleChange}
                className='border-b border-gray-400 focus:border-indigo-500 outline-none w-full px-3 py-2 text-gray-700'
              >
                <option value='regularPrice_desc'>Price: High to Low</option>
                <option value='regularPrice_asc'>Price: Low to High</option>
                <option value='createdAt_desc'>Latest</option>
                <option value='createdAt_asc'>Oldest</option>
              </select>
            </div>

            <button
              type='submit'
              className='bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500 transition'
            >
              Search
            </button>
          </form>
        </div>

        {/* Listings */}
        <div className='w-full md:w-2/3'>
          <h1 className='text-3xl font-semibold mb-6 text-gray-800'>Listings</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {!loading && listings.length === 0 && (
              <p className='text-xl text-gray-600'>No listings found!</p>
            )}
            {loading && (
              <p className='text-xl text-center w-full text-gray-600'>
                Loading...
              </p>
            )}
            {!loading && listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}
          </div>
          {showMore && (
            <button
              onClick={onShowMoreClick}
              className='mt-8 w-full text-indigo-600 hover:underline text-lg'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
