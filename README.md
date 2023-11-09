# soundproject
09.11.2023

Team members: Maisha, Diana, Darko, Youssef
Project Name: Haunted House: Try to Escape
Project Description: 
The project is an audiobook about the scary story of the main protagonist, who is stuck at the Haunted House with the Witch. Despite his attempts to escape the house, the house becomes one huge end point for him. 
The theme of the project is centered around horror and suspense with a bit of a comical effect. It includes the classic elements of haunted house stories, creating an atmosphere of fear, mystery, and fantasy. 
The concept of the project is to create an interactive audiobook experience that immerses the audience in the scary story.  By dividing the audio and visual images into scenes, we wanted to give the user the autonomy to navigate through the scenes by clicking on the “next” button, so the book pages flip to the next page. Every page of the book corresponds to each of the scenes with relevant audio-visual information. 

Process: 
First, we discussed the main concept of the project and the way to implement it. We decided to create a digital book kind of website, so the users can flip the pages of the book and go to the next scene. 
Second, after discussing the idea and having a clear concept, we wrote the script in the classical style of the haunter house where the protagonist enters the house he was not supposed to go. The script has a clear beginning, where the protagonist wakes up in a scary forest and meets the main antagonist, the plot twist where he breaks the glass while trying to escape the house and gets caught by the Witch, and the ending where the Witch tells that he is trapped at house forever. 
Third, after some polishing of the script, we audio-recorded the dialogue between the Witch and the protagonist. By assigning the roles and with some voice actor training, the lines were audio recorded from almost the first attempt. 
Fourth, the audio was split into the scenes and edited in Audacity by adding royalty-free sound effects such as footsteps, witch laughs, breathing, background noise, breaking of the glass, and many more downloaded from Pixabay. 
Fifth, the visual images of the book were created on Canva with the addition of some animation. 
Last but not least, the website was coded to include all the audio-visual content split into scenes managed through the button “next” by the user. 

Reflection/Evaluation: 
	Overall, the initial expectations of creating the Halloween-style audiobook with audio-visual elements were met. Yet, we encountered many difficulties and challenges in both the audio and coding parts. First, some audio was in a format not supported by the audacity and they were converted in the VLC software. Additionally, although the audio was recorded clearly, the same cannot be said about the downloaded royalty-free audio: some were too quiet, while others were too loud, too short, or too long. All of these things were edited in Audacity to keep the fluency of the audio. Furthermore, the coding of the website had some issues too. Initially, we were planning to code in p5.js and had many animations working well. The issue was that the sound was not working properly and giving only some noise. By assessing the code and playing around by putting it into “draw” and “setup”, we were able to find the issue. The explanation lies in the fact that the draw is a loop, which keeps drawing every frame from the beginning, while the setup runs once. Because of this, the audio worked when it was inserted into the setup, but had issues when inserted into the draw. As we had many audios, we couldn’t put everything in setup. Because of this, we decided to code everything on HTML, CSS, and javascript. In general, we believe that we did a great job and learned a lot about recording and editing the sound as well as coding the website with multiple audio files. 
