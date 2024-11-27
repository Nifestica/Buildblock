
import './App.css';
import { useEffect, useState } from "react";
import {PoweroffOutlined, UserOutlined, CaretUpOutlined, PlayCircleTwoTone, SmileFilled, CheckSquareTwoTone, CloudFilled,} from "@ant-design/icons";
import { Input, Form, Button, Select,Table, message,
   DatePicker, TimePicker, Spin, Progress, Typography, 
   Space,
   Divider, Avatar,
   Upload} from "antd";

import styled from "styled-components";
import { LineGraph } from './components/Charts/Line';
import { BarChart} from './components/Charts/Bar';
import { PieChart } from './components/Charts/Pie';
import StatusProgress from './components/design/Ui/StatusProgress';
import Forminput from './components/design/Ui/Form';





const {Title, Text, Paragraph, Link} = Typography;
 
function App() {

const [text, setText] = useState("code with Nifesimi")

  const Fruits = ['banana', 'Mango', 'ogede', 'watermelon']

  const [loading, setLoading] = useState(false)

 const onButtonClicked = (e) =>{
  console.log("button clicked")
  setLoading(true)
  setTimeout(() => {
  setLoading(false)
  }, 2000);
}

const onFinish=(e)=> {
console.log(e)
setTimeout(() => {
  message.success ('Login Sucess')
  // or message.error('Login failed!')
  // or message.warning
}, 1000);

}
 //TD
const  data = [
  {
    name: 'titi',
    age:10,
    address:"ifelodun Avenue",
    key: 'calm'
  },
  {
    name: 'Faith',
    age:22,
    address:"ifelodun Avenue",
    key: "just a lady"
  },
  {
    name: 'Nifesimi',
    age:24,
    address:"ifelodun Avenue",
    key: "nifesimi"
  }
]

//Th

const Columns =[
  {
    title:"Name",
    dataIndex:"name",
    key:"key",
    render: name =>{
      return <a href='https://youtube.com'> {name} </a>
    }
  },

  {
    title:"Age",
    dataIndex:"age",
    key:"key",
    sorter:(a,b) => a.age -b.age
    
  },

  {
    title:"Address",
    dataIndex:"address",
    key:"key",
    sorter:(a,b) => a.address.length -b.address.length
  },
  {
    title:"Graduated",
    key:"key",
    render: payload =>{
      return  <p> {payload.age <= 10 ? <PlayCircleTwoTone/>  :"false"}</p>
    }, 
    
  },
]
const [Spiner, setSpiner] = useState(false)

const [dataSource, setDataSource] = useState([])

const [effect, seteffect] =useState(false)
const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)

useEffect(()=>{
  seteffect(true)
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(data=>{
 setDataSource(data)
}).catch(err=>{
  console.log(err)
}).finally(()=>{
  seteffect(false)
})
}, [])

const Coloumns =[{
key:"1",
title:"ID",
dataIndex:"id",
sorter:(record1, record2)=>{
  return( record1.id > record2.id)
    },

},
{
  key:"2",
  title:" user ID",
  dataIndex:"userId",
  sorter:(record1, record2)=>{
    return( record1.userId > record2.userId)
      },

  },
  {
    key:"3",
    title:"Status",
    dataIndex:"completed",
    sorter:(record1, record2)=>{
      return( record1.completed - record2.completed)
        },
    render:(completed)=>{
      return <p> {completed ? "Completed": "in progress"} </p>
    }, 
    
    filters:[
      {text:"completed", value:true},
      {text:"In Progress", value: false}
    ],
    onFilter:(value, record)=>{
     return record.completed=== value
    }

    },
]
const Conn = styled.div`
grid-column: 1 / 2 ;`


 const Gird= styled.div`
font-size: "40px";
color:'white';
width: 80%;
height: 300px;
background: #fff;
display: grid;
justify-content: left;
/* position: relative;  */
grid-template-columns: 100px 1fr 2fr;
grid-template-rows: 75px 75px;
grid-row-gap: 45px;
grid-column-gap: 75px;
/* grid-gap is a short form of grid rows and grid columns, 
if its one value then it will be shared else if 2, the first value is for Rows
while the Second is for Columns */

 `;

const FlexContainer = styled.div`
box-sizing: border-box; 
padding: 0;
margin: 0;
display: flex;
font-family: Arial, Helvetica, sans-serif;
background-color: #fff;
border: 10px solid green;
justify-content: center;
`;
const Items= styled.div`
box-sizing: border-box;
width: 600px;
height: 600px;
background-color: #254de4;
margin: 10px; 
color: #fff;


`;

 return (
    <div >
      <Space size={12} direction="vertical"> 
      <Avatar style={{backgroundColor:'green', color:'white'}} > Active </Avatar> 
      <Avatar shape="square" style={{backgroundColor:'red', color:'white'}}> Ready </Avatar>
      <Avatar icon={ <UserOutlined /> } />
      <Avatar.Group maxCount={2} maxPopoverTrigger="click" >

        <Avatar style={{backgroundColor:'green', color:'white'}} > Active </Avatar> 
        <Avatar shape="square"  style={{backgroundColor:'red', color:'white'}} > Ready </Avatar>
        <Avatar icon={ <UserOutlined /> } />
        <Avatar style={{backgroundColor:'green', color:'white'}} > Active </Avatar> 
      </Avatar.Group>
      </Space>


      <Upload.Dragger
       multiple 
       listType="picture"
       showUploadList={{showRemoveIcon: true}}
       accept=".png, .jpeg"
       >
        Drag Files here Or Click <br />
      <Button type="primary"   action={"https://localhost:3000"}> Upload <CloudFilled/> </Button>
      </Upload.Dragger>
 <LineGraph />
  <Divider dashed  style={{borderColor:"lightblue"}} />
  <Divider style={{borderColor:"red"}} >Here </Divider>
  <Divider orientation='left' style={{color:"green", borderColor:"purple"}}> Text </Divider>
  <Divider orientation='right' style={{color:"green", borderColor:"purple"}} orientationMargin={3}> Nifesimi </Divider>
  <Divider orientation='right' style={{color:"green", borderColor:"purple"}}  orientationMargin={150}> Nifesimi </Divider>
<Divider type='vertical' style={{color:"green", borderColor:"red"}}> Nifesimi </Divider>
  < BarChart />
  <div > 
   <PieChart /> </div>
<section>
{/* Flex and Grid section */}

{/* Gird Section */}
<Conn>
<Gird>
 <div  style={{backgroundColor:'lightblue', gridRow: '1 /3'}}>1 </div>
 <div style={{backgroundColor:'lightpink', color:'white'}}> 2</div>
 <div style={{backgroundColor:'paleturquoise',}}> 3 </div>
 <div style={{backgroundColor:'palegreen', }}>4 </div>
 <div style={{backgroundColor:'red', gridColumn:'2 /4' }}>5 </div>
 </Gird>
 </Conn>

</section>

{/* Flex Section */}

    <section>
     <FlexContainer>
        
          <Items> Item 1  </Items>
           <Items>  Item 2 </Items>
           <Items>Item 3   </Items>
 
        </FlexContainer> 


    </section>


     <Button type="primary"
     icon= {<PoweroffOutlined />}
     style={{backgroundColor:"blue"}}
     loading={loading} onClick={onButtonClicked}> Practice Environments </Button> 
      
     <Input.Search placeholder="enter"
     maxLength={7}
     prefix={ <UserOutlined /> }
     suffix={<CaretUpOutlined />  }
     allowClear
     
     />
     <Input className="inputForm" />
    <p> Which of this is your Favorite Fruit 
     <Select placeholder="Select Fruit"
     > 
      {Fruits.map((fruit,index)=>{
        return <Select.Option key={index} value={fruit}> {fruit} </Select.Option>
})}
        </Select> </p>

        <p> What are your Favorite Fruits 
     <Select mode="multiple"
      maxTagCount={2} 
      filterOption
      allowClear
      placeholder="Select Fruits" style={{width:"250px",  flexWrap:"wrap"}}> 
      {Fruits.map((fruit,index)=>{
        return <Select.Option key={index} value={fruit}> {fruit} </Select.Option>
})}
        </Select> </p>

<Form onFinish={onFinish}> 
  <Form.Item label="User name" name="usernamme" >
  <Input required placeholder='username'>
  </Input> 
  </Form.Item>
  <text>
    Date <DatePicker
    //picker='year'
    style={{width:"20rem"}} />
  </text>
  <DatePicker.QuarterPicker />
  <DatePicker.RangePicker  picker='month' />
  <TimePicker  />
  <Form.Item label="Pass word" name="password" >
  <Input.Password  required minLength={8} placeholder='password'>
  
  </Input.Password>
  </Form.Item>

    <Form.Item>
     <Button block type='primary' htmlType='submit' label="Sign In">
      Sign In
      </Button> 
    </Form.Item>
  
</Form>

<div>
  <Spin spinning={Spiner}>
  </Spin>
  <Button onClick={()=>{setSpiner (preValue=>!preValue)}}> Toggle Spining </Button>
</div>
<>
<Progress percent={33} status='active'/>
<Progress percent={5} status='success' type='circle'  />
<Progress  percent={89} status='exception' type="circle"/>
<Progress percent={50} type='circle' strokeColor='red' status='active' />
<Progress percent={50} type='dashboard' status='active' strokeWidth={10}  />
<Progress percent={60} 
percentPosition={{
    align:'start',
    type:"inner",
  }}/>

  <Progress type='line' percent={50} steps={4} status='success' />

<Title level={4}>
  Table Title can be simplified with ant design
</Title>
<Paragraph underline>
  this is a Paragraph
</Paragraph>
<Text strong >
  text field is also amazing 
</Text>
<Text mark >
  text field is also amazing 
</Text>
<Text disabled >
  text field is also amazing 
</Text>
<Text type='success' >
  text field is also amazing 
</Text>
<Text type='secondary' >
  text field is also amazing 
</Text>
<Text type='primary' >
  text field is also amazing 
</Text>

<Text type='danger'
 editable={{
  onChange:(value)=> {
    setText(value);
 },
 triggerType:"icon|text",
 tooltip:"Click to Editttt",
 icon: <SmileFilled />,
 enterIcon: <CheckSquareTwoTone />
 }} >
  {text} 
</Text>

<Text type='danger'
 editable={{
  onChange:(value)=> {
    setText(value);
 },
 triggerType:"icon|text",
 tooltip:"Click to Editttt",
 }} >
  {text} 
</Text>
<br/>
<Link>
this is me using Ant design Link
</Link>

<Paragraph copyable={{
  // text:" Different text copied",
  tooltips: ["click to copy", "Done"],
}}>
The standard chunk of Lorem Ipsum used since the 1500s is 
reproduced below for those interested. Sections 1.10.32 and 
1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
 also reproduced in their exact original form, accompanied by
 English versions from the 1914 translation by H. Rackham.
</Paragraph>
<Paragraph  

style={{
  minWidth:"500px",

  flexGrow:"1",
}}
ellipsis={{
  expandable:true,
  rows: 3,
  symbol:"Show more",
  suffix:"Customized Ending",
   }}>
The standard chunk of Lorem Ipsum used since the 1500s is 
reproduced below for those interested. Sections 1.10.32 and 
1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are 
also reproduced in their exact original form, accompanied by 
English versions from the 1914 translation by H. Rackham.
</Paragraph>

<Space size='large' direction='horizontal'  style={{display:"flex", flexWrap:"wrap",columnGap:"600px", rowGap:"10px" }}> 
   <Button  type='primary'>
    Column 1
   </Button>

   <Button type='primary'>
    Column 2
   </Button>
   <Button type='primary'>
    Column 3
   </Button>
</Space>

   <>
    Lorem Ipsum 
   </>
</>
  <Table 
    dataSource = {data}
    columns ={Columns}
  
    >

  </Table>

<section>
  <h1> Section div </h1>


<Table
loading={effect}
columns={Coloumns}
dataSource={dataSource}
pagination={{
  pageSize:pageSize,
  total:10,
  current:page,   // meaning the current landing page in the list
  onChange: (page,pageSize)=> {
    setPage (page);
    setPageSize(pageSize)
  }
}}
style={{maxWidth: 1240, maxHeight:620}}
>

</Table>

</section>

<StatusProgress />
<Forminput />
    </div>
  );
}

export default App;
