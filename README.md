# Node.js 学习
> Node.js 创造者 Ryan Dahl (瑞安·达尔)

## 目录(Catalog)
1. Windows 下安装  `Node`
2. MacOS 下安装 `Node`
3. **使用 `NVM` 控制 `Node` 的版本**
    + Note: 不管是 Windows 还是 MacOS 都推荐使用 `NVM` 来安装 `Node`
4. `npm install` 时 `--save-dev` 和 `--save` 的区别
5. 清除代理(proxy), 升级 `npm` 和把淘宝镜像还原成 `npm` 

## 生词 (New Words)


## 内容 (Content)
### 1. `Windows` 下安装 `Node`
1. 下载 `Node` 的安装包, 正常安装会自动把 `Node` 添加到系统变量中
	+ 默认的 `Node` 的安装路径为: `C:\Program Files\nodejs`; 
    + 接着我们来看另外 2 个目录, `npm` 和 `npm-cache`, 默认 `Node`
      的本地仓库是跑在系统 `C` 盘的用户目录中的 (即:
      `C:\Users\Administrator\AppData\Roaming`), 不过是可以更改的, 
      [详见这里](https://www.cnblogs.com/laizhouzhou/p/8027908.html), 
      我们通过 `npm install` 安装的组件和库都会在 `npm` 文件夹下的 `node_modules`
      文件夹中.
2. `Node` 的配置环境需要使用 `git bash`, 由于`git bash` 集成在 `Git` 软件中, 
   所以我们需要下载并安装 `Git`, 并把 `git` 添加到环境变量: 
    + 把 `git` 添加到 `系统环境变量 path` 中, 步骤为: `计算机` --> `属性` -->
      `高级系统设置` --> `环境变量` --> `系统变量`--> `path` --> 添加:
      `C:\Program Files\Git\bin`, 成功之后在命令行中输入 `git` 就会看到这样的提示:
      `usage: git[--version][--help]...`
3. 什么是 `NPM`?  A: `npm` 是一个 `NodeJS` 包管理和分发工具, 新版的 `NodeJS`
   已经集成了 `npm` 包管理工具. 有了 `npm` 开发人员可以很快的找到特定服务要使用的包,
   进行下载、安装以及管理已经安装的包。
4. 查看 `Node` 和 `NPM` 的版本号, 按下 `Ctrl + R` 弹出 `运行`, 在其中输入 `cmd` 后,
   在弹出的控制台中输入: 
    + `node --version` 查看 node 的版本号 
    + `npm --version` 查看 npm 的版本号
5. `Node.js` 中的`交互式运行环境--REPL(Read-Eval-Print-Loop)`: 
    + 当我们点击`运行` 输入 `cmd` 进入控制台后, 在其中输入 `node` 按下回车即进入 `REPL`
      运行环境, 命令行中将显示 `REPL` 运行环境的命令提示符(默认为`>`).
6. 如何运行 `NodeJS` 文件?  A: 在控制台中运行 `NodeJS` 文件需要先用 `DOS`
   命令进入到保存 `NodeJS` 的文件夹内, 然后 输入`node xxx.js` 启动并运行文件。
7. 如果在编辑器中更新了 `NodeJS` 文件, 需要在控制台中按 `Ctrl + c` 停掉当前的运行状态,
   然后从新运行文件.
8. 当我们没有停掉其他 `NodeJS` 文件就接着运行新的文件时, 控制台中会提示端口被占用, 
   其代码显示为: `throw er; //Unhandled 'error' event`.
- 安装完 `Node` 之后, 在命令行中查看 `Node` 的安装路径: `where node`

### 2. `Mac` 下安装 `Node`
- 卸载: 通过官网安装包安装的卸载方法, 终端中执行下面代码：
  `rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`
- 安装:
    + 安装 Homebrew: 见 Miscellaneous-blog/MacOS/MacOS-操作记录.md
    + 接下来的安装教程见这里：
      https://lhajh.github.io/mac/2018/11/13/Install-node-with-homebrew.html       
- MacOS 下命令行中查看 `Node` 的安装路径: `which node` (默认路径为:
  `/usr/local/bin/node`)

### 3. 使用 `NVM` 控制 `NodeJS` 的版本
- **Note**: 不管是 Windows 还是 MacOS 都推荐使用 `NVM` 来安装 `NodeJS`.
- `NVM` (Node Version Manager, Node 版本管理器) 是在 Mac 环境下管理 Node.js
  版本的工具, 类似于管理 Ruby 的 RVM (Ruby Version Manager, Ruby 版本管理器).
  在 Windows 环境下推荐使用 `nvmw` 或 `nvm-windows`. 本节介绍 `NVM`
  的安装过程及切换 Node.js 版本的方式. (即: 电脑可以安装多个版本的 Node,
  然后使用 NVM 来切换使用的版本.)

#### 3.1 卸载已经安装的 Node.js 
- 3.1.1 卸载已经全局安装的 Node.js 和 NPM (推荐, 非必要)
    + 第 1 种方式: 卸载通过官网安装包安装的 Node.js，终端中执行下面代码：
      `rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`  
    + 第 2 种方式: 卸载通过官网安装包安装的 Node.js
        - (1) 删除 `/urs/local/lib` 和 `/usr/local/include` 两个文件夹中所有和 
          node.js 及 node_modules 相关的文件. 
        - (2) 检查个人主文件夹下所有的 `local`, `lib`, `include` 文件夹并删除所有与
          Node.js和 node_modules 有关的内容.
        - (3) 从 `/urs/local/bin` 中删除 Node.js 的可执行文件.  
- 3.1.2 通过 `brew` 安装的 Node.js 通过运行
  `brew uninstall node` / `brew uninstall --force node` 命令来进行卸载. 

#### 3.2 安装 NVM 
##### 3.1 安装 `xcode-select` 和 NVM 
- 在安装 NVM 之前还需要一个 `C++` 编译器，在 Mac 上使用以下命令
  ```shell
    xcode-select -install
  ```
  安装 `XCode's Command line tools (Xcode 的命令行工具)`(如已安装请忽略).

  然后可以使用 cURL 或 Wget 安装 NVM，命令如下:
  ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```
  或者
  ```shell
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```
  Tip: 访问 `https://github.com/creationix/nvm` 查看当前最新版本.
##### 3.2 解决安装过程遇到的问题:
- (1) 如果在安装的过程出现 如下提示:
  ```shell
    # 将 nvm 源字符追加到 /Users/WANG/.bash_profile
    => Appending nvm source string to /Users/WANG/.bash_profile
    
    # 将 bash_completion 源字符追加到 /Users/WANG/.bash_profile
    => Appending bash_completion source string to /Users/WANG/.bash_profile
    
    # env: 节点: 无此文件或目录
    env: node: No such file or directory
    
    # 关闭并重新打开终端以开始使用 nvm 或运行以下命令以立即使用它:
    => Close and reopen your terminal to start using nvm or run the following to use it now:
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  ```
  按上面的提示 `关闭并重新打开终端以开始使用 nvm 或运行以下命令以立即使用它:` 从新打开终端,
  输入以下命令:
  ```shell
    # nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  ```
  回车即可.
  
  我们利用命令: `open ~/.bash_profile`, 打开 `~/.bash_profile` 文件可以看到,
  里面的内容就是上面一段代码.
- (2) 执行完上面的 Notice 步骤后, 在命令行中输入
  ```shell
    command -v nvm
  ```
  后, 输出 `nvm` 的提示, 也可以正常使用; 但是当我完全退出 `iTerm` 再次打开后,
  输入 `Command -v nvm` 便会再次输出: `env: node; No such file or directory`,
  在折腾了半个小时之后,终于找到问题出在哪里了.

  原因是我在下午配置了 `iTerm`, (配置笔记见仓库:
  `Miscellaneous-blog/操作系统/MacOS/MacOS下安装iTerm并更该主题.md`),
  在这里我更改了 Mac 默认的的 `bash` 命令行工具改为 `zsh`, 安装完 `zsh` 之后,
  便会生成 `.zshrc` 文件, 完整路径是: `/Users/WANG/.zshrc`; `nvm` 安装时,
  默认是把上面的:
  ```shell
    # nvm
    export NVM_DIR="$HOME/.nvm"
    ...
    ...
  ```
  写入到 `/Users/WANG/.bash_profile`, 但是我们已经更该默认的 `bash` 为 `zsh`,
  所以我们做下面的操作把上面的代码添加到 `zsh` 中:
  ```shell
    # 打开 .zshrc 
    open ~/.zshrc

    # 复制上面的 export NVM_DIR...... 追加到文件下面

    # 刷新配置
    source ~/.zshrc
  ```
  完成后, 完全关闭 `iTerm` 再次打开, 输入 `command -v nvm` 便会正常出现 `nvm` 的提示了. 

- (3) 输入以下命令:
  ```shell
    command -v nvm
  ```
  如果安装成功会输出 `nvm` 作为提示, 如果出现 `nvm: command not found`,
  则可能是下面的原因:
    + 安装时系统缺少 `.bash_ profile` 文件，使用 `touch ~/.bash_ profile`
      命令创建所需文件并重新安装 NVM;
    + 重启命令行工具，再次尝试输入该命令。
    + 如果仍然提示安装失败，请打开 `.bash_ profile` 文件并添加以下代码: 
      `source ~/.bashrc`.
    + Tip: 出现 `nvm: command not found` 这种错误在网上出现的最多,
      请自行 `google` 便可.

- (4) 安装完成后发现使用 `nvm install stable` 安装 node 速度巨慢, 原因大家都知道...
  我大天朝的国情... 接下来, 切换 `nvm` 的镜像到淘宝镜像
  (nvm, npm 默认都是从国外的源获取和下载包信息.)
  
  建议把环境变量 `NVM_NODEJS_ORG_MIRROR` 加入到 `.bash_profile` 文件中:
  ```shell
    # nvm
    export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
  ```
  [参考文章来源](https://juejin.im/entry/5d2d17905188251b1b1ff17a)

- (5) 接着参考 `https://developer.aliyun.com/mirror/NPM` 网站, 配置 `npm`
  的镜像为 `cnpm`:
  ```shell
    npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```
##### 3.3 安装并切换不同 Node.js 版本
- 可能用到的命令如下:
    ```shell
    # 安装最新稳定 Node.js
    `nvm install stable` 
    # 安装指定版本 (此处安装 8.11.1)
    `nvm install 8.11.1`
    # 安装 8.11.x 系统的最新版本
    `nvm install 8.11`
    # 列出远程服务器上的所有可用版本
    `nvm ls-remote`

    # 切换到 8.11.1 版本
    `nvm use 8.11.1`
    # 切换到 8.11.x 系列的最新版本
    `nvm use 8.11`
    # 切换到最新版本
    `nvm use node`
    # 设置默认版本为当前版本 (当前为 9.11.1 版本)
    `nvm nvm alias default node`
    # 列出所有已经安装的版本
    ```
- Hint: 更多NVM命令的详细介绍可参考 `https://github.com/creationix/nvm#usage` 
##### 3.4 配置项目所使用的 Node.js 版本
- 如果项目所需 Node.js 版本不是默认版本, 可以在项目根目录下创建 `.nvmrc` 文件并在
  其中预先指定版本号, 可能用到的命令(iTerm/命令行)如下:
  ```shell
    # 创建 .nvmrc 文件
    `echo 9.11.1 > .nmvrc`
    # 运行 nvm 将自动安装设定好的版本号 (这里为 9.11.1 版本)
    `nvm use`
    # 检查 Node.js 版本
    `node -v`
  ```

### 4. `npm install` 时 `--save-dev` 和 `--save` 的区别
- `--save`: 把安装包添加到 `package.json` 内的 dependencies (运行时依赖) 中
- `--save-dev`: 安装到 `package.json` 内的 devDependencies (开发时依赖
  development dependency) 中.

### 5. 清除代理(proxy), 升级 `npm` 和把淘宝镜像还原成 `npm` 
- 添加此笔记的原因是, 在学习 Vue 文档时, 创建的展示项目
  `vue-document-example` 半个月没有启动, 当再次启动的时候报这个错误,
  ```
    stack FetchError: request to https://registy.npm.taobao.org/lodash failed, 
    reason: connect ECONNREFUSED 120.240.95.35:443

    ERROR  TypeError: defaultsDeep is not a function
  ```
  这里有 2 个错误, `connect ECONNREFUSED`(连接遭拒绝) 和 `defaultsDeep`
  不是一个函数, 我当时认为是 lodash  的问题, 而且也有一点点怀疑是 taobao
  镜像的原因.

  刚开始直接搜上面的第一行错误没有找到需要的答案, 我在 lodash 的 github
  仓库 README 中看到安装的代码
  ```shell
    # 升级 npm 的 shell 命令
    npm i -g npm 

    npm install lodash
  ```
  我进入到项目, 把 lodash 卸载后, 然后我执行 `npm i -g npm` 时却一直不能成功,
  我就怀疑是我的网络的原因, 但是当我在桌面新建文件, 试着利用 vue CLI3.0 创建了一个
  Vue 项目时却是正常的, 那就有可能是 taobao 的镜像的问题了. 
  
  *此时, 我已经气炸了, 这 TM 都是什么鬼玩意, 今天这问题, 明天那问题......*

  但是抱怨完还是要解决问题, 转而我想如果是 `connect ECONNREFUSED` 倒不如直接搜这个,
  我在 google 搜索, 然后跳转到此
  [stack overflow 页面](https://stackoverflow.com/questions/42371380/npm-err-error-connect-econnrefused).
  , 我按照其中高票的回答, 在命令行中设置如下:
  ```shell
    npm config set proxy null
    npm config set https-proxy null
    npm config set registry http://registry.npmjs.org/
  ```
  前两行是移除设置的代理, 最后一行是把 npm 下载指向官方的包注册表.

  上面 3 个设置都可以在 `.npmrc` (Shell: `open ~/.npmrc`) 中查看,
  实际上我在本机上并没有设置 proxy 代理, 但 npm 镜像是在上面 `3.2 - (5)`
  中设置成了 taobao npm 镜像, 然后更改完毕后, 再次执行 `npm i -g npm` 升级
  npm 的 shell 命令, 就正常了.

  **But, but, but** 解决了 lodash 和 lodash.deaultsdeep 的问题后, 又出来
  `neo-async` 问题, 我安装了这个包之后还是不能正常启动...... 最后,
  我只能把此项目下 `node_modules` 整个文件夹删除了, 然后进入项目中使用 
  `npm install` 重新安装依赖包后可以了, 我想静静......

  <i style="color:orange;">Additional Info:</i> 到此时,
  虽然仍没有彻底找出问题的根源, 但也不要忘记此时已经把 npm 安装依赖包改回了官方注册表,
  如果仍然想使用 taobao 镜像, 需要重新设置 `3.2 - (5)`.

  其次, 通过使用 Vue CLI3.0 脚手架创建 Vue 模板的话, 由于配置是写在 `.vuerc`
  (shell: `open ~/.vuerc`) 中的, 所以此时我们使用 `vue create xxx` 仍然使用的是
  taobao 镜像. 更多内容见: `Vue-learning/Vue-官网文档学习/Vue-安装.md`
