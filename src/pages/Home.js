import Header from "../components/Header";
import DailyInfoCard from "../components/DailyInfoCard";
import style from '../style/home.module.css';

const Home = () => {
  return (
    <>
      <Header/>

      <div className={style.home_container}>
        <DailyInfoCard/>
      </div>
    </>
  );
};

export default Home;
