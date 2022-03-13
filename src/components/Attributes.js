import '../styles/Attributes.css'
import RarityAttributes from './RarityAttributes'

const Attributes = ({elements}) => (
    <div  style={styles.attributesBox}>
      {elements.map(element => (
        
       element.value !== "None" 
       && element.trait_type !== "generation" 
       && element.trait_type !== "sequence" 
       ? <div style={styles.attributesItem} key={element.trait_type}>
           
               <div style={styles.attributesType}><strong>{element.trait_type}</strong></div>
               <div style={styles.attributesValue}>{element.value}</div>
               <RarityAttributes metadata={element} /> 
           
           </div>
        : null
      ))}
    </div>
  ); 


  const styles = {
    attributesBox: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap", 
    },
    attributesItem: {
      width: 200,
      margin: 10,
      padding: 10,
      backgroundColor: "#a37621",
      textTransform: "capitalize",
      borderRadius: 20,
      border: 'solid white 1px'
  },
  
  }

  export default Attributes