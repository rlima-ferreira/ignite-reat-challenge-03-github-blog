import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const AnchorBase = styled.a`
  color: ${(props) => props.theme.colors['sky-500']};
  font-weight: bold;
  line-height: 160%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.0625rem;

  &:hover {
    border-bottom-color: ${(props) => props.theme.colors['sky-500']};
  }
`;

export const LinkBase = styled(Link)`
  color: ${(props) => props.theme.colors['sky-500']};
  font-weight: bold;
  line-height: 160%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors['sky-500']};
  }
`;
