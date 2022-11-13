import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p> Posted 2 day ago</p>
          </div>
          <div className="edit">
            <Link> <img src={Edit} alt="" /> </Link>
            <Link> <img src={Delete} alt="" /> </Link>
          </div>
        </div>
        <h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur possimus</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur debitis voluptatibus delectus iure rerum, sed earum totam nobis provident quas. Adipisci fuga maxime corporis nam natus corrupti fugiat praesentium eius repellat earum, asperiores, deleniti, error dolore qui nemo voluptatibus eos!
        </p>
       
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis ullam dolore cupiditate ut! Iure perferendis, eligendi esse corporis veniam placeat accusantium voluptate, officia fuga commodi in ad, quibusdam asperiores! Quia necessitatibus aperiam expedita, sunt corrupti, voluptatum cumque, nemo provident repellat explicabo ullam reprehenderit? Esse doloribus tempora tenetur illo cupiditate libero necessitatibus vitae ab iure voluptatibus ipsum quasi nulla, in molestias quidem totam pariatur ullam consequuntur odit accusantium adipisci excepturi sequi qui. Quasi, magni nulla sunt consequatur quisquam repellat laudantium.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single