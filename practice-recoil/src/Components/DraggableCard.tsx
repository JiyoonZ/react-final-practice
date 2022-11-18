import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {useRecoilState} from "recoil";
import {todoState} from "../atoms";
import styled from "styled-components";
const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;
interface IDraggableProps {
  todo: string;
  index: number;
}
function DraggableCard({todo, index}: IDraggableProps) {
  console.log(todo, "rendered");
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {" "}
          {todo}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
