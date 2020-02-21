import React, {useState} from 'react';
import RadioButtons from "./RadioButtons";
import Field from "./Field";
import './App.css';
import RadioGroup from "@material-ui/core/RadioGroup";

function BlockDNS({preferredDNS, alternativeDNS, setPreferredDNS, setAlternativeDNS, errorNecessarilyText, necessarily, serverDNS, setServerDNS, followDNS, setFollowDNS}) {

    return (
        <div>
                <RadioGroup name="customized-radios">
                    <RadioButtons label={'Obtain DNS server address automatically'} value={serverDNS}
                                  method={setServerDNS} initMethod={setFollowDNS}/>
                    <RadioButtons label={'Use the following DS address:'} value={followDNS} method={setFollowDNS} initMethod={setServerDNS}/>
                </RadioGroup>
            <form name="myForm" action="" method={'post'}>
                <Field
                    name={'preferredDNS'}
                    value={preferredDNS}
                    title={'Preferred DNS server:'}
                    method={setPreferredDNS}
                    errorNecessarilyText={errorNecessarilyText}
                    necessarily={necessarily}
                    disabledValue={followDNS}
                />
                <Field
                    name={'alternativeDNS'}
                    value={alternativeDNS}
                    title={'Alternative DNS server:'}
                    method={setAlternativeDNS}
                    disabledValue={followDNS}
                />
            </form>
        </div>
    );
}

export default BlockDNS;