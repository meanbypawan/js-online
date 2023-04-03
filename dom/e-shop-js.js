function createNavigationBar(){
    var parentNavDiv = document.querySelector("#navigation");
    parentNavDiv.setAttribute("class","mb-5");
    
    var navBox = document.createElement("div");
    navBox.setAttribute("class","row");
    navBox.style.minHeight = "70";
    navBox.style.backgroundColor = "black";
    navBox.style.color = "white";
    
    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("class","col-md-2");
    var labelLogo = document.createElement("h3");
    labelLogo.setAttribute("class","p-2 ml-4");
    labelLogo.innerHTML = "e-SHOP <br><small style='font-size:10px; color: green'>Enjoy Shopping At Home </small>" 
    logoDiv.appendChild(labelLogo);
    
    var searchBox = document.createElement("div");
    searchBox.setAttribute("class","col-md-8"); 
    var searchInput = document.createElement("input");
    searchInput.setAttribute("type","text"); 
    searchInput.setAttribute("placeholder","Search by title, brand and description");
    searchInput.style.width = "100%";
    searchInput.style.height = "40";
    searchInput.setAttribute("class","mt-3");

    searchInput.addEventListener("keyup",function(event){
      var keyword = event.target.value;
      var parentNode = document.querySelector("#parent");
      parentNode.innerHTML = "";
      
      var data = JSON.parse(localStorage.getItem("data-for-search"));
      
      data = data.filter((item)=> item.title.toLowerCase().includes(keyword.toLowerCase()) || item.brand.toLowerCase().includes(keyword.toLowerCase()));
      
      createCart(data);
    });

    searchBox.appendChild(searchInput);

    var buttonDiv = document.createElement("buttonDiv");
    buttonDiv.setAttribute("class","col-md-2");

    var button = document.createElement("button");
    button.setAttribute("class","btn btn-warning mt-3");
    button.textContent = "View Cart";
    
    button.addEventListener("click",function(){
      window.location.href=  "view-cart.html";
    });

    buttonDiv.appendChild(button);

    navBox.appendChild(logoDiv);
    navBox.appendChild(searchBox);
    navBox.appendChild(buttonDiv);
    parentNavDiv.appendChild(navBox);
 }

 function addItemInToCart(product){
    var cartItem = JSON.parse(localStorage.getItem("cartItem"));
    var status = cartItem.find((item)=>item.id == product.id);
    if(status){
       window.alert("Item is alredy in cart");
    } 
    else{
      cartItem.push(product);
      window.alert("Item successfully added in cart");
    }
    localStorage.setItem("cartItem",JSON.stringify(cartItem));
 }

function getCartItem(){
    return JSON.parse(localStorage.getItem("cartItem"));
}

 function createCart(productList){
    var parentDiv = document.querySelector("#parent");
    for(let product of productList){
       var outerDiv = document.createElement("div");
       outerDiv.style.minHeight = "550";
       outerDiv.setAttribute("class","col-md-4");
       outerDiv.style.padding = "10px"; 
       outerDiv.style.height = "100";
       
       var innerDiv = document.createElement("div");
       innerDiv.style.boxShadow = "5px 5px 5px grey";
       var h5 = document.createElement("h5");
       h5.textContent = product.title;
       h5.style.textAlign = "center";
       var img = document.createElement("img");
       img.setAttribute("class","mb-2");
       img.src = product.thumbnail;
       img.style.height = "300";
       img.style.width = "250";
       
       var p = document.createElement("p");
       
       if(product.discountPercentage){
          var discountValue = (product.price * product.discountPercentage)/100;
          p.innerHTML = "Rs. <del style='color: red'>"+product.price+"</del> <span style='color:green'>"+(product.price-discountValue).toFixed(1)+"</span>";
       }
       else{
          p.innerHTML = "Rs. "+product.price;
          p.style.color = "green";
       }
       p.style.fontSize = "20";
       
       var productBrand = document.createElement("span");
       productBrand.innerHTML = `<h3>${product.brand}</h3>`;

       var viewMore = document.createElement("p");
       viewMore.innerHTML = "<a href='#'>View more</a>";
       
       var buttonAddToCart = document.createElement("button");
       buttonAddToCart.setAttribute("class","btn btn-outline-primary mb-2");
       buttonAddToCart.style.width = "80%";
       buttonAddToCart.textContent = "Add To Cart";
       
       buttonAddToCart.addEventListener("click",function(){
         addItemInToCart(product);
       }); 

       innerDiv.appendChild(h5);
       innerDiv.appendChild(img);
       innerDiv.appendChild(p);
       innerDiv.appendChild(productBrand);
       innerDiv.appendChild(viewMore);
       innerDiv.appendChild(buttonAddToCart);

       innerDiv.style.textAlign = "center";
      
       outerDiv.appendChild(innerDiv);
       parentDiv.appendChild(outerDiv);
      }
 }