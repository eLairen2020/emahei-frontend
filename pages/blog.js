import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Nav from '../components/home/Nav';
import Footer from '../components/home/Footer';
import axios from 'axios';


const Home = ({data}) => {
  console.log(data)
  // const [category, setCategory] = useState([])
  const [Courses, setCourses] = useState([])
 const header = {
    "Content-Type": "application/json",
  };


useEffect(() => {
  getCourses()
}, [])

const getCourses = () => {
  const url = "http://localhost:8000/Courses";
  axios
    .get(url, header)
    .then((res) => {
      setCourses(res.data);
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
};


  return (
    <>
    <div className={`${styles.container} px-32`}>
      <Head>
        <title>ℯMahei</title>
        <meta name="description" content="The Online Learning Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav categories={data}/>
      
      <Footer/>
     
    </div>
    </>
  )
}

export async function getServerSideProps() {
  
  const res = await fetch("http://localhost:8000/Categories/")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home;