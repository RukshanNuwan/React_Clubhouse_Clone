import {useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import Header from "../components/Header";
import DailyInfoCard from "../components/DailyInfoCard";
import RoomInfoCard from "../components/RoomInfoCard";
import BottomSheet from "../components/BottomSheet";
import newRoomData from '../data/newRoom.json';
import data from '../data/roomCard.json';
import style from '../style/home.module.css';

const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility ? (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src="/images/loader.gif" alt="loader"/>
        </div>
      ) : (
        ''
      )}

      <Header/>

      <div className={style.home_container}>
        <DailyInfoCard/>
        <RoomInfoCard/>
      </div>

      <div className={style.action_button}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="me-2"/>
          Start a room
        </button>

        <button>
          <BsGrid3X3GapFill/>
        </button>
      </div>

      <BottomSheet
        sheetTitle="start room"
        sheetVisible={sheetVisible}
        setSheetVisible={(item) => setSheetVisible(item)}
        cardDetail={data.find((item) => item.id === cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
      />

      <BottomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
      />
    </>
  );
};

export default Home;
