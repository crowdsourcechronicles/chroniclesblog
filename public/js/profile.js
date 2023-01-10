
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dumcdd08l/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'pf6ev4qo';

const fileForm = document.querySelector('#file-form');
fileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Set the file variable using the e.target.elements property
  const file = e.target.elements[0].files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  fetch(CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then((data) => {
      if (data.secure_url !== '') {
        const uploadedFileUrl = data.secure_url;
        localStorage.setItem('uploadedFileUrl', uploadedFileUrl);
        const imgUrl = document.querySelector('#profile-img');
        imgUrl.src = uploadedFileUrl;
      }
    })
    .catch(err => console.error(err));
});

const imgUrl = document.querySelector('#profile-img');
const storedUrl = localStorage.getItem('uploadedFileUrl');
if (storedUrl) {
  imgUrl.src = storedUrl;
}










