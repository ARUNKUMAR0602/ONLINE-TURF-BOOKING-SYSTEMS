import './HomePage.css'
export default function Home(){
    return(
        <div class="main">
        <div class="navbar">
        <div class="icon">
        {/* <h2 class="logo"></h2> */}
        <br/>
        </div>
        <div class="menu">
        <ul>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      <div class="search">
        |<input class="srch" type="search" name="" placeholder="Type To text"/> <a href="#"> <button class="btn">Search</button> </a>
        </div>
  </div>
  <div class="content">
    <h1>Online Turf Booking System</h1>
    <p class="par"><br/>The term turf also refers to the rolls or slabs that can be<br/>laid down to form a lawn or used to finish parks<br/>
       landscaping and sports fields.<br/> Turf is usually functional rather than ornamental.<br/>As an example, Mondo Grass, a decorative groundcover<br/> often used in rockeries and garden beds, is not turf.</p>
  <br/>
       <button class="cn"><a href="#">JOIN US</a></button>      
        <div class="form">
          <h2>Login Here</h2>
          <input type="email" name="email" placeholder="Enter Email Here"/>
          <input type="password" name="password"placeholder="Enter Password Here"/>
          <button class="btnn"><a href="#">Login</a></button>
          <p class="link">Don't have an account<br/>
          <a href="#">Sign up here</a></p>
          </div>
    </div>

</div> 
);
}