<template>
  <div class="First">
      <br>
      <div class="id" data-aos="fade-down">
      <h1>EXPERIENCE</h1>
      <p>PROFESSIONAL AND ACADEMIC</p>
      </div>
      
      <br>
      
  <div class="container-fluid">
  <div class="timeline">
    <ul>
      <li class="reveal">
        <div class="timeline-content ">
          <h3 class="date">05th January, 2021</h3>
          <h1>Starting studying at Youcode</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
        </div>
      </li>
      <li class="reveal">
        <div class="timeline-content ">
          <h3 class="date">8th September, 2020</h3>
          <h1>Getting License in Law</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
        </div>
      </li>
      <li  class="reveal">
        <div  class="timeline-content ">
          <h3 class="date">18th July, 2019</h3>
          <h1>Getting university diploma</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
        </div>
      </li>
      <li class="reveal">
        <div class="timeline-content ">
          <h3 class="date">20th July, 2017</h3>
          <h1>Graduated from high school</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
        </div>
      </li>
    </ul>
  </div>
  </div>
  <br>
  <br>
  </div>
</template>

<script>

export default {

}
window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
</script>

<style>
.First{
    background-color: #424242;
    color: white;
}
.id:after {
      content: "";
      width: 170px;
      display: block;
      margin: 20px auto;
      border-bottom: 2px solid white;
}
.container-fluid {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
  
}
.timeline ul li {
  padding: 20px;
  background-color: #1e1f22;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: all .2s  ease-in-out;
}

.reveal.active{
  transform: translateY(0px);
  opacity: 1;
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -13px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -39px;
  }
  .timeline-content .date {
    position: absolute;
    top: -30px;
  }
  .timeline ul li:hover::before {
    background-color: black;
  }
}
@media (max-width: 500px) {
  
    h1 {
      font-size: 16px;
    }
    .timeline-content h1{
      font-size: 16px;
    }
    p{
    font-size:13px;
}
.timeline-content p {
  font-size:13px;
}

}
@media (max-width: 768px) {
  .timeline ul {
  padding: 0px  !important;
}
}

</style>