import { useState } from 'react';

export default function DeliveredInfos(props){
    return (
        <div style={{display:"flex",alignItems:"center"}}>
            {  props.data.isDelivered ?
                <p style={{color:"green",fontWeight:"bold",textAlign:"center",margin:0}}>Lot delivré</p> :
                 <p style={{color:"red",fontWeight:"bold",textAlign:"center",margin:0}}>Lot non délivré</p>
            }
        </div>     
    );
}
