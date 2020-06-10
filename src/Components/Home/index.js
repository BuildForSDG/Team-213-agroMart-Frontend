/* eslint-disable arrow-body-style */
import React from 'react';
import GridWrapper from './style';
import Aside from './Aside';
import AdsList from './AdsList';

const Home = () => {
  return (
    <GridWrapper>
      <Aside />
      <AdsList></AdsList>
    </GridWrapper>
  );
};

export default Home;
