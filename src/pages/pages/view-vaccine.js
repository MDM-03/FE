import React from 'react';
import { Link } from 'react-router-dom';

// Import Image
import Logo from '../../assets/img/logo.png';

class VaccineView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:3000/vaccine/vaccinecate")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.vaccine
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        return (
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Vaccine View</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Vaccine View</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="invoice-content">
                                    <div className="invoice-item">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="invoice-logo">
                                                    <img src={Logo} alt="logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Invoice Item */}
                                    <div className="invoice-item">

                                        {this.state.isLoaded ? this.state.data.map((item) => (
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="invoice-info">
                                                        <strong className="customer-text">Information Vaccine</strong>
                                                        <p className="invoice-details invoice-details-two">
                                                            T??n Vaccine: {item['NAMEVACCINE']} <br />

                                                            <br />
                                                            Ngu???n: {item['SOURCE']} <br />
                                                            <br />
                                                            Chi Ph??: {item['PRICE']} <br />

                                                            <br />
                                                            Ng???a b???nh: {item['PREVENTION']}<br />

                                                            <br />
                                                            S??? l?????ng: {item['QUANTITY']}<br />

                                                            <br />
                                                            T??n Danh m???c: {item['NAMECATEGORY']} <br />
                                                        </p>
                                                    </div>
                                                    <br />

                                                </div>
                                            </div>
                                        )) : ''}
                                    </div>
                                    {/* Invoice Item */}

                                    {/* Invoice Information */}
                                    <div className="other-info">
                                        <h4>Note:</h4>
                                        <p className="text-muted mb-0">Th??ng tin vaccine</p>
                                    </div>
                                    {/* Invoice Information */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { VaccineView };