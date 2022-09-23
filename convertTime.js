/**
 * 
 *Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description} s 
 * @returns 
 */
function timeConversion(s) {
    // Write your code here
    let realTime;
    if(s.indexOf('AM') !== -1) {
        const time = s.split("AM")[0];
        const temp = time.split(":");
        const hours = parseInt(temp[0]);
        if(hours === 12 ) {
            temp[0] = "00";
        }

        realTime = temp.join(":");
        
        return realTime;
    }
    if(s.indexOf('PM') !== -1) {
        const time = s.split("PM")[0];
        const temp = time.split(":");
        const hours = parseInt(temp[0]);
        const pmHours = hours + 12;
        if (pmHours === 24) {
            temp[0] = "12";
        } else {
            temp[0] = pmHours;
        }
        realTime = temp.join(":");
        return realTime;
      
    }

}