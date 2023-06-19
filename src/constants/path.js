class Path {
    constructor() {
        this.home = '/'
        this.auth = '/auth'
        this.login = '/login'
        this.register = '/register'
        this.forgotPassword = '/forgotPassword'
        this.profile = '/profile'
        this.healthtools = '/health-tools'
        this.bmi = '/health-tools/bmi'
        this.community = '/community'
        this.groupdetail = '/community/groupdetail'
        this.veirifyEmail = '/auth/verify-account'
        this.hearttool =  '/health-tools/hearttool'
    }
}

export const path = new Path()