function bodyMassIndex() {
    result.innerHTML = "";  // Clear previous results
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let result1 = weight / (height * height);
    
    result.innerHTML = `Your BMI is: ${result1.toFixed(2)}`;
    result.style.backgroundColor = "black";
    result.style.color = "white";
    result.style.fontSize = "20px";
    result.style.fontFamily = 'Times New Roman';

    let name = document.getElementById("name3").value;
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = `Welcome ${name}`;
    
    // Get the pointer image and set default position
    let pointer = document.querySelector('.img1 img:nth-child(2)');

    // Assuming the arc is between -90 degrees (underweight) to 90 degrees (obese)
    let angle = 0;  // Default angle

    if (result1 < 18.5) {
        out.innerHTML = "Category: Underweight";
        angle = -110;  // Rotate to the underweight position (left on semicircle)
    } 
    else if (result1 >= 18.5 && result1 <= 24.9) {
        out.innerHTML = "Category: Normal Weight";
        angle = -35;  // Rotate to the center (normal weight)
    } 
    else if (result1 >= 25 && result1 <= 29.9) {
        out.innerHTML = "Category: Overweight";
        angle = 45;  // Rotate to the overweight position (right on semicircle)
    } 
    else if (result1 >= 30) {
        out.innerHTML = "Category: Obese";
        angle = 90;  // Rotate to the far right (obese)
    }

    // Apply styles for result output
    out.style.backgroundColor = "black";
    out.style.color = "white";
    out.style.fontSize = "20px";
    out.style.fontFamily = 'Times New Roman';

    // Calculate the rotation and apply to the pointer
    pointer.style.transformOrigin = "center";  // Ensure rotation around center
    pointer.style.transform = `rotate(${angle}deg)`;  // Apply rotation
}


