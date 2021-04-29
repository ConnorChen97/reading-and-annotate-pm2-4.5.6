# reading-and-annotate-pm2-4.5.6
Node.js 应用进程管理器pm2-4.5.6的中文注释分析

test
### PM2解析

基于pm2的v4.5.6版本源码进行分析。

pm2启动时，后台启动一个Daemon进程，监听客户端请求。客户端和Daemon进程通过rpc进行通信（udp4）。
#### 主要的类
./lib/API.js:
  - pm2的主类，启动时调起Daemon进程
  - 向Client进程发送用户操作请求

./lib/Daemon.js
  - pm2守护进程启动
  - 文件中写入pm2进程号
  - 进程通信监听（axon）

./lib/God.js
  - 通知Daemon后，各个操作具体实现

./lib/Client.js
  - 发送rpc请求给Daemon进程
