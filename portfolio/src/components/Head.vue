<template>
 
      <div class="bg-image d-flex flex-column justify-content-center img-fluid">
        <div class="full-name">
          <h1 data-aos="fade-down">Abdessamad Souilem</h1>
          
          <p data-aos="fade-up">Full-Stack Developer</p>
        </div>
      </div>
        
        
      
      
  
</template>

<script>
export default {
name:"Head",
}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
      

.bg-image{
  width: 100%;
  height: 100vh;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  z-index: 0;
}

.full-name{
  font-family: 'Montserrat', sans-serif;
  z-index: 1;
  
}
h1{
   color: white;
    font-size:50px;
}
p{
   color: white;
    font-size:30px;
}
h1:after {
      content: "";
      width: 55%;
      display: block;
      margin: 20px auto;
      border-bottom: 2px solid white;
}
@media (max-width: 600px) {
.bg-image{
  background-image: url("../assets/bag.jpg");
}
}
@media (max-width: 500px) {
  
    h1 {
      font-size: 25px;
      
    }
    p{
   
    font-size:20px;
}
    
  
}
</style>>

