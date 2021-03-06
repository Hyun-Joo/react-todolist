import React from 'react';
import styled from 'styled-components';
import moment from "moment";
import 'moment/locale/ko';
import {useTodoState} from "./TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day{
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left{
    color: #4c6ef5;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead(){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    const now = moment().format('YYYY년 M월 D일');
    const day = moment().format('dddd');
    return (
        <TodoHeadBlock>
            <h1>{now}</h1>
            <div className="day">{day}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;