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
        this.resultBMI = '/health-tools/bmi/result'
        this.group = '/community'
        this.groupdetail = '/community/:id'
        this.veirifyEmail = '/auth/verify-account'
        this.hearttool =  '/health-tools/hearttool'
        this.allspecialtly = '/health-tools/filterstroke'
        this.system = '/system'
        this.specialistManagement = '/system/specialistManagement'
        this.addSpecialist = '/system/addSpecialist'
        this.editSpecialist = '/system/editSpecialist/:id'
        this.clinicManagement = '/system/clinicManagement'
        this.addClinic = '/system/addClinic'
        this.updateClinic = '/system/updateClinic/:id'
        this.hospitalManagement = '/system/hospitalManagement'
        this.addHospital = '/system/addHospital'
        this.updateHospital = '/system/updateHospital/:id'
        this.patientManagement = '/system/patientManagement'
        this.doctorManagement = '/system/doctorManagement'
        this.addDoctor = '/system/addDoctor'
        this.updateDoctor = '/system/updateDoctor/:id'
        this.scheduleManagement = '/system/scheduleManagement'
        this.appointmentManagement = '/system/appointmentManagement'
        this.detailDoctor = '/detailDoctor/:id'
        this.detailSpecialist = '/detailSpecialist/:id'
        this.bookAppointment = '/bookAppointment/:id'
        this.groupManagement = '/system/groupManagement'
        this.addGroup = '/system/addGroup'
        this.updateGroup = '/system/updateGroup/:id'

        this.toolManagement = '/system/toolManagement'
        this.addTool = '/system/addTool'
        this.updateTool = '/system/updateTool/:id'
        this.category = '/category'
        this.filter = '/health-tools/filter'
        this.filterresult = '/health-tools/filter/result'
        this.filterframingham = '/health-tools/framingham'
        this.framinghamresult = '/health-tools/framingham/result'
        this.filterstroke = '/health-tools/stroke'
        this.covid = '/health-tools/covid'
        this.covidresult = '/health-tools/covid/result'
        this.strokeresult = '/health-tools/stroke/result'
    }
}

export const path = new Path()