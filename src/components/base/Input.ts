import { styled } from 'styled-components';

export const InputBase = styled.input`
  width: '100%';
  padding: 1rem 0.75rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors['sky-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`;
