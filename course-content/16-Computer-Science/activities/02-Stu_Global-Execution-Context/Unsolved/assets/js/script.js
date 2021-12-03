// 1) Where is carNoise stored?
// car noise is the global execution 
const carNoise = 'Honk';
// 2) Where is goFast stored?
//  goFast is stored in teh global, speed is in the local scope of goFast
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Speed is used at teh very end in the console log. Local context
  
  // 5) Where is makeNoise stored?
  // MakeNoise is a global. It is a declared as a const. Speed and sound are both local, 
  // makeNoise takes their values a makes it global 
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  //  when the local function of makeNoise is called, it passes th global variable carNoise.

  makeNoise(carNoise);
}

// 3) What happens in the following statement?
//  If the built in function confirm is called, and the user confirms, goFast is executed and we will pass 
// 80 as the speed parameter in in goFast.  
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
