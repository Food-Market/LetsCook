import React from "react"
import "./styles/signup-login.scss"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import {
    fabFacebook,
    fabTwitter,
    fabGoogle,
} from "@fortawesome/free-brands-svg-icons"

export const SignUp = () => {
    return (
        <section class="container">
            <section class="main">
                <div class="main__logo">
                    <img src="https://i.imgur.com/nqsC2vJ.png" alt="logo" />
                    <h1>Sign up for Cook your Food</h1>
                    <small>
                        Sign up with your social media account or email address
                    </small>
                </div>
                <div class="main__social">
                    <a href="#">
                        <FontAwesomeIcon icon={fabFacebook} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={fabTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={fabGoogle} />
                    </a>
                </div>
                <div class="main__divisor">
                    <span>or</span>
                </div>
                <section class="main__form">
                    <form class="main__form__signup" action="">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Email Address" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Confirm Password" />
                    </form>
                    <p>
                        By creating an account, you agree to our Terms of Use
                        and privacy policy
                    </p>
                    <a class="main__form--btn" href="#">
                        Sign Up
                    </a>
                    <p>
                        Already have an account?<a href="#">Log in</a>
                    </p>
                </section>
            </section>
            <section class="right-image">
                <img src="../styles/assets/front-image.jpg" alt="Cook" />
                <h2>Discover a new recipes in front of your door</h2>
            </section>
        </section>
    )
}
