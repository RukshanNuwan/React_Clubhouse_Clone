import style from '../style/header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <Link to='/explore'>
        <img src="/images/search.png" alt="search"/>
      </Link>

      <div className={style.nav_items}>
        <Link to='/friends_invite'>
          <img src="/images/invite.png" alt="invite"/>
        </Link>

        <Link to='/upcoming'>
          <img src="/images/calendar.png" alt="invite"/>
        </Link>

        <Link to='/activity'>
          <img src="/images/noti.png" alt="invite"/>
        </Link>

        <Link to='/profile'>
          <img src="/images/b1.png" alt="invite"/>
        </Link>
      </div>
    </div>
  );
};

export default Header;
