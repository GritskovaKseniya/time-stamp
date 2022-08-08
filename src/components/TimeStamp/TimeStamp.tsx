import React, { useState } from "react";
import '../TimeStamp/TimeStamp.css';
import moment from 'moment';

export function TimeStamp(props) {
    const format = props.dateFormat.replace('hh', 'HH');
    const defaultValue = moment(props.defaultValue || new Date()).format(format);
    const [fieldValue, setFieldValue] = useState(defaultValue);

    function checkDate(fieldValue: string) {
        var moment = require('moment');
        var date = (!moment(fieldValue, format, true).isValid()) ? (fieldValue == '' ? null : undefined) : moment(fieldValue).format(format)
        moment().toDate();
        console.log(date)
        return props.valueChanged(date, fieldValue);
    }

    const [showMsg, setShowMsg] = useState({ visibility: "hidden" });

    return (
        <div className="time-stamp">
            <label>
                Enter the date:
                <input type="text"
                    onBlur={(e) => checkDate(fieldValue)}
                    name="fieldValue"
                    className="padding-sides"
                    onKeyPress={(event) => event.key === 'Enter' ? checkDate(fieldValue) : ""}
                    onChange={event => {
                        setFieldValue(event.target.value);
                        var moment2 = require('moment');
                        console.log(moment2(fieldValue, format, true).isValid())
                        const param = moment2(fieldValue, format, true).isValid() === true ? "visible": "hidden"
                        setShowMsg({ visibility: param})
                        console.log(showMsg)
                    }}
                    placeholder={props.dateFormat}
                    value={fieldValue} />
                    <div className="error-msg" style={showMsg}>Wrong date format!</div>
            </label>
            
        </div>
    );
}