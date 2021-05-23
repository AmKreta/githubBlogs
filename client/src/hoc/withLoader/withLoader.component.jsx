import React from 'react';
import './withLoader.styles.scss';

const WithSpinner = (component) => {
    return (
        class ModifiedComponent extends React.Component {
            constructor(props) {
                this.state = {
                    loading: false
                }
            }

            render() {
                
            }
        }
    );
};