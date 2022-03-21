import style from '../style/roomCard.module.css';
import data from '../data/roomCard.json';
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";

const RoomInfoCard = () => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div>
            <div className={style.room_card_container}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>

              <div className={style.room_members}>
                <div>
                  <img src="/images/user-img.jpg" alt="user 1"/>
                  <img src="/images/user-img2.jpg" alt="user 2"/>
                </div>

                <div>
                  {item.members.map((member, index) => (
                    <p key={index}>
                      {member.first_name} {member.last_name} <BsChatDots/>
                    </p>
                  ))}

                  <p className="d-flex align-items-center">
                    <span className="me-md-2">1.8</span>
                    <BsFillPersonFill/>
                    <span className="mx-2"/>{" "}
                    <span className="me-2">5</span> <BsChatDotsFill/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomInfoCard;
