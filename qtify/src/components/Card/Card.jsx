import React from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';

function Card({image, followers=0, title,likes}) {
  return (
    <div className={styles.card}>
        <img src={image}
          width={159}
          height={170}
          style={{ opacity: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          alt="bollywood"
        />
        <div style={{ background: 'var(--color-white)',width: 159,height: 23,borderBottomLeftRadius: 10, borderBottomRightRadius : 10, fontFamily: 'var(--font-poppins)',fontWeight: 400,fontSize: "10px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center' ,padding:'6px 0 6px 1px'}}>
      {/* <span style={{ padding: '6px', borderRadius: 10, background: 'var(--color-black)',color: 'var(--color-white)' }}>100 Follows</span> */}
      <Chip size="small" label={`${followers}` > 0  ? `${followers} Follows` : `${likes} Likes`}   sx={{
    background  : 'var(--color-black)',
    '& .MuiChip-label': {
      display: 'block',
      whiteSpace: 'normal',
      color: 'var(--color-white)'
    } }}
      />
      </div> 
    <label style={{ display: 'flex', alignSelf: 'flex-start', paddingBottom: '6px', paddingLeft: '4px', color: 'var(--color-white)', fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: "14px", }}>{title}</label>
    </div>
  );
}
export default Card;
