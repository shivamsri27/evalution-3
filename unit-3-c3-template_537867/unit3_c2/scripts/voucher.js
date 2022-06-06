const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

fetch(url).then(function(res)
{
    return res.json()
}).then(function(res)
{
    console.log(res[0].vouchers)
    append(res)
}).catch(function(err){
    console.log("error", err)
})

function append(res)
{
    res.forEach(function(res)
    {
        console.log(res)

        var box = document.getElementById("voucher_list")
        var div = document.createElement("div");
        var image = document.createElement("img");
        image.src = res.image;
        image.setAttribute("id", "img")
        var name = document.createElement("p");
        name.innerText = res.name;
        var price = document.createElement("p")
        price.innerText = res.price;
        var btn = document.createElement("button")
        btn.innerText = "buy voucher"
        btn.setAttribute("id", "buy_voucher")
        div.append(image,name,price,btn)
        box.append(div)
        btn.addEventListener("click", function(){
            purchase(res)
            localStorage.setItem("purchase", JSON.stringify(res))
        })

    })
}

function purchase(res)
{
    let objvoucher = {
        img:res.image,
        name : res.name,
        price : res.price,
    }
    arr.push(objvoucher);
    localStorage.setItem("purchase", JSON.stringify(arr))
}