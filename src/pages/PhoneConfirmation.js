import {useState} from "react";
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import style from '../style/phoneConfirm.module.css';

const PhoneConfirmation = () => {
  const [value, setValue] = useState();

  return (
    <div className={style.PhoneConfirmContainer}>
      <Link
        exact="true"
        to="/"
        className={style.BackButton}
      >
        <img src="images/arrow.png" alt="back button"/>
      </Link>

      <h1>
        Enter your phone
      </h1>

      <PhoneInput
        international={true}
        defaultCountry="US"
        value={value}
        onChange={setValue}/>

      <p>
        By entering your number, you're agreeing to our <span>Terms of Service and Privacy policy. </span>
        Thanks!
      </p>

      <Link
        exact="true"
        to="/code_confirm"
        className="primaryButton d-flex align-items-center"
      >
        Next <img src="images/nextArrowIcon.svg" alt="" className="mx-1"/>
      </Link>
    </div>
  );
};

export default PhoneConfirmation;
