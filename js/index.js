const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// fetch dog images at random
fetch(imgUrl)
.then(res=>res.json())
.then(data=>{
    dispplayImage(data)
});

// fetch all names of dog breeds
fetch(breedUrl)
.then(res=>res.json())
.then(breedData => {
    //console.log(typeof breedData.message)
    displayDogBreed(breedData)
})

function dispplayImage(data){
    const image = document.getElementById('dog-image-container');
    //let imgElement = document.createElement('img');
    let imgSrcArr = data.message;

    imgSrcArr.forEach(imgSrc => {
        let imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.width = 300;
        imgElement.height = 300;
        image.appendChild(imgElement)
    });
}

function displayDogBreed(breedData){
    let breeds = breedData.message;
    const dogBreed = document.getElementById('dog-breeds');
    const dropDown = document.getElementById('breed-dropdown');

    dropDown.addEventListener('click', e=>{
        dogBreed.innerHTML = ``
        let val = e.target.value;
        console.log(val);
        for (let breed in breeds){
            let breedObj = breeds[breed];
            for (let breedArray in breedObj){
                let li = document.createElement('li');
                
                let breedName = breedObj[breedArray];

                if (breedName.startsWith(val)){
                    li.textContent = breedName;
                    dogBreed.appendChild(li)
                }
                
                //console.log(li);
            }
            
        }
    })
    

    dogBreed.addEventListener('click', e=>{
        e.target.style.color = "green";
    })
    

}