import React, { useMemo } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './informationForm.styles.scss';

//importing reusable components
import Button from '../../../../reusableComponents/button/button.component';
import Input from '../../../../reusableComponents/input/input.component';

const InformationForm = ({ submitHandler }) => {

    const initialValues = useMemo(() => ({
        fullName: 'Amresh Kumar',
        userName: 'Nyctophilic',
        bio: 'hey! i am using github blogs .'
    }), []);

    const validationSchema = useMemo(() => yup.object({
        fullName: yup.string().required().matches(/^[a-zA-Z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]*$/, 'name is not valid'),
        userName: yup.string().required().matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/, "min length 3 eg. 1_nyctophilic"),
        bio: yup.string().required()
    }), []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount
            validateOnChange={false}
            validateOnBlur
            onSubmit={submitHandler}
        >
            {formik => (
                <Form className='infoForm'>
                    <Input type='text' id='fullName' label='full name' placeholder='enter full name' />
                    <Input type='text' id='userName' label='user name' placeholder='enter user name' />
                    <Input type='text' id='bio' label='bio' placeholder='enter bio here' />
                    <div className="formActions">
                        <Button
                            label='Signup'
                            type='submit'
                            className='tertiary contained box-shadow'
                            style={{ width: '40%' }}
                            disabled={Object.keys(formik.touched).length === 0 || !formik.isValid || formik.isSubmitting}
                        />
                        <Button
                            label='Reset'
                            type='reset'
                            className='secondary contained box-shadow'
                            style={{ width: '40%' }}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default InformationForm;