import React, {useRef, useState} from 'react';
import Button from "@material-ui/core/Button/Button";
import BlockIP from "./BlockIP";
import BlockDNS from "./BlockDNS";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CheckboxForm from "./CheckboxForm";
import Field from "./Field";
import './App.css';
import classNames from "classnames"

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

function Form() {
    const [data, setData] = useState([])
    const [errorNecessarilyText, setErrorNecessarilyText] = useState(false);
    const [errorValues, setErrorValues] = useState(false);
    const [ipAddress, setIpAddress] = useState({
        value: '', errorText: '', isError: false, errorValidation: false
    });
    const [subnetMask, setSubnetMask] = useState({
        value: '', errorText: '', isError: false
    });
    const [defaultGateway, setDefaultGateway] = useState({
        value: '', errorText: ''
    });
    const [preferredDNS, setPreferredDNS] = useState({
        value: '', errorText: '', isError: false
    });
    const [alternativeDNS, setAlternativeDNS] = useState({
        value: '', errorText: ''
    });
    const [securityKey, setSecurityKey] = useState({
        value: '', errorText: '', isError: false
    });
    const [netWorkName, setNetWorkName] = useState({
        value: '', errorText: '', isError: false
    });
    const [labelWidth, setLabelWidth] = useState(0);
    const [necessarily, setNecessarily] = useState(true);
    const [checkboxInitialWifi, setCheckboxInitialWifi] = useState(false)
    const [checkboxInitialSecurity, setCheckboxInitialSecurity] = useState(false)
    const [ipAddressRadio, setIpAddressRadio] = useState(true);
    const [followIp, setFollowIp] = useState(false);
    const [serverDNS, setServerDNS] = useState(true);
    const [followDNS, setFollowDNS] = useState(false);
    const inputLabel = useRef(null);

    function checkingEmptyString(isError, method, initState) {
        if (!initState.value) {
            isError = true;
            method({...initState, errorText: 'Введите данные', isError: isError})
        } else if (initState.isError === true) {
            isError = false;
            method({...initState, isError: isError})
        }
        return isError
    }

    function validateForm(e) {
        let isError = false;
        checkingEmptyString(isError, setIpAddress, ipAddress);
        checkingEmptyString(isError, setSubnetMask, subnetMask);
        checkingEmptyString(isError, setPreferredDNS, preferredDNS);
        checkingEmptyString(isError, setSecurityKey, securityKey);
        checkingEmptyString(isError, setNetWorkName, netWorkName);

        console.log(!!ipAddress.value);
        if (!!ipAddress.value) {
            const myRe = /\d/;
            const re = (myRe.exec(ipAddress.value));
            if (re === null) {
                isError = false;
                setErrorValues(isError);
                setIpAddress({...ipAddress, errorText: 'Некоректные данные', isError: isError, errorValidation: true})
            } else {
                setIpAddress({...ipAddress, errorValidation: false})
            }
        }


        return isError
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const err = validateForm(e);
        console.log(err)


        console.log(data)
    };


    const classes = useStyles()
    return <>
        <form className="wrapper">
            <div className={"setting"}>
                <div className={'ethernet-settings'}>
                    <h1 className={'title'}>Ethernet Settings</h1>
                    <BlockIP
                        ipAddress={ipAddress}
                        subnetMask={subnetMask}
                        defaultGateway={defaultGateway}
                        setIpAddress={setIpAddress}
                        setSubnetMask={setSubnetMask}
                        setDefaultGateway={setDefaultGateway}
                        errorNecessarilyText={errorNecessarilyText}
                        necessarily={necessarily}
                        ipAddressRadio={ipAddressRadio}
                        followIp={followIp}
                        setIpAddressRadio={setIpAddressRadio}
                        setFollowIp={setFollowIp}
                    />
                    <BlockDNS
                        preferredDNS={preferredDNS}
                        alternativeDNS={alternativeDNS}
                        setPreferredDNS={setPreferredDNS}
                        setAlternativeDNS={setAlternativeDNS}
                        errorNecessarilyText={errorNecessarilyText}
                        necessarily={necessarily}
                        serverDNS={serverDNS}
                        setServerDNS={setServerDNS}
                        followDNS={followDNS}
                        setFollowDNS={setFollowDNS}

                    />
                </div>
                <div className={'wireless-settings'}>
                    <h1 className={'title'}>Wireless Settings</h1>
                    <div className="block_checkbox_select">
                        <CheckboxForm label={'Enable wifi:'}
                                      checkboxInitialWifi={checkboxInitialWifi}
                                      method={setCheckboxInitialWifi}/>
                        <div className='select_form'>
                            <span
                                className='titleField'>Wireless Network Name:<span>{necessarily ? '*' : null}</span></span>
                            <FormControl variant="outlined"
                                         className={classNames(classes.formControl, 'select_form-control')}
                                         error={netWorkName.isError}>
                                <InputLabel
                                    ref={inputLabel}
                                    className='select_form_input'
                                    htmlFor='outlined-pleaseSelect-native-simple'
                                    error={netWorkName.isError}>
                                    Please Select
                                </InputLabel>
                                <Select
                                    value={netWorkName.value}
                                    className='select'
                                    label={labelWidth}
                                    onChange={(event => setNetWorkName({...netWorkName, value:event.target.value}))}
                                    native>
                                    <option value=""/>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='block_checkbox_input'>
                        <CheckboxForm label={'Enable Wireless Security'}
                                      checkboxInitial={checkboxInitialSecurity}
                                      method={setCheckboxInitialSecurity}/>
                        <Field
                            value={securityKey}
                            method={setSecurityKey}
                            title={'Security Key:'}
                            necessarily={necessarily}
                            errorNecessarilyText={errorNecessarilyText}/>
                    </div>
                </div>
            </div>

            <div className={'buttons'}>
                <Button variant={"contained"}
                        type="submit"
                        style={{
                            backgroundColor: '#2196F3',
                            borderBottomLeftRadius: '30px',
                            borderBottomRightRadius: '30px',
                            borderTopLeftRadius: '30px',
                            borderTopRightRadius: '30px',
                            width: '100px',
                            height: '35px',
                            margin: '10px',
                            color: '#ffffff',
                            boxShadow: 'none',
                            textTransform: "capitalize"
                        }}
                        onClick={onSubmit}>
                    Save
                </Button>
                <Button variant={"contained"}
                        style={{
                            width: '100px',
                            backgroundColor: '#ffffff',
                            boxShadow: 'none',
                            textTransform: "capitalize",
                            border: "solid",
                            borderWidth: '2px',
                            borderColor: "#2196F3",
                            color: '#2196F3',
                            borderRadius: '5%',
                            height: '35px',
                            margin: '10px',
                            lineHeight: '2px',
                            borderBottomLeftRadius: '30px',
                            borderBottomRightRadius: '30px',
                            borderTopLeftRadius: '30px',
                            borderTopRightRadius: '30px',
                        }}>
                    Cancel
                </Button>
            </div>
        </form>
    </>;
}

export default Form;