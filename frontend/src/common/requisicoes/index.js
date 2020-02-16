import axios from 'axios'

export async function get(url, config, onSuccess, onError, dispararAcoes = true) {
    dispatchRequest(dispararAcoes)
    return await axios.get(url, config)
        .then(resolveSuccess(onSuccess, dispararAcoes))
        .catch(resolveError(onError, dispararAcoes))
}

export async function post(url, payload, config, onSuccess, onError, dispararAcoes = true) {
    dispatchRequest(dispararAcoes)
    return await axios.post(url, payload, config)
        .then(resolveSuccess(onSuccess, dispararAcoes))
        .catch(resolveError(onError, dispararAcoes))
}

export async function put(url, payload, config, onSuccess, onError, dispararAcoes = true) {
    dispatchRequest(dispararAcoes)
    return await axios.put(url, payload, config)
        .then(resolveSuccess(onSuccess, dispararAcoes))
        .catch(resolveError(onError, dispararAcoes))
}

export async function patch(url, payload, config, onSuccess, onError, dispararAcoes = true) {

    dispatchRequest(dispararAcoes)
    return await axios.patch(url, payload, config)
        .then(resolveSuccess(onSuccess, dispararAcoes))
        .catch(resolveError(onError, dispararAcoes))
}

export async function del(url, config, onSuccess, onError, dispararAcoes = true) {
    dispatchRequest(dispararAcoes)
    return await axios.delete(url, config)
        .then(resolveSuccess(onSuccess, dispararAcoes))
        .catch(resolveError(onError, dispararAcoes))
}


