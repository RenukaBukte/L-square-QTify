import React, { useState } from "react";
import styles from "./Section.module.css";
import Card  from "../Card/Card";
import { Grid, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";
import { useEffect } from "react";

function Section({title="Top Albums",items=[], tabs=false,showAll=false}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [value, setValue] = useState(0);
  const [tabData, setTabData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };
   useEffect(() => {
    // Fetch data based on the selected tab
    fetchTabData();
  }, []);
  async function fetchTabData(tabIndex) {
    try {
      const tabEndpoints = await axios.get(`https://qtify-backend.labs.crio.do/genres`);
      console.log("Fetched tab data:", tabEndpoints.data);
      setTabData(tabEndpoints.data.data);
    }catch (error) {
      console.error("Error fetching tab data:", error);
    }
  }
  
  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

    const getFilteredItems = () => {
    if (!tabs || value === 0) {
      return items; // Show everything if "All" (index 0) is selected or tabs are disabled
    }
    // Because index 0 is "All", index 1 corresponds to tabData[0]
    const currentGenre = tabData[value - 1];
    if (!currentGenre) return items;

    return items.filter((item) => item.genre?.key === currentGenre.key);
  };

  const displayItems = getFilteredItems();
  
  return (
     <Grid xs={12} sm={6} md={4} lg={3} className={styles.section}>
      {/* Top Banner Row */}
   
      <div className={styles.top_section}>
        <span className={styles.title}>{title}</span>
         {showAll && (
          <button className={styles.collapse_btn} onClick={handleToggle}>
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>
    
      {tabs && (
        <div style={{ alignSelf: 'start' }}>
          <Box sx={{ alignSelf: 'start', width: '100%' }}>
            <Tabs value={value} 
        onChange={handleChange} 
        sx={{
           '& .MuiTabs-indicator': {
      backgroundColor: 'var(--color-primary, #34c94b) !important', 
      height: '4px !important',
    },
          '& .MuiTab-root': {
            color: 'var(--color-white) !important', // Forces unselected text to be white
            fontWeight: '600', // Optional: makes the text bold
            textTransform: 'none',       // Prevents forced uppercase layout formatting
            fontFamily: 'var(--font-poppins)',
            fontSize: '16px', // Optional: sets font size
          },
          '& .Mui-selected': {
            color: 'var(--color-white) !important', // Changes selected text color to green
           // Optional: changes text color to green when clicked/selected
           borderBottom: '4px solid #34c94b', 
          }
        }}>
          
          {(Array.isArray(tabData) ? tabData : tabData?.data || []).map((tab) => (
            <Tab key={tab.key} label={tab.label} className="tab" style={{ color: 'white !important' }} />
          ))}
            </Tabs>
          </Box>
        </div>
      )}
      {/* Conditional Layout View Switcher */}
      {isCollapsed ? (
        /* 1. Carousel Mode: Renders when state is set to Collapse (meaning user can collapse it) */
        tabs ? (
         
          <Carousel
            data={displayItems}
            renderComponent={(item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                likes={item.likes}
              />
            )}
          />
        ) : (
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
        )
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
