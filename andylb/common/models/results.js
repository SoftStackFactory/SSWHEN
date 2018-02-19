'use strict';

module.exports = function(Results) {

    //create http interaction

    Results.remoteMethod("benefitData", {
        http: {
            path: "/benefitData",
            verb: "GET"
        },

        //set local input / method parameters

        accepts: [{
            arg: "pia",
            required: true,
            type: "number",
            description: "SS Benefit at full retirement age"
    }, {
            arg: "gender",
            required: true,
            type: "string",
            description: "m or f"
    }, {
            arg: "dob",
            required: true,
            type: "string",
            description: "Month and Year of birth (MM-YYYY)"
    }],

        //descriptions for loopback explorer

        notes: ["This api will return estimates for Social Security benefits over a range of ages."],
        description: "Calculates benefit estimates.",
        returns: {
            type: 'object',
            root: true
        }
    });

    //method to calculate data and return benefitData object

//     Results.benefitData = function(pia, gender, dob) {

        //         let fullRetAge = "";

        //         let lifeExpect = "";

        //         let benefit = "";

        //         let cumBenefit = "";

        //         let retirementYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];

        //         let discountRate = 3.5;

        //         let monthlyArray = [];

        //         let cumulativeArray = [];

        //         let pvOfBenefit = [];

        //         let tableData = [];

        //         let FRAbenefitAmount = "";

        //         let benefitData = "";

        //         this.FRAbenefitAmount = pia;

        //         //set average life expectancy based on gender

        //         if (gender === "m") {
        //             //male life expectancy = 83 years = 996 months
        //             this.lifeExpect = 996;
        //         }
        //         else {
        //             //female life expectancy = 85.6 years = 1027 months
        //             this.lifeExpect = 1027;
        //         }

        //         //Manipulate user input to extract year of birth

        //         let dateString: string = dob;
        //         let yearString: any = dateString.substr(0, 4);
        //         let dobYear = Number(yearString);

        //         //Logic to determine full retirement age.  All fulRetAge values in months.

        //         if (dobYear <= 1937) {
        //             this.fullRetAge = 780;
        //         }
        //         else if (dobYear > 1937 && dobYear < 1943) {
        //             this.fullRetAge = 780 + ((dobYear - 1937) * 2);
        //         }
        //         else if (dobYear >= 1943 && dobYear < 1955) {
        //             this.fullRetAge = 792;
        //         }
        //         else if (dobYear >= 1955 && dobYear < 1960) {
        //             this.fullRetAge = 792 + ((dobYear - 1954) * 2);
        //         }
        //         else {
        //             this.fullRetAge = 804;
        //         }

        //         //logic to calculate array of benefit amounts 

        //         for (let targetAge: number = 744; targetAge <= 840; targetAge += 12) {
        //             if (targetAge <= this.fullRetAge) {
        //                 let monthDelta = this.fullRetAge - targetAge;
        //                 if (monthDelta <= 36) {
        //                     this.benefit = Math.round((1 - (monthDelta * (5 / 9) * 0.01)) * pia);
        //                 }
        //                 else {
        //                     //0.2 = reduction for first 36 months
        //                     this.benefit = Math.round((1 - (((monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * pia);
        //                 }
        //             }
        //             else {
        //                 let monthDelta = targetAge - this.fullRetAge;
        //                 let monthlyCredit = 0.08 / 12;
        //                 let creditFactor = 1 + (monthDelta * monthlyCredit);
        //                 this.benefit = Math.round(pia * creditFactor);
        //             }

        //             //calculate cumulative total benefit based on life expectancy

        //             this.cumBenefit = this.benefit * (this.lifeExpect - targetAge);

        //             //push benefit numbers into separate arrays for use in charts

        //             this.monthlyArray.push(this.benefit);
        //             this.cumulativeArray.push(this.cumBenefit);
        //         }

        //         // logic to calculate present value of benefits per retirement age. Discount rate is assumed at 3.5%

        //         let r_monthly = (this.discountRate / 12) / 100;
        //         for (let i = 0; i < this.retirementYears.length; i++) {
        //             let n = (this.lifeExpect / 12 - this.retirementYears[i]) * 12;
        //             this.pvOfBenefits.push(Math.round((this.monthlyArray[i]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly)));
        //         }

        //         this.benefitData = {
        //             retYears: this.retirementYears,
        //             monthly: this.monthlyArray,
        //             cumulative: this.cumulativeArray,
        //             pv: this.pvOfBenefits
        //         }

        //         //empty calculation arrays

        //         // this.monthlyArray = [];
        //         // this.cumulativeArray =[];
        //         // this.pvOfBenefits = [];

        //         return (this.benefitData);

        //     }
        // }

};
