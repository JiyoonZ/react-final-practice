import {atom, selector} from "recoil";

//새로운 카테고리가 추가될 수도 있기때문에 아래처럼 Interface 작성하기
interface ITodoState {
  [key: string]: string[];
}
export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    "To do": ["a", "b"],
    Doing: ["c", "d", "e"],
    done: ["f"],
  },
});
