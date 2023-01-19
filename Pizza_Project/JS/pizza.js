function getReceipt() {
    //this initializes our string, so that our string can get passed from function to function that will change it with time into a real receipt//
    var text1="<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeoTotal = 6;
    } else if  (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {  
        sizeTotal = 14;     
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Family Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subTotal: $"+runningTotal+".00");
    //these variables get passed on to each function//
    getTopping(runningTotal,text1);
     };

    function getTopping(runningTotal,text1) {
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings")
        for (var j = 0; j < toppingArray.length; i++) {
            if (toppingArray[j].checked) {
                selectedTopping.push(toppingArray[j].value);
                console.log("selected topping item: ("+toppingArray[j].value+")");
                text1 = text1+topppingArray[j].value+"<br>";
            }
        }
        var toppingCount = selectedTopping.length; 
        if (toppingCount > 1) {
            toppingTotal = (toppingTotal - 1);
        }   else {
            toppingTotal = 0;
        }
        runningTotal = (runningTotal + toppingTotal);
        console.log("total selected topping items: "+toppingCount);
        console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
        console.log("topping text1:"+text1);
        console.log("Purchase Total:"+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        gocument.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    };

    window.addEventListener('DOMContentLoaded', () => {
        document.body.classList.remove('fade-out');
      });

      function validateForm() {
        let x = document.forms["myForm"]["adress"].value;
        if (x == "") {
          alert("Adress must be filled out");
          return false;
        }
      }