
1. 对渲染的合批操作进行修改，现在连续的并且有相同filter的对象渲染会进行合批  
##### 修改位置：
\src\egret\web\rendering\webgl\WebGLDrawCmdManager.js:102

2. 修改assetsmanager->getResByUrl函数，增加name参数，加载完远程资源后可通过RES.getRes(name)获得资源。skin中配置同样有效

3. 修改update计时器，原用window.requestAnimationFrame方法，浏览器进入后台后会停止update方法，现改用系统ticker 
##### 修改位置：
src\egret\web\EgretWeb.ts:211