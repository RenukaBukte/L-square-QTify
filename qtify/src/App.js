// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [song, setSong] = useState([]);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);
  
  async function fetchData() {
    // Make an API call to fetch data
    try{
      const response = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
      console.log("Fetched data:", response.data);
      setItems(response.data);

      const newAlbumsRes = await axios.get("https://qtify-backend.labs.crio.do/albums/new");
      setNewAlbums(newAlbumsRes.data);

      const songRes = await axios.get("https://qtify-backend.labs.crio.do/songs");
      setSong(songRes.data);
       
    }catch(error){
        // Handle errors here
        console.error("Error fetching data:", error);
      };
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Hero />
      <Section title="Top Albums" items={items} showAll={true} />
      <Section title="New Albums" items={newAlbums} showAll={true} />
      <Section title="Songs" items={song} tabs={true} />
      <Routes>  
        <Route exact path="/" component={Hero} />  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
