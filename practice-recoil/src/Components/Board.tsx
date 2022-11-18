import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  width: 300px;
  padding: 15px 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
`;
const Area = styled.div`
  background-color: blue;
  flex-grow: 1;
`;
interface IBoard {
  todos: string[];
  boardId: string;
}
function Board({todos, boardId}: IBoard) {
  return (
    <Wrapper>
      <Title>{boardId.toUpperCase()}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <Area ref={magic.innerRef} {...magic.droppableProps}>
            {todos.map((todo, index) => (
              <DraggableCard key={todo} index={index} todo={todo} />
            ))}
            {/* 요소가 드래그될때마다 빈곳의 크기가 변하는거 방지 */}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
