


## 技术栈

* react 16.2
* react-create-app 

#### 启动方法

* 下载源码到本地
* npm install 
* npn start 
* 浏览器里输入： `http://localhost:3000/`






#### react 建议不改变组件中的数据值的索引，

* Data change with mutation

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

```

* Data change without mutation

```
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};

```

