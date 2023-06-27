import React from "react";
import { Main, PageTitle } from "./styles";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

export default function Display() {
  return (
    <>
      <Navbar currentPage={2} />
      <Main>
        <PageTitle>Agenda</PageTitle>
      </Main>
      <Footer />
    </>
  );
}
