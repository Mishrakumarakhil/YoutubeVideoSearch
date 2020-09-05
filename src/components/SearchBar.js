import React from 'react'

class SearchBar extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             term:''
        }
    }
    handleChange=(e)=>{
        this.setState({
         term:  e.target.value
        })
    }

    onFormSubmit=(e)=>{
       e.preventDefault();
       this.props.onFormSubmit(this.state.term);
    }
    
    render(){
    
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Videos Type</label>
                        <input type="text" value={this.state.term} onChange={this.handleChange}></input>
                    </div>


                </form>
                  
            </div>
        )
    }
}

export default SearchBar