import React, { useState } from "react";
import styles from "./Section.module.css";
import Card  from "../Card/Card";
import { Grid } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section({title="Top Albums",items=[]}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  
  return (
     <Grid item xs={12} sm={6} md={4} lg={3} className={styles.section}>
      {/* Top Banner Row */}
      <div className={styles.top_section}>
        <span className={styles.title}>{title}</span>
        <button className={styles.collapse_btn} onClick={handleToggle}>
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* Conditional Layout View Switcher */}
      {isCollapsed ? (
        /* 1. Carousel Mode: Renders when state is set to Collapse (meaning user can collapse it) */
        <Carousel
          data={items}
          renderComponent={(item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              followers={item.follows}
            />
          )}
        />
      ) : (
        /* 2. Grid Mode: Renders when state is set to Show All (meaning user expanded it to show all cards) */
        <div className={styles.items_container}>
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              followers={item.follows}
            />
          ))}
        </div>
      )}
    </Grid>

    
  );
}
export default Section;
