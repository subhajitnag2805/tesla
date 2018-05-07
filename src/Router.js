import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/common/Login';
import Regstep1 from './components/common/Regstep1';
import Regstep2 from './components/common/Regstep2';
import Otpstep1 from './components/common/Otpstep1';
import Otpstep2 from './components/common/Otpstep2';
import DriverReg1 from './components/common/DriverReg1';
import DriverReg2 from './components/common/DriverReg2';
import DriverOtp1 from './components/common/DriverOtp1';
import DriverOtp2 from './components/common/DriverOtp2';
import Forgotpassword from './components/common/Forgotpassword';
import FgpOtp1 from './components/common/FgpOtp1';
import FgpOtp2 from './components/common/FgpOtp2';
import Bookride from './components/passenger/Bookride';
import Ridemap from './components/passenger/Ridemap';
import Ridelocation from './components/passenger/Ridelocation';
import Flightbooking from './components/passenger/Flighbooking';
import Continuebooking from './components/passenger/Continuebooking';
import Transportcompany from './components/passenger/Transportcompany';
import Companyprofile from './components/passenger/Companyprofile';
import Pickridedriver from './components/passenger/Pickridedriver';
import Confirmbooking from './components/passenger/Confirmbooking';

/**importing driver modules */
import Ridesappoinmentlist from './components/driver/Ridesappoinmentlist';
import Rideappionmentdetails from './components/driver/Rideappionmentdetails';

class RouterComponent extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth" hideNavBar initial>
                        <Scene key="login" component={Login} initial />
                    </Scene>

                    <Scene key="book" hideNavBar>
                        <Scene key="booking" component={Bookride} initial />
                        <Scene key="ridemap" component={Ridemap} />
                        <Scene key="ridelocation" component={Ridelocation} />
                        <Scene key="flightbooking" component={Flightbooking} />
                        <Scene key="continuebooking" component={Continuebooking} />
                        <Scene key="transportcompany" component={Transportcompany} />
                        <Scene key="companyprofile" component={Companyprofile} />
                        <Scene key="Pickridedriver" component={Pickridedriver} />
                        <Scene key="Confirmbooking" component={Confirmbooking} />
                    </Scene>

                    <Scene key="driverBook" hideNavBar>
                        <Scene key="ridesappoinmentlist" component={Ridesappoinmentlist} initial />
                        <Scene key="rideappionmentdetails" component={Rideappionmentdetails} />
                    </Scene>

                    <Scene key="registerUser" hideNavBar>
                        <Scene key="createUserFirst" component={Regstep1} />
                        <Scene key="createUserSecond" component={Regstep2} />
                        <Scene key="UserOtpStep1" component={Otpstep1} initial />
                        <Scene key="UserOtpStep2" component={Otpstep2} />
                    </Scene>

                    <Scene key="registerDriver" hideNavBar>
                        <Scene key="createDriverFirst" component={DriverReg1} />
                        <Scene key="createDriverSecond" component={DriverReg2} />
                        <Scene key="OtpStep1" component={DriverOtp1} initial />
                        <Scene key="OtpStep2" component={DriverOtp2} />
                    </Scene>

                    <Scene key="forgotPassword" hideNavBar>
                        <Scene key="fpOtpStep1" component={FgpOtp1} initial />
                        <Scene key="fpOtpStep2" component={FgpOtp2} />
                        <Scene key="fgtPassword" component={Forgotpassword} />
                    </Scene>


                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;