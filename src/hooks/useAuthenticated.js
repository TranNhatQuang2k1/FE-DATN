import { useSelector } from 'react-redux'

export function useAuthenticated() {
    return useSelector(state => Boolean(state.user.profile.email)) && Boolean(localStorage.getItem('access_token'))
}
