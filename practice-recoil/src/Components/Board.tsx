import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding: 30px 10px;
  padding-top: 15px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;
const Title = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
`;
interface IBoard {
  todos: string[];
  boardId: string;
}
function Board({todos, boardId}: IBoard) {
  return (
    <>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
            <Title>{boardId.toUpperCase()}</Title>
            {todos.map((todo, index) => (
              <DraggableCard key={todo} index={index} todo={todo} />
            ))}
            {/* 요소가 드래그될때마다 빈곳의 크기가 변하는거 방지 */}
            {magic.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </>
  );
}

export default Board;
