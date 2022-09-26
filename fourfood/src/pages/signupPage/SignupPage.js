import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Signup } from '../../constants/constants'
import { useForm } from '../../hooks/useForm'
import mediumLogo from '../../logos/mediumLogo.png'
import { goToFeedPage, goToLoginPage, goToSignupPage } from '../../routes/navigation'
import '../loginPage/index.css'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignupPage = () => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInput] = useForm({
    email: "",
    password: "",
    name: "",
    cpf: ""
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [messageError, setMessageError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const onClickShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  const onSubmit = async (e)=>{
    e.preventDefault()
    console.log(form);
    setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
    try{
      const {token} = isEmailValid && await Signup({
        email: form.email,
        password: form.password,
        cpf: form.cpf,
        name: form.name
    })
    token?(goToFeedPage(navigate)):(goToSignupPage(navigate))
    
    } catch(e) {
      setMessageError(e.response.data.message);
    }  
  }


  return (
    <div>
      <div className="form-container">
        <div className="image">
          <img src={mediumLogo} alt="Logo da empresa" />
        </div>
        <h1>cadastrar</h1>
        <form className='login-form' onSubmit={onSubmit}>
          <label id='label-form-email'>Nome*</label>
          <input 
            name='name'
            value={form.name}
            onChange={onChangeInputs}
            type="text" 
            placeholder='Digite seu nome completo'/>

          <label id='label-form-email'>E-mail*</label>
          <input 
            name='email'
            value={form.email}
            onChange={onChangeInputs}
            type="email" 
            placeholder='Digite seu email'
          />

          <label id='label-form-email'>CPF*</label>
          <input 
            name='cpf'
            value={form.cpf}
            onChange={onChangeInputs}
            type="number" 
            placeholder='000.000.000-00'
          />

            <div className="input-password">
            <label id='label-form-password'>Senha*</label>
            <input 
                name='password'
                type={showPassword ? 'text' : 'password'} 
                placeholder='Digite sua senha' 
                value={form.password}
                onChange={onChangeInputs}/>
                <button id="button-show-password" type='button' onClick={onClickShowPassword}>
                  {showPassword? <AiFillEyeInvisible size={20}/> : <AiFillEye size={20}/>}
                </button>
            </div>  

            <p>{messageError}</p>

          <button type='submit'>Criar</button> 
       </form>
        
      </div>
    </div>
  )
}

export default SignupPage