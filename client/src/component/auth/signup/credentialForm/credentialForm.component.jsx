import React, { useMemo, useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './credentialForm.styles.scss';

//importing reusable components
import Button from '../../../../reusableComponents/button/button.component';
import Input from '../../../../reusableComponents/input/input.component';

const CredentialForm = ({ submitHandler }) => {

    const initialValues = useMemo(() => ({
        email: 'kamresh485@gmail.com',
        password: '1Aa_pass',
        password1: '1Aa_pass'
    }), []);

    const validationSchema = useMemo(() => yup.object({
        email: yup.string().email().required('email is required'),
        password: yup.string().required('password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/, 'min length 8, eg 1Aa_pass'),
        password1: yup.string().required('confirm password is required')
    }), []);

    const confirmPasswordValidator = useCallback((values, props) => {
        let errors = {};
        if (values.password1 !== values.password) {
            errors.password1 = 'passwords do not match !'
        }
        return errors;
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur
            validateOnChange={false}
            validateOnMount
            onSubmit={submitHandler}
            validate={confirmPasswordValidator}
        >
            {formik => (
                <Form className='credentialForm'>
                    <Input type='email' id='email' label='email' placeholder='enter email' />
                    <Input type='password' id='password' label='password' placeholder='enter password' />
                    <Input type='password' id='password1' label='enter pasword again' placeholder='confirm password' />
                    <div className="formActions">
                        <Button
                            type='submit'
                            label='Next'
                            className='tertiary contained box-shadow'
                            style={{ width: '40%' }}
                            disabled={Object.keys(formik.touched).length === 0 || !formik.isValid || formik.isSubmitting}
                        />
                        <Button
                            type='reset'
                            label='Reset'
                            className='secondary contained box-shadow'
                            style={{ width: '40%' }}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CredentialForm;