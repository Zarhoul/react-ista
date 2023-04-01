import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()

const handleLogin = (e) => {
e.preventDefault()
// check if the username and password match the admin credentials
if (username === 'admin' && password === 'password') {
// redirect to the dashboardAdmin route
navigate('/dashboardAdmin')
} else {
// display an error message if the credentials are incorrect
alert('Invalid username or password')
}
}

return (
<>
<div className="h-5/6 flex flex-col justify-around">
<div className="px-16 py-16 m-10 flex flex-row shadow-xl rounded-lg">
<div className='basis-1/2'>
<form onSubmit={handleLogin} className="flex flex-col justify-center items-start px-16">
<div className="w-full font-bold text-4xl text-primary-color text-start">LOGIN</div>
<div className="w-full flex flex-col justify-center items-start">
<label className="font-medium text-xl pt-6 pb-2">Identifient :</label>
<input type="text" name="identifient" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border-2 border-solid rounded-md border-extend-secondary-color"/>
<label className="font-medium text-xl pt-6 pb-2">Mot de passe :</label>
<input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border-2 border-solid rounded-md border-extend-secondary-color"/>
</div>
<div>
<button type="submit" className="p-4 mt-6 rounded-md bg-primary-color font-medium text-lg text-tertiary-color hover:bg-hover-primary-color">Se connecter</button>
</div>
</form>
</div>
<div className="basis-1/2 flex flex-row gap-2">
<img src='/images/image-1.jpg' alt=""/>
</div>
</div>
</div>
</>
)
}

export default Login