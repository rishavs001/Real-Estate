import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className='bg-stone-100 pb-3 shadow-md h-full'>
      {/* top */}
      <div className='flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto'>
      <h1 className='text-stone-700 font-bold text-3xl lg:text-6xl font-serif'>
          Discover your <span className='text-stone-500'>dream</span> home effortlessly
      </h1>
        <div className='text-cyan-700 font-medium font-sans text-xs sm:text-sm'>
          NayaNivas is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
          <br/>
          So, unlock Your Dream Property - Buy, Rent, Sell, and Connect with Ease in One Place !!
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-amber-600 font-bold hover:text-amber-500'
        >
          Begin Your Journey...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto  p-5 flex flex-col gap-18 '>
        {offerListings && offerListings.length > 0 && (
          <div className=' '>
            <div className='my-3 '>
              <h2 className='text-2xl font-semibold text-stone-600'>Recent offers</h2>
              <Link className='text-sm font-semibold text-amber-600 hover:text-amber-700' to={'/search?offer=true'}>Show more offers...</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className='mt-8'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-stone-600'>Recent places for rent</h2>
              <Link className='text-sm font-semibold text-amber-600 hover:text-amber-700' to={'/search?type=rent'}>Show more places for rent...</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className='mt-8'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-stone-600'>Recent places for sale</h2>
              <Link className='text-sm font-semibold text-amber-600 hover:text-amber-700' to={'/search?type=sale'}>Show more places for sale...</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
