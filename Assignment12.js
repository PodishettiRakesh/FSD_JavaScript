function validatePasswords(passwords) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])(?!.*\s).{12,20}$/;
  
    return passwords.filter(password => passwordRegex.test(password));
  }
  
  
  const passwords = [
    "Rakesh@1234",                 
    "Raki@Kore",                   
    "Rakesh123",                   
    "R@kesH1",                     
    "ValidPassword@Kore123",       
    "SpecialChar12345",            
    "TooLongRakeshPassword@1234567890" 
  ];
  
// console.log(validatePasswords(passwords));

// --------------------------------------

// used chatgpt
// Regular expression to extract date, username, and IP address
const logRegex = /(\d{4}-\d{2}-\d{2}) \d{2}:\d{2}:\d{2} - Error: User (\w+) failed to login from IP (\d+\.\d+\.\d+\.\d+)/;

// Function to replace IP address with '[REDACTED]'
function modifyLog(log) {
  // Replace the IP addresses with '[REDACTED]'
  return log.replace(/\d+\.\d+\.\d+\.\d+/, '[REDACTED]');
}

// Example log string
const logLine = "2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1";

// Extract date, username, and IP address
const match = logLine.match(logRegex);

if (match) {
  const date = match[1];          // Extracted date
  const username = match[2];      // Extracted username
  const ipAddress = match[3];     // Extracted IP address

  console.log(`Date: ${date}, Username: ${username}, IP Address: ${ipAddress}`);

  // Modify the log by replacing the IP address
  const modifiedLog = modifyLog(logLine);
  console.log(`Modified Log: ${modifiedLog}`);
} else {
  console.log("No match found!");
}


// ==========================
//Basic Try-Catch Block//
function divideNumbers(dividend, divisor) {
    try {
        if (divisor === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return dividend / divisor;
    } catch (error) {
        console.error("Error:", error.message);
        return null; 
    }
}
// console.log(divideNumbers(12,0))
  