import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto;
  padding-top: 100px;
  gap: 20px;
`;
export const Card = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  gap: 20px;
  font-weight: 700;
  border-radius: 7px;
  width: 50%;
  box-shadow: 0px 1px 20px rgba(255, 0, 255, 0.5);
  transition-duration: 300ms;
  transition-timing-function: linear;
  &:hover {
    background-color: rgba(255, 255, 0, 0.5);
    transform: scale(1.15);
  }
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  &.online {
    background-color: green;
  }
  &.offline {
    background-color: red;
  }
`;
