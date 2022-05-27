
module.exports = {
    MENU: {
        user_center: '個人中心',
        buy_record: '購買記錄',
        loyalty_record: '忠誠度積分',
        inventory_record: '庫存列表',

        bonus_statement: '獎金報表',
        bonus_detail: '獎勵明細',
        tree_structure: '樹形結構',
        web_setting: '站點配置',
        
        date_changer: '月份切換',
        member_changer: '成員切換',

        active_house: '活躍分店',
        recommend: '首購推薦',
        team_layer: '團隊獎金',

        share_detail: '分紅明細',
        
        manage_share: '管理獎金',
        develop_share: '發展獎金',

        commission_total: '會計界面',

        sponser_structure: 'Sponsor 結構',
        enroller_structure: 'Enroller 結構',
    },
    USER: {
        member_code: '會員編號',
        member_username: '會員名稱',
        member_display_name: '會員名稱',
        member_level: '支付級別',
        member_pv: 'PV',

        level_null: '無級別',

        member_position: '職位',
        now_usd: '本期獎金',
        member_code_another: '會員編號',
        member_username_another: '會員名稱',
        phone: '電話號碼',

        childs_num: '子成員總數',
        sponsor_id: 'Sponsor ID',
        enroller_id: 'Enroller ID',
        sponsor_name: 'Sponsor Name',
        enroller_name: 'Enroller Name'
    },
    ORDER: {
        code_simple: '訂單號',
        code: '訂單編號',
        point: '訂單點數',
        date: '訂單日期',
        role: '會員種類',

        price: '價格',
        quantity: '數量',
        unit_price: '價格/件',
        unit_pv: 'PV/件',

        billing_member: '收貨人',
        billing_member_name: '收貨人姓名',
        billing_member_address: '收貨人地址',

        pay_member: '付款人',
        pay_member_name: '付款人姓名',
        pay_member_address: '付款人地址',
        pay_member_msg: '付款人信息',
        pay_way: '付款方式',
        pay_date: '付款日期',
        pay_money: '付款金額',
        coupon_code: '優惠碼',

        settlement: "結算",
        buy: '購',
        is_new: '首購',
        status: '訂單狀態',

        num: '訂單數量'
    },
    BONUS: {
        PUBLIC: {
            usd_ratio: '獎金百分比',
            usd: '獎金數目',
            pay_index: '支付代數',
            pv_recommend: '首購PV',
            order_recommend: '首購訂單',

            layer: '層級',
            is_new: '首購',
            active: '活躍',
            house: '分店',
            order_total_pv: '訂單點數總和',

            get_usd: '領取獎金',
            up_comp: '貢獻合格',

            total_point: '總點數',
            total_usd: '總金額',
            
        },
        SHORT: {
            member_sell_pv: '個人點數',
            team_sell_pv: '團隊點數',
            active_qualified: '合資格下線',

            active_house: '活躍分店',
            sell_bonus: '消費獎勵',
            
            usd_active_house: '分店獎金',
            uas_team_layer: '團隊獎金',

            first_buy: '首購直接',
            usd_recommend: '推薦獎金',

            development_pv: '發展點數',
            management_pv: '管理點數',
            usd_management: '管理獎金',
            usd_development: '發展獎金',
            
        },
        NORMAL: {
            usd_ratio: '獎金比例',
            usd_point: '獎金點數',
            get_point: '賺取點數',
            self_point: '自用點數',
            son_can_num: '合資格下線',
            
            member_sell_pv: '個人點數',
            team_sell_pv: '團隊銷售點數',
            active_qualified: '合資格活躍下線',

            usd_active_house: '活躍分店獎金',
            usd_team_layer: '團隊銷售獎金',
            usd_recommend: '首購推薦獎金',

            lead_share_out: '領袖分紅',
            get_lead_management: '獲得領袖分紅管理',
            get_lead_development: '獲得領袖分紅發展',

            global_month_point: '全球本月總點數',
            global_member_info: '全球成員級別概況',
            this_member_num: '該級別成員數量',

            highest_point_branch_belone: '所屬分支最高',
            highest_point: '(最高)支付',

            child_branch_num: '子成員分支數量',
            belong_branch_highest: '所屬分支最高',
        },
        LONG: {
            usd_active_house: '活躍分店消費獎勵',

            member_sell_pv: '每周期個人銷售點數(PV)',
            team_sell_pv: '每周期團隊銷售點數',
            active_qualified: '合資格團體銷售點數下線人數',
            active_qualified_pv: '合資格下線團隊銷售點數'
        },
    },

    HEADER: {
        now_member_level: '現在個人支付級別',
        next_level_task_before: '到達下一級',
        next_level_task_after: '所需要完成的任務',

        task_list: '任務列表',
        member_buy: '我的購買',
        active_qualified: '我的合資格下線',// '合資格下線詳情',

        bonus_report: '獎金報表',

        recommend: '首購直接推薦獎金',
        active_house: '活躍分店消費獎勵',
        team_layer: '團隊獎金',

        loyalty_record: '忠誠度積分記錄(LP)',
        inventory_record: '庫存列表',

        user_msg: '用戶資料',

        filter_tool: '篩選工具欄'
    },
    CONTENT: {
        bonus_period: '獎金周期',
        top_membership_level: '您現在已是最高會員等級',
        from: '由',
        to: '至',
        now: '現在',
        level: '級別',
        member: '會員',
        share: '分紅',
        point: '點數',
        usd: '金額',
        bonus: '獎金',

        highest: '最高',
        lowest: '最低',

        get: '獲得',
        self: '個人',
        team: '團隊',
        last: '最終',
        numed: '計算',
        theory: '理論',
        reality: '實際',

        now_time_period: '本期',
        now_month_period: '本月',
        global: '全球',

        qualify: '資格',

        have: '有',
        havent: '無',

        tip: '提示',
        close: '關閉',
        menu: '菜單',
        got_top: '返回頂部',

        email: '電郵地址',
        whatsapp: 'WhatsApp',
        ice_1: '你的權限暫時未能使用會員專區',
        ice_2: '請聯絡',
        ice_3: '客戶服務部',
        ice_4: '/上線查詢'
    },
    STATUS: {
        yes: '是',
        no: '否',

        leader: '領袖',

        active: '活躍',
        unactive: '不活躍',
        finished: '已完成',
        unfinished: '未完成'
    },
    ALTER: {
        header: '提示',

        dialog_500: '網絡錯誤，正在重試。',
        dialog_600: '無法準確地檢索到「結算月份」，請檢查您的網絡連接！！！',
        dialog_601: '所有的聯絡月份已被關閉，請聯系開發人員確認狀況！！！',

        dialog_700: '因網絡波動，PDF 打印未成功，請稍後重試。'
    }
}