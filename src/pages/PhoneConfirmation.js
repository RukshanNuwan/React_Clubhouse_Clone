import {useState} from "react";
import {Link} from 'react-router-dom';
import style from '../style/phoneConfirm.module.css';

const PhoneConfirmation = () => {
  const [value, setValue] = useState();

  return (
    <div className={style.PhoneConfirmContainer}>
      <h1>
        Enter your phone
      </h1>

      <p>
        By entering your number, you're agreeing to our <span>Terms of Service and Privacy policy. </span>
        Thanks!
      </p>
    </div>
  );
};

export default PhoneConfirmation;
