import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [workingtodo, setWorkingtodo] = useState([
    { id: 1, title: '리액트 공부하기', detail: '리액트 기초를 공부해봅시다.' },
  ]);

  const [donetodo, setDonetodo] = useState([
    { id: 1, title: '리액트 공부하기', detail: '리액트 기초를 공부해봅시다.' },
  ]);

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setDetail(event.target.value);
  };

  const clickAddbtn = () => {
    const newTodo = {
      id: workingtodo.length + 1,
      title: title,
      detail: detail
    };

    setWorkingtodo([...workingtodo, newTodo]);
    setTitle('');
    setDetail('');
  };

  const clickRemovebtn = (id) => {
    const newTodo = workingtodo.filter((workingtodo) => workingtodo.id !== id);
    setWorkingtodo(newTodo);
  }

  const clickDonebtn = (id) => {
      const newDonetodo = {
      id: donetodo.length + 1,
      title: workingtodo[id-1].title,
      detail: workingtodo[id-1].detail
    };

    setDonetodo([...donetodo, newDonetodo]);

    const newTodo = workingtodo.filter((workingtodo) => workingtodo.id !== id);
    setWorkingtodo(newTodo);
  }

  const clickRemovebtn2 = (id) => {
    const newDonetodo = donetodo.filter((donetodo) => donetodo.id !== id);
    setDonetodo(newDonetodo);
  }

  const clickCancelbtn = (id) => {
    const newTodo = {
    id: workingtodo.length + 1,
    title: donetodo[id-1].title,
    detail: donetodo[id-1].detail
  };

  setWorkingtodo([...workingtodo, newTodo]);

  const newDonetodo = donetodo.filter((donetodo) => donetodo.id !== id);
    setDonetodo(newDonetodo);
}

  return (
    <div className='layout'>
      <div className='header'>
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className='add-todo'>
        <div className='title'>제목</div>
        <input type='text' className='input' value={title} onChange={titleChangeHandler} />
        <div className='title'>내용</div>
        <input type='text' className='input' value={detail} onChange={detailChangeHandler} />
        <button className='addbtn' onClick={(clickAddbtn)}>추가하기</button>
      </div>

      <div>
        <h2 className='list-title'>Working.. 🔥</h2>
        <div className='todo-box'>
          {
            workingtodo.map(item => {
              return <div key={item.id} className='component-style'>
                <h2 className='todo-title'>{item.title}</h2>
                <div>{item.detail}</div>
                <div>
                  <button className='deletebtn' onClick={() => clickRemovebtn(item.id)}>삭제하기</button>
                  <button className='completebtn' onClick={() => clickDonebtn(item.id)}>완료</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div>
        <h2 className='list-title'>Done..! 🎉</h2>
        <div className='todo-box'>
          {
            donetodo.map(item => {
              return <div key = {item.id} className='component-style'>
                <h2 className='todo-title'>{item.title}</h2>
                <div>{item.detail}</div>
                <div>
                <button className='deletebtn' onClick={() => clickRemovebtn2(item.id)}>삭제하기</button>
                  <button className='cancelbtn' onClick={() => clickCancelbtn(item.id)}>취소</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default App;
