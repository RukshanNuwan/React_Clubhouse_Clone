import {Link} from 'react-router-dom';
import style from '../style/phoneConfirm.module.css';

const AllowNotification = () => {
  return (
    <div className={style.PhoneConfirmContainer}>
      <div className="text-center">
        <h1 className="mb-4">
          Last, important step!
        </h1>

        <h1 className="mb-3">
          Enable notifications to know whe people are talking
        </h1>

        <div className={style.notificationContainer}>
          <div className="p-3">
            <h3>
              "Clubhouse" Would Like to Send You Notifications
            </h3>

            <p>
              Notifications may include alerts, sounds, and icon badges
            </p>
          </div>

          <div className={style.actionButton}>
            <Link exact="true" to="/home">
              Don't Allow
            </Link>

            <Link exact="true" to="/home">
              Allow
            </Link>

            <img src="/images/handIcon.svg" alt="hand icon" className={style.handIcon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllowNotification;
