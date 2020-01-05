import React from 'react';
import Welcome from '../auth-welcome.svg';
import {Field, Form, Formik} from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Err = styled.div`
    text-align : left;
    color: palevioletred;
    display:block;
`
const SignUpSchema = Yup.object().shape({
    businessname: Yup.string()
      .min(2, 'Too short! Business name cannot be less than 3 characters')
      .max(30, 'Too Long! Business name cannot be longer than 30 characters')
      .required('Username is a required field'),
    email: Yup.string().email()
      .required('Email is a required Field'),
    password: Yup.string()
      .min(8, 'Your password cannot be less than 8 characters')
      .required('We want to hear from you.'),
  });


// export const Auth = ()=> (
export function SignUp () { 
  return (
    <div class='flex h-screen'>
        <div className='Welcome-Div w-2/5 p-20'>
            <div className='text-3xl font-semibold text-white'><Link to='/'>FeedBack.io</Link></div>
            <img className='px-20 pt-20 pb-5 mx-auto'  src ={Welcome} alt='Welcome icon...'/>
            <div className=''>
              <div className='text-3xl text-white mb-5 text-center mr-40'>Welcome Back!</div>
              <div className='text-white text-center mr-48' >There are feedbacks waiting for you ...</div>
            </div>
        </div>
        <div className='Auth-Div w-3/5 p-20 flex justify-center'>
            <Formik className='w-1/2 bg-white'
            initialValues={{
                businessname: '',
                email: '',
                password: ''
              }}
              validationSchema={SignUpSchema}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {
                ({errors, touched})=> (
                  <Form className='w-3/6 bg-white New-Auth-Form my-auto'>
                    <div className= 'bg-gray-300 mb-5 h-24'>
                      <div className='p-10 flex  justify-between'>
                        <div className='uppercase'><Link to='/'>{'<'} Home</Link> </div>
                        <div className='uppercase'><Link to='/auth'>Login</Link></div>
                      </div>
                    </div>
                    <div className='p-10'>
                      <div >
                        <div className='mb-5' >
                          <label className='text-sm' htmlFor='Business Name'>Business Name</label>
                        </div>
                        <div>
                        <Field className='Auth-Field w-full p-2' name='businessname'></Field>
                        {errors.businessname && touched.businessname ? <Err>{errors.businessname}</Err> : null}
                        </div>
                      </div>
                      <div >
                        <div className='my-5' >
                          <label className='text-sm' htmlFor='email'>Email</label>
                        </div>
                        <div>
                        <Field className='Auth-Field w-full p-2' name='email'></Field>
                        {errors.email && touched.email ? <Err>{errors.email}</Err> : null}
                        </div>
                      </div>
                      <div>
                        <div className='my-5' >
                          <label className='text-sm' htmlFor='password'>Password</label>
                        </div>
                        <div>
                          <Field className='Auth-Field w-full p-2' name='password'></Field>
                          {errors.password && touched.password ? <Err>{errors.password}</Err> : null}
                        </div>
                      </div>
                      <div  className='mt-5'>
                        <small>By clicking on the sign up button, you agree to the terms and conditions here.</small>
                      </div>
                      <div className='flex justify-center'>
                        <button className='mt-5 text-white text-small Auth-Button p-2'>SIGN UP</button>
                      </div>
                    </div>
                  </Form>
                )
              }
            </Formik>
        </div>
    </div>
)}