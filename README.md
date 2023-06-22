# SIMBT_2
The following repository provides the program code for a TO-DO List which I've made using HTML, CSS and JAVASCRIPT.
The code begins with the declaration of the document type using the <!DOCTYPE html> tag, indicating that it is an HTML5 document. The <html> element represents the root of an HTML page and includes the lang attribute set to "en" to specify the language as English.

Inside the <head> section, several elements are defined. The <meta> tags specify the character encoding and the viewport settings for responsive design. The <title> element sets the title of the web page to "TO DO LIST." Additionally, there is a link to an external stylesheet file named "style.css" using the <link> tag. This stylesheet is used to define the visual appearance of the elements on the page.

Moving on to the <body> section, the content of the web page is defined. The main content is enclosed within a <div> element with the class "container," which serves as a wrapper for the entire page. Inside this container, there is another <div> element with the class "todo-app," which represents the to-do list application.

Within the "todo-app" div, there is an <h2> heading element with the text "TO-DO LIST" followed by an <img> tag with the source attribute set to "images/icon.png." This suggests the presence of an icon image associated with the to-do list.

Below the heading, there is a <div> element with the class "row" that contains an input field and a button. The input field is of type "text" and has the id "input-box" for identifying it in the JavaScript code. It serves as a text box where users can enter their tasks. The button with the "onclick" attribute set to "addTask()" triggers a JavaScript function called "addTask()" when clicked, presumably to add the entered task to the to-do list.

Next, there is an unordered list (<ul>) element with the id "list-container." This list is where the tasks will be displayed. Inside the list, there is an <iframe> element that embeds an external HTML file named "completedtasks.html." This suggests that the completed tasks will be loaded from a separate HTML file into this iframe.

Within the list, there are three list items (<li>). The first list item has the class "checked" and contains the text "TASK 1." This indicates that the task is already completed, as denoted by the "checked" class. The remaining two list items contain "TASK 2" and "TASK 3" as their respective texts, implying that they are incomplete tasks.

Finally, at the end of the <body> section, there is a <script> tag that references an external JavaScript file named "script.js." This file likely contains the necessary JavaScript code to handle the functionality of the to-do list, such as adding tasks and managing their completion status.

Overall, this code represents the structure and initial content of a simple to-do list web page, with the ability to add tasks, display completed tasks from a separate file, and mark tasks as completed.
