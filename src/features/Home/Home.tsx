import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import { Profile } from "./components/Profile";
import { AboutMe } from "./components/AboutMe";
import { Layout } from "../../hoc/Layout/Layout";

export const Home = () => (
  <Layout>
    <Profile />
    <AboutMe />
  </Layout>
);
