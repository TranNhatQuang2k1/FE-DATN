import { useRef } from 'react'
import { io } from 'socket.io-client'


function useSocket() {
    const { current: socket } = useRef(io('https://localhost', { transports: ['websocket'] }))
    return socket
}

export default useSocket
