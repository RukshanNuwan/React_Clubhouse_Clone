import style from '../style/dailyInfoCard.module.css';
import data from '../data/dailyCard.json';

const DailyInfoCard = () => {
  return (
    <div className={style.daily_card}>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.time}</span>

          <div>
            <span>{item.title}</span>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyInfoCard;
