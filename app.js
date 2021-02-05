const button = document.getElementById('button');
const input = document.querySelector('.inputValue');
var cityName = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');



button.addEventListener('click' , function(){
    fetch('https:/api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c70de50f7e2b63a9f996c5a92e655ef0')
            .then(res => res.json())
            .then(data => {
                
                const nameValue = data.name; 
                const tempValue = data.main.temp;
                const descValue = data.weather[0].description
                const iconValue = data.weather[0].icon
                cityName.innerText = nameValue
                temp.innerText = tempValue-273.15;

                desc.innerText = descValue
                desc.innerText = descValue

            })

            .catch(err => alert('wrong City name!'))

})
