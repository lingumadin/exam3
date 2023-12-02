var elList = document.querySelector(".list")
var elText = document.querySelector(".cound");
var coun = 0;

function render (_pokemons){
    for (var i = 0; i < _pokemons.length; i++){
        var newLi = document.createElement('li')
        var newImg = document.createElement('img')
        var newLine = document.createElement('div')
        var newName = document.createElement('h3')
        var newText = document.createElement('p')
        var newDiv = document.createElement('div')
        var newWeight = document.createElement('p')
        var newAge = document.createElement('p')
        var newButton = document.createElement('button')
        var newLike = document.createElement('img')
        
        newLi.setAttribute("class", "pokemon_item")
        newLine.setAttribute("class", "pokemon_line")
        newImg.setAttribute("src", _pokemons[i].img)
        newImg.setAttribute("alt", _pokemons[i].name)
        newImg.setAttribute("class", "pokemon_img")
        newImg.setAttribute("width" , 157)
        newImg.setAttribute ("height" , 157)
        newName.setAttribute("class", "pokemon_heading")
        newText.setAttribute("class", "pokemon_text")
        newDiv.setAttribute("class", "pokemon_Div")
        newWeight.setAttribute("class", "pokemon_W")
        newAge.setAttribute("class", "pokemon_Age")
        newButton.setAttribute("data-uuid", 'close');
        newButton.setAttribute('type','button');
        newButton.setAttribute('class', 'btn');
        newLike.setAttribute('alt', 'image');
        newLike.setAttribute('class' , 'img');
        newLike.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgiSXzA216_jd6SJdBlOmTDo8PRLZw97KbA&usqp=CAU');
        newLike.setAttribute('width', '40');
        newLike.setAttribute('height', '40');
        
        
        newName.textContent = _pokemons[i].name
        // newText.textContent = _pokemons[i].candy
        newWeight.textContent = _pokemons[i].weight
        newAge.textContent = _pokemons[i].height
        
        
        newLi.appendChild(newImg)
        newLi.appendChild(newLine)
        newLi.appendChild(newName)
        newLi.appendChild(newText)
        newLi.appendChild(newDiv)
        newDiv.appendChild(newWeight)
        newDiv.appendChild(newAge)
        newButton.appendChild(newLike)
        newLi.appendChild(newButton)
        elList.appendChild(newLi)    
    }
    
}
render(pokemons)

var elButton = document.querySelectorAll(".btn")

setInterval(function add(){
    elText.textContent = coun
},10)

for (var i = 0; i <elButton.length; i++){
    elButton[i].addEventListener('click', function(evt) {
        if(evt.target.dataset.uuid == "close"){
            coun += 1 
            evt.target.dataset.uuid = "open"
        } else if (evt.target.dataset.uuid == "open"){
            coun -= 1
            evt.target.dataset.uuid = "close"
        }
    })
}