[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13148704&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

# My Wildcard Project Plan
My idea for the project is to make a word search solver algorithm. I plan to
use parallelism to help speed up the program, and plan to try other methods
to make the program faster asymptoticly.

# My Wildcard Project End Result
With my initial goal in mind, I did not manage to accomplish the initial goal. What ended up keeping me from finishing was the parallelism part of the program. I was able to make the rest of the program work successfully and have it run without issues so it could run synchronously, but I was unable to make it work asynchronously. I believe it was close, but there were just a few things I couldn't figure out for it to work.

# Asymptotic Analysis
The asymptotic analysis of this part will be done with how the program ended, so it will be done with the assumption of a synchronous program. To start my program goes through the word search and finds the most common letters in it to allow the program to find the optimal letter to look for. This time this takes is dependent on the length(L) and the width(W), so it takes L*W time. Next, my program needs to go through the whole list of words(N) systematically so that we can find what letter we should look for, and find the word. The time it takes to find the most optimal letter in a word would be the length of the word(P) times the number of different letters that are in the word search(k)(P*k). Next, we have to go through all the rows and columns of the word search and see if the letter we are looking for is there. The time it takes to do this is LW$\frac{1}{k}$, then when a letter we are looking for is found it takes P and makes sure that the word search can have the word there(P*8). After doing this it then checks the words that were returned and sees if any are a match(8). After doing all this it then finishes leaving with a time of (LW+(N)(Pk + (LW$\frac{1}{k}$(P8+8)))). After simplifying it and getting rid of constants we end up with an asymptotic time of $\theta$ (NPk+NPLW$\frac{1}{k}$).