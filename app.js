
  var number = 5;
  document.write("Number: " + number + "<br>");
  document.write("Result: " + ((number + 5) * 10 / 2));
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
  // --a;         // a is pre-decremented, so a becomes 1
  // --a - --b;   // a is pre-decremented to 0, b is pre-decremented to 0, result is 0 - 0 = 0
  // --a - --b + ++b; // a is pre-decremented to -1, b is pre-incremented to 0, result is -1 - 0 + 1 = 0
  // --a - --b + ++b + b--; // b is post-decremented to -1, result is 0 - 0 + 1 - 1 = 0
  
  // Therefore, a = -1, b = 0, result = 0
  
  
    var name = prompt("Enter your name:");
    document.write("Hello, " + name + "!");
  
  
  var number = prompt("Enter a number:");
  if (number === null || number === "") {
    number = 5; // Default value if no input is provided
  }
  document.write("<h2>Multiplication Table of " + number + "</h2>");
  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }
  
  
    var subject1 = prompt("Enter name of first subject:");
    var subject2 = prompt("Enter name of second subject:");
    var subject3 = prompt("Enter name of third subject:");
    var totalMarks = 100;
    var marks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
    var marks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
    var marks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
    var totalObtainedMarks = marks1 + marks2 + marks3;
    var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
    document.write("<h2>Subject Marks</h2>");
    document.write("<table>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
    document.write("</table>");
    document.write("<h3>Total Obtained Marks: " + totalObtainedMarks + "</h3>");
    document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
    
  

    
