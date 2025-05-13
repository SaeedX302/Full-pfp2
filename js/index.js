function processImage() {
    const fileInput = document.getElementById('fileInput');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image first!");
    }
}
