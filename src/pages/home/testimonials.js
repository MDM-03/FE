import React from 'react';

// Import Images
import TestimonialImg1 from '../../assets/img/students/student1.jpg';
import TestimonialImg2 from '../../assets/img/students/student2.jpg';
import TestimonialImg3 from '../../assets/img/students/student3.jpg';
import TestimonialImg4 from '../../assets/img/students/student4.jpg';
import TestimonialImg5 from '../../assets/img/students/student5.jpg';
import TestimonialImg6 from '../../assets/img/students/student6.jpg';
import TestimonialImg7 from '../../assets/img/students/student7.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

class Testimonial extends React.Component {

	constructor() {
		super();
		this.state = {			
			showSelected1: true, active1: 'active',
			showSelected2: false, active2: '',
			showSelected3: false, active3: '',
			showSelected4: false, active4: '',
			showSelected5: false, active5: '',
			showSelected6: false, active6: '',
			showSelected7: false, active7: '',
		}
	}

	currentImage1 = () => {
		this.setState({
			showSelected1: true, active1: 'active',
			showSelected2: false, active2: '',
			showSelected3: false, active3: '',
			showSelected4: false, active4: '',
			showSelected5: false, active5: '',
			showSelected6: false, active6: '',
			showSelected7: false, active7: '',
		})
	}

	currentImage2 = () => {
		this.setState({
			showSelected1: false, active1: '',
			showSelected2: true, active2: 'active',
			showSelected3: false, active3: '',
			showSelected4: false, active4: '',
			showSelected5: false, active5: '',
			showSelected6: false, active6: '',
			showSelected7: false, active7: '',
		})
	}

	currentImage3 = () => {
		this.setState({
			showSelected1: false, active1: '',
			showSelected2: false, active2: '',
			showSelected3: true, active3: 'active',
			showSelected4: false, active4: '',
			showSelected5: false, active5: '',
			showSelected6: false, active6: '',
			showSelected7: false, active7: '',
		})
	}

	currentImage4 = () => {
		this.setState({
			showSelected1: false, active1: '',
			showSelected2: false, active2: '',
			showSelected3: false, active3: '',
			showSelected4: true, active4: 'active',
			showSelected5: false, active5: '',
			showSelected6: false, active6: '',
			showSelected7: false, active7: '',
		})
	}

	currentImage5 = () => {
		this.setState({
			showSelected1: false, active1: '',
			showSelected2: false, active2: '',
			showSelected3: false, active3: '',
			showSelected4: false, active4: '',
			showSelected5: true, active5: 'active',
			showSelected6: false, active6: '',
			showSelected7: false, active7: '',
		})
	}

	currentImage6 = () => {
		this.setState({
			showSelected1: false, active1: '',
			showSelected2: false, active2: '',
			showSelected3: false, active3: '',
			showSelected4: false, active4: '',
			showSelected5: false, active5: '',
			showSelected6: true, active6: 'active',
			showSelected7: false, active7: '',
		})
	}

	currentImage7 = () => {
		this.setState({
			showSelected1: false, active1: '',
			showSelected2: false, active2: '',
			showSelected3: false, active3: '',
			showSelected4: false, active4: '',
			showSelected5: false, active5: '',
			showSelected6: false, active6: '',
			showSelected7: true, active7: 'active',
		})
	}

	render() {
		
		return (
			<div className="testimonial-container">

				<div className="row image-row">
					<img className={`testi-user-img cursor ${this.state.active1}`} src={TestimonialImg1} alt="User" onClick={() => this.currentImage1()} />
					<img className={`testi-user-img cursor ${this.state.active2}`} src={TestimonialImg2} alt="User" onClick={() => this.currentImage2()} />
					<img className={`testi-user-img cursor ${this.state.active3}`} src={TestimonialImg3} alt="User" onClick={() => this.currentImage3()} />
					<img className={`testi-user-img cursor ${this.state.active4}`} src={TestimonialImg4} alt="User" onClick={() => this.currentImage4()} />
					<img className={`testi-user-img cursor ${this.state.active5}`} src={TestimonialImg5} alt="User" onClick={() => this.currentImage5()} />
					<img className={`testi-user-img cursor ${this.state.active6}`} src={TestimonialImg6} alt="User" onClick={() => this.currentImage6()} />
					<img className={`testi-user-img cursor ${this.state.active7}`} src={TestimonialImg7} alt="User" onClick={() => this.currentImage7()} />
				</div>

				{this.state.showSelected1 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>Davis Payerf</h4>
                        <h5>Arts & Music</h5>
					</div>
				}

				{this.state.showSelected2 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>John Smith</h4>
                        <h5>Music</h5>
					</div>
				}

				{this.state.showSelected3 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>Davis Payerf</h4>
                        <h5>Arts & Music</h5>
					</div>
				}

				{this.state.showSelected4 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>John Smith</h4>
                        <h5>Music</h5>
					</div>
				}

				{this.state.showSelected5 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>Davis Payerf</h4>
                        <h5>Arts & Music</h5>
					</div>
				}

				{this.state.showSelected6 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>John Smith</h4>
                        <h5>Music</h5>
					</div>
				}

				{this.state.showSelected7 === true && 
					<div className="myslides text-center">
						<div className="ratings mb-3 mt-3">
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-selected" />
                            <FontAwesomeIcon icon={faStar} className="star-deselected" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing. Quam eu tellus congue ridiculus quam scelerisque sed.</p>
                        <h4>John David</h4>
                        <h5>Arts</h5>
					</div>
				}
			</div>
			
		)
	}
}

export { Testimonial };