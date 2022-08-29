import React from 'react';
import './estilos/Registration.css';
import * as logoImg from './estilos/logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Registration = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is mendatory')
          .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
          .required('Password is mendatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })
      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState;
return (
    <div className='registration-back'>
        <div className='registration-form-div'>
            <div className='registration-page-logo-div'>
                <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
            </div>
            <form className='registration-form'>
                <div className='input-divider'>
                    <label className='email-input-label' htmlFor='e-mail'>introduzca su email de la empresa:</label>
                    <input className='email-input input-field' type='email' placeholder='ejemplo123@metrogas.com.do' required/>
                </div>

                <div className="input-divider">
                    <label>introduzca la contraseña:</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className='input-field'
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="input-divider">
                    <label>Confirme su contraseña:</label>
                    <input
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                        className='input-field'
                    />
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                </div>

                <button type='submit' className='registration-btn'>entrar al sistema</button>
            </form>
        </div>
    </div>
)
};