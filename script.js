class ChristmasLight {

  constructor() {
    //CALL YOUR DOM OBJECTS HERE
    this.ballon = document.querySelectorAll('.ballon');
    this.btns = document.querySelector('.btns');
    this.bgColors = document.querySelector('.accessColor');
    this.row = document.querySelector('.row');
    this.animateGrp1 = document.querySelector('.toneOne');
    this.animateGrp2 = document.querySelector('.toneTwo');
    this.animateGrp3 = document.querySelector('.toneThree');
  }

  run(){
    //LISTEN TO EVENTS HERE
    this.btns.addEventListener('click',this.updateLights);
    this.bgColors.addEventListener('click',this.colorChange);

    this.animateGrp1.addEventListener('change',this.updateAnimation1);
    this.animateGrp2.addEventListener('change',this.updateAnimation2);
    this.animateGrp3.addEventListener('change',this.updateAnimation3);
  }

  updateLights = (e) => {
    // console.log(e.target.classList.contains('start'));
    this.startLights(e);
    this.stopLights(e);
    if(e.target.classList.contains('tempo')){
      this.ballon.forEach(ballon => {
        // ballon.classList.add('add-glow');
      });
    }

  }

  startLights = (e) => {
    if(e.target.classList.contains('start')){
      this.ballon.forEach(ballon => {
        ballon.classList.add('add-glow');
      });
    }
  }

  stopLights = (e) => {
    if(e.target.classList.contains('stop')){
      this.ballon.forEach(ballon => {
        ballon.classList.remove('add-glow');
        ballon.removeAttribute('style');
      });
    }
  }

  sparkGlow(){
    this.ballon.forEach(ballon => {
      ballon.classList.add('add-glow');
    });
  }

  updateAnimation1 = (e) => {
    // console.log(e.target.value);

    this.sparkGlow();

    if (e.target.className = 'toneOne') {
      this.updateRightGrp(e.target,'one');
      console.log('First Range input');
    }
  }

  updateAnimation2 = (e) => {
    console.log(e.target.value);

    this.sparkGlow();

    if (e.target.className = 'toneTwo') {
      console.log('Second Range input');
      this.updateRightGrp(e.target,'two');
    }
  }

  updateAnimation3 = (e) => {
    console.log(e.target.value);

    this.sparkGlow();

    if(e.target.className = 'toneThree') {
      console.log('Third Range input');
      this.updateRightGrp(e.target,'three');
    }
  }

  updateRightGrp = (target,searchStr) => {
    //GENERATE A RANDOM VALUE FROM 0 TO ONE;
    let left = Number(Math.random().toFixed(2));
    let top = Number(Math.random().toFixed(2));
    let right = Number(Math.random().toFixed(2));
    let bottom = Number(Math.random().toFixed(2));
    console.log(searchStr);

    Array.from(this.row.children).forEach(node => {
    if(node.classList.contains(searchStr)) {
      node.style.animationTimingFunction = `cubic-bezier(${left},${top},${right},${bottom})`;
      node.style.animationDelay = `${Number(target.value)/10}s`
      }
    });
  }

  colorChange = (e) => {
    // console.log(e.target);
    this.changeFirst(e);
    this.changeSecond(e);
    this.changeThird(e);
  }

  changeFirst = (e) => {
    if(e.target.classList.contains('colorOne')){
      e.target.addEventListener('change', (e) => {

        Array.from(this.row.children).forEach(node => {
          if(node.classList.contains('one')) {
          node.style.backgroundColor = `${e.target.value}`
          }
        });

      }); //Listen for event
    }

  }

  changeSecond = (e) => {
    if(e.target.classList.contains('colorTwo')){
      e.target.addEventListener('change', (e) => {

        Array.from(this.row.children).forEach(node => {
          if(node.classList.contains('two')) {
          node.style.backgroundColor = `${e.target.value}`
          }
        });

      }); //Listen for event
    }

  }

  changeThird = (e) => {
    if(e.target.classList.contains('colorThree')){
      e.target.addEventListener('change', (e) => {

        Array.from(this.row.children).forEach(node => {
          if(node.classList.contains('three')) {
          node.style.backgroundColor = `${e.target.value}`
          }
        });

      }); //Listen for event
    }

  }

}

let light = new ChristmasLight();
light.run();
