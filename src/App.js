import './App.css';
import React, { useEffect, useState }  from 'react'
import Semantic from './Semantic';


  const App = () => {

    // const [addrtype, setAddrtype] = useState()
    // console.log(addrtype)
    // const array = ["Work", "Home", "school"]
    // // const Add = addrtype.map(Add => Add)
    // const handleAddrTypeChange = (e) => setAddrtype(e.target.value)
    // return (
    //   < select
    //     value={addrtype}
    //     onChange={handleAddrTypeChange}
    //     className="browser-default custom-select" >
    //     {
    //       array.map((address) => <option key={array} >{address}</option>)
    //     }
    //   </select >)

  //    const [valuef ,setvalue] = useState('');
  //    const [valueb ,setbvalue] = useState('');
  //    const [valuecurrent ,setvaluecurrent] = useState([]);

  //   const countryOptions = [
  //     { key: 's', value: 's', flag: 'af', text: 'Select One' },
  //     { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  //     { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  //     { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  //     { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  //     { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  //     { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  //     { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  //     { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  //     { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  //     { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  //     { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  //     { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  //     { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  //     { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  //     { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  //     { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  //     { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  //     { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  //     { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  //     { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  //     { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  //     { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  //     { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  //   ]  
    
    
  //   // const country = [
  //   //   { key: 's', value: 's', flag: 'af', text: 'Select One' },
  //   //   { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  //   //   { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  //   //   { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  //   //   { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  //   //   { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  //   //   { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  //   //   { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  //   //   { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  //   //   { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  //   //   { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  //   // ]  
    
    
    

   
    
  //   const handlechange =(e)=>{
  //          setvalue(e.target.value)
  //   }
  //    console.log(valuef) 


  //    const bhandlechange=(e)=>{
  //            setbvalue(e.target.value)
  //    }
  //    console.log(valueb)

  //       if(valuef === 'Albania' ){
          
  //         setvaluecurrent(['jdfkld','dfdf','dfdffdfdf4','3ef3r']) 
          
  //         setvalue('')
  //         setbvalue('')

  //        } else if(valuef === 'Afghanistan' ){
  //         setvaluecurrent(['jdfkld3','dfdf3','dfdffdfdf43','3ef3r3']) 
          
  //         setvalue('') 
  //         setbvalue('')
  //        }


  //  return( <div>
  //          <select
  //           value='select one'
  //            onChange={handlechange}
  //          >
  //               { countryOptions.map((item)=>(
  //                 <option key={item.key}>
  //                   {item.text}
  //                 </option>
  //               ))}
  //          </select>

  //          <select
  //          value={valueb}
  //          onChange={bhandlechange}
  //          >
  //               {/* { Options.map((item)=>{
  //                  if(valuef === 'Aland Islands'){
                        
  //                   return ( <option key={item.key}>  
  //                            {item.text}    
  //                   </option> )
  //                  }
  //               })} */}
  //               {
  //                 valuecurrent.map((item,i)=>(
  //                   <option key={i}>
  //                     {item}
  //                   </option>
  //                 ))
  //               }
                

  //          </select>

  //         <Semantic/>
  //   </div>)


  return (
          <div>
            <Semantic/>
            </div>
  )
  
}


export default App;