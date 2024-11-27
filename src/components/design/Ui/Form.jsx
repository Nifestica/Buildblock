import React from 'react';
import {Button, Form, Input, message} from "antd";
const {Item} = Form
function Forminput() {
  return (
    <div>
      <Form onFinish={(values)=>{
        console.log({values});
      }} 
      onFinishFailed={
        (failedvales)=>{
            console.log({failedvales})
        }
      }
      >
        <Item name="Playername"
        label="Player name" >
                <Input
                name="name" placeholder="Username" required rules={[{message:"please enter a valid Username"}]}
                />
        </Item>

        <Form.Item
         name="email" label="Email Address"
         required rules={[{required:true,
          message:"Please enter a valid email address"}]}>
            <Input />
        </Form.Item>
        <Button
        htmlType="submit" type="primary"
        > Submit </Button>
      </Form>
    </div>
  )
}

export default Forminput
