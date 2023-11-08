const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      const imageElement = document.createElement('img');
      imageElement.classList.add('preview-image');
      imageElement.src = e.target.result;
      imagePreview.innerHTML = '';
      imagePreview.appendChild(imageElement);

      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        console.log('Upload and post successful!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
});