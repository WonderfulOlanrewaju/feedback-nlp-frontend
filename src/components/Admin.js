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

export function Admin () {
    return (
        <div className='flex h-screen'>
            <div className='w-1/5'>
                <div>Dashboard</div>
                <div>Feedback Response</div>
                <div>Help</div>
            </div>
            <div className='w-4/5'>
                <input type='search' placeholder='Search Feedback' />
                
            </div>

        </div>
    )
}