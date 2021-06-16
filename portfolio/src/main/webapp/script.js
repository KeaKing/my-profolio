// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
 * Adds a random picture to the page.
 */
function getRandomPicture() {
    
    const pictures = ["image1.jpg", "image2.jpg", "image4.jpg", "image7.jpg", "image8.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image14.jpg", "image15.jpg", "image16.jpg"];

    // Holds the index for pictures
    var index = Math.floor(Math.random() * pictures.length)

    // Holds the route for the picture
    const picture = "/images/" + pictures[index];

    //Adds the picture to the page
    const pictureContainer = document.getElementById("picture");     
    pictureContainer.src = picture;
    pictureContainer.style = "width:700px;height:500px;display:block;";
    
}