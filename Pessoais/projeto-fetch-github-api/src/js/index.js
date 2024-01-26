import { getUser } from './services/user.js'
import { getRepos } from './services/repositories.js'
import { getEvents } from './services/events.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const inputValue = document.getElementById('input-search').value
    if (validateEmptyInput(inputValue)) return
    getUserData(inputValue)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if (validateEmptyInput(inputValue)) return
        getUserData(inputValue)
    }
})

function validateEmptyInput (inputValue){
    if(inputValue.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepos(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    
    screen.renderUser(user)
}