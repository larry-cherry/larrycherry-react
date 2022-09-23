import React from "react";
// import {Link} from 'react-router-dom';
import { Heading } from "./components/Heading";
import { AboutMe } from "./components/AboutMe";
import { Layout } from "../../hoc/Layout/Layout";

export const Home = () => (
  <Layout>
    <Heading />
    <AboutMe />
  </Layout>
);
