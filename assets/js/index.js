const animateOnVisibilityTrue = (element) =>{    
    
    const nodeList = document.querySelectorAll(element);
    
    nodeList.forEach(node=>{
        node.classList.toggle(`animate__animated`);
        node.classList.toggle(`animate__pulse`);
        node.classList.toggle(`animate__slow`);
    });
};



window.addEventListener('visibilitychange', (e)=> {
    if(e){
        console.log(e)
    }
   
    animateOnVisibilityTrue('.animate-on-visibility')    
});

////////////////////////////////////////

const callback =(entries)=>{
    entries.forEach(entry => {
        entry.target.classList.toggle("animate__animated");
        entry.target.classList.toggle("animate__pulse");
        entry.target.classList.toggle("animate__slow");
      });
}
  
const targets = document.querySelectorAll(".zoom-on-scroll");

const observer = new IntersectionObserver(callback);

  
targets.forEach(function(target) {
    observer.observe(target);
});