import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Form from './components/form/Form';

function App() {

  const[user,setUser]=useState({name : " ", password : " "});
  const handleChange = (e)=>{
    setUser({ ...user,name : e.target.value});
    console.log(user)
  };
  const handleChange1 = (e)=>{
    setUser({ ...user,password : e.target.value})
    console.log(user)
  };
  const handleClick = ()=>{
    if(user.name===" "){
      alert("Lütfen Kullanıcı Adınızı Giriniz !!!");
    }
    else if(user.password===" "){
      alert("Lütfen Parolanızı Giriniz !!!");
    }
    else{
      alert( "Kullanıcı Adı: " + user.name + "---" + "Parola: "+ user.password );
    }
  };
  return (
    <div className="App">
      <Form>
        <h2 className='giris'>Kullanıcı Girişi</h2>
        <Input type={"text"} placeholder={"Kullanıcı Adınızı Giriniz..."} onChange={handleChange} value={user.name}/>
        <Input type={"password"}  placeholder={"Şifrenizi Giriniz..."} onChange={handleChange1} value={user.password}/>
        <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}

export default App;
