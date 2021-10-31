
import './App.css';

import { ToastContainer, toast } from 'react-toastify';


function App() {

  const notify = () => toast("loremfrfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");


  return (
    <>
       <div>
       <div>
       <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
/>
        <button onClick={notify}>Notifyyyyy!</button>
        
      </div> 
       </div>
    </>

  );
}

export default App;
