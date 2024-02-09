
const calculateBtn = document.getElementById('calculate');
const resetbtn = document.getElementById('reset')

calculateBtn.addEventListener('click',function(evnt)
{
    evnt.preventDefault()  //mtlb abhi apna default action roko khi submit mt krna

    
    const height = parseInt(document.querySelector('#height').value)  // i/p ki value milegi string me to parsInt se int me change krdi
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(  height<0 || isNaN(height))
    {
        result.innerHTML= 'Please give valid height'
    }
    else if( weight<0 || isNaN(weight))
    {
        result.innerHTML= 'Please give valid weight'
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // result.innerHTML = `Your BMI is <span>${bmi}</span>`

        if(bmi <18.6)
        {
            result.innerHTML = `Your BMI is ${bmi}, <span  class="underWeight">
             under weight</span>`
        }
        else if(bmi >= 18.6 && bmi <=24.9)
        {
            result.innerHTML = `Your BMI is ${bmi},<span class="normalWeight">  Normal weight</span>`
        }
        else{
            result.innerHTML = `Your BMI is ${bmi},<span  class="overWeight"> Over weight</span>`
        }
        
    }
})

resetbtn.addEventListener('click',function()
{
    document.querySelector('#results').innerHTML = '';
    document.querySelector('#height').value= ''
    document.querySelector('#weight').value= ''
})