import { useState } from "react";
import "./style/comment.css"

function App() {
  const myinfo = {
    header: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe87cad7b-f993-4539-9a08-64ee6d1e38c8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703001149&t=52ee3e780099180a68264352e2d9243c",
    name: "程序员舒克",
    uid: "15245728859",
  }
const [value , setValue] = useState("")
const [fansList , setFansList ] = useState(
    [
      {
        header: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F04%2F20200504184704_tivff.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703001260&t=de94e61d9c239afd9f46a01c59ac1a3b",
        name: "张三",
        uid: "00001",
        fansInfo: "颤三评论",
        like: 200,
      },
      {
        header: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F06%2F20200406164956_elkoq.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703001260&t=09b9cd2cf828ef6affaccbb55cce8f32",
        name: "李四",
        uid: "00002",
        fansInfo: "李四评论",
        like: 100,
      },
      {
        header: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Fea0a13c1-c4c5-adcb-a49f-37534a465ad0%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703001260&t=5e0536f30b077d7ed375c8e3be35950c",
        name: "王五",
        uid: "00003",
        fansInfo: "王五评论",
        like: 500,
      },
      {
        header: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe87cad7b-f993-4539-9a08-64ee6d1e38c8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703001149&t=52ee3e780099180a68264352e2d9243c",
        name: "程序员舒克",
        uid: "15245728859",
        fansInfo: "程序员舒克评论",
        like: 10000,
      },
    ]
  )
  function releaseClick(){
    const fansListCopy = fansList
   let obj = {
      header: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe87cad7b-f993-4539-9a08-64ee6d1e38c8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703001149&t=52ee3e780099180a68264352e2d9243c",
      name: "程序员舒克",
      uid: "15245728859",
      fansInfo: value,
      like: 0,
    }
    console.log(fansListCopy,'fansListCopy');
    setFansList([
      ...fansList,
      obj
    ])
    setValue("")
  }
  const deleteClick = function(item){
    const filteredFansList = fansList.filter((fan) => fan.uid !== item.uid);
    setFansList(filteredFansList)
  }
  return (
    <div className="App">
      <div className="content">
        <div className="title_wrap">
          <div className="commentNum">
            <div className="title">评论</div>
            <div className="num">10</div>
          </div>
          <div className="commentType">
            <div className="tyleLabel">最新</div>
            <div className="tyleBoder"></div>
            <div className="tyleLabel">最热</div>
          </div>
        </div>

        <div className="input_wrap">
          <div className="usehead">
            <img className="img" src={myinfo.header} alt="头像" />
          </div>
          <input className="input_box" placeholder="发一条友善的评论" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
          <button className="input_btn" onClick={releaseClick}>发布</button>
        </div>

        <div className="comment_info">
          {fansList.map((item , index) => {
            return (
              <div className="comment_item" key={item.uid + index}>
                <div className="item_head">
                  <img src={item.header} alt="头像" className="img"/>
                </div>
                <div className="item_info">
                  <div className="item_name">{item.name}</div>
                  <div className="item_msg">{item.fansInfo}</div>
                  <div className="item_state">
                    <div>2023-11-11</div>
                    <div>点赞数：{item.like}</div>
                    {item.uid === myinfo.uid ?  <div className="delete" onClick={()=>deleteClick(item)}>删除</div> : '' }
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
