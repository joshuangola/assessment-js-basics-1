/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
const gitDefinition = "Git allows you to keep track of changes to your code and collaborate with others. It allows you to save versions of your code, revert to previous versions, and merge changes made by different users."
//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "GitHub Website that uses Git. By using Git it makes it very easy to collaborate with others. Save versions of your code and revert to previous versions. GitHub also has a great community of developers that work on many projects"
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "git init initializes a new Git repository in the current directory. It creates a new subdirectory called .git which contains all the necessary files for control."
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "git clone is a command that allows you to copy an existing Git repository from a remote location to your Computer. In this class we have been using it to clone from GitHub. It creates a new directory with the same name as the repository and copies all the necessary files for control."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "git status is a command that shows the current status of your repository, including which files have been modified, added, or deleted, and whether or not they are ready for a commit."
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "git add is a command that allows you to select which files you want to include in your next commit. ";
const gitAddCode = "git add .";
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "git commit is a command that saves changes to the local repository. It creates a new snapshot of the project's files and stores it in the repository's history. A commit message is required to describe the changes made.";
const gitCommitCode = "git commit -m 'initial commit'";

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "git push is a command that sends your committed changes to a remote repository like GitHub. It updates the remote repository with your local commits, making your changes visible to others.";