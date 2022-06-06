function signup(name,email,address,amount)
{
    this.name = name;
    this.email = email;
    this.address = address;
    this.amount = amount;
}

var arr = JSON.parse(localStorage.getItem("user")) || []

function mysub(){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;
    let S1 = new signup(name,email,address,amount)
    arr.push(S1)
   localStorage.setItem("user", JSON.stringify(arr))
   

}