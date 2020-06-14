module.exports = {
    devServer: {
        before: function (app) {
          app.get('/api/list',(req,res)=>{
              res.json([
                  {id: 1, name: '类型'}, {id: 2,name: 'sssss'}
              ])
          })
        }
    }
}
