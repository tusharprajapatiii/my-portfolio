import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Contact from "./components/Contact";
// import Info from "./components/Info";
import Intro from "./components/Intro";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// const Intro = dynamic(()=>import('./components/In'))
const Info = dynamic(() => import("./components/Info"));
const Projects = dynamic(() => import("./components/Projects"));
const Skills = dynamic(() => import("./components/Skills"));
const Contact = dynamic(() => import("./components/Contact"));
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <Info />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
