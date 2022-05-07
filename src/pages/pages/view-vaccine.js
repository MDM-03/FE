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
        fetch("http://localhost:3000/vaccine/pack?fbclid=IwAR3ncjj3Ob4zbKmL5Pdzc0xCjXrlsw4up1eMMK4OsC1i6sJBTvmBdtE5dG8")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.pack
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
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="invoice-info">
                                                    <strong className="customer-text">Information Vaccine</strong>
                                                    <p className="invoice-details invoice-details-two">
                                                        {this.state.isLoaded ? this.state.data['customer']['Name'] : ''} Tên vaccine<br />

                                                        <br />
                                                        {this.state.isLoaded ? this.state.data['customer']['PhoneNumber'] : ''} Nguồn vaccine SOURCE <br />
                                                        <br />
                                                        {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} Giá vaccine PRICE<br />

                                                        <br />
                                                        {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} Tránh những bệnh PREVENTION<br />

                                                        <br />
                                                        {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} INFORMATION<br />

                                                        <br />
                                                        {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} OTHERDESCRIPTION<br />
                                                    </p>
                                                </div>
                                                <br />

                                            </div>
                                        </div>

                                        {this.state.isLoaded ? this.state.data.map((item) => (
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="invoice-info">
                                                        <strong className="customer-text">Information Vaccine</strong>
                                                        <p className="invoice-details invoice-details-two">
                                                            {this.state.isLoaded ? this.state.data['NAMEPACK'] : ''} <br />

                                                            <br />
                                                            {this.state.isLoaded ? this.state.data['customer']['PhoneNumber'] : ''} Nguồn vaccine SOURCE <br />
                                                            <br />
                                                            {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} Giá vaccine PRICE<br />

                                                            <br />
                                                            {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} Tránh những bệnh PREVENTION<br />

                                                            <br />
                                                            {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} INFORMATION<br />

                                                            <br />
                                                            {this.state.isLoaded ? this.state.data['customer']['Address'] : ''} OTHERDESCRIPTION<br />
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
                                        <p className="text-muted mb-0">Thông tin vaccine</p>
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