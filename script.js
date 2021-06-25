function compute()
{
     var principal = document.getElementById("principal").value;

     //To check if principal is 0 or negative
    if(principal < 1)
    {
        alert("Please enter a positive value");
        document.getElementById("principal").focus();
        return false;
    }
     var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     //To Calculate Interest
     var interest = principal * years * rate /100;
     var year = new Date().getFullYear()+parseInt(years) ;
     var amount = principal + interest
     //To show the result
     document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}
        