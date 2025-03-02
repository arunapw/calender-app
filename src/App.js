import './App.css';
import CalendarComp from './components/Calendar';
import {Navbar} from "./components/Navbar";
import {CCol, CContainer, CRow} from "@coreui/react";
import {Sidebar} from "./components/Sidebar";
import {cibNodeRed} from "@coreui/icons";

function App() {
    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.3.1/dist/css/coreui.min.css" rel="stylesheet"
                  integrity="sha384-PDUiPu3vDllMfrUHnurV430Qg8chPZTNhY8RUpq89lq22R3PzypXQifBpcpE1eoB"
                  crossorigin="anonymous"/>
            <CContainer style={{'margin': 0}}>
                <CRow style={{'margin': 0, 'padding': 0}}>
                    <CCol xs={2} ><Sidebar/></CCol>
                    <CCol xs={10} >
                        <CRow><Navbar/></CRow>
                        <CRow><CalendarComp/></CRow>
                    </CCol>
                </CRow>
               {/* <CRow style={{'margin': 0, 'padding': 0}}>
                    <CCol xs={2} style={{'margin': 0, 'padding': 0, 'height': 'fit-content'}} class='sidebar'><Sidebar/></CCol>
                    <CCol className="d-flex" style={{
                        'max-height': '90vh',
                        'width': '100vh',
                        'margin': 0,
                        'margin-right': -12,
                        'padding': 0
                    }}><CalendarComp/></CCol>
                </CRow>*/}
            </CContainer>

        </div>
    );
}

export default App;
