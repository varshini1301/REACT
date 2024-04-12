// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {

   const [name,setName] = useState()
   const [email,setEmail] = useState()
   const [Password,setPassword] = useState()

   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0:3000/register ',{name: name, email:email, password:Password})
     .then(result => console.log(result))
     .catch(err => console.log(err))
   }

  return (
    <div className="App">

      <div className='container-fluid d-flex justify-content-center align-item-center bg-primary-subtle vh-100'>
        <div className='w-25 p-5 bg-white rounded  text-center m-5 h-75'>
              <h1>Register</h1>
            <form onSubmit={handleSubmit} >
              <div className='text-start'>
              <label htmlFor="name" className=" col-form-label"><strong>Name</strong></label>
              <input type="text" className="form-control" placeholder='Enter your Name' onChange={(e) => setName(e.target.value )}></input>

              </div>

              <div className='text-start'>
              <label htmlFor="email" className=" col-form-label"><strong>Email</strong></label>
              <input type="email" className="form-control"  placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value )}></input>

              </div>


              <div className='text-start'>
              <label htmlFor="password" className=" col-form-label"><strong>Password</strong></label>
              <input type="password" className="form-control"  placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value )}></input>

              </div>

              <button type="submit" className="btn btn-success w-100 mt-3">Register</button>

              <p className='text-start'>Already have an Account?</p>

              <button type="button" className="btn btn-light bg-dark-subtle w-100">Login</button>



            </form>



        </div>

      </div>
      
    </div>
  );
}

export default App;
