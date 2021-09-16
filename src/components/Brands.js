import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {brandsActions} from '../redux/actions/brandsActions';

class Brands extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: []
        }
    }

    componentDidMount() {
        // call brandActions
        this.props.actions.getBrands();    
    }

    render() {
        const {brands} = this.props.brands;
        console.log(brands, 'this.props.brands');
        
        return (
            <div className="md-5">
                <div className="card">
                    <div className="card-header">Brands</div>
                    <ul className="list-group list-group-flush">
                        {brands.map(brand => (
                            <li className="list-group-item">
                                <input 
                                    className="form-check-input"
                                    type="checkbox"
                                />
                                <label 
                                    className="form-check-label"
                                    style={{display:'inline-block', marginLeft: "1rem"}}
                                >
                                    {brand.name}
                                </label>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state, ownProps) {
    return {
      brands: state.brands
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(brandsActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,  
    mapDispatchToProps 
  )(Brands);