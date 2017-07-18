import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const palette = {
  primDark:    '#303F9F',
  prim:        '#3F51B5',
  primLight:   '#C5CAE9',
  primText:    '#FFFFFF',
  accent:      '#00BCD4',
  text:        '#212121',
  secText:     '#757575',
  divider:     '#BDBDBD'
}

export const Aside = styled.aside`
  position: fixed;
  width: 100px;
  height: 100%;
  padding: 20px 0 0;
  background-color: ${palette.prim};
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: ${palette.text};
  background-image: url(${({ src })=> src });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

export const IconTab = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${({ selected }) => selected ? palette.primLight : 'transparent'};
  background-image: url(${({ icon })=> icon });
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  ${'' /* border-left: 5px solid ${({ selected }) => selected ? palette.primDark : 'transparent'};
  border-right: 5px solid ${({ selected }) => selected ? palette.primLight : 'transparent'}; */}
  cursor: pointer;
  opacity: ${({ selected }) => selected ? 1 : 0.7};
  &:hover {
    background-color: ${palette.primLight};
    ${'' /* border-left: 5px solid ${palette.primDark};
    border-right: 5px solid ${palette.primLight}; */}
    opacity: 1;
  }
`;

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0 0;
`;
