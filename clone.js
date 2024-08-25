function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobileDevice()) {
     
    document.body.innerHTML = "<h2>This site is currently only available for desktop users. Please visit from a computer.</h2>";
    document.body.style.textAlign = "center";
    document.body.style.marginTop = "20%";
}

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
