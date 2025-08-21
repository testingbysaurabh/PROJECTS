import '/Error.css';
import { useNavigate } from 'react-router-dom';

const Error = () => {

  const navigate = useNavigate()
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center text-center px-4'>

      <h1
        className="text-[150px] font-extrabold text-transparent bg-[url('https://shorturl.at/2jnTB')] bg-center bg-cover animate-text-animate bg-clip-text"
      >
        Ooops!
      </h1>

      <h2 className='text-[30px] font-bold'>404 - PAGE NOT FOUND</h2>
      <p className='leading-6  mt-1'>
        The page you are looking for might have been removed,
      </p>
      <p className=''>had its name changed, or is temporarily unavailable.</p>
      <button onClick={() => navigate('/home')} className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 mt-5 rounded-[20px] transition-all duration-300'>
        GO TO HOMEPAGE
      </button>
    </div>
  );
};

export default Error;
