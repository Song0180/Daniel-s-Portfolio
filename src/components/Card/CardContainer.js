import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function CardContainer() {
    return (
        <div className="cards">
            <h1>Check out some of the projects that I have contributed to!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Checkout project Friday: A Desktop task management application developed using Java"
                            label="Project"
                            path="/Projects"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Checkout project MySTARS"
                            label="Project"
                            path="/Projects"
                        />
                    </ul>
                    <ul className="cards_items" >
                        <CardItem 
                            src="images/img-3.jpg"
                            text="Checkout official website of FarEast Malls"
                            label="Project"
                            path="/Projects"
                        />
                        <CardItem 
                            src="images/img-4.jpg"
                            text="Checkout official website of Holland Village Residence"
                            label="Project"
                            path="/Projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardContainer
