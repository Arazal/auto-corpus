import Head from "next/head";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>Автокорпус</title>
    </Head>
    <Header />
    <div className="Content">{props.children}</div>
    <NavBar />
  </div>
);

export default Layout;
