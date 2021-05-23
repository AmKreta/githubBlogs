import React from 'react';

//importing custom components
import Text from './inputTypes/text.component';
import Password from './inputTypes/password.component';
import Email from './inputTypes/email.component';

const Input = ({ type, label, id, width, icon, ...props }) => {
    switch (type) {
        case 'text':
            return <Text {...{ label, id, width, icon }} {...props} />
        case 'password':
            return <Password  {...{ label, id, width, icon }} {...props} />
        case 'email':
            return <Email {...{ label, id, width, icon }} {...props} />
        default:
            return <Text {...{ label, id, width, icon }} {...props} />
    }
}

export default Input;