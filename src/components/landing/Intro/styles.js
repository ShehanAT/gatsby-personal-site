import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import headerBackground from 'assets/illustrations/headerBackground1.jpg'
export const Wrapper = styled.div`
  padding-bottom: 12rem;
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-top: 7rem;
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #000000;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }

  #resumeViewBtn{
    cursor: pointer;
    border-radius: 3px;
    padding: 0.7rem 2.5rem;
    border: none;
    -webkit-appearance: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fff;
    background: #FF3030;
    margin-left: 1rem;
  
    &:focus {
      outline: none;
    }
  
    &:disabled {
      background: gray;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;


export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  a {
    margin: 0 0.5rem;
    img {
      margin: 0;
      width: 50px;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;