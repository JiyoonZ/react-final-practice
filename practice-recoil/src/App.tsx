import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {todoState} from "./atoms";
import DraggableCard from "./Components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;
const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 120px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = ({draggableId, destination, source}: DropResult) => {
    // 1. source.index 를 배열에서 지운다.
    // 2. destination.index 번째 배열에 srouce.draggable 값을 넣어준다.
    if (!destination) return;
    setTodos((prevTodo) => {
      const copyTodos = [...prevTodo];
      copyTodos.splice(source.index, 1);
      copyTodos.splice(Number(destination?.index), 0, draggableId);

      return copyTodos;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>🚀 BOOM!</h1>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {todos.map((todo, index) => (
                  <DraggableCard key={todo} index={index} todo={todo} />
                ))}
                {/* 요소가 드래그될때마다 빈곳의 크기가 변하는거 방지 */}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
