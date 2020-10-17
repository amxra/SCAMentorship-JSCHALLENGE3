/* Hello everyone!
This is your third JavaScript challenge.

CHALLENGE!

Write a function called reverseNumber that reverses a number.

nput Example: 
12345
555

Output Example:  
54321
555

Put your answer below! This would be discussed in our weekly meeting on Saturday! Please complete and hand in before then so i can review for feedback! Complete feedback would only be given to those at the meeting on saturday! Take care :) */

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(976540));
//output= 045679