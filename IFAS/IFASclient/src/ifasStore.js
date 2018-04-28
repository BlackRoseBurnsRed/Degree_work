class IfasStore {
    constructor() {
        this.networkModel = "";
        this.companyName = "";
        this.companyCode = "";
        this.shareValues = {};
    }

    setNetworkModel(modelName) {
        this.networkModel = modelName;
    }

    getNetworkModel() {
        return this.networkModel;
    }

    setCompanyInfo(companyCode, shareValues, companyName = "") {
        this.companyCode = companyCode;
        this.shareValues = shareValues ? shareValues : this.shareValues;
        this.companyName = companyName ? companyName : this.companyName;
    }

    getCompanyInfo() {
        return {
            companyCode: this.companyCode,
            companyName: this.companyName,
            shareValues: this.shareValues
        }
    }
}

export default new IfasStore();