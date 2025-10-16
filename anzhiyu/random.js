var posts=["2025/04/21/hello-world/","2025/05/12/blog/hexo博客添加Live2d看板娘/","2025/09/12/前端实习/HTML&CSS八股/","2025/05/12/前端实习/Javascript数据类型/","2025/09/12/前端实习/性能优化八股/","2025/09/12/前端实习/网络八股/","2025/09/12/前端实习/浏览器八股/","2025/09/12/前端实习/Javascript八股/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };