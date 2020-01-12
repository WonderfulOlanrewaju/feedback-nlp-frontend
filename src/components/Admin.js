import React from 'react';
import {Field, Form, Formik} from 'formik';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CustomPaginationActionsTable from './AdminTable';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

export function Admin () {
    return (
        <div className='flex h-screen'>
            <div className='w-1/5 p-8 Left-Admin'>
                <div className='Left-Admin-Nav'>
                    <div className='text-3xl font-semibold mb-32'><Link to='/'>FeedBack.io</Link></div>
                </div>
                <div className='Left-Admin-Body p-10 text-gray-700'>
                    <div className='my-4 active:bg-red-300'>
                        Dashboard
                        <HomeIcon className='ml-4' />
                    </div>
                    <div  className='my-4'>Feedback Response <FeedbackIcon className='ml-4'/></div>
                    <div  className='my-4'>Help <SettingsIcon className='ml-4'/></div>
                </div>
            </div>
            <div className='w-4/5 p-8 Right-Admin'>
                <div className='flex my-5'>
                    <div className='flex-1'>
                        <Formik>
                            <Form>
                                <SearchIcon/>
                                <Field className='Search-Field' type='search' placeholder='Search Feedback' />     
                            </Form>
                        </Formik>
                    </div>
                    <div className='flex-1 justify-end'>
                        <PersonIcon className='flex-1'/>
                        <MailIcon className='flex-1'/>
                        <NotificationsIcon className='flex-1'/>
                    </div>
                </div>
                <div className='Admin-Right-Body'>           
                    <div className='flex items-stretch h-48 p-10'>
                    <div className='First-Card inline-block flex-1 p-5 m-5'>
                        <FeedbackIcon className='text-2xl' />
                        FeedBack
                        <span className='text-3xl '>500</span>
                        This Week
                    </div>
                    <div className='Second-Card inline-block flex-1 p-5 m-5'>
                        <FeedbackIcon/>
                        Total FeedBack
                        600
                        This Month
                    </div>
                    <div className='Third-Card inline-block flex-1 p-5 m-5'>
                        <FeedbackIcon/>
                        Total Users
                        250
                        This Week
                    </div>
                    </div>
                    <div className='p-10 mx-5 my-32'>
                        <div className='flex-row'>
                            <div className='w-3/5 flex-col'>
                                <CustomPaginationActionsTable  />
                            </div>
                            <div className='w-2/5 flex-col'> 
                                <div className='flex-1'>
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