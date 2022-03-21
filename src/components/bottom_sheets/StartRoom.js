import {useState} from "react";
import style from '../../style/bottomSheet.module.css';
import {FcGlobe} from 'react-icons/fc';

const StartRoom = ({setSheetCreateRoom, setSheetVisible}) => {
  const [room, setRoom] = useState('open');

  return (
    <>
      <div className={style.switch_line}/>

      <div className="text-end">
        <button className={style.add_topic_button}>
          + Add a topic
        </button>
      </div>

      <div className={style.select_room}>
        <button
          className={room === 'open' ? style.active : ''}
          onClick={() => setRoom('open')}
        >
          <div>
            <FcGlobe/>
          </div>
          Open
        </button>

        <button
          className={room === 'social' ? style.active : ''}
          onClick={() => setRoom('social')}
        >
          <div>
            <FcGlobe/>
          </div>
          Social
        </button>

        <button
          className={room === 'closed' ? style.active : ''}
          onClick={() => setRoom('closed')}
        >
          <div>
            <FcGlobe/>
          </div>
          Closed
        </button>
      </div>

      <p>
        Start a room <span>
        {room === 'closed' ? ' for people I choose' : room === 'social' ? ' with people I follow' : ' open to everyone'}
      </span>
      </p>

      <div className="text-center">
        <button
          className={style.let_go_button}
          onClick={() => {
            setSheetCreateRoom(true);
            setSheetVisible(true);
          }}
        >
          🎉 Let's go
        </button>
      </div>
    </>
  );
};

export default StartRoom;
