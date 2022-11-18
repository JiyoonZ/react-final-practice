import {atom, selector} from "recoil";

//새로운 카테고리가 추가될 수도 있기때문에 아래처럼 Interface 작성하기
interface ITodoState {
  [key: string]: ITodo[];
}
export interface ITodo {
  id: number;
  text: string;
}
export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    "To do": [
      {id: 1, text: "hello"},
      {id: 2, text: "HELLO"},
    ],
    Doing: [],
    done: [],
  },
});
