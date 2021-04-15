import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import jsondata from "../data/data.json"
import Search1 from "../search"
import './styles.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    width:10+"%"
  },
}));

export default function Checkbox1(props) {
  const classes = useStyles();
  console.log(props);
  const [state, setState] = React.useState({
    fashion: false,
    food: false,    
    mobile: false,
    travel :false,
    beauty: false
  });
  const [arr,setarr]=useState([]);
  console.log(props.arr1)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { fashion, food, mobile,travel,beauty } = state;
  const error = [fashion, food, mobile,travel,beauty].filter((v) => v).length !== 4;
  useEffect(()=>{
    // const a = arr;
    const b = arr.concat(props.arr1);
    const c = b.filter(function(value,index,arr){
      return value["company-cat"] !== "Fashion";
    })
    if(state.fashion === true){
      setarr(b);
    }
    else if(state.fashion === false){
      setarr(c);
    }
  },[state.fashion])

  useEffect(()=>{
    const a = arr;
    const b = arr.concat(props.arr2);
    const c = b.filter(function(value,index,arr){
      return value["company-cat"] !== "Mobiles & Tablets";
    })
    console.log(c);
    if(state.mobile === true){
      setarr(b);
    }
    else if(state.mobile === false){
      setarr(c);
    }
  },[state.mobile])

  useEffect(()=>{
    const a = arr;
    const b = arr.concat(props.arr3);
    const c = b.filter(function(value,index,arr){
      return value["company-cat"] !== "Food & Dining";
    })
    if(state.food === true){
      setarr(b);
    }
    else if(state.food === false){
      setarr(c);
    }
  },[state.food])

  useEffect(()=>{
    const a = arr;
    const b = arr.concat(props.arr4);
    const c = b.filter(function(value,index,arr){
      return value["company-cat"] !== "Travel";
    })
    if(state.travel === true){
      setarr(b);
    }
    else if(state.travel === false){
      setarr(c);
    }
  },[state.travel])

  useEffect(()=>{
    const a = arr;
    const b = arr.concat(props.arr5);
    const c = b.filter(function(value,index,arr){
      return value["company-cat"] !== "Health & Beauty";
    })
    if(state.beauty === true){
      setarr(b);
    }
    else if(state.beauty === false){
      setarr(c);
    }
  },[state.beauty])

  useEffect(()=>{
    setarr(props.arr6);
  },[props.arr6])
  console.log(arr);
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
     
        <FormLabel component="legend">Store Categories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={fashion} onChange={handleChange} name="fashion" />}
            label="Fashion"
          />
          <FormControlLabel
            control={<Checkbox checked={food} onChange={handleChange} name="food" />}
            label="Food & Dining"
          />
          <FormControlLabel
            control={<Checkbox checked={mobile} onChange={handleChange} name="mobile" />}
            label="Mobile & Tablets"
          />
        </FormGroup>
        <FormControlLabel
            control={<Checkbox checked={travel} onChange={handleChange} name="travel" />}
            label="Travel"
          />
          <FormControlLabel
            control={<Checkbox checked={beauty} onChange={handleChange} name="beauty" />}
            label="Beauty & Health"
          />
      </FormControl>
      <div className="class2">
        {arr.map((value,index)=> <div className="class1"><a href={value["company-site"]}><img src={value["company-logo"]}></img><p>{value.company}</p></a></div>)}
      </div>
      </div>
  );
}