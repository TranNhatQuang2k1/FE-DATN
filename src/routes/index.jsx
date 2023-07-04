import { path } from '../constants/path'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePages'
import BMI from '../pages/HealthTools/BMI'
import Profile from '../pages/Profile'
import HealthTools from '../pages/HealthTools'
import Communitygroup from '../pages/Community'
import Hearttool from '../pages/HealthTools/Screening/Heartool'
import Groupdetail from '../pages/Community/Groupdetail'
import VerifyEmail from '../pages/Auth/VerifyEmail'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import MainLayout from '../layouts/MainLayout'
import UnauthenticatedGuard from '../guards/UnauthenticatedGuard'
import AuthLayout from '../layouts/AuthLayout'
import SystemAuthenticated from '../guards/SystemAuthenticated'
import SystemLayout from '../layouts/SystemLayout'
import AddSpecialist from '../pages/Specialist/AddSpecialist'
import EditSpecialist from '../pages/Specialist/EditSpecialist'
import SpecialistManagement from '../pages/Specialist/SpecialistManagement'
import AddDoctor from '../pages/Doctor/AddDoctor'
import BookAppointment from '../pages/BookAppointment'
import AddClinic from '../pages/Clinic/AddClinic'
import ClinicManagement from '../pages/Clinic/ClinicManagement'
import UpdateClinic from '../pages/Clinic/UpdateClinic'
import DetailDoctor from '../pages/DetailDoctor'
import DetailSpecialist from '../pages/DetailSpecialist'
import DoctorManagement from '../pages/Doctor/DoctorManagement'
import UpdateDoctor from '../pages/Doctor/UpdateDoctor'
import AddHospital from '../pages/Hospital/AddHospital'
import HospitalManagement from '../pages/Hospital/HospitalManagement'
import UpdateHospital from '../pages/Hospital/UpdateHospital'
import AddSchedule from '../pages/Schedule/AddSchedule'
// import AppointmentManagement from '../pages/Appointment/AppointmentManagement'
import ScheduleDoctorManagement from '../pages/Schedule/ScheduleDoctorManagement'
import AppointmentManagement from '../pages/Appointment/AppointmentManagement'
import AddGroup from '../pages/Group/AddGroup'
import GroupManagement from '../pages/Group/ManagerGroup'
import ResultBMI from '../pages/HealthTools/BMI/ResultBMI'
import Allcategories from '../pages/Categories'
import Filter from '../pages/HealthTools/Screening/Heartool/Filter'
import FilterResult from '../pages/HealthTools/Screening/Heartool/FilterResult'
import FraminghamRisk from '../pages/HealthTools/Screening/Heartool/FraminghamRisk'
import StrokeRisk from '../pages/HealthTools/Screening/Heartool/StrokeRisk'
import Allspecialtly from '../pages/Allspecialtly'
import StrokeResult from '../pages/HealthTools/Screening/Heartool/StrokeRisk/Strokeresult'
import FraminghamResult from '../pages/HealthTools/Screening/Heartool/FraminghamRisk/FraminghamResult'
import Covid from '../pages/HealthTools/Screening/Heartool/Covid'
import CovidResult from '../pages/HealthTools/Screening/Heartool/Covid/CovidResult'

function RoutesComponent() {
  return (
    <BrowserRouter>
      {/* <Routes>
          <Route path={path.veirifyEmail} element={<VerifyEmail />} />
          <Route path={path.login} element={<Login />} />
          <Route path={path.register} element={<Register />} />
          <Route path={path.profile} element={<Profile />} />
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.healthtools} element={<HealthTools />} />
          <Route path={path.bmi} element={<BMI />} />
          <Route path={path.community} element={<Communitygroup />} />
          <Route path={path.groupdetail} element={<Groupdetail />} />
          <Route path={path.hearttool} element={<Hearttool />} />
      </Routes> */}
            <Routes>
                <Route path= {path.veirifyEmail} element = {<VerifyEmail />}/>
                <Route element = {<MainLayout />}>
                    <Route path = {path.home} element = {<HomePage />}/>
                    <Route path={path.profile} element={<Profile />} />
                    <Route path = {path.group} element = {<Communitygroup />} />
                    <Route path = {path.groupdetail} element = {<Groupdetail />} />
                    <Route path = {path.healthtools} element = {<HealthTools />} />
                    <Route path = {path.detailDoctor} element = {<DetailDoctor />}/>
                    <Route path={path.detailSpecialist} element = {<DetailSpecialist />} />
                    {/* <Route path={path.detailCategorieslist} element = {<DetailCategorylist />} /> */}
                    <Route path = {path.bookAppointment} element = {<BookAppointment />}/>
                    <Route path = {path.bmi} element = {<BMI />}/>
                    <Route path = {path.resultBMI} element = {<ResultBMI     />}/>
                    <Route path = {path.hearttool} element = {<Hearttool />}/>
                    <Route path = {path.category} element = {<Allcategories />}/>
                    <Route path = {path.allspecialtly} element = {<Allspecialtly     />}/>
                    <Route path = {path.filter} element = {<Filter />}/>
                    <Route path = {path.filterresult} element = {<FilterResult />}/>
                    <Route path = {path.filterframingham} element = {<FraminghamRisk />}/>
                    <Route path = {path.framinghamresult} element = {<FraminghamResult />}/>
                    <Route path = {path.filterstroke} element = {<StrokeRisk />}/>
                    <Route path = {path.strokeresult} element = {<StrokeResult />}/>
                    <Route path = {path.covid} element = {<Covid />}/>
                    <Route path = {path.covidresult} element = {<CovidResult />}/>
                </Route>
                <Route element = {<SystemAuthenticated />}>
                    <Route path={path.system} element = {<SystemLayout />}>
                        <Route path={path.specialistManagement} element = {<SpecialistManagement />}/>
                        <Route path = {path.addSpecialist} element = {<AddSpecialist />}/>
                        <Route path = {path.editSpecialist} element = {<EditSpecialist />}/>
                        
                        <Route path={path.clinicManagement} element = {<ClinicManagement />}/>
                        <Route path = {path.addClinic} element = {<AddClinic />}/>
                        <Route path = {path.updateClinic} element = {<UpdateClinic />}/>

                        <Route path = {path.hospitalManagement} element = {<HospitalManagement />}/>
                        <Route path = {path.addHospital} element = {<AddHospital />}/>
                        <Route path = {path.updateHospital} element = {<UpdateHospital />}/> 
                        {/* <Route path = {path.patientManagement} element = {<PatientList />}/> */}

                        <Route path= {path.doctorManagement} element = {<DoctorManagement />}/>
                        <Route path = {path.addDoctor} element = {<AddDoctor />} />
                        <Route path = {path.updateDoctor} element = {<UpdateDoctor />} />
                        
                        <Route path= {path.groupManagement} element = {<GroupManagement />}/>
                        <Route path = {path.addGroup} element = {<AddGroup />} />
                        <Route path = {path.updateGroup} element = {<UpdateDoctor />} />


                        <Route path = {path.addSchedule} element = {<AddSchedule />} />
                        <Route path = {path.scheduleManagement} element = {<ScheduleDoctorManagement />} />

                        <Route path = {path.appointmentManagement} element = {<AppointmentManagement />} />

                    </Route>
                </Route>
                <Route element = {<UnauthenticatedGuard />}>
                    <Route element = {<AuthLayout />}>
                        <Route path = {path.login} element = {<Login />}/>
                        <Route path = {path.register} element = {<Register />} />
                    </Route>
                </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent;
