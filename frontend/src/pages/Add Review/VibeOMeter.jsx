import React from 'react'
import GaugeChart from "react-gauge-chart";


const VibeOMeter = ({setModal , gaugeValue}) => {


  if(gaugeValue === 0){
    gaugeValue=100;
  }else if(gaugeValue === 1){
    gaugeValue=60;
  }else if(gaugeValue === 2){
    gaugeValue=50;
  }else if(gaugeValue === 3){
    gaugeValue=20;
  }else if(gaugeValue === 4){
    gaugeValue=10;
  }else{
    gaugeValue = 5;
  }
  // console.log("Gauge Value : " ,gaugeValue);
 
  return (
    <>

      <GaugeChart
          id="gauge-chart5"
          nrOfLevels={30}
          colors={[
            "#55bf3b",
            "#9acc0d",
            "#ace50d",
            "#ff385c",
          ]}
          arcWidth={0.2}
          cornerRadius={0}
          arcPadding={0.007}
          percent={gaugeValue / 100}
          hideText={true}
          needleBaseColor="black"
          needleColor="black"
        />
    </>
  )
}

export default VibeOMeter
