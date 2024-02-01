// Function to handle the zoom effect on product containers

function applyZoomEffect() {
    const productContainers = document.querySelectorAll('.small-container');
  
    productContainers.forEach(container => {
      container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.1)';
      });
  
      container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
      });
    });
  }
  
  // Call the applyZoomEffect function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    applyZoomEffect();
  });
  