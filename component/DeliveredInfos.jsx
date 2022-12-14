import React from 'react';
import Image from 'next/image';
import check from "../image/check.png"

export default function DeliveredInfos({value}){
    console.log(value.row.isDelivered,"yay")
    return (
        <div style={{display:"flex",alignItems:"center"}}>
            { value.row.isDelivered ?
            <Image height={20} width={20} src={check} alt=""/>
                 :
                 <p style={{color:"red",fontWeight:"bold",textAlign:"center",margin:0}}>Lot non délivré</p>
            }
        </div>     
    );
}
