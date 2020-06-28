console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", onPageLoad)
function onPageLoad() {
   
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl).then(response => response.json()).then(function (object) {

        renderImage(object)
    })

    function renderImage(object) {

        object["message"].forEach(function (img) {
            let divImg = document.getElementById("dog-image-container")
            let imgTag = document.createElement("img")
            imgTag.setAttribute("src", img)
            divImg.appendChild(imgTag)


        })

    }


    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(response => response.json()).then(function (object) {
        Object.entries(object["message"]).forEach(function (bread) {
            
         renderBread(bread[0])
        })
        
       
    })

    function renderBread(bread) {
        let ul = document.getElementById("dog-breeds")
        let li = document.createElement("li")
        li.innerText = `${bread}`
        ul.appendChild(li)
        li.addEventListener("click",()=>{

         let nodList = document.querySelectorAll("li")
         arrayOfNode = Array.from(nodList)
         arrayOfNode.forEach(function(eachLi){

            eachLi.style.color = "blue"
         })


        })

    }
        
    

}

