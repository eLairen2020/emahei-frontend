import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Nav from '../components/home/Nav';

import Hero from '../components/home/hero_section';
import Hero1 from '../components/home/hero';
import Footer from '../components/home/Footer';
import ViewCourses from '../components/home/Courses';
import ViewBlogs from '../components/home/Blogs';

import axios from 'axios';


import Link from 'next/link';
const Home = ({data}) => {
  console.log(data)
  // const [category, setCategory] = useState([])
  const [Courses, setCourses] = useState([])
 const header = {
    "Content-Type": "application/json",
  };

// useEffect(() => {
//   getCategory()
// }, [])



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
      <Hero/>
      
      <ViewCourses categories={data} Courses={Courses}/>
      <ViewBlogs/>
      <Footer/>
      {/* {category && category.map(item => (
        <div key={category.id}>

        <p>{item.name}</p>
        </div>
      ))} */}
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