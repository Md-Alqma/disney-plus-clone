import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <Content>
        <Links>
          <a href="#">About Disney+ Hotstar</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
          <a href="#">Feedback</a>
          <a href="#">Careers</a>
        </Links>
        <p>
          © 2023 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </p>
      </Content>
      <Connect>
        <p>Connect with us</p>
        <div>
          <img src="/details/facebook.svg" alt="facebook" />
          <img src="/details/twitter.svg" alt="twitter" />
        </div>
      </Connect>
      <Download>
        <p>Disney+ Hotstar App</p>
        <div>
          <PlayStoreButton>
            <i class="fa-brands fa-google-play"></i>
            <p>Get it on</p>
          </PlayStoreButton>
          <AppStoreButton>
            <i class="fa-brands fa-app-store-ios"></i>
            <p>Get it on</p>
          </AppStoreButton>
        </div>
      </Download>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 80px 0;
  gap: 100px;
`;

const Content = styled.div`
  width: 750px;

  p {
    font-size: 11px;
    line-height: 22px;
    letter-spacing: 1.3px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  a {
    color: rgb(249, 249, 249);
    text-decoration: none;
    font-size: 14px;
    &:hover {
      color: #1f80e0;
    }
  }
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  div {
    display: flex;

    img {
      width: 45px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;
const PlayStoreButton = styled.button`
  background: #192133;
  padding: 0 30px;
  color: rgb(249, 249, 249);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1f80e0;
    color: rgb(249, 249, 249);
  }
`;
const AppStoreButton = styled(PlayStoreButton)``;
