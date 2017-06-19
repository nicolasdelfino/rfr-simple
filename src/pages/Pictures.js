import React from 'react'
import { connect } from 'react-redux'

const Pictures = ({ pictures }) => {
  return(
    <div>
    {pictures.length === 0
      ? <div id="loader" />
      : <div>
          <h1>pictures</h1>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {pictures.map((picture, key) => <PIC {...picture} key={key} />)}
          </div>
        </div>
     }
    </div>
  )
}
  
const PIC = ({ id, title, url, thumbnailUrl }) => {
  return(
    <div style={{width: 150, height: 150, textAlign: 'left', padding: 10 }}>
      <img src={thumbnailUrl} alt={title}/>
    </div>
  )
}
    
const mapState = state => ({ 
  pictures: state.pictureReducer.pictures 
})

export default connect(mapState)(Pictures)