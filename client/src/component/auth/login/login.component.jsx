import React, { Component } from 'react';
import './login.styles.scss';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { motion } from 'framer-motion';

//importing reusable components
import Input from '../../../reusableComponents/input/input.component';
import Button from '../../../reusableComponents/button/button.component';

//importing icon
import { BsFillPersonFill } from 'react-icons/bs';
import { BiReset, BiLogIn } from 'react-icons/bi';
import { RiLockPasswordFill, RiLoginBoxFill } from 'react-icons/ri';

//importing background
import Background from './background.jpg';

//importing actions
import { updateUserInfo } from '../../../actions/actions';

//importing services
import { login } from '../../../services/services';

//importing async request
import AsyncRequest from '../../../asyncRequest/asyncRequest';
import asyncRequest from '../../../asyncRequest/asyncRequest';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            validationSchema: yup.object({
                userName: yup.string().required("This field can't be empty !"),
                password: yup.string().required("This field is required !")
            }),
            initialValues: {
                userName: '',
                password: ''
            },
            error: false
        };
    }

    handleSubmit = async (values, actions) => {
        actions.resetForm();
        try {
            let res = await AsyncRequest({
                method: 'POST',
                body: values,
                url: login
            });
            this.props.updateUserInfo(res);
            this.props.history.push('/')
        }
        catch (err) {
            console.log(err);
            this.setState({ error: true });
        }
    }

    getDeri

    goToSighupPage = () => {
        this.props.history.push(`/auth/signup`);
    }

    render() {
        return (
            <div className="loginContainer" style={{ backgroundImage: `url(${Background})` }} >

                <Formik
                    initialValues={this.state.initialValues}
                    validationSchema={this.state.validationSchema}
                    validateOnBlur
                    validateOnChange={false}
                    validateOnMount
                    onSubmit={this.handleSubmit}
                    vari
                >
                    {
                        formik => (
                            <motion.div variants={formVariant} initial='initial' animate='animate'>
                                <Form className='primary contained paper' style={{ '--elevation': '30px' }}>
                                    <h2>Login</h2>
                                    <div>
                                        <Input type='text' label='username' id='userName' placeholder='username' icon={BsFillPersonFill} />
                                        <Input type='password' label='password' id='password' placeholder='password' icon={RiLockPasswordFill} />
                                    </div>
                                    <div className="form-actions">
                                        <Button className='tertiary contained box-shadow' label='Login' type='submit' frontIcon={BiLogIn} />
                                        <Button className='secondary contained box-shadow' label='Reset' type='reset' frontIcon={BiReset} />
                                    </div>
                                    {
                                        this.state.error && (
                                            <div className="warning text">username or password is incorrect !</div>
                                        )
                                    }
                                </Form>
                            </motion.div>
                        )
                    }
                </Formik>
                <motion.div className="redirectToSignup secondary contained paper" style={{ 'elevation': '20px' }} variants={buttonVariant} initial='initial' animate='animate'>
                    <h3 className='text '>Don't have an Account?</h3>
                    <Button className='secondary containedLight box-shadow' label='Signup' onClick={this.goToSighupPage} frontIcon={RiLoginBoxFill} />
                </motion.div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateUserInfo: (payload) => dispatch(updateUserInfo(payload))
});

const formVariant = {
    initial: {
        x: '50vh',
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: .3
        }
    }
}

const buttonVariant = {
    initial: {
        x: '-50vh',
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: .3
        }
    }
}

export default connect(() => { }, mapDispatchToProps)(Login);