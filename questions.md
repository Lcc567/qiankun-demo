#### vue 项目一直出现 sockjs-node/info?t=1554978\*\*\*\*问题

- 修改 sock.js 代码，但是会导致修改代码不会热更新

```
1. 找到/node_modules/sockjs-client/dist/sockjs.js

2.找到代码的 1605行

  try {
  //  self.xhr.send(payload); 把这里注掉
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
```

- 重启项目

  其实如果是在开发环境，应该是开发的时候网络环境变更导致，比如你切换无线网络，导致开发服务器的 IP 地址换了，这样开发服务器会不知道如何确定访问源。开发环境中关闭 npm dev server，然后重新 npm run serve 重新构建服务环境就可以了。
  如果是生产环境，很大可能是应该是域名和 ip 映射出问题，重启 node，检查重新配置域名和 ip 映射就可以了.
