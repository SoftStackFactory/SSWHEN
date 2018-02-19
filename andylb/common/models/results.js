'use strict';

module.exports = function(Results) {
    Results.remoteMethod("benefitData", {
        http: {
            path: "/benefitData",
            verb: "GET"
        },
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
        notes: ["This api will return estimates for Social Security benefits over a range of ages."],
        description: "Calculates benefit estimates.",
        returns: {
            type: 'object',
            root: true
        }
    });

};
