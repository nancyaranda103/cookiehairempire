document.addEventListener('DOMContentLoaded', function() {
  const toasts = document.querySelectorAll('.toast');

  toasts.forEach((toast) => {
    showToast(toast);
  });
  
  function showToast(toast) {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 1000);
  }
  
    



  });
  
  