import './style.scss'
import   './assets/whiteCar_and_girl.jpg'
import   './assets/blackCar_and_girl.jpg'
import   './assets/girl.jpg'
import './assets/arrows/left_arrow.png'
import './assets/arrows/right_arrow.png'

const images:NodeList  = document.querySelectorAll('.main__slider > img')
const circles:NodeList =  document.querySelectorAll('.circles__circle')
const imagesArray = [...images] as HTMLElement[]
const circlesArray = [...circles] as HTMLElement[]
let activeCircle:HTMLElement = document.querySelector('.circles__circle.active')!
const arrows = [...document.querySelectorAll('.slider__arrow')] as HTMLElement[]
console.log(arrows)
let storageIndex:number | null = Number(localStorage.getItem('index'))
let index
storageIndex !== null? index = storageIndex: index = 0
imagesArray[index].classList.add('active')
circlesArray[index].classList.add('active')
arrows.map(arrow =>arrow.onclick = () => {
    if (arrow.classList[1] === 'arrow_right')
    {
        ++index
        if (index > imagesArray.length - 1)
        {
        index = 0
        }
    }
    if (arrow.classList[1] === 'arrow_left')
    {
        --index
        if (index < 0)
        {
        index = imagesArray.length - 1
        }
    }
    localStorage.setItem('index', `${index}`)
    imagesArray.map((el:HTMLElement) => el.classList.remove('active'))
    circlesArray.map((el:HTMLElement) => el.classList.remove('active'))
    imagesArray[index].classList.add('active')
    imagesArray[index].style.animationName = 'fade'
    imagesArray[index].style.animationDuration = '3s'
    circlesArray[index].classList.add('active')
})
