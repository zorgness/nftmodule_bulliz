import React, { Component } from 'react';
import NftInfoJson from '../API/Connection';
import NftItems from './NftItems';
import '../styles/SearchBar.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'


class SeachBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nft : [],
            searchToken : '',
            isLoading : false
        }  
        this._searchTokenInputChanged = this._searchTokenInputChanged.bind(this)
        this._loadNftInfo = this._loadNftInfo.bind(this)  
    }

    
    _loadNftInfo(event) {
        event.preventDefault();
        if(this.state.searchToken.length === 44 ) {
            this.setState({isLoading: true})
            NftInfoJson(this.state.searchToken)
            .then(result => {
                // if(result.data.symbol !== 'BC') {
                //     console.log("not from our collection")
                //     this.setState({searchToken:''})    
                // }   
                this.setState({
                    nft: [result.data],
                     isLoading : false
                })
            })
            this.setState({searchToken:''})   
        } else {
            
            this.setState({searchToken:''})
        } 
    }


    _searchTokenInputChanged(event) {
        this.setState({searchToken: event.target.value})
        
      }

      
     _resetInputField = () => {
            document.querySelector("input").value = '';
        };
    
    
    render() {
        
        return (
            
        <div>

        <form onSubmit={this._loadNftInfo} onClick={this._resetInputField} style={styles.form}>
        
            <input type="text" style={styles.field} placeholder=' enter token address'  onChange={this._searchTokenInputChanged} />
        
            <input type="submit" style={styles.button} className='search-button' value="CHECK RARITY"/>

        </form>

        {this.state.isLoading ?
            <div style={styles.loader_container}>
                <TailSpin
                     height="400" 
                     width="400" 
                     color='blue' 
                     ariaLabel='loading'/>
             </div>
         
         :  <div> <NftItems nft={this.state.nft}/> </div> }

       
        </div>
   
        );
    }
}

const styles = {
    loader_container: {
        display: "flex",
        justifyContent: "center"
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 60

    },
    field: {
        
        fontSize: 20,
        color: 'white',
        width: 400,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'transparent',
        border: 'solid white 1px'
        
      },
      button: {
        fontSize: 20,
        height: 40,
        background: 'grey',
        color: 'white',
        borderRadius: 40,
        border: 'solid white 4px'
      }
}

export default SeachBar