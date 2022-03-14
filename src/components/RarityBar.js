import ProgressBar from "@ramonak/react-progress-bar";
import '../styles/RarityBar.css'
import styled, { keyframes } from 'styled-components';
import { slideInUp, tada, zoomIn, fadeIn } from 'react-animations';

const rarityChart = require('../Data/raritychart.json')

const slideAnimation = keyframes`${slideInUp}`;
const tadaAnimation = keyframes`${tada}`;
const zoomInAnimation = keyframes`${zoomIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;


const SlideDiv = styled.div`
  animation: 2s ${slideAnimation};
`;

const TadaDiv = styled.div`
  animation: 2s ${tadaAnimation};
`;

const ZoomInDiv = styled.div`
    animation: 10s ${zoomInAnimation};
`;

const FadeInDiv = styled.div`
    animation: 13s ${fadeInAnimation}
`;



function selectValue(value) {

        let res = "";
    
        if(value >= 1 && value <= 19) {
            res = "COMMON"
        }
        if(value >= 20 && value <= 39) {
            res = "UNCOMMON"
        }
        if(value >= 40 && value <= 59) {
            res = "RARE"
        }
        if(value >= 60 && value <= 79) {
            res = "EPIC"
        } 
        if(value >= 61 && value <= 99) {
            
            res = "LEGENDARY"
        } 
         
        return res
  
  }



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


const RarityBar = ({metadata}) => (


    

        <div style={styles.rarity_} className="progressBar">

            <FadeInDiv><ZoomInDiv><div style={styles.text}>{selectValue(100 - parseInt((rarityTotal(metadata))))}</div></ZoomInDiv></FadeInDiv>
            

        

        <div style={styles.progressBar}>

            
        
            <ProgressBar
             completed={100 - parseInt((rarityTotal(metadata)))}
             isLabelVisible={false}
             ariaValuemin={0}
             ariaValuemax={100}
             height='40px'
            //  bgColor={'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 75%, rgba(56,253,29,1) 100%)'}
             bgColor={'#bd3535'}
             baseBgColor={'transparent'}
             transitionDuration= '2s'
             transitionTimingFunction= 'linear'
             animateOnRender={true} 
             
             
              />


        </div>

        <div style={styles.step}>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            
            
            
            
        </div>

        <div style={styles.progressStep}>
            <div style={styles.text3}>COMMON</div>
            <div style={styles.text3}>UNCOMMON</div>
            <div style={styles.text3}>RARE</div>
            <div style={styles.text3}>EPIC</div>
            <div style={styles.text3}>LEGENDARY</div>
        </div>
        
        </div>

    

    
)




const styles = {
    
    step: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: -56,
        position: 'relative',
        fontSize: 46,
        color: 'white'

    },
    progressStep: {
        display: "flex",
        justifyContent: "space-between",
        margin: 20
        

    },
    text: {
        fontFamily:'Times New Roman, Times, serif',
        color: 'white',
        fontSize: 25,
        padding: 10
    },
    text3: {

        fontFamily:'Times New Roman, Times, serif',
        color: 'grey',
        fontSize: 14,
        

    },

    rarity_: {
        margin: 40,
        
        
    },
    progressBar: {
        height: 40,
        border: "solid 4px white",
        borderRadius: 40
    }
  
}


   


export default RarityBar