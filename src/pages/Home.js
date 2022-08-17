import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../style/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="Container">
            <h1>NAT'S PIZZARIA</h1>
            <p> Food for all</p>
            <Link to="/menu">
                <button>
                    ORDER HERE
                </button>
            </Link>
        </div>
    </div>
  );
}

export default Home
