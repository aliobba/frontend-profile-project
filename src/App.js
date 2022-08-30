import map from './img/Map of Birmingham (County).png';
import logo from './img/pfp.png';
import header from './img/header.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div class="profile-page tx-13">
                <div className='container-fluid'>

                    <div class="row">
                        <div class="col-12 grid-margin">
                            <div class="profile-header">
                                <div class="cover">

                                    <figure>
                                        <img src={header} class="img-fluid" alt="profile cover" />


                                    </figure>
                                    <div className='cover-body container-fluid'>
                                        <div className='row justify-content-between'>
                                            <div className='col-md'>
                                                <div className='row'>
                                                    <div className='col-md d-flex justify-content-center justify-content-md-end'>
                                                        <img class="profile-pic" src={logo} alt="profile" />
                                                    </div>
                                                    <div className='col-md d-flex align-self-md-center justify-content-center justify-content-md-start mt-5'>
                                                        <div className='row'>
                                                            <div className='col text-center text-md-start'>
                                                                <h1 class="profile-name">Annette Dube</h1>
                                                                <h1 class="profile-date">08/12/1952 - 08/04/2022</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 d-flex align-self-md-center justify-content-center justify-content-md-end mr-md-5 mt-5'>
                                                <button class="btn btn-primary btn-icon-text btn-edit-profile" style={{ fontWeight: 'bold', backgroundColor: '#0D63C0'/* , marginTop: 60 */ }}>
                                                    Partager
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <nav class="navbar navbar-expand-md bg-light">
                                    <div class="collapse navbar-collapse header-links">
                                        <ul class="navbar-nav justify-content-center">
                                            <li class="nav-item active">
                                                <a class="nav-link mx-3 text-center" aria-current="page">PARCOURS</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mx-3 text-center">GALERIE</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mx-3 text-center">VIDEOS</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mx-3 text-center">PARENTE</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container'>
                    <div class="row profile-body" >
                        <div class="col-md-4 col-xl-4">
                            <div class="card rounded">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <h6 class="card-title mb-0">Emplacement</h6>


                                    </div>

                                    <div class="mt-3">
                                        <img class="img-fluid" src={map} alt="" />

                                    </div>


                                </div>
                            </div>
                            <br />
                            <br />
                            <div class="card rounded">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <h6 class="card-title mb-0">Timeline</h6>


                                    </div>

                                    <div class="mt-3">
                                        <img class="img-fluid" src={map} alt="" />

                                    </div>


                                </div>
                            </div>
                        </div>


                        <div class="col-md-8 col-xl-8">
                            <div class="row">
                                <div class="col-md-12 grid-margin">
                                    <div class="card rounded">
                                        <div class="card-header">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">

                                                    <div class="ml-2">
                                                        <p>Bio</p>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p class="mb-3 tx-14">Anette dube est une designer at artiste candienne qui a vecu a montreal. Son travail se concentre sur l’idee de soi,
                                                explorant quel role il joue dans notre comprehension du monde et comment il faconne nos interactions avec les autres.</p>
                                            <img class="img-fluid" src="../../../assets/images/sample2.jpg" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <div class="col-md-12 grid-margin ">
                                    <div class="card rounded">
                                        <div class="card-header">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">

                                                    <div class="ml-2">
                                                        <p>Photos</p>

                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary btn-icon-text btn-edit-profile" style={{ fontWeight: 'bold', backgroundColor: '#0D63C0' }}>
                                                        Afficher Plus
                                                    </button>



                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">

                                            <p class="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>

                                            <img class="img-fluid" src={map} alt="" />

                                        </div>


                                    </div>
                                </div>
                                <div class="col-md-12 grid-margin ">
                                    <div class="card rounded">
                                        <div class="card-header">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">

                                                    <div class="ml-2">
                                                        <p>Parente</p>

                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary btn-icon-text btn-edit-profile" style={{ fontWeight: 'bold', backgroundColor: '#0D63C0' }}>
                                                        Afficher Plus
                                                    </button>



                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">

                                            <p class="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>

                                            <img class="img-fluid" src={map} alt="" />

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
