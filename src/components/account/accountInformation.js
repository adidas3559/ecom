import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountInformationForm';

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="account-information-wrapper">
                <div className='account-information'>
                    <PageTitle className='account-information' title='Account Information'/>
                    <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form' />
                </div>
            </div>
            
        )
    }
}

export default AccountInformation;