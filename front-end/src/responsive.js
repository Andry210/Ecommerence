import { css } from "styled-components";
//small phone
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 476px) {
      ${props}
    }
  `;
};
//Phone and tablet
export const smallTablet = (props) => {
  return css`
    @media only screen and (max-width: 767px) {
      ${props}
    }
  `;
};

//Big tablet

export const largeTablet = (props) => {
  return css`
    @media only screen and (max-width: 1023px) {
      ${props}
    }
  `;
};
//
export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};