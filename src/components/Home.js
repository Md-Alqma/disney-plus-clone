import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import Footer from "./Footer";
// import db from "../firebase";
import { db } from "../firebase";
import app from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const colRef = collection(db, "movies");

  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      let moviesArr = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      dispatch(setMovies(moviesArr));
    });
  }, []);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
