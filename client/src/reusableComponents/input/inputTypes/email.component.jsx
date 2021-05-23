import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './input.styles.scss';



const EmailInput = ({ label, id, width, icon, ...props }) => {
    return (
        <div className="formControl" style={{ '--width': width }}>
            {label && <label htmlFor={label}>{label}</label>}
            <div className="inputElement">
                {
                    icon && icon({ color: 'black', size: '20px' })
                }
                <Field
                    as='input'
                    type='email'
                    name={id}
                    id={id}
                    {...props}
                    autoComplete='off'
                />
            </div>
            <ErrorMessage
                name={id}
                component='div'
                className='danger text erroredInput'
            />
        </div>
    );
}

export default EmailInput;