import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import styles from './Login.module.css'
import InputField from '../../Components/Forms/InputField';
import useForm from '../../Hooks/useForm';
import useService from '../../Hooks/useService';
import { AUTHENTICATE, REGISTER_USER } from '../../Utils/Endpoints';
import { AuthContext } from '../../Context/UserContext';
import Button from '../../Components/Buttons/Button';

const Login = () => {
    const email = useForm('title');
    const password = useForm('title');
    const name = useForm('title');
    const history = useHistory();
    const { request, errorMessage, loading } = useService();
    const { userLogin } = React.useContext(AuthContext);
    const [isLogin, setLogin] = React.useState(true);

    const loginUser = async () => {
        const payload = {
            email: email.value,
            password: password.value
        }

        const options = AUTHENTICATE(payload);
        var response = await request(options);

        if(response.response === undefined){
            toast.error(errorMessage);
        } else {
            await userLogin(
                response.response.data.user.name,
                response.response.data.user.email,
                response.response.data.token,
                response.response.data.user._id
            )
            history.push('/homepage');
        }
        
    }

    const registerUser = async () => {
        const payload = {
            name: name.value,
            email: email.value,
            password: password.value
        }

        const options = REGISTER_USER(payload);
        var response = await request(options);

        if(response.response === undefined){
            toast.error('User not found');
        } else {
            await userLogin(
                response.response.data.user.name,
                response.response.data.user.email,
                response.response.data.token,
                response.response.data.user._id
            )
            history.push('/homepage');
        }

    }

    return (
        <div className={styles.loginPageContainer}>
            <ToastContainer/>
            <div className={styles.loginCard}>
                <div className={styles.actionContainer}>
                    <span onClick={() => { setLogin(true) }} style={isLogin ? { color: 'var(--pink-color)' } : null} className={styles.loginAction}>Sign in</span> / <span onClick={() => { setLogin(false) }} style={!isLogin ? { color: 'var(--pink-color)' } : null} className={styles.loginAction}>Sign up</span>
                </div>
                {!isLogin &&
                    <InputField
                        label="Name"
                        type="text"
                        placeholder={'ex: Joao Mario Roberto'}
                        shrink={true}
                        disabled={false}
                        fullWidth={true}
                        autoFocus={true}
                        onChange={(target) => { name.onChange(target); }}
                        setValue={name.setValue}
                        successMessage=""
                        backgroundPageColor={true}
                    ></InputField>
                }
                <InputField
                    label="Email"
                    type="text"
                    placeholder={'ex: abc123@gmail.com'}
                    shrink={true}
                    disabled={false}
                    fullWidth={true}
                    autoFocus={true}
                    onChange={(target) => { email.onChange(target); }}
                    setValue={email.setValue}
                    successMessage=""
                    backgroundPageColor={true}
                />
                <InputField
                    label="Password"
                    type="password"
                    shrink={true}
                    disabled={false}
                    fullWidth={true}
                    autoFocus={true}
                    onChange={(target) => { password.onChange(target); }}
                    setValue={password.setValue}
                    successMessage=""
                    backgroundPageColor={true}
                />
                <Button loading={loading} handleAdd={isLogin? loginUser : registerUser} text={isLogin ? 'Sign in' : 'Sign-up'}></Button>
            </div>
        </div>
    )
}

export default Login;
