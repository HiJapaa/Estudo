const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do ${user.name ?? 'usuário'}" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 🤷‍♂️'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😒'}</p><br>
                                            <p>👻 <span class='bold'>${user.followers}</span> followers · <span class='bold'>${user.following}</span> following</p>
                                        </div>
                                      </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            if (repo.stargazers_count <= 1) {
                repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
                                            ${repo.name}
                                            <div class="repoInfo">
                                                <span>🍴 ${repo.forks_count}</span>
                                                <span>🌟 ${repo.stargazers_count}</span>
                                                <span>👀 ${repo.watchers_count}</span>
                                                <span>👨🏻‍💻 ${repo.language ?? ''}</span>
                                            </div>
                                          </a>
                                      </li>`
            } else {
                repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
                                            ${repo.name}
                                            <div class="repoInfo">
                                                <span>🍴 ${repo.forks_count}</span>
                                                <span>✨ ${repo.stargazers_count}</span>
                                                <span>👀 ${repo.watchers_count}</span>
                                                <span>👨🏻‍💻 ${repo.language ?? ''}</span>
                                            </div>
                                          </a>
                                      </li>`
            }
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach((element) => {
            if (element.type == "CreateEvent") {
                eventsItens += `<li><span class="repoEvent">${element.repo.name}</span> - <span class="eventUpdate">Criado um ${element.payload.ref_type}</span></li>`
            } else {
                eventsItens += `<li><span class="repoEvent">${element.repo.name}</span> - <span class="eventUpdate">${element.payload.commits[0].message}</span></li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class='events section'>
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }