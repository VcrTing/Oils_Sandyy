
// 提取当前 数据
const switch_user_period = function(us) {
    us.bonu_period = us.bonuses ? us.bonuses[ 0 ] : null
    us.orders_period = us.orders
    return us
}

// 清洗后台的 用户数据
const clean_user = function(us) {

    delete us.role
    delete us.enrolled
    delete us.enroller
    delete us.enroller_line

    delete us.sponsor
    delete us.sponsored
    delete us.sponsor_line
    
    delete us.created_at
    delete us.created_by
    delete us.updated_at
    delete us.updated_by

    delete us.registered_date
    delete us.bonus_calculations

    return us
}

export default {
    clean_user,
    switch_user_period
}