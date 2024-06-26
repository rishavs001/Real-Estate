import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error('Credentials Mismatch');
        return;
      }
      dispatch(signInSuccess(data));
      toast.success('Signed in successfully');
      navigate('/');
    } catch (error) {
      toast.error('Missing credentials');
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='bg-stone-100 shadow-md h-full'>
      <div className='p-3 pt-14 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-9'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='Email'
            placeholder='Email'
            className='border bg-stone-50 border-stone-600 p-3 rounded-3xl'
            id='email'
            onChange={handleChange}
          />
          <input
            type='Password'
            placeholder='Password'
            className='border bg-stone-50 border-stone-600 p-3 rounded-3xl'
            id='password'
            onChange={handleChange}
          />
          <button 
            disabled={loading}
            className='bg-stone-700 text-white p-3 rounded-3xl uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth/>
        </form>
        <div className='flex gap-2 pb-5 mb-14 mt-5'>
          <p>Don't have an account?</p>
          <Link to={'/sign-up'}>
            <span className='text-blue-700'>Sign Up</span>
          </Link>
        </div>
        {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
        {/* <Toaster /> */}
      </div>
    </div>
  );
}
