import React, { useState } from "react";
import '../TimeStamp/TimeStamp.css';
import * as dayjs from 'dayjs';

export function TimeStamp(props) {
    const format = props.dateFormat.replace('hh', 'HH');
    const defaultValue = dayjs(props.defaultValue || new Date()).format(format);
    const [fieldValue, setFieldValue] = useState(defaultValue);
    // const separators = format.test(/[a-z]/gi, '');
    function checkDate(fieldValue: string) {
        var date = !dayjs(fieldValue, format, true).isValid() ? (fieldValue === 
            '' ? null : (/^(?![0-9]+$).*$/.test(fieldValue) ? setShowMsg({ visibility: "visible"}) : undefined)) : dayjs(fieldValue).format(format)
        dayjs().toDate();
        console.log(date)
        return props.valueChanged(date, fieldValue);
    }

    const [showMsg, setShowMsg] = useState({ visibility: "hidden" });

    return (
        <div className="time-stamp">
            <div>date format {props.dateFormat}</div>
            <label>
                Enter the date:
                <input type="text"
                    onBlur={(e) => checkDate(fieldValue)}
                    name="fieldValue"
                    className="padding-sides"
                    onKeyPress={(event) => event.key === 'Enter' ? checkDate(fieldValue) : ""}
                    onChange={event => {
                        setFieldValue(event.target.value);
                        console.log(dayjs(fieldValue, format, true).isValid())
                        const param = dayjs(fieldValue, format, true).isValid() ? "hidden" : "visible"
                        setShowMsg({ visibility: param})
                        console.log("showMsg", showMsg)
                    }}
                    placeholder={props.dateFormat}
                    value={fieldValue} />
                    <div className="error-msg" style={showMsg}>Wrong date format!</div>
            </label>
        </div>
    );
}