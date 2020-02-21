import React from 'react';
import RadioButtons from "./RadioButtons";
import Field from "./Field";
import './App.css';
import RadioGroup from "@material-ui/core/RadioGroup";

function BlockIP({ipAddress, subnetMask, defaultGateway, setIpAddress, setSubnetMask, setDefaultGateway, errorNecessarilyText, necessarily, ipAddressRadio, followIp, setIpAddressRadio, setFollowIp}) {
    return (
        <div>
            <form name="myForm" action="" method={'post'}>
                    <RadioGroup name="customized-radios">
                        <RadioButtons label={'Obtain an IP address automatically (DHCP/BootP)'} value={ipAddressRadio}
                                      method={setIpAddressRadio} initMethod={setFollowIp}/>
                        <RadioButtons label={'Use the following IP address:'} value={followIp} method={setFollowIp} initMethod={setIpAddressRadio}/>
                    </RadioGroup>

                <Field
                    name={'IpAddress'}
                    value={ipAddress}
                    title={'IP address:'}
                    method={setIpAddress}
                    errorNecessarilyText={errorNecessarilyText}
                    necessarily={necessarily}
                    errorValues={ipAddress.errorText}
                    disabledValue={followIp}/>
                <Field
                    name={'SubnetMask'}
                    value={subnetMask}
                    title={'Subnet Mask:'}
                    method={setSubnetMask}
                    errorNecessarilyText={errorNecessarilyText}
                    necessarily={necessarily}
                    errorValues={subnetMask.errorText}
                    disabledValue={followIp}
                />
                <Field
                    name={'DefaultGateway'}
                    value={defaultGateway}
                    title={'Default Gateway:'}
                    method={setDefaultGateway}
                    errorValues={ipAddress.errorText}
                    necessarily={false}
                    disabledValue={followIp}
                />
            </form>
        </div>
    );
}

export default BlockIP;