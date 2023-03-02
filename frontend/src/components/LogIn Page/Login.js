import React, { Component } from 'react'
import "./Login.css"
import user from "../../assets/images/user.png";

export default class Login extends Component {
    render() {
        return (
            <div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="login">
                <div class="avatar">
                    <img src={user} />
                </div>
                <h2>Login</h2>
                <h3>Welcome</h3>

                <form class="login-form">
                    <div class="textbox">
                        <input type="email" placeholder="Username" />
                        <span class="material-symbols-outlined"> account_circle </span>
                    </div>
                    <div class="textbox">
                        <input type="password" placeholder="Password" />
                        <span class="material-symbols-outlined"> lock </span>
                    </div>
                    <button type="submit">LOGIN</button>
                    <a href="https://website.com">Forgot your credentials?</a>
                </form>
            </div>
            </div>
            
        )
    }
}
