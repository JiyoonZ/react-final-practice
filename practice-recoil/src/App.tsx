import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {todoState} from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = ({draggableId, destination, source}: DropResult) => {
    // 1. source.index 를 배열에서 지운다.
    // 2. destination.index 번째 배열에 srouce.draggable 값을 넣어준다.
    if (!destination) return;
    // setTodos((prevTodo) => {
    //   const copyTodos = [...prevTodo];
    //   copyTodos.splice(source.index, 1);
    //   copyTodos.splice(Number(destination?.index), 0, draggableId);

    //   return copyTodos;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>🚀 BOOM!</h1>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board boardId={boardId} key={boardId} todos={todos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
