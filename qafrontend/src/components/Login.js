// import React, {useRef, useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';

// function Credentials() {
//     const [username,setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')

//     let navigate = useNavigate()

//     // const login = () => {
//     //     fetch('https://drf-api-master.herokuapp.com/api-auth/login/', {
//     //         method:'POST',
//     //         headers: {
//     //             'Content-Type':'application/json'
//     //         },
//     //         body:JSON.stringify({username, password})
//     //     })
//     //     .then(resp => resp.text())
//     //     .then(result => {
//     //         if(result.key === undefined) {
//     //             setError("Invalid username or password")
//     //             return

//     //         }

//     //         localStorage.setItem('mytoken', result.key)
//     //         navigate('/articles')
//     //     })
//     // }

//     return (
//         <div className = "container mt-4">
//             <br/>
            
//             {error ? 
//                 <div className = "alert alert-warning alert-dismissible" role="alert">
//                     <p>{error}</p>
                
//                 </div>

//                 :

//                 null
        
//             }

//             <h1>Please Login Here</h1>

//             <form>
//                 <div className = "mb-3">
//                     <input type = "text" className = "form-control" 
//                     name = "username" placeholder="Please Enter Username"
//                     value = {username}
//                     onChange = {(e) => setUsername(e.target.value)}
//                     required
//                 />
            
//                 </div>


//                 <div className = "mb-3">
//                     <input type = "password" className = "form-control" 
//                     name = "password" placeholder="Please Enter Password"
//                     value = {password}
//                     onChange = {(e) => setPassword(e.target.value)}
//                     required
//                 />
            
//                 </div>

//                 <div className = "mb-3">

//                     <button onClick = {login} className = "btn btn-success">Login</button>

//                 </div>
//             </form>


            
//         </div>
//     )
// }

// export default Login
