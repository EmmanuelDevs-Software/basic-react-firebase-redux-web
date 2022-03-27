import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div``;

export const OptionsContainer = styled.div`
  height: 100%;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none !important;
  color: rgba(255,255,255,.55);
  :hover{
    color: white
  }
`;
