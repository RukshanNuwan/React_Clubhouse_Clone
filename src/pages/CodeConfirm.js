import {Link} from 'react-router-dom';
import style from '../style/phoneConfirm.module.css';

const CodeConfirm = () => {
  return (
    <div className={style.PhoneConfirmContainer}>
      <Link exact="true" to="/get_username" className={style.BackButton}>
        <img src="/images/arrow.png" alt="back button"/>
      </Link>
      <div className="text-center">
        <h1 style={{width: '100%', maxWidth: '200px', marginBottom: '1em'}}>
          Enter the code we just sent you
        </h1>

        <input type="text" style={{width: '100%', border: 'none', textAlign: 'center', outline: 'none'}}/>

        <p className="mt-2 mb-4">
          Didn't receive it? <span>tap to resend.</span>
        </p>
      </div>

      <Link exact="true" to="/allow_notification" className="primaryButton d-flex align-items-center">
        Next <img src="/images/nextArrowIcon.svg" alt="next button" className='mx-1'/>
      </Link>
    </div>
  );
};

export default CodeConfirm;
