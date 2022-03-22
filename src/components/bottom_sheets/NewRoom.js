import {useState} from 'react';
import style from '../../style/roomDetail.module.css';
import {AiOutlineFile} from 'react-icons/ai';
import {BsMicMuteFill} from 'react-icons/bs';

const NewRoom = ({cardDetail, setSheetVisible}) => {
  const [micMuteVisible, sestMicMuteVisible] = useState(false);
  const card = cardDetail;

  return (
    <>
      <div className={style.room_detail_container}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a href="#" onClick={() => {
              setSheetVisible(false);
            }}>
              <img src="/images/arrow.png" alt="back arrow" className={style.arrow_icon}/>
            </a>

            <span>Hallway</span>
          </div>

          <div>
            <AiOutlineFile/>
            <img src="/images/user-img.jpg" alt="user_image" className={style.profile_image}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRoom;
