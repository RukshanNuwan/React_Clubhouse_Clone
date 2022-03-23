import {DownOutlined, FireOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import data from '../data/explore.json';
import style from '../style/explore.module.css';
import SubHeader from "../components/SubHeader";

const Explore = () => {
  const {people, conversation} = data;

  return (
    <div className={style.explore_container}>
      <div className={style.header}>
        <SubHeader
          pageTitle='Explore'
        />

        <Input
          style={{
            padding: '0.3em 1em',
            backgroundColor: '#f4f4f4',
            borderRadius: '0.8em',
            border: 'none',
            boxShadow: 'none'
          }}
          size="large"
          placeholder="Find People and Clubs"
          prefix={
            <img src="images/search.png" alt="search_icon" width="15px"/>
          }
        >
        </Input>
      </div>

      <h6>PEOPLE TO FOLLOW</h6>

      <div className={style.people_container}>
        {people.map((person, index) => (
          <div key={index}>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="user_image"/>

              <div className="ms-2">
                <h5>
                  {person.title}
                </h5>

                <p>
                  {person.description}
                </p>
              </div>
            </div>

            <button>Follow</button>
          </div>
        ))}

        <button className={style.show_more}>
          Show more people <DownOutlined/>
        </button>
      </div>

      <h6>
        FIND CONVERSATIONS ABOUT...
      </h6>

      <div className="row mx-0">
        {conversation.map((conv, index) => (
          <div className="col-6 mb-3" key={index}>
            <div className={style.conversation_card}>
              <h6>
                <FireOutlined/>
                {conv.title}
              </h6>

              <p>
                {conv.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
