import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const data = {
      title: "2018 全國性公民投票案",
      showQuestionNumbers: 'off',
      showCompletedPage: false,
      goNextPageAutomatic: true,
      pagePrevText: '前一案',
      pageNextText: '跳過',
      completeText: '投入票匭',
      pages: [{
        title: '7',
        questions: [{
          type: "radiogroup",
          name: "07",
          title: "你是否同意以「平均每年至少降低1%」之方式逐年降低火力發電廠發電量？",
          choices: ["同意", "不同意"]
        }],
      }, {
        title: '8',
        questions: [{
          type: "radiogroup",
          name: "08",
          title: "您是否同意確立「停止新建、擴建任何燃煤發電廠或發電機組（包括深澳電廠擴建）」之能源政策？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '9',
        questions: [{
          type: "radiogroup",
          name: "09",
          title: "你是否同意政府維持禁止開放日本福島311核災相關地區，包括福島與周遭4縣市（茨城、櫪木、群馬、千葉）等地區農產品及食品進口？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '10',
        questions: [{
          type: "radiogroup",
          name: "10",
          title: "你是否同意民法婚姻規定應限定在一男一女的結合？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '11',
        questions: [{
          type: "radiogroup",
          name: "11",
          title: "你是否同意在國民教育階段內（國中及國小），教育部及各級學校不應對學生實施性別平等教育法施行細則所定之同志教育？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '12',
        questions: [{
          type: "radiogroup",
          name: "12",
          title: "你是否同意以民法婚姻規定以外之其他形式來保障同性別二人經營永久共同生活的權益？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '13',
        questions: [{
          type: "radiogroup",
          name: "13",
          title: "你是否同意，以「台灣」（Taiwan）為全名申請參加所有國際運動賽事及2020年東京奧運？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '14',
        questions: [{
          type: "radiogroup",
          name: "14",
          title: "您是否同意，以民法婚姻章保障同性別二人建立婚姻關係？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '15',
        questions: [{
          type: "radiogroup",
          name: "15",
          title: "您是否同意，以「性別平等教育法」明定在國民教育各階段內實施性別平等教育，且內容應涵蓋情感教育、性教育、同志教育等課程？",
          choices: ["同意", "不同意"]
        }]
      }, {
        title: '16',
        questions: [{
          type: "radiogroup",
          name: "16",
          title: "是否同意：廢除電業法第95條第1項，即廢除「核能發電設備應於中華民國一百十四年以前，全部停止運轉」之條文？",
          choices: ["同意", "不同意"]
        }]
      }]
    };

    this.model = new Survey.Model(data);
  }

  onComplete = (result) => {
    console.log(result.data);
  }

  render() {
    const { model } = this;
    return (
      <div className="App">
        <Survey.Survey
          model={model}
          onComplete={this.onComplete}
        />
      </div>
    );
  }
}

export default App;
