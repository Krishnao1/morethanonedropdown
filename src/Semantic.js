import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react'

const Semantic =()=>{
     
    const [value , setValue] = useState('');
    const [valueb , setValueb] = useState('');
    const [currentValue , setCurrentValue] = useState([]);
    const [country ,setCountry] = useState([
        { key: 'af', value: 'Afghanistan', flag: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
        { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
        { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
      ])


      console.log(value)
      console.log(valueb)
      
     const getvalue = (e,data) => {
            setValue( data.value)
     }

     const bgetvalue = (e,data) => {
            setValueb( data.value)
     }

      
     if(value === 'Afghanistan' ){
         setCurrentValue([
         { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
         { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
         { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
         { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
         { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
         { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
         { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
         { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
         { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
         { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
         { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
       ])         
       setValue('')
     } else if(value === 'ax' ){

        setCurrentValue([
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
          ]) 
        setValue('')
     }
     

    return (
        <div>
      <Dropdown
        onChange={getvalue}
        placeholder='Select Country'
        fluid
        search
        selection
        options={country}
      />
      <Dropdown
        onChange={bgetvalue}
        placeholder='Select Country'
        fluid
        search
        selection
        options={currentValue}
      />
       
      </div>
    )
    
   
}


export default Semantic;