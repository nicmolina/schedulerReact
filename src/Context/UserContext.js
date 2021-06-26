import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
export const AuthContext = React.createContext();

export const UserContext = ({ children }) => {
    const history = useHistory();
    const cookies = new Cookies();

    const [userData, setUserData] = React.useState({
        name: null,
        token: null,
        profileId: null
    });

    const [isAuthenticated, setAuthentication] = React.useState(false);

    const userLogout = React.useCallback(
        async function () {
            cookies.remove('BearerToken');
            cookies.remove('userId');
            cookies.remove('userName');
            window.localStorage.clear();
            history.push('/401');
            setAuthentication(false);
        },
        [cookies, history],
    );

    const userLogin = React.useCallback(
        async function (name, email, token, id) {
            setAuthentication(true);
            setUserData({
                name: name,
                email: email,
                token: token,
                profileId: id
            });
            cookies.set('BearerToken', 'Bearer ' + token);
            cookies.set('userId', id);
            cookies.set('userName', name);

            window.localStorage.setItem('BearerToken', 'Bearer ' + token);
        },
        [cookies, history],
    );


    React.useEffect(() => {

    }, [userLogin, userLogout])

    return (
        <AuthContext.Provider
            value={{
                userLogin, userLogout, userData, setUserData, isAuthenticated, setAuthentication, cookies
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}