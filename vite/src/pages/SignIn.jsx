import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';


const SignIn = () => {
  // const [error,setError]=useState(null);
  // const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  const {loading,error}=useSelector((state)=>state.user)
  const navigate=useNavigate();
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      // setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      console.log(JSON.stringify(formData));
      const data=await res.json();
      console.log(data);
      if(!data.success){
        dispatch(signInFailure(data.message));
        // setLoading(false);
        // setError(data.message);
        return;
      }

      dispatch(signInSuccess(data));
      // setLoading(false);
      // setError(null);

      navigate("/");

    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }

  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' className='border p-3 rounded-lg' id="email" onChange={handleChange} />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id="password" onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading..." :"Sign In"}
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to="/sign-up">
        <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 m'>{error}</p>}
    </div>
  )
}

export default SignIn;