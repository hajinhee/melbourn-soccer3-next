import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Login } from '@/components/auth/Login'
import { login } from '@/modules/auth/user'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
    const [login, setLogin] = useState({
        userid:'', password:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setLogin({...login,[name]: value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        alert('로그인: ' +JSON.stringify(login))
      };
    return (
        <Login onChange={onChange} onSubmit={onSubmit}/>
    )
}

export default connect(
    state => ({
        loginUser: state.loginUser
    }),
    { login }
)(LoginPage)