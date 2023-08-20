import React,{useRef} from 'react'
import './search-bar.css'
import { Col ,Form ,FormGroup} from "reactstrap";
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate()
  const searchHandler = async () =>{
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if(location==='' || distance==='' || maxGroupSize==='')
    {
      return alert("All field are required");
    }
    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}
  &maxGroupSize=${maxGroupSize}`);
  if(!res.ok) alert('Somenthing went wrong')
  const result = await res.json();
navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
,{state: result.data});
  };
  return (
    <Col lg="12"> 
    <div className="search__bar">
    <Form className='d-flex align-items-center gap-4'>
    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
    <span>
    <div>
    <i className='ri-map-pin-line'></i>
    </div></span>
    <div>
    <h6>Locations</h6>
    <input type='text' placeholder='where are you going' ref={locationRef}/>
    </div>
    </FormGroup>
    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
    <span>
    <div>
    <i className='ri-map-pin-line'></i>
    </div></span>
    <div>
    <h6>Distance</h6>
    <input type='number' placeholder='distance in KM' ref={distanceRef}/>
    </div>
    </FormGroup>
    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
    <span>
    <div>
    <i className='ri-map-pin-line'></i>
    </div></span>
    <div>
    <h6>Max people</h6>
    <input type='number' placeholder='0' ref={maxGroupSizeRef}/>
    </div>
    </FormGroup>
    <span className='search__icon' type="submit" onClick={searchHandler}>
    <i class="ri-search-line"></i>
    </span>
    </Form>
      
    </div>
    
    </Col>
    );  
};

export default SearchBar