import React, { useState } from 'react'
import {IState as Props} from '../App';

interface IProps {
    people:Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>> 
}
const AddToList:React.FC<IProps> = ({people,setPeople}) => {
    const [input, setInput] = useState({
        name:"",
        age:"",
        image:"",
        description:""
    })
 const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
    setInput({...input,
    [e.target.name]:e.target.value
    })

 }
 const handleClick = ():void=>{
     if (!input.name|| !input.age || !input.image) {
         return
         
     }
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age) ,
                url:input.image,
                description:input.description
            }
        ])
        setInput({
         name:"",
        age:"",
        image:"",
        description:""
        })
 }
  return (
    <>
    <div className='AddToList'>AddToList
    <input
    type="text"
    placeholder='Name'
    className='AddToList-input'
    value={input.name}
    onChange={handleChange}
    name='name'
    />
      <input
    type="number"
    placeholder='Age'
    className='AddToList-input'
    value={input.age}
    onChange={handleChange}
    name='age'
    />
      <input
    type="text"
    placeholder='Image'
    className='AddToList-input'
    value={input.image}
    onChange={handleChange}
    name='image'
    />
      <textarea
    placeholder='Description'
    className='AddToList-input'
    name='description'
    value={input.description}
    onChange={handleChange}
    />
    <button className='AddToList-btn' 
    onClick={handleClick}
    >Add To List</button>
    </div>
    </>
  )
}

export default AddToList