import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card  from "../Card/Card";
import { Grid } from "@mui/material";

function Section({title="Top Albums"}) {
  const [items, setItems] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]); 

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
       
    }catch(error){
        // Handle errors here
        console.error("Error fetching data:", error);
      };
  }
  return (
     <Grid item xs={12} sm={6} md={4} lg={3} className={styles.section}>
      <div className={styles.top_section}>
        <span className={styles.title}>{title}</span>
        <button className={styles.collapse_btn}>Collapse</button>
        </div>
      <div key="top" className={styles.items_container} >
        {items.map((item) => (
          <Card key={item.id} title={item.title} image={item.image} followers={item.follows} />
        ))}
      </div>
      <div key="new" className={styles.items_container} >
        {newAlbums.map((item) => (
          <Card key={item.id} title={item.title} image={item.image} followers={item.follows} />
        ))}
      </div>
       </Grid>
  );
}
export default Section;
