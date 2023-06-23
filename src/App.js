import './App.scss';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import RoutesComponent from './routes';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const token = localStorage.getItem('access_token')
    const { user } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
      if (token) {
          // dispatch(getNotifies({ userId: user.profile.id, token: token }))
      }
  }, [user, token, dispatch])
  return (
    <div className="App">
        <RoutesComponent />
        {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
