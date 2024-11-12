function copyToClipboard(text) {
  // Create a temporary textarea element
  var textarea = document.createElement('textarea');
  
  // Set the value of the textarea to the text you want to copy
  textarea.value = text;
  
  // Append the textarea to the body
  document.body.appendChild(textarea);
  
  // Select the text inside the textarea
  textarea.select();
  
  // Copy the selected text
  document.execCommand('copy');
  
  // Remove the textarea from the DOM
  document.body.removeChild(textarea);
  
  // Optionally, provide some feedback to the user
  alert('Email address copied to clipboard!');
}

document.getElementById('copyText1').addEventListener('click', function() {
  copyToClipboard(this.innerText);
});

document.getElementById('copyText2').addEventListener('click', function() {
  copyToClipboard(this.innerText);
});

document.getElementById('copyText3').addEventListener('click', function() {
  copyToClipboard(this.innerText);
});