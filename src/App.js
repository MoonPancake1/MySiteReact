import React from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import {useCookies} from "react-cookie";

function App() {

    const [Title, setTitle] = React.useState("Главная страница");

    const [cookies, setCookie] =
    useCookies(['refresh_token', 'access_token']);

    function updateAccessToken(refresh_token) {
        const req = new Request('https://id.vchern.me/id/login/refresh/');

        const headers = new Headers();
        headers.append('accept', 'application/json');
        headers.append("Authorization", `Bearer ${refresh_token}`);

        const init = {
            method: 'POST',
            headers: headers,
        }

        return fetch(req, init).then(res => {
                if (res.status === 401) {
                    setCookie('refresh_token', '');
                    setCookie('access_token', '');
                    throw new Error('Авторизационные данные устарели, пройдите авторизацию ещё раз!')
                }
                return res.json();
            })
            .then(data => {
                setCookie('access_token', data.access_token)
                return {'result': true};
            })
            .catch(err => {
                console.error(err);
                return {'result': false};
            })

    }

    async function authUser(access_token){
        const headers = new Headers();
        headers.append("accept", "application/json");
        headers.append("Authorization", "Bearer " + access_token.toString());

        const init = {
            method: "GET",
            headers: headers,
        };
        const req = new Request("https://id.vchern.me/id/users/me");
        const res = await fetch(req, init).then(res => {
            if (res.status === 401) {
                updateAccessToken(cookies.refresh_token);
                authUser(cookies.access_token);
            }
            return res.json();
        })

        const jsonData = await res;
        console.log(jsonData);
        return jsonData;
    }

    function getTokens(username, password){
        const headers = new Headers();
        headers.append("accept", "application/json");
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        const userData = new URLSearchParams();
        userData.append("username", username);
        userData.append("password", password);

        const init = {
            method: "POST",
            headers: headers,
            body: userData
        };

        const req = new Request("https://id.vchern.me/id/login/tokens/");

        fetch(req, init)
            .then(res => {
                if (res.status === 422) {
                    throw new Error("Данные некорректные!");
                }
                return res.json();
            })
            .then(data => {
                setCookie('access_token', data.access_token)
                setCookie('refresh_token', data.refresh_token)
                console.log(data);
                return JSON.stringify(data)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    function changeTitle(newTitle) {
        setTitle(newTitle);
    }

  return (
      <div className="App">
          <Header title={Title}/>
          <Body changeTitle={changeTitle} authUser={authUser} getTokens={getTokens} cookies={cookies}/>
          <Footer/>
      </div>
  );
}

export default App;
