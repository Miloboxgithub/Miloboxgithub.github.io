var posts=["2025/04/21/hello-world/","2025/05/12/前端实习/Javascript数据类型/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };