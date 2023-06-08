import styled from '@emotion/styled';

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'yellow')};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  background-color: rgb(233, 237, 255);
  box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
`;