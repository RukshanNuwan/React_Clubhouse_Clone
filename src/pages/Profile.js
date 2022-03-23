import exploreStyle from '../style/explore.module.css';
import style from '../style/profile.module.css';
import {Link} from "react-router-dom";
import {BsAt, BsPlus, BsUpload} from "react-icons/bs";
import {AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter} from "react-icons/ai";

const Profile = () => {
  return (
    <>
      <div className={style.profile_container}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-end mb-0`}>
            <Link to="/home">
              <img src="/images/arrow.png" alt="back_arrow" className={exploreStyle.arrow_icon}/>
            </Link>

            <div className={style.action_button}>
              <BsAt/>
              <BsUpload/>
              <AiOutlineSetting/>
            </div>
          </div>
        </div>

        <img src="/images/user-img.jpg" alt="user" className={style.profile_image}/>

        <h4>Rukshan Nuwan</h4>

        <p>@RukshanNuwan</p>

        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>

          <p>
            <span>50</span> following
          </p>
        </div>

        <button>Add a bio</button>

        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter/> Add Twitter
          </button>

          <button className="mb-0">
            <AiOutlineInstagram/> Add Instagram
          </button>
        </div>

        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="user"/>

          <div>
            <p>Joined 02-May-2021</p>

            <p>Nominated ny <span>Anton Alarcon</span></p>
          </div>
        </div>

        <p>Member of</p>

        <button className={style.add_member_button}>
          <BsPlus/>
        </button>
      </div>
    </>
  );
};

export default Profile;
