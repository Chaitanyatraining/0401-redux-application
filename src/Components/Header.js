import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
  const naviate = useNavigate();
  return ( 
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link to="products" class="nav-link" href="#">products</Link>
        </li>
        <li class="nav-item">
          <Link to="cart" class="nav-link" href="#">cart</Link>
        </li>
        <li class="nav-item">
          <Link to="logout" class="nav-link" href="#">logOut</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header