
import React, { useState } from 'react';
import  {Divider, Steps}  from "antd";
const {Step} = Steps

 function StatusProgress() {
    const [current, setCurrent] = useState(1)
    const [currentstate, setCurrentstate] = useState(1)
  return (
    <div>
      <Steps current={1} > 
        <Step title="Initailzed" > </Step>
        <Step title="In progess" > </Step>
        <Step title="Finished" > </Step>
      </Steps>
        <Divider />
      <Steps current={current} 
      percent={50}
      labelPlacement="vertical" 
      onChange={(c)=> {setCurrent(c);}} > 
        <Step title="Initailzed" > </Step>
        <Step title="In progess" > </Step>
        <Step title="Finished" > </Step>
      </Steps>
      <Divider />

<Steps direction="vertical" style={{height:"500px", marginLeft:"200px"}}
current={currentstate} labelPlacement="vertical" 
onChange={(c)=> {setCurrentstate(c);}}
progressDot={true}> 
        <Step title="Initailzed" > </Step>
        <Step title="In progess" > </Step>
        <Step title="Finished" > </Step>
      </Steps>
      <div>
        This is step {currentstate}
      </div>
      <Divider/>

      <Steps current={1} progressDot={100} labelPlacement="horizontal"> 
        <Step title="Initailzed" > </Step>
        <Step title="In progess" subTitle="50 more minutes for it to be completed" > </Step>
        <Step title="Finished" description="It will initiate after Step 2." > </Step>
      </Steps>

      <Divider/>

<Steps current={1} 
direction="vertical"
labelPlacement="horizontal"> 
  <Step title="Initailzed" > </Step>
  <Step title="In progess" subTitle="50 more minutes for it to be completed" > </Step>
  <Step title="Finished" description="It will initiate after Step 2." > </Step>
</Steps>

    
<Divider/>

<Steps current={1} 
direction="vertical"
labelPlacement="horizontal"> 
  <Step title="Initailzed"> </Step>
  <Step title="In progess" status="error" subTitle="50 more minutes for it to be completed" > </Step>
  <Step title="Finished"  description="It will initiate after Step 2." > </Step>
</Steps>

    
<Divider/>

<Steps current={0} 
direction="vertical"
status="error"
labelPlacement="horizontal"> 
  <Step title="Initailzed"> </Step>
  <Step title="In progess"  subTitle="50 more minutes for it to be completed" > </Step>
  <Step title="Finished"  description="It will initiate after Step 2." > </Step>
</Steps>


    </div>
  )
}

export default StatusProgress