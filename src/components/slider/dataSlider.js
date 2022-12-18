import { v4 as uuidv4 } from 'uuid';
import hotel1 from "../../pictures/hotel1.jpeg"
import hotel2 from "../../pictures/hotel2.jpeg"
import hotel3 from "../../pictures/hotel3.jpeg"

const hotelArray = [
    {
        id: uuidv4(),
        title: "Hotel View 1",
        description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet.",
        picture: hotel1
    },
    {
        id: uuidv4(),
        title: "Hotel View 2",
        description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet.",
        picture: hotel2
    },
    {
        id: uuidv4(),
        title: "Hotel View 3",
        description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet.",
        picture: hotel3
    }
]

export  {hotelArray}