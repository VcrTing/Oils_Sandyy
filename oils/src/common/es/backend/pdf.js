import conf from '../../../conf'
import axios from 'axios'

import pdf_uuny from '../plugin/pdf_uuny'

const clear = function(code) {
    code = code.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');  
    code = code.replace(/(?:^|\n|\r)\s*\/\*\#[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');  
    return code
}

const clearScript = function(v) {
    let res = v
    try {
        res = v.replace(/\<script/g, '<!--script>')
        res = res.replace(/\/script\>/g, 'script-->')
        res = clear(res) } catch(err) { } return res
}

export default {
    // 构建文件
    async buiid_f(fi, named) {
      return new Promise(async (rej) => {
        // const res = new File([ fi ], named, { type: 'application/pdf' })
        const fr = new FileReader()
        fr.readAsText(fi)
        fr.onload = function(ev) {
          console.log('TEXT =', fr.result )
          rej( fr.result )
        }
    
        // console.log('TEXT =', res.text() )
        // rej( await res.text() )
      })
    },
    // FROM PDF 02
    async html_content(htmi) {
        let res = await pdf_uuny.save( clearScript(htmi) )
        console.log('save res =', res)
        if (res) {
            const nw = await pdf_uuny.convert(res)
            console.log('convert res =', nw)
            if (nw) {
              const fi = await pdf_uuny.fiie(res)
              return await this.buiid_f(fi, res + '.pdf')
            }
        } return res
    },

    // HTML CONTENT
    async html_content_2(html) {
        let url = conf.pdfURL + `/pdf/html_content/?option=xx`
        const condition = new FormData()
        condition.append( 'html', clearScript(html) )
        const res = await axios.post(url, condition, { 'headers': { } })
        console.log('PDF =', res.data.pdf); 
        return res.data.pdf
    },
    /*
    async html_img(_img) {
        const condition = new FormData()
        condition.append( 'img', _img )
        return await axios.post(conf.pdfURL + `/pdf/img/`, condition)
    },
    */

    _html(html) {
        let res = 
            `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pdf</title>
            </head>
            <style>
            * { padding: 0; margin: 0; box-sizing: border-box; }
            html { font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans GB', STHeiti, 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Source Han Sans TC', 'Noto Sans CJK TC', 'WenQuanYi Micro Hei', SimSun, sans-serif; }
            </style>
            <body>` + 
            html + 
            `</body>
            </html>`
        return res
    },
    serial_Html(html) {
        let res = 
            `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pdf</title>
            </head>
            <style>
            html, body, div { font-size: 14px }
            * { padding: 0; margin: 0; box-sizing: border-box; }
            html { font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans GB', STHeiti, 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Source Han Sans TC', 'Noto Sans CJK TC', 'WenQuanYi Micro Hei', SimSun, sans-serif; }
            </style>
            <body>` + 
            html + 
            `</body>
            </html>`
        return res
    },

    _css_theme_blue(html) {
        let res = `
        <style>
        
        .w-7 {
          width: 7%;
        }
        
        .w-8 {
          width: 8%;
        }
        
        .w-10 {
          width: 10%;
        }
        
        .w-12 {
          width: 12%;
        }
        
        .w-13 {
          width: 13%;
        }
        
        .w-14 {
          width: 14%;
        }
        
        .w-15 {
          width: 15%;
        }
        
        .w-17 {
          width: 17%;
        }
        
        .w-18 {
          width: 18%;
        }
        
        .w-19 {
          width: 19%;
        }
        
        .w-20 {
          width: 20%;
        }
        
        .w-21 {
          width: 21%;
        }
        
        .w-22 {
          width: 22%;
        }
        
        .w-25 {
          width: 25%;
        }
        
        .w-30 {
          width: 30%;
        }
        
        .w-35 {
          width: 35%;
        }
        
        .w-65 {
          width: 65%;
        }
        
        .w-78 {
          width: 78%;
        }
        
        .w-75 {
          width: 75%;
        }
        
        .w-80 {
          width: 80%;
        }
        
        .w-82 {
          width: 82%;
        }
        
        .w-100 {
          width: 100%;
        }
        
        .d-ib {
          display: inline-block;
        }
        
        .td {
          overflow: hidden;
        }
        .td > div {
          float: left;
        }
        
        .td-fix {
          padding: 0px 0px 1em 0px;
        }
        
        .t-r {
          text-align: right;
        }
        
        .t-r_son,
        .t-r_son div {
          text-align: right;
        }
        
        .pt {
          padding-top: 1em;
        }
        
        .pt_s {
          padding-top: 0.5em;
        }
        
        .pr_s {
          padding-right: 0.5em;
        }
        
        .ma-0 {
          margin: 0 !important;
        }
        
        .b_son,
        .b_son div {
          font-weight: bolder;
        }
        
        .p-header {
          font-weight: 900;
          font-size: 2.4em;
          text-transform: uppercase;
        }
        
        .pdf-img {
          filter: grayscale(100%);
        }
        
        .p-tip_son {
          color: #131314;
        }
        .p-tip_son div {
          color: #131314;
        }
        
        .pdf-fs {
          color: #0E0F0F;
          font-size: 16px;
          line-height: 1.24em;
        }
        
        .td-data {
          color: #131314;
          padding: 0.5em 0px;
        }
        .pdf-panel {
          overflow: hidden;
          border-radius: 3px;
          border-top-width: 0px;
          border-left: 2px solid transparent;
          border-right: 2px solid transparent;
          border-bottom: 1px solid transparent;
          border-color: #e9f0f4;
          border-bottom-color: #e9f0f4;
          margin-bottom: 2em;
        }
        .pdf-panel .pdf-panel-header,
        .pdf-panel .pdf-panel-cont {
          padding: 0.7em 2em;
        }
        .pdf-panel .pdf-panel-header {
          font-weight: bold;
          padding-top: 1em;
          background: #f2f7fc;
        }
        .pdf-panel .pdf-panel-cont {
          min-height: 2em;
          padding-top: 1.5em;
        }
        
        .pdf-panel-total {
          background-color: #f2f7fc;
          padding: 0.7em 2em;
          text-transform: uppercase;
        }
        .pdf-panel-total .total {
          font-weight: 800;
          font-size: 1.4em;
        }
        
        .tag-inven {
          font-size: 0.7em;
          padding: 1px 3px;
          border-radius: 3px;
          border: 1px solid #131314;
        }

        .t-wrap {
          overflow: hidden
          word-wrap: break-word
          word-break: break-all
        }
          </style>
          ${html}
          `
        return res
    }
}