import React, { useEffect, useState } from 'react';
import Catagory from '../../Catagory/Catagory/Catagory';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [ categories, setCategories]= useState([]);

useEffect (() => {
    fetch ('http://localhost:5000/news-categories')
    .then ( res => res.json())
    .then(data => setCategories(data));
},[])

    return (
        <div>
            <h4>All Category:{categories.length}
            </h4>
<div>
{
    categories.map(catagory=> <p key ={catagory.id}>
        <Link to ={`/catagory/${catagory.id}`}>{catagory.name}</Link>
    </p>)
}

</div>



        </div>
    );
};

export default LeftSideNav;