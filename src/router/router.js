import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
    Home,
    AddBilling,
    EditBilling,
    AddEnquiry,
    EditEnquiry,
    BlogDetails,
    BlogGrid,
    BlogList,
    Booking,
    BookingSuccess,
    ChangePassword,
    Checkout,
    Components,
    Favourites,
    ForgotPassword,
    Invoices,
    InvoiceView,
    Login,
    PrivacyPolicy,
    TermsCondition,    
    TeacherChangePassword,
    TeacherDashboard,
    TeacherProfileSettings,
    TeacherRegister,
    Register,
    ProfileSettings,
    Search,
    StudentDashboard,
    StudentProfile,  
    MyStudents,
    Appointments,
    MyAccount,

} from '../pages';

import { Header, Footer } from '../_components';

import config from 'config';
// CSS Files
// Bootstrap CSS
import '../assets/plugins/bootstrap/css/bootstrap.min.css';

// Font Awesome
import '../assets/plugins/fontawesome/css/fontawesome.min.css';
import '../assets/plugins/fontawesome/css/all.min.css';

// Custom CSS
import '../assets/css/style.css';

class RouterComponent extends React.Component {

    render() {
        return (
            
            <Router basename={`${config.publicPath}`} >

                <div className="main-wrapper">
                
                    <Route render={(props) => <Header {...props} />} />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add-billing" component={AddBilling} />
                        <Route path="/edit-billing" component={EditBilling} />
                        <Route path="/add-enquiry" component={AddEnquiry} />
                        <Route path="/edit-enquiry" component={EditEnquiry} />
                        <Route path="/blog-details" component={BlogDetails} />
                        <Route path="/blog-grid" component={BlogGrid} />
                        <Route path="/blog-list" component={BlogList} />
                        <Route path="/booking" component={Booking} />
                        <Route path="/booking-success" component={BookingSuccess} />
                        <Route path="/change-password" component={ChangePassword} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/components" component={Components} />
                        <Route path="/favourites" component={Favourites} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Route path="/invoices" component={Invoices} />
                        <Route path="/invoice-view" component={InvoiceView} />
                        <Route path="/login" component={Login} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/terms-condition" component={TermsCondition} />                        
                        <Route path="/teacher-change-password" component={TeacherChangePassword} />
                        <Route path="/teacher-dashboard" component={TeacherDashboard} />
                        <Route path="/teacher-profile-settings" component={TeacherProfileSettings} />
                        <Route path="/teacher-register" component={TeacherRegister} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile-settings" component={ProfileSettings} />
                        <Route path="/search" component={Search} />
                        <Route path="/student-dashboard" component={StudentDashboard} />
                        <Route path="/student-profile" component={StudentProfile} />
                        <Route path="/my-students" component={MyStudents} />               
                        <Route path="/appointments" component={Appointments} />
                        <Route path="/my-account" component={MyAccount} />
                    </Switch>
                    <Route render={(props) => <Footer {...props} />} />
                    
                </div>                    

            </Router>
                    
        )
    }
}
export { RouterComponent };