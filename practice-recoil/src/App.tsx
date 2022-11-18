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
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    // draggable한 아이템을 삭제한다.
    const {destination, draggableId, source} = info;
    // board ID 체크하기
    if (destination?.droppableId === source.droppableId) {
      // 같이 보드내에서 움직일 경우
      setTodos((allBoards) => {
        // 수정이 일어난 보드만 복사하기
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(Number(destination?.index), 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    } else {
      setTodos((allBoards) => {
        // 출발할 보드 , 도착할 보드 복사하기
        const sourceBoard = [...allBoards[source.droppableId]];
        const destiBoard = [...allBoards[destination?.droppableId as any]];
        sourceBoard.splice(source.index, 1);
        destiBoard.splice(destination?.index as any, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId as any]: destiBoard,
        };
      });
    }
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
