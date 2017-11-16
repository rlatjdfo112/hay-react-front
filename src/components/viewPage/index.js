import React from 'react';

import styles from './ViewPage.css';

import axios from 'axios';

import Header from '../global/header';
import FloatingBtn from '../global/floatingButton';
import ImageButton from '../global/imageButton';
import UserInfo from '../global/userInfo';
import Comments from './comments';

class ViewPage extends React.Component{

  constructor(props){
    super(props);

    this.state={
      writer: 'writer',
      location: 'location',
      date: 'date',
      profileImg: 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?w=640&ssl=1',
      title: '오롯이 나를 만나는 시간',
      content: 'ㅁㄴㅇㅁㄴㅇㅁasdasdㄴㅇ'};
  }

  render(){
    let renderKetWords = (keywords) => {
      return keywords.map(function(keyword){
        return (<div className={styles.keyword}>{keyword}</div>)
      });
    }
    return (
      <div>
        <Header/>
        <div className={styles.contents}>
          <div className={styles.lookup_content}>
            <UserInfo className={styles.header}
                      writer={this.state.writer}
                      date={this.state.date}
                      location={this.state.location}
                      profileImg={this.state.profileImg} />
            <div className={styles.title}>{this.state.title}</div>
            <div className={styles.content}>
              {this.state.content}
            </div>
            <div className={styles.keywords}>
              <span className={styles.guide}>Keyword</span>
               <div className={styles.context}>
                 {renderKetWords(['테스트', '키워드', '가나다라','테스트', '키워드', '가나다라','테스트', '키워드', '가나다라','테스트', '키워드', '가나다라'])}
               </div>
            </div>
            <Comments profileImg={this.state.profileImg}/>
          </div>
        </div>
        <FloatingBtn style={{'right':'30px', 'bottom':'100px'}} icon={'/resources/main/Writing_btn.svg'} link={'editor'}/>
        <FloatingBtn style={{'right':'30px', 'bottom':'50px'}} icon={'/resources/main/Writing_btn.svg'} link={'editor'}/>
      </div>
    )
  }
}

export default ViewPage;
