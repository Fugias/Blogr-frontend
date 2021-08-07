//pc

const navclick = document.querySelectorAll(`.arrow`)
const menu = document.querySelectorAll(`.menu`)
const arrow = document.querySelectorAll(`.active__arrow`)
const pc = document.querySelector(`.pc`)

//mobile 
const hamburger = document.querySelector(`.hamburger`)
const line = document.querySelectorAll(`.line`)
const menuMobile = document.querySelector(`.menu__mobile`)
const activate = document.querySelectorAll(`.active__menu`)


hamburger.addEventListener(`click`, () => {
    line[0].classList.toggle(`rotatePositive`)
    line[1].classList.toggle(`hidden`)
    line[2].classList.toggle(`rotateMinus`)
    menuMobile.classList.toggle(`hidden`)
    menuMobile.classList.toggle(`opacity`)
})

activate.forEach( (e, index) => {
    e.addEventListener(`click`, e => {

        if(!e.target.parentElement.parentElement.nextElementSibling.classList.contains(`none`))
        {
            activate.forEach((reset, number) => {
                menu[number + 3].classList.add(`none`)
                arrow[number + 3].classList.remove(`rotateTransform`)
            })
        }
        else {

            activate.forEach((reset, number) => {
                menu[number + 3].classList.add(`none`)
                arrow[number + 3].classList.remove(`rotateTransform`)
            })
            
        menu[index + 3].classList.toggle(`none`)
        arrow[index + 3].classList.toggle(`rotateTransform`)
        }



    })
})


//menu
navclick.forEach((click,value) => {

    click.addEventListener(`click`, e => {
    //if the same is targeted
     if(!e.target.nextElementSibling.classList.contains(`hidden`))
     {
        navclick.forEach((close,index) => {
            menu[index].classList.add(`hidden`)
            menu[index].classList.add(`opacity`)
            arrow[index].classList.remove(`rotate`)

        })
     }
     else {
        //close all
        navclick.forEach((close,index) => {
            menu[index].classList.add(`hidden`)
            menu[index].classList.add(`opacity`)
            arrow[index].classList.remove(`rotate`)

        })
    
        //open the target
        console.log(value)
        menu[value].classList.toggle(`hidden`)
        menu[value].classList.toggle(`opacity`)
        arrow[value].classList.add(`rotate`)
     }
    })


        
})

