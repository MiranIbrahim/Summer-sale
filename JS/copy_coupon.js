const copyButton = document.getElementById('copyButton');
    const copyNotification = document.getElementById('copyNotification');

    copyButton.addEventListener('click', () => {
      const textToCopy = copyButton.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        
        copyNotification.style.opacity = '1';
        setTimeout(() => {
          copyNotification.style.opacity = '0';
        }, 1500);
      });
    });