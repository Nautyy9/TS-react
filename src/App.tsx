import ArrayProps from "./Props/ArrayProps"
import FixedProps from "./Props/FixedProps"
import Home from "./Props/Home"
import NormalProps from "./Props/NormalProps"
import ObjectProps from "./Props/ObjectProps"
import ReactChild from "./Props/ReactChild"
import SingleProps from "./Props/SingleProps"
import StyleProps from "./Props/StyleProps"
import Loging from "./useStateTs/Loging"
import Reducers from "./useReducerTs/Reducers"
import ThemeContext from "./useContextTs/ThemeContext"
import UserContext from "./useContextTs/UserContext"
import UserLogin from "./useContextTs/UserLogin"
import MutableRef from "./useRef/MutableRef"
import DomRef from "./useRef/DomRef"
import ComponentProp from "./Props/ComponentProp"
import { Profile } from "./Props/Profile"
import GenericType from "./GenericType/GenericType"
import Toast from "./CustomProperties/Toast"
import Omit from "./CustomProperties/Omit"
import UseComponentsSamDir from "./Props/UseComponentsFromSameDir"
import Example from "./polymorphic/Example"

function App() {

  const names ={
    firstName: 'Nitin',
    lastName: 'Nautiyal'
  }

  const arrNames =[
    {
      id: 1,
      firstName: 'iron man',
      lastName: 'tony stark'
    },
    {id: 2,
      firstName: 'captain america',
      lastName: 'steve rogers',
    },
    {id: 3,
      firstName: 'black widow',
      lastName: 'natasha romanoff'
    }
  ]

  return (
    <div>

      <Example as='h1'>Nitin Nautiyal</Example> 
      <Example as='p' >Nitin Nautiyal</Example>
    {/* 
    <UseComponentsSamDir> Nitin Nautiyal</UseComponentsSamDir> 
    */}

      {/* <Omit variant="primary" onClick={(value) => console.log(value)} >
        <div className="">
         Value we have
        </div>
         </Omit> */}

    {/* Custom  Properties
    <Toast position="center"/>
    */}

    {/* ----> Generic Type for all
      <GenericType items={["Nitin","Nautiyal"]}
      onClick={(item) => console.log(item)}/> 
      <GenericType items={arrNames}
      onClick={(item) => console.log(item)}/> 
      <GenericType items={[0,1,2,3,4,5]}
      onClick={(item) => console.log(item)}/> */}
      
      {/* --------> UseRef()
       <DomRef/>
      <MutableRef/> */}

     {/* UseContext ----->
      <Loging name="Nitin" email="nitin.nautiyal@djtcorp.in"/>
      <ThemeContext/>
      <UserContext>
      <UserLogin/>
      </UserContext> 
    */}

    {/* useReducer -------> 
    <Reducers/>
  */}

     {/* props -------> 
     <SingleProps 
     handleClick ={ (event, id) => {
       console.log('button clicked', event,id);
      }}
      handleChange ={ (event) => {
        console.log('button clicked', event);
      }}/>
      added age as optional field  in Normal props
      {/* <NormalProps firstName='Nitin' lastName='Nautiyal' developer={true}/>
      <ArrayProps name={arrNames}/>
      <ObjectProps names={names}/>
      <FixedProps name="accept"/>
      <Home>In Home: My text was this before </Home>
      below we are sending the another comment value to be render inside the home page inside of its own value , since we have react component inside another react component therefore we've used children: React.ReactNode 
      {/* <ReactChild>
      <Home >In Home: Now my text is this</Home> 
      </ReactChild>
      <StyleProps style={{backgroundColor: 'pink', margin: '10px', padding:'1px' }}/> 
      
      <ComponentProp isLoggedIn={false} Component={Profile}></ComponentProp>
    */}

    </div>
  )
}

export default App

