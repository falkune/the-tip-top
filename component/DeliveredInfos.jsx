import React from 'react';
import Image from 'next/image';
import check from "../image/check.png"

export default function DeliveredInfos(props){
    return (
        <div style={{display:"flex",alignItems:"center"}}>
            {  props.data.isDelivered ?
            <Image height={20} width={20} src={check} alt=""/>
                 :
                 <p style={{color:"red",fontWeight:"bold",textAlign:"center",margin:0}}>Lot non délivré</p>
            }
        </div>     
    );
}
