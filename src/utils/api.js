import axios from 'axios'

const API = {
    searchRepos(term) {
        return axios(`https://api.github.com/search/repositories?q=${term}`)
    }
    //you can put more methods here, like the below example
    // getRepo(id) {
    //     return axios(`https://api.github.com/search/repositories?q=${id}`)
    // }    
}

export default API