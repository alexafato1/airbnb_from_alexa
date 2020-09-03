import React from 'react';
import './Home.css'
import Banner from './Banner.js';
import Card from './Card.js'

function Home() {
    return (
        <div className='home'>
            <h1>Home component</h1>
            <Banner/>
            <div className='home_section'>
              <Card
                src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=240'
                title="Entire homes"
                description="Comfortable private places, whit room for friends or family."
              />

              <Card
                src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=240'
                title="Entire homes"
                description="Comfortable private places, whit room for friends or family."
              />

              <Card
                src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=240'
                title="Entire homes"
                description="Comfortable private places, whit room for friends or family."
              />
              
            </div>
            <div className='home_section'>
              <Card/>
              <Card/>
              <Card/>
            </div>
        </div>
    )
}

export default Home
