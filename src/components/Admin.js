import React from 'react';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Err = styled.div`
    text-align : left;
    color: palevioletred;
    display:block;
`

export function Admin () {
    return (
        <div className='flex h-screen'>
            <div className='w-1/5'>
                <Link to='/'>FeedBack.io</Link>
                <div>Dashboard</div>
                <div>Feedback Response</div>
                <div>Help</div>
            </div>
            <div className='w-4/5'>
                <HomeIcon/>
                <Formik>
                    <Form>
                        <Field type='search' placeholder='Search Feedback' />     
                    </Form>
                </Formik>
            </div>
        </div>
    )
}