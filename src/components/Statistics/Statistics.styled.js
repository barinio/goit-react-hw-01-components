import styled from 'styled-components';
import { randomColor } from 'utils/randomHexColor';

export const Title = styled.h2`
  font-size: 30px;
  padding: 30px 0;
  font-weight: 700;
  color: gold;
  text-shadow: yellow 1px 0 15px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  max-width: 500px;
  border-radius: 25px;
  box-shadow: 0px 1px 20px rgba(255, 140, 0, 0.5);
`;

export const StatsList = styled.ul`
  display: flex;
  border-radius: 0px 0px 25px 25px;
  overflow: hidden;
`;

export const ItemBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 25px;
  width: 50px;
  background-color: ${() => randomColor};
  color: white;
  text-shadow: black 1px 0 9px;
`;
