// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Checkbox1 from "./components/category";
 import jsondata from "./components/data/data.json"
// import {useState} from 'react'
function App() {
  const [sas,setsas]=useState();
  const [selected,setselected]=useState([]);
  let Array1=[],Array2=[],Array3=[],Array4=[],Array5=[],Array6=[];
  let j=0,k=0,l=0,m=0,n=0;
  for(let i=0; i<jsondata.length;i++){
    if(jsondata[i]['company-cat']==="Fashion"){
        Array1[i]=jsondata[i];
    }
    else if(jsondata[i]['company-cat'] === "Mobiles & Tablets" )
    {
        Array2[j] = jsondata[i];
        j++;
    }
    else if(jsondata[i]['company-cat'] === "Food & Dining"){ 
        Array3[k]= jsondata[i];
        k++;
    }
    else if(jsondata[i]['company-cat'] ==="Travel"){
      Array4[l]=jsondata[i];
      l++;
    }
    else{
      Array5[m]=jsondata[i];
      m++;
    }
  }
  console.log(sas);
  function getvalue(e){
    console.log(e.target.value);
    setsas(e.target.value);
    for(let i=0; i<jsondata.length;i++){
      if(e.target.value === "All"){
        Array6[n]=jsondata[i];
        n++;
      }
      else if(jsondata[i].company.charAt(0) === e.target.value){
        Array6[n]=jsondata[i];
        n++;
      }
    }
    if(e.target.value === "Clear"){
      Array6=[];
    }
    setselected(Array6);
  }
  console.log(selected);
  return (
    <div className="App">
      <h1>Jaspreet Singh</h1>
      <p>Use one filter at a time either category or keyboard</p>
      <p>Use Clr to clear the filter of keyboard </p>
      <div class="keyboard">
      <button type="submit" onClick={(event)=>getvalue(event)} value="All">All</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="A">A</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="B">B</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="C">C</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="D">D</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="E">E</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="F">F</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="G">G</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="H">H</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="I">I</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="J">J</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="K">K</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="L">L</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="M">M</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="N">N</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="O">O</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="P">P</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="Q">Q</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="R">R</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="S">S</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="T">T</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="U">U</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="V">V</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="W">W</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="X">X</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="Y">Y</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="Z">Z</button>
      <button type="submit" onClick={(event)=>getvalue(event)} value="Clear">Clr</button>

      </div>
      <Checkbox1 arr1={Array1} arr2={Array2} arr3={Array3} arr4={Array4} arr5={Array5} arr6={selected}/>
      {/* <div className="class3">
        {selected.map((value,index)=> <div className="class4"><a href={value["company-site"]}><img src={value["company-logo"]}></img><p>{value.company}</p></a></div>)}
      </div> */}
    </div>
  );
}

export default App;
