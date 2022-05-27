var year_id = 'happbaton_childs_info_year'
var month_id = 'happbaton_childs_info_month'
var day_id = 'happbaton_childs_info_day'

var form_1_2 = [ '' ]
var form_2_4 = [ '' ]
var form_4_6 = [ '' ]
var form_6_8 = [ '' ]
var form_8_10 = [ '' ]
var form_10_12 = [ '' ]
 
function _getBirthday() {
    var res = [ ]
    res[ 0 ] = $('#' + year_id).children('option:selected').val()
    res[ 1 ] = $('#' + month_id).children('option:selected').val()
    res[ 2 ] = $('#' + day_id).children('option:selected').val()
    return res
}

function runningBirthdayProgramming() {
    var births = _getBirthday()
    console.log('您选择的生日是：', births)

    var m = births[ 1 ]

    if (m <= 6) {
        if (m <= 2) {  }
        else if (2 < m <= 4) { }
        else {  }
    } else {
        if (6 < m <= 8) {  }
        else if (6 < m <= 10) {  }
        else {  }
    }
}

$('#' + month_id).change(function() { runningBirthdayProgramming() })
$('#' + year_id).change(function() { runningBirthdayProgramming() })
$('#' + day_id).change(function() { runningBirthdayProgramming() })