import React from "react";
import MyInput from "../components/MyInput";
import classes from "./checkoutBody.module.scss";
import Sub from "../trifles/Sub";
import MyCheckbox from "../components/MyCheckbox";
import GreenBtn from '../trifles/GreenBtn';

const CheckoutBody = () => {
  const billingforms = [
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
    { name: "First name", placeholder: "First name" },
  ];

  return (
    <div className={classes.checkoutBody}>
      <form className={classes.col1}>
        <h1>Billing info</h1>
        <div className={classes.sub}>
          <Sub>Please enter your billing info</Sub>
          <Sub>Step 1 of 5</Sub>
        </div>
        <div className={classes.billingInfo}>
          {billingforms.map((form) => (
            <label>
              {form.name}
              <MyInput placeholder={form.placeholder} />
            </label>
          ))}
        </div>
        <h1>Shipping method</h1>
        <div className={classes.sub}>
          <Sub>Please enter your payment method</Sub>
          <Sub>Step 2 of 5</Sub>
        </div>
        <div className={classes.shipping}>
          <label>
            <input type="checkbox" />
            <span>+ 32 USD Additional price</span>
            <span>FedEx</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>+ 32 USD Additional price</span>
            <span>FedEx</span>
          </label>
        </div>
        <h1>Payment method</h1>
        <div className={classes.sub}>
          <Sub>Please enter your payment method</Sub>
          <Sub>Step 3 of 5</Sub>
        </div>
        <div className={classes.creditCard}>
          <label>
            <input type="checkbox" />
            Credit card
          </label>
          <label>
            Card Number
            <MyInput placeholder={"Card Number"} />
          </label>
          <div className={classes.cardHolder}>
            <label>
              Card holder
              <MyInput placeholder={"Card holder"} />
            </label>
            <label>
              Expiration data
              <MyInput placeholder={"DD/MM/YY"} />
            </label>
            <label>
              CVC
              <MyInput placeholder={"CVC"} />
            </label>
          </div>
        </div>
        <div className={classes.shipping}>
          <label>
            <input type="checkbox" />
            Paypal
            <span>FedEx</span>
          </label>
          <label>
            <input type="checkbox" />
            Bitcoin
            <span>bitcoin</span>
          </label>
        </div>
        <h1>Additional information</h1>
        <div className={classes.sub}>
          <Sub>Please enter additional information</Sub>
          <Sub>Step 4 of 5</Sub>
        </div>
        <label>
          Order notes
          <textarea
            rows={3}
            placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
          />
        </label>
        <h1>Confirmation</h1>
        <div className={classes.sub}>
          <Sub>Please enter confirmation information</Sub>
          <Sub>Step 5 of 5</Sub>
        </div>
        <label>
          <input type="checkbox" />
          Credit card
        </label>
        <label>
          Card Number
          <MyInput placeholder={"Card Number"} />
        </label>
        <GreenBtn>Complete order</GreenBtn>
        <h4>All your data are safe</h4>
        <Sub>We are using the most advanced security to provide you the best experience ever.</Sub>
      </form>
      <div className={classes.summary}>
        <h1>Order summary</h1>
        <Sub>Price can change depending on shipping method and taxes of your state.</Sub>
      </div>
    </div>
  );
};

export default CheckoutBody;
