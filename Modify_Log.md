· 2020.6.4  
1. 对渲染的合批操作进行修改，现在连续的并且有相同filter的对象渲染会进行合批  
##### 修改位置：
\src\egret\web\rendering\webgl\WebGLDrawCmdManager.js:102