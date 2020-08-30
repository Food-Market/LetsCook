import React from "react"

const Login = () => {
    return (
        <section className="container">
            <section className="main">
                <div className="main__logo">
                    <img src="https://i.imgur.com/nqsC2vJ.png" alt="logo" />
                    <h1>Login</h1>
                    <span>Sign in to your account</span>
                </div>
                <section className="main__form">
                    <form className="main__form__signup" action="">
                        <input type="text" placeholder="User Name" />
                        <input type="password" placeholder="Password" />
                    </form>
                    <a className="main__form--btn" href="#">
                        Log in{" "}
                    </a>
                    <a className="main__form--link" href="#">
                        Forgot account? /
                    </a>
                    <a className="main__signBtn" href="#">
                        Register New Account{" "}
                    </a>
                </section>
            </section>
            <section className="right-image">
                <img src="../styles/assets/images/front-image.jpg" alt="Cook" />
                <h2>Discover a new recipes in front of your door</h2>
            </section>
        </section>
    )
}

export default Login
