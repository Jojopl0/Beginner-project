document.getElementById('copyPhone').onclick = function() {
    const phone = '2484664489';
    navigator.clipboard.writeText(phone).then(function() {
      document.getElementById('copyPrompt').style.display = 'block';
      setTimeout(function() {
        document.getElementById('copyPrompt').style.display = 'none';
      }, 4000); // Hide after 4 seconds
    });
};


document.getElementById('sayHelloBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const message = name ? `Hello, ${name}! Two guys walked into a bar, only one got a concussion. Haha get it?` : 'Include a name or I will not say a joke';
    document.getElementById('helloMessage').textContent = message;
  });