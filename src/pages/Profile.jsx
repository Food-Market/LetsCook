import React from "react";
import "../styles/styles.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <React.Fragment>
      <section className="information__container">
        <section className="information__AvatarNameEmail">
          <img src="https://i.imgur.com/h2W3BCh.png" alt="Profile Image" />
          <Link to="/" className="information__Name">
            Armando García
          </Link>
          <Link to="/" className="information__email">
            armandobfmv@gmail.com
          </Link>
        </section>
      </section>
      <section className="information__addresses">
        <h2>My Addresses</h2>
        <p>
          <strong>Main Address</strong> <br /> P Sherman, Street Wallaby 42,
          Sydney
        </p>
      </section>
      <section className="information__payment">
        <h2>Payment Methods</h2>
        <div className="information__payment__container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png"
            width="25px"
            height="10px"
            alt="Payment Method Logo"
          />
          <div className="information__payment__number"></div>
          <div className="information__payment__due">Due Date: 01/2028"</div>
        </div>
      </section>
      <section className="information__suscription">
        <h3>Suscription Information</h3>
        <p>Premium subscription activated</p>
        <p>
          Valid until: <strong>September/29/2020</strong>
        </p>
      </section>
    </React.Fragment>
  );
};

export default Profile;
