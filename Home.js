
/*import React , {useState,useEffect} from 'react';
import Axios from 'axios' ;
import './Home.css' ;
import{BrowserRouter as Router,Switch,Route,Routes,Link, useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import About from './About';
import{store} from'../redux/store'

import axios from '../Api/Axios';

function Home(){  

//home initial

    const[ login ,setlogin]    =useState('') ;
    const[ mdp1 ,setmdp1]    =useState('') ;

    const tasks=useSelector((state=>state.user));

    function validateForm() 
    {
      if( mdp1.length > 0 && login.length > 0)
      { return true;}
        else {
        return false ;}
    };

     const util=tasks.find(t => t.login===login);


    function validpassword(){
     if(validateForm())
      {
        if(util.password===mdp1)
      return true;
      else
      {
      return false ;}    }  };

     const verif=()=>{
          if(validpassword())
          {//setIsSubmitted=true ; 
            navigate('/about')   ;
            alert('bienvenu');           
            Axios.post("http://localhost:3001/signin",{login:login,mdp1:mdp1}).then((response)=>{
              console.log(response);    });            
          }
          else
          {//setIsSubmitted=false ;
            alert('veuillez verifier votre mot de passe');}
      } ;   
    return (
      <div className="hom">

    <div className='login'>
  <form>
  <label>email </label>
  <input type='text' name='user'onChange={(e)=>{ 
     setlogin(e.target.value)}   }></input>
  <label>password</label>
  <input type='password' name='mdp1'  onChange={(e)=>{ 
     setmdp1(e.target.value)}   }></input>

<div id ="connecter">
        
          <button onClick={(verif) }  disabled={!validateForm()}> se connecter  </button></div>
  vous n'avez pas de compte  <button>register</button> 
  </form>
  </div>   </div>
    );
}
export default Home ;*/
import '../App.css';
import Axios from 'axios'
import{BrowserRouter as Router,Switch, Route,Routes,Link,useNavigate} from "react-router-dom";
import React,{useState , useEffect} from "react";
import Login from './Login';
import{useParams} from 'react-router-dom';
function Home() {
  
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [domaine, setdomaine] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const Navigate = useNavigate();

  const Register = async (e) => {
      e.preventDefault();
      try {
          await Axios.post('http://localhost:5000/register', {
              nom:nom,
              prenom:prenom,
              domaine:domaine,
              email: email,
              password: password,
              confPassword: confPassword
          });
          Navigate("/home");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
 
    
  return (
    <div className="App">
      <form onSubmit={Register}>
    <div className='form'>
      <h1>Bienvenue </h1>
      <h3 id="saisir">Veuillez saisir vos coordonnées </h3>
      <p >       {msg}</p>
      <input type ="text" name="nom" required ="required" value={nom}  placeholder=" Nom" onChange={(e) =>{
      setnom( e.target.value);
      }}/>
      <input type ="text" name="prenom" required ="required" value={prenom} placeholder=" Prenom"onChange={(e) =>{
      setprenom( e.target.value);}}/>
      <input type ="text" name="domaine" placeholder=" domaine" value={domaine}  onChange={(e) =>{
        setdomaine( e.target.value);
    }}/>
    <input type ="email" name="email" required ="required" value={email} placeholder=" Email"onChange={(e) =>{
      setemail( e.target.value);}}/>
      <input type ="password" name="password" required ="required"value={password}  placeholder=" Mot de passe"onChange={(e) =>{
        setpassword(e.target.value)
      }}
      />
      <input type ="password" name="password1" value={confPassword} placeholder=" Verifier Mot de passe" onChange={(e) =>{setConfPassword(e.target.value)}}
     />
      <button >s'inscrire</button>
       
      <h3>Vous avez un compte ? <Link to='/' >se connecter</Link> 
     <Routes><Route path='/login' exact element={<Login/>} ></Route></Routes> </h3>
      

    </div>
    </form>
    </div>
    
  );
}

export default Home;


