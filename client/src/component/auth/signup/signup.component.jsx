import React, { Component } from 'react';
import { connect } from 'react-redux';
import './signup.styles.scss';
import Background from './background.jpg';

//importing reusable component
import CredentialForm from './credentialForm/credentialForm.component';
import InformationForm from './informationForm/informationForm.component';

//importing reusable components
import ProgressBar from '../../../reusableComponents/progressBar/progressBar.component';

//importing asynhc request
import AsyncRequest from '../../../asyncRequest/asyncRequest';

//importing services
import { signup } from '../../../services/services';

//importing actions
import { updateUserInfo } from '../../../actions/actions';

class Signup extends Component {
    constructor(props) {
        super();
        this.state = {
            progressBar: {
                steps: ['Credential', 'Information'],
                currentPosition: 0
            },
            currentForm: 1,
            loginInfo: { amk: 1 }
        }
    }

    credentialFormSubmitHandler = (value, actions) => {
        this.setState(prevState => ({
            loginInfo: { ...prevState.loginInfo, ...value },
            currentForm: 2,
            progressBar: {
                ...prevState.progressBar,
                currentPosition: 1
            }
        }));
    }

    infoFormSubmitHandler = (value, actions) => {
        this.setState(prevState => ({
            loginInfo: { ...prevState.loginInfo, ...value },
            progressBar: {
                ...prevState.progressBar,
                currentPosition: 2
            }
        }), () => this.signUpRequest(actions));
    }

    signUpRequest = (actions) => {
        //just to let the progress bar complete
        let timeOut = setTimeout(async () => {
            try {
                let res = await AsyncRequest({
                    method: 'POST',
                    url: signup,
                    body: this.state.loginInfo
                });
                this.props.updateUserInfo(res);
                this.props.history.push('/');
            }
            catch (err) {
                console.log(err);
            }
            actions.setSubmitting(false);
            clearTimeout(timeOut);
        }, 1000);
    }

    render() {
        return (
            <div className="signupContainer" style={{ '--backgroundImage': `url(${Background})` }}>
                <div className="backgroundContainer" style={{ backgroundImage: `url(${Background})` }} />
                <div className="formContainer primary contained">
                    <h2>Signup</h2>
                    {
                        this.state.currentForm === 1
                            ? <CredentialForm submitHandler={this.credentialFormSubmitHandler} />
                            : <InformationForm submitHandler={this.infoFormSubmitHandler} />
                    }
                    <ProgressBar
                        steps={this.state.progressBar.steps}
                        currentPosition={this.state.progressBar.currentPosition}
                    />
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateUserInfo: (payload) => dispatch(updateUserInfo(payload))
});

export default connect(null, mapDispatchToProps)(Signup);