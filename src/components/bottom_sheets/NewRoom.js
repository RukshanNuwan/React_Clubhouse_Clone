import {useState} from 'react';
import style from '../../style/roomDetail.module.css';
import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai';
import {BsMicFill, BsMicMuteFill} from 'react-icons/bs';

const NewRoom = ({cardDetail, setSheetVisible}) => {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);
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

        <div className={style.room_detail_card}>
          <div className="d-flex align-items-center justify-content-between flex-wrap" style={{padding: "0.5em 1em"}}>
            {card.members.map((member) => (
              <div className={style.member_container}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill/>
                  </div>
                ) : ""}

                <img src="/images/user-img.jpg" alt="user_image"/>

                <p>
                  <span>*</span>
                  {member.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.footer}>
          <button onClick={() => setSheetVisible(false)}>
            <img src="/images/hand-peace.png" alt="hand_peace"/>
            Leave Quietly
          </button>

          <div>
            <button>
              <AiOutlinePlus/>
            </button>

            <button>
              <img src="/images/stopHandIcon.png" alt="stop_hand_icon"/>
            </button>

            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRoom;
