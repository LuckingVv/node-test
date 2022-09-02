const express = require("express");
const app = express();
const axios = require("axios");

/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// get方式监听/login请求
app.get("/search", (req, res) => {
  axios({
    url: 'https://www.baidu.com/sugrec?prod=pc_his&from=pc_web&json=1&sid=36547_36884_34812_36570_37134_26350_37307_37202&hisdata=%5B%7B%22time%22%3A1662100854%2C%22kw%22%3A%22node%E5%A6%82%E4%BD%95%E8%B0%83%E6%8E%A5%E5%8F%A3%22%7D%2C%7B%22time%22%3A1662101113%2C%22kw%22%3A%22node%E5%A6%82%E4%BD%95%E8%B0%83%E7%94%A8%E5%88%AB%E7%9A%84%E6%8E%A5%E5%8F%A3%22%7D%2C%7B%22time%22%3A1662102847%2C%22kw%22%3A%22node%E4%B8%AD%E4%BD%BF%E7%94%A8axios%22%7D%2C%7B%22time%22%3A1662103259%2C%22kw%22%3A%22nodejs%E6%95%99%E7%A8%8B%22%2C%22fq%22%3A4%7D%2C%7B%22time%22%3A1662103661%2C%22kw%22%3A%22nodejs%22%2C%22fq%22%3A3%7D%2C%7B%22time%22%3A1662103666%2C%22kw%22%3A%22node%E5%A6%82%E4%BD%95%E5%81%9A%E6%8E%A5%E5%8F%A3%E8%BD%AC%E5%8F%91%22%2C%22fq%22%3A2%7D%2C%7B%22time%22%3A1662104041%2C%22kw%22%3A%22%E5%A6%82%E4%BD%95%E7%94%A8node%E5%86%99%E4%B8%80%E4%B8%AA%E6%8E%A5%E5%8F%A3%E4%BE%9B%E5%89%8D%E7%AB%AF%E8%B0%83%E7%94%A8%22%7D%2C%7B%22time%22%3A1662104178%2C%22kw%22%3A%22%E5%A6%82%E4%BD%95%E7%94%A8%E5%8E%9F%E7%94%9Fnodejs%E5%86%99%E4%B8%80%E4%B8%AA%E6%8E%A5%E5%8F%A3%E4%BE%9B%E5%89%8D%E7%AB%AF%E8%B0%83%E7%94%A8%22%7D%2C%7B%22time%22%3A1662105230%2C%22kw%22%3A%22nodejs%E8%AF%B7%E6%B1%82%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8E%A5%E5%8F%A3%22%7D%2C%7B%22time%22%3A1662106231%2C%22kw%22%3A%22%E5%9C%A8node%E4%B8%AD%E4%BD%BF%E7%94%A8axios%E8%AF%B7%E6%B1%82%E6%8E%A5%E5%8F%A3%E6%8A%A5%E9%94%99%22%7D%5D&_t=1662111469300&req=2&bs=AxiosError%3A%20unable%20to%20verify%20the%20first%20certificate&csor=0',
    method: 'get',
    //data: JSON.stringify(req.data),
    headers: {
      //authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYWlDb3JlVXNlckRldGFpbCI6eyJ1c2VySWQiOiIxZjdhMTM4MS03MGNhLTQ4ZmUtYTRmZS1jOTY3OTZmZTZkOWIiLCJsb2dpbk5hbWUiOiJsaXV5NzciLCJlbXBsb3llZUlkIjoiMTAwMjQyMiIsInRlbmFudE5hbWUiOiJQQUlfQ29yZSIsInRlbmFudElkIjpudWxsLCJsYXN0TmFtZSI6IkxpdSIsImZpcnN0TmFtZSI6Ill1IExvbmciLCJvcmdJZCI6IjQ3MWZiZjg1LWMxZmQtNDM4Ni1iOTQwLWUzOGFiNzlmMjhiYSIsIm9yZ0lkUGF0aCI6Ii8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTVhNjVjNWQtN2Q1NC0xMWViLThlODUtNmViZmY2NjZlNWUzLzdmOGY0Y2I5LTkyN2YtNDViYS1iYjY0LTcyZjk3ZjgyYTY0Zi85OTM4ZjdiZi1iZTI5LTQ0M2QtOTI1My1hYTBmYmVhYzFmNDUvZWU3MDg2YzYtYTI5My00MDAzLTliYjgtNTU3YTNmYzEwNmI2LzQ3MWZiZjg1LWMxZmQtNDM4Ni1iOTQwLWUzOGFiNzlmMjhiYSJ9LCJ1c2VyX25hbWUiOiJsaXV5NzciLCJzY29wZSI6WyJvcGVuaWQiXSwiZXhwIjoxNjYyMTMwMDg5LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiLCJST0xFX1VTRVIgV09SS1NQQUNFIl0sImp0aSI6IjE4NzExOTBhLTVlODctNDFkNy1hNDdlLWUxNWJhOGQyNDlmMyIsImNsaWVudF9pZCI6ImNxaHp6In0.hJKgBiMx3F8Oo4TQkJIrFgk-Fej2DVoa9Pb2xsAomNqhJWQjp6eqz_CzQ3PGVQTHW2vY4vZdXi5Lh8q3g8mViTB8TBl0Kv3C-sf9Iw-JZt55oMrV9rRHcyQTIGSwHb_AoGrp6YxzsGp6m0PnU3WxHi6CKDTfxyxEhkFpyXVESJz4I3kif88fMdKafnVpIRYbPaBj5DcZ1rK3fJIRCD60RExQ7VanXmzInME7R3wtvW8KlmOV78nF5geMULeJ_iW3JMKG52EBQlTaxZFR4OJvvcr5MKOqe9YqjACPOGjRAgvC3dbJOv1ZRv12jSdzgWWYlIjpB7edFgube5Ty94otZw',
      'content-type': "text/plain; charset=UTF-8"
    }
  }).then(res1 => {
    console.log(res1.data.g);
    //在这里做点什么
    res.send(res1.data)
  }).catch(error => {
    console.log(err);
  });
})


// 监听8888端口
app.listen(8888, () => {
  console.log('服务器运行在8888');
})