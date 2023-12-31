import axios from "axios";

const api = axios.create({
    baseURL: 'https://be-nc-news-f47c.onrender.com/api'
})

export const getArticles = async (topic, sort_by, order) => {
const res = await api.get(`/articles`, {params: {topic, sort_by, order}})
return res.data
}

export const getArticleByID = async (id) => {
    const res = await api.get(`/articles/${id}`)
    return res.data
}

export const getCommentsByArticleID = async (id) => {
    const res = await api.get(`/articles/${id}/comments`)
    return res.data
}

export const patchArticleVotes = async (id, body) => {
    const res = await api.patch(`/articles/${id}`, {inc_votes: body})
    return res.data
}

export const postCommentByArticleID = async (id, body) => {
    const res = await api.post(`articles/${id}/comments`, body)
    return res.data
}

export const getTopics = async () => {
    const res = await api.get ('/topics')
    return res.data
}

export const getUsers = async () => {
    const res = await api.get('/users')
    return res.data
}

export const deleteComments = async (id) => {
    await api.delete(`/comments/${id}`)
}