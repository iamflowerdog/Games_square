


<div  align="center">    
<img src="http://i.imgur.com/KzGAHLE.png" width = "300" height = "200" alt="haha" align=center />
</div>


## 技术栈

* react 16.2
* react-create-app 


## 时间、地点

* 2017年12月22日 圣诞节前夕
* 无讼





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


<br><br><br>


> Warning: Each child in an array or iterator should have a unique “key” prop. Check the render method of “Game”.

#### keys


* When you update that list, React needs to determine what has changed.
  You could’ve added, removed, rearranged, or updated items in the list.
  
  
** Imagine transitioning from **

```
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>

```

** to **


```
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>

```

#### react官方解释

```

To a human eye, it looks likely that Alexa and Ben swapped places and Claudia was added – 
but React is just a computer program and doesn’t know what you intended it to do. As a result, 
React asks you to specify a key property on each element in a list, a string to differentiate each component from its siblings. 
In this case, alexa, ben, claudia might be sensible keys; if the items correspond to objects in a database, 
the database ID is usually a good choice:

```

#### 核心部分


```
 When a list is rerendered, React takes each element in the new version and looks for one 
 with a matching key in the previous list. When a key is added to the set, a component is created;
 when a key is removed, a component is destroyed. Keys tell React about the identity of each component, 
 so that it can maintain the state across rerenders. If you change the key of a component, 
 it will be completely destroyed and recreated with a new state.

```
    























