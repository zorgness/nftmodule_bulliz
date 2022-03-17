import  Attributes  from './Attributes';
import RarityItems from './RarityItems';
import RarityBar from './RarityBar';
import styled from 'styled-components';



const Image = styled.img`

    width: 450px;
    height: 450px;
    
    background-color: 'gray';
    
    @media (max-width: 600px) {
        width: 350px;
        height: 350px;
    }


`

const ImageContainer = styled.div`
width: 450px;
height: 450px;
border: solid 20px rgba(0, 0, 0, 0.4);
border-radius: 20px;

@media (max-width: 600px) {
    width: 350px;
    height: 350px;
}
@media (max-width: 400px) {
    border: solid 20px rgba(0, 0, 0, .0);
}

`



const NftModel = (metadata) => {

    return (
        <div className='nft-info-container'>
        
        {/* <div style={styles.text}>
            <h2></h2>
            <h3></h3>
        </div> */}
    
        <div style={styles.images_container}>

            <ImageContainer style={styles.image}>

                <Image src={"https://i.ibb.co/HPP7XNV/Capture-d-e-cran-2022-03-10-a-14-20-15.png"} alt=""/> 

            </ImageContainer>
           
            
            <ImageContainer style={styles.image}>

                <Image src={"https://i.ibb.co/HPP7XNV/Capture-d-e-cran-2022-03-10-a-14-20-15.png"} alt=""/> 

            </ImageContainer>
    
            
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
    // image: {
        
    //     border: 'solid 20px rgba(0, 0, 0, .4)',
    //     borderRadius: 20
        
    //   },
     
      images_container: {
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 20,
          gap: '15px 15px'
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