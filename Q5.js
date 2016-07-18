document.getElementById("calc").onclick = function ()
{
	var costInput = document.getElementById("cost").value;
	var tipInput = document.getElementById("tip").value;

	var tip = tipInput / 100;

	var tipamount = (costInput * tip);
	var price = +tipamount + +costInput;

	document.getElementById("aTipped").innerHTML = tipamount;
	document.getElementById("tBill").innerHTML = price;
}
