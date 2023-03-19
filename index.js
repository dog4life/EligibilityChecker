function check_eligibility(){
var number= document.getElementById('marks').value
console.log(number)
if(number<=60 & number>=0){
    console.log("Sorry... you'll have to re-take the test...")
    document.getElementById('show-result').innerHTML="Sorry... you'll have to re-take the test..."
}
else if(number<=70 & number>60){
    console.log("You can get into lower-rated colleges. Best to re-take the test.")
    document.getElementById('show-result').innerHTML="You can get into lower-rated colleges. Best to re-take the test."
}
else if(number<=80 & number>70){
    console.log("You can get into local colleges.")
    document.getElementById('show-result').innerHTML="You can get into local colleges."
}
else if(number<=90 & number>80){
    console.log("Congrats! You can get into state colleges")
    document.getElementById('show-result').innerHTML="Congrats! You can get into state colleges"
}
else if(number>100 || number<0){
    console.log("ERROR! Please enter the valid marks")
    document.getElementById('show-result').innerHTML="ERROR! Please enter the valid marks"
}
else if(number>90 & number<=100){
    console.log("Congrats! You can get into the top colleges in the country!")
    document.getElementById('show-result').innerHTML="Congrats! You can get into the top colleges in the country!"
}


}