//firstname
function generateID () {
    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);
    let userLastName = document.getElementById("lastName").value;
    console.log(userLastName);


    document.getElementById("idCardName").innerHTML = `${userFirstName}` + " " + `${userLastName}` ;

    let userAddress = document.getElementById("address").value;
    console.log(userAddress);
    document.getElementById("idCardAddress").innerHTML = userAddress;

    let userAge = document.getElementById("age").value;
    console.log(userAge);
    document.getElementById("idCardAge").innerHTML =  "Age: " + userAge;

    let userPhoneNumber = document.getElementById("phoneNumber").value;
    console.log(userPhoneNumber);
    document.getElementById("idCardPhoneNumber").innerHTML = "Phone Number: " + userPhoneNumber;

    let numberArray = [];
    numberArray.push(userAge);
    numberArray.push(userPhoneNumber);
    console.log(numberArray);

}
