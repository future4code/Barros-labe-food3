export const goToSignupPage = (navigator) => {
    navigator('/signup')
}

export const goToFeedPage = (navigator) => {
    navigator('/feed')
}

export const goToLoginPage = (navigator) => {
    navigator('/')
}

export const GoToDetailPage = (navigator, id) => {
    navigator (`/Detail-Restaurant/${id}`)
}