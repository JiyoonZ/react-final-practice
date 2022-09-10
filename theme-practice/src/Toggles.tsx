import styled from "styled-components";

const Toggler = styled.button`
  width: 100px;
  height: 35px;
  line-height: 35px;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 6%;
  left: 65%;
`;
export default Toggler;
