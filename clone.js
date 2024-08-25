  document.addEventListener("DOMContentLoaded", function() {
    function isMobileDevice() {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
      // Display a message to mobile users
      document.body.innerHTML = "<h2>This site is currently available only for desktop users. Please visit from a computer.</h2>";
      document.body.style.display = "flex";
      document.body.style.justifyContent = "center";
      document.body.style.alignItems = "center";
      document.body.style.height = "100vh";
      document.body.style.textAlign = "center";
      document.body.style.padding = "0 20px";
      document.body.style.boxSizing = "border-box";
    }
  });
let faqboxes = document.querySelectorAll('.faqbox');
let drops = document.querySelectorAll('.drop');
 

faqboxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        let drop = drops[index];
        
        
        if (drop.style.display === 'none' || drop.style.display === '') {
            drop.style.display = 'block';
            faqboxes.style.margin = '1px auto';
        } else {
            drop.style.display = 'none';
            faqboxes.style.margin = '1px auto';
          }
    });
});
