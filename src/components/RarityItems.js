import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import React from 'react';

const rarityChart = require('../Data/raritychart.json')





function rarityTotal(data) {
    let type = [];
    let sum = [];
    let sumTotal = "";
    data.forEach(element => {
       type.push(element.trait_type) 
    });
    for(let i = 0; i < type.length; i++) {
    
        rarityChart[type[i]].forEach(element => {
            
            if(data[i].value === element.name && data[i].value !== "None") {
                sum.push(element.value[1])
            } 
        }) 
    }
    if(typeof(sum) !== undefined && sum.length > 0) {
      sumTotal = sum.reduce((a,b) => a + b);
      return (sumTotal / type.length).toFixed(2);

    } else {
      sumTotal = 1000;
      return (sumTotal / type.length).toFixed(2);
    }

    

}

const RarityItems = ({metadata}) => 
(
    <div style={styles.rarity_items}>
          <div style={styles.text}><h3>RARITY</h3></div>     
          
          <div style={{width: 150}}>
         

        <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 100 - rarityTotal(metadata) : 0;
              return (
                <CircularProgressbarWithChildren
                
                value={percentage} 
                minValue={0} 
                maxValue={100} 
                // text={rarityTotal(metadata) == 100.00 ? '0 %' : `${rarityTotal(metadata)}%`}
                styles={buildStyles({
                 pathColor: `rgba(163, 118, 33, ${100 - rarityTotal(metadata)})`,
                 textSize: '25px',
                 textColor: 'white',
                 trailColor: 'white',
                 backgroundColor: 'grey"',
                 pathTransitionDuration: 1.5,
             
                
               })}
              >
                <h3 style={styles.text}>{rarityTotal(metadata) === '100.00' ? '0 %' : `${rarityTotal(metadata)}%`}</h3>
                 </ CircularProgressbarWithChildren>
                
              );
            }}
          </VisibilitySensor>
         
         
          </div>
          <div style={styles.text}><h3>SCORE</h3> </div>

     
    </div>


            

    




    
)
    

const styles = {
    rarity_items: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "auto",
        padding: 10,
        borderRadius: 20
    
        
    },

    text: {
      padding:10,
      fontSize: 25,
      color: 'white'

    }
}


   


export default RarityItems