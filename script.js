const scenes = [
    //{ img: "images/2nd_scene.png", audio: "audio/audio1.mp3" },
    { img: "images/2nd_scene.png", audio: "audio/audio2.mp3" },
    { img: "images/3rd_scene.png", audio: "audio/audio3.mp3" },
    { img: "images/4th_scene.png", audio: "audio/audio4.mp3" },
    { img: "images/5th_scene.png", audio: "audio/audio5.mp3" },
    { img: "images/6th_scene.png", audio: "audio/audio6.mp3" },
    { img: "images/7th_scene.png", audio: "audio/audio7.mp3" },
    // ... add all scenes here
    { img: "images/8th_scene.png", audio: "audio/audio8.mp3" }
  ];
  


let currentScene = -1; // Start before the first scene

// Get the elements
const imageElement = document.getElementById('story-image');
const audioElement = document.getElementById('story-audio');
const audioSourceElement = document.getElementById('audio-source');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');

// Function to start the story
function startStory() {
  startButton.style.display = 'none'; // Hide the start button
  nextButton.style.display = 'inline'; // Show the next button
  changeScene(); // Change to the first scene
}

// Function to change the scene
function changeScene() {
  currentScene++;
  if (currentScene >= scenes.length) {
    currentScene = 0; // Loop back to the first scene or end the story
  }
  if (scenes[currentScene].img) {
    imageElement.src = scenes[currentScene].img;
    imageElement.style.display = 'block'; // Show the image
  }
  if (scenes[currentScene].audio) {
    audioSourceElement.src = scenes[currentScene].audio;
    audioElement.load(); // Load the new audio source
    audioElement.play(); // Play the audio
  }
}

// Event listeners for the buttons
startButton.addEventListener('click', startStory);
nextButton.addEventListener('click', changeScene);