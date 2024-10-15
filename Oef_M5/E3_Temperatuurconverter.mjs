


function Temperatuurconverter(temperatuur,isCelcius) {
    
if (isCelcius) {

  return (temperatuur * 9 / 5) + 32;
    
}

else
{

return (temperatuur - 32)/1.8;

}

    
}

let result = Temperatuurconverter(13.89,true);

console.log(result)

result = Temperatuurconverter(57,false)

console.log(result)