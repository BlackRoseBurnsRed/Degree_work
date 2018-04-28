import React, { Component } from 'react';
import SelectBox from '../../components/SelectBox/SelectBox'
import config from '../../config/conf'
import ApiProvider from '../../api/ApiProvider'
import './Main.css'
import $ from 'jquery'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            models: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        let models = [];
        ApiProvider.get('models', {})
            .then((data) => {
                models = data.models;
                this.setState({models: data.models.map((item) => {
                        return {value: item, text: item}
                    })})
            })
        this.setState({'models': models})
        debugger
    }

    onBtnClick(e) {
        debugger
        ApiProvider.get('getShareValues', {companyCode: 'WIKI/AAPL'})
            .then((data) => {
                data.shareValue = "\"" + data.shareValue + "\""
                data.shareValue = JSON.parse(data.shareValue);
                debugger
            })
            .catch((e) => {
            })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h2>Intellect Forex Analitic System</h2>
                </div>
                <SelectBox options={config.companies.map((item) => {
                    return {value: item.code, text: item.company}
                })} />

                <button onClick={this.onBtnClick.bind(this)}>Get Fuck</button>
                <div>
                    {this.state.models.length > 0 && <SelectBox options={this.state.models} />}
                </div>
            </div>
        )
    }
}

export default Main
