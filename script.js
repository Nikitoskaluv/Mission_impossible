let inputCount = 0;

function handleInput() {
    const inputField = document.getElementById('inputField');
    const message = document.getElementById('message');

    if (inputField.value.trim() !== "") {
        inputCount++;
        if (inputCount === 3) {
            message.textContent = "Елочка гори!";
            changeTreeImage();
        } else {
            message.textContent = "";
        }
        inputField.value = ""; 
    } else {
        message.textContent = "Пожалуйста, введите текст.";
    }
}

function changeTreeImage() {
    const treeImage = document.getElementById('treeImage');
    const images = ['tree1.jpg', 'tree2.jpg'];
            treeImage.src = images[1];
    
}
