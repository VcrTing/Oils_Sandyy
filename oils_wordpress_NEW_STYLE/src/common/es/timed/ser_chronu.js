import moment from 'moment'

const sort_time = function(n, o) {
    return (moment(n) > moment(o))
}

const run_year = function(year) {
    let res = false

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year% 400) {
                res = true
            }
        } else {
            res = true
        }
    } 

    return res
}

const chronu_start = function(start) {
    let year = start.substring(0, 4)
    let mm = start.substring(5, 7)
    let day = start.substring(8, 10)
    
    /*
    year = '2016'
    mm = '02'
    day = '28'
    console.log(year, mm ,day)
    */

    let run = run_year(Number.parseInt(year))
    day = Number.parseInt(day)
    day += 1

    if (Number.parseInt(mm) == 2) {
        if (!run) {
            mm = '03'
            day = 1
        }
    }

    day = day < 10 ? ('0' + day) : day
    let res = year + '-' + mm + '-' + day
    
    return res
}

export default {
    run_year,
    sort_time,
    chronu_start
}