import React from 'react'

class Option extends React.Component {
    render() {
        return(
            <option value={this.props.value}>{this.props.text}</option>
        )
    }
}

export default class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: this.props.options[0].value
        };
    }

    onSelectChange(e) {
        this.setState({selectValue: e.target.value})
        window.ifasStore.setCompanyInfo(e.target.value)
    }

    render() {
        let options = this.props.options.map((item, index) => {
            return <Option value={item.value} text={item.text} key={index}/>
        });

        return (
            <select name="" id="" value={this.state.selectValue} onChange={this.onSelectChange.bind(this)}>
                {options}
            </select>
        )
    }
}