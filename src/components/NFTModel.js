import  Attributes  from './Attributes';
import RarityItems from './RarityItems';
import RarityBar from './RarityBar';





const NftModel = (metadata) => {

    return (
        <div className='nft-info-container'>
        
        {/* <div style={styles.text}>
            <h2></h2>
            <h3></h3>
        </div> */}
    
        <div style={styles.images_container}>
            <img src={"https://i.ibb.co/HPP7XNV/Capture-d-e-cran-2022-03-10-a-14-20-15.png"} style={styles.image} alt="" />
    
            <img src={"https://i.ibb.co/HPP7XNV/Capture-d-e-cran-2022-03-10-a-14-20-15.png"} style={styles.image} alt="" />
        
    
            
        </div>
    
        <div style={styles.rarity_items_container}>
    
            <RarityItems metadata={metadata.metadata.attributes} />
    
        </div>
    
        <div>
    
            <RarityBar metadata={metadata.metadata.attributes}/>
    
        </div>
    
        <div className='attributes-container'>
            
                <Attributes elements={metadata.metadata.attributes} />
    
        </div>
    
    </div> 


    )
    
        
} 



const styles = {
    image: {
        width: 450,
        height: 450,
        margin:10,
        backgroundColor: 'gray',
        border: 'solid 10px rgba(211, 220, 50, .8);',
        
        
        
      },
     
      images_container: {
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 20
      },
      
      rarity_items_container: {
          display: "flex",
          justifyContent: "center",
      },
      text: {
          color: 'white'
      }
      
   
}



export default NftModel