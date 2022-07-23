//Practica 1
/*hacer una tabla con los nombres de los mentores y 
los promedios de cada asignatura junto con el promedio general*/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
//              score:8
                score:0
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]


const getSignatureScore = (signature, scoresArray) => {
    let score = scoresArray.filter( score => score.signature === signature )[0].score
    return score
}

const deleteMentor = event => {
    console.log(event.target)
    let mentorIndex = event.target.dataset.mentorIndex
    mentorsArray.splice(mentorIndex,1)
    console.log(mentorsArray)

    printTable()
}




const printTable = () => {


    let globalAverage = 0; // promedio


    let table = document.getElementById("mentor-table")

    while (table.lastElementChild){
        table.removeChild( table.lastElementChild );
    }

    mentorsArray.forEach( (mentor, index ) => {


        let mentorAverage = mentor.scores.reduce( (accum, current) => accum + current.score,0) / mentor.scores.length // promedio
        console.log(mentorAverage)
        globalAverage = mentorAverage / mentorsArray.length
        console.log(globalAverage) // Promedio General 


        let mentorRow = document.createElement( "tr" )

        let indexTd = document.createElement( "td" ) // #

        let nameTd = document.createElement( "td" )
        let htmlTd = document.createElement( "td" )
        let cssTd = document.createElement( "td" )
        let jsTd = document.createElement( "td" )
        let reactTd = document.createElement( "td" )
        let aveTd = document.createElement( "td" )
        let buttonTd = document.createElement( "td" ) // button

        let mentorIndex = document.createTextNode( index + 1 ) //#

        let mentorName = document.createTextNode(mentor.name)
        let htmlScore = document.createTextNode( getSignatureScore("HTML", mentor.scores))
        let cssScore = document.createTextNode( getSignatureScore("CSS", mentor.scores))
        let jsScore = document.createTextNode( getSignatureScore("JS", mentor.scores))
        let reactScore = document.createTextNode( getSignatureScore("ReactJS", mentor.scores))

        let aveText = document.createTextNode(mentorAverage)

        let deleteButton = document.createElement( "button" )  // button
        deleteButton.className = ("btn btn-danger btn-delete")
        deleteButton.dataset.mentorIndex = index
        let deleteButonText = document.createTextNode( "Eliminar" )

        deleteButton.appendChild(deleteButonText)  // button

        indexTd.appendChild(mentorIndex) //#

        nameTd.appendChild(mentorName)
        htmlTd.appendChild(htmlScore)
        cssTd.appendChild(cssScore)
        jsTd.appendChild(jsScore)
        reactTd.appendChild(reactScore)
        aveTd.appendChild(aveText)
        buttonTd.appendChild(deleteButton)  // button

        mentorRow.appendChild(indexTd) //#

        mentorRow.appendChild(nameTd)
        mentorRow.appendChild(htmlTd)
        mentorRow.appendChild(cssTd)
        mentorRow.appendChild(jsTd)
        mentorRow.appendChild(reactTd)
        mentorRow.appendChild(aveTd)
        mentorRow.appendChild(buttonTd) // button
        
//        let table = document.getElementById("mentor-table")

        table.appendChild( mentorRow )

        let buttons = document.querySelectorAll(".btn-delete") // button

        buttons.forEach( button => {
            button.addEventListener( "click", deleteMentor )
        })
 
    })
}

printTable()