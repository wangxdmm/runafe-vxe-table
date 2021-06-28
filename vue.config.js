const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

process.env.VUE_APP_VXE_TABLE_ENV = !process || !process.env || !process.env.npm_lifecycle_event || process.env.npm_lifecycle_event.indexOf('lib:dev_pack') === 0 ? 'development' : process.env.NODE_ENV

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/table-ui/' : '/',
  outputDir: './examples/table-ui',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vxe-table 3.0+ (Stable)'
    }
  },
  transpileDependencies: ['highlight.js'],
  configureWebpack: {
    performance: {
      hints: false
    },
    resolve: {
      alias: {
        '@': resolve('examples')
      }
    },
    output: {
      library: 'VXETable'
    }
  },
  chainWebpack (config) {
    const XEUtils = {
      root: 'XEUtils',
      commonjs: 'xe-utils',
      commonjs2: 'xe-utils',
      amd: 'xe-utils'
    }
    if (process.env.npm_lifecycle_event && process.env.npm_lifecycle_event.indexOf('lib') === 0) {
      if (config.has('externals')) {
        config.externals
          .set('xe-utils', XEUtils)
      } else {
        config
          .set('externals', {
            'xe-utils': XEUtils
          })
      }
    } else {
      if (config.has('externals')) {
        config.externals
          .set('xlsx', 'XLSX')
          .set('exceljs', 'ExcelJS')
          .set('jspdf', 'jspdf')
          .set('jsbarcode', 'JsBarcode')
          .set('qrcode', 'QRCode')
          .set('dayjs', 'dayjs')
          .set('sortablejs', 'Sortable')
      } else {
        config
          .set('externals', {
            'xlsx': 'XLSX',
            'exceljs': 'ExcelJS',
            'jspdf': 'jspdf',
            'jsbarcode': 'JsBarcode',
            'qrcode': 'QRCode',
            'dayjs': 'dayjs',
            'sortablejs': 'Sortable'
          })
      }
    }
  }
}
