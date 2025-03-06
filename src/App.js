import './App.css';
import CalendarComp from './components/Calendar';
import CalendarProvider from './components/Calendar';
import {Navbar} from "./components/Navbar";
import {CCol, CContainer, CRow} from "@coreui/react";
import {SidebarEvents} from "./components/SidebarEvents";
import {cibNodeRed} from "@coreui/icons";

function App() {
    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.3.1/dist/css/coreui.min.css" rel="stylesheet"
                  integrity="sha384-PDUiPu3vDllMfrUHnurV430Qg8chPZTNhY8RUpq89lq22R3PzypXQifBpcpE1eoB"
                  crossorigin="anonymous"/>
            <CContainer style={{'margin': 0}}>
                <CRow>
                    <Navbar/>
                </CRow>
                <CRow style={{'margin': 0, 'padding': 0}}>
                    {/*<CCol xs={2} style={{'margin': 0, 'padding': 0, 'height': 'fit-content'}} class='sidebar'><SidebarEvents/></CCol>*/}
                    <CCol className="d-flex" style={{
                        'max-height': '90vh',
                        'width': '100vh',
                        'margin': 0,
                        'margin-right': -12,
                        'padding': 0
                    }}>
                        <CalendarProvider>
                            <SidebarEvents/>
                        </CalendarProvider>
                    </CCol>
                </CRow>
            </CContainer>
            <div>
            </div>
        </div>
    );
}

export default App;
