import Header from "../components/Header";
import DailyInfoCard from "../components/DailyInfoCard";
import style from '../style/home.module.css';
import RoomInfoCard from "../components/RoomInfoCard";

const Home = () => {
  return (
    <>
      <Header/>

      <div className={style.home_container}>
        <DailyInfoCard/>
        <RoomInfoCard/>
      </div>
    </>
  );
};

export default Home;
