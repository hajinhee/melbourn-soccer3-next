import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Register } from '@/components/auth/Register';
import { register } from '@/modules/auth/register';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const [user, setUser] = useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    const onSubmit = e => {
      e.preventDefault()
      alert('회원가입 정보: ' +JSON.stringify(user))
      dispatch(userAction.joinRequest(user))
      window.location.href = './login'
    }
    // 부모인 page(next)가 자식인 component(react)에게 상태 전달
  return (
    <Register onChange={onChange} onSubmit={onSubmit}/>
  );
};

export default connect(
  state => ({
    registerUser: state.registerUser
  }),
  {register}
)(RegisterPage);