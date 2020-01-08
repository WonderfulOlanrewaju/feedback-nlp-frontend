import React from 'react';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CustomPaginationActionsTable from './AdminTable';

const Err = styled.div`
    text-align : left;
    color: palevioletred;
    display:block;
`

export function Admin () {
    return (
        <div className='flex h-screen'>
            <div className='w-1/5 p-8 Left-Admin'>
                <div className='Left-Admin-Nav'>
                    <div className='text-3xl font-semibold'><Link to='/'>FeedBack.io</Link></div>
                </div>
                <div className='Left-Admin-Body'>
                    <div>
                        Dashboard
                        <HomeIcon/>
                    </div>
                    <div>Feedback Response <FeedbackIcon/></div>
                    <div>Help <SettingsIcon/></div>
                </div>
            </div>
            <div className='w-4/5 p-8 Right-Admin'>
                <div>
                    <Formik>
                        <Form>
                            <SearchIcon/>
                            <Field className='Search-Field' type='search' placeholder='Search Feedback' />     
                        </Form>
                    </Formik>
                </div>
                <div className='Admin-Right-Body'>           
                    <div>
                    <div className='First-Card inline-block'>
                        <FeedbackIcon className='text-2xl' />
                        FeedBack
                        <span className='text-3xl '>500</span>
                        This Week
                    </div>
                    <div className='Second-Card inline-block'>
                        <FeedbackIcon/>
                        Total FeedBack
                        600
                        This Month
                    </div>
                    <div className='Third-Card inline-block'>
                        <FeedbackIcon/>
                        Total Users
                        250
                        This Week
                    </div>
                    </div>
                    <div>
                        <div>
                            <div className='w-3/5'>
                                <CustomPaginationActionsTable  />
                            </div>
                            <div className='w-2/5'> 
                                <div>
                                    Hate, Love
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}