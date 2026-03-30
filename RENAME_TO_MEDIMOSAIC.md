# Rename Guide: MediVoice -> MediMosaic

这份清单是给“电脑小白”直接照着做的。

## 现在我已经帮你做好的部分

- 本地代码里的产品名已经改成 `MediMosaic`
- `package.json`、`index.html`、README、主要页面文案都已经改了
- 本地构建已经验证通过
- 你电脑里的 Git 远程仓库地址，已经修正到你现在这个 GitHub 仓库：
  - `https://github.com/zhoulu0110145/medivoice-team-share.git`

## 你还需要自己手动做的事情

### 第 1 步：先改 GitHub 仓库名

你现在的仓库是：

- `https://github.com/zhoulu0110145/medivoice-team-share`

请在浏览器里这样操作：

1. 打开仓库主页
2. 点击最上方的 `Settings`
3. 找到 `Repository name`
4. 改成：

```text
medimosaic-team-share
```

5. 点击 `Rename`

改完以后，你的仓库地址会变成：

```text
https://github.com/zhoulu0110145/medimosaic-team-share
```

## 第 2 步：回到电脑，更新本地 Git 地址

打开终端，进入项目文件夹后，复制下面这两行：

```bash
git remote set-url origin https://github.com/zhoulu0110145/medimosaic-team-share.git
git remote -v
```

如果第二行显示的是 `medimosaic-team-share.git`，就说明成功了。

## 第 3 步：把已经改好的 MediMosaic 代码推到 GitHub

继续复制下面这几行：

```bash
git add .
git commit -m "Rename brand to MediMosaic"
git push origin main
```

如果它提示你登录 GitHub，就按提示登录。

## 第 4 步：处理 Vercel

你现在的线上地址是：

- `https://medivoice-prototype.vercel.app/`

### 方案 A：只改 Vercel 项目显示名称

适合：你只想让 Vercel 后台项目名变成 `MediMosaic`，不强求网址一起变。

浏览器操作：

1. 打开 Vercel
2. 进入这个项目
3. 点击 `Settings`
4. 点击 `General`
5. 找到项目名称
6. 改成：

```text
medimosaic-prototype
```

7. 保存

### 方案 B：连线上网址也一起改

适合：你希望网址也更干净，尽量变成：

```text
https://medimosaic-prototype.vercel.app/
```

更稳妥、也更适合新手的做法是：

1. 在 Vercel 点击 `Add New...`
2. 选择 `Project`
3. 重新导入你刚刚改名后的 GitHub 仓库 `medimosaic-team-share`
4. Project Name 填：

```text
medimosaic-prototype
```

5. 如果 Vercel 识别到 Vite，直接继续
6. 点击 `Deploy`

部署成功后，你就会拿到新的项目和新的线上地址。

## 推荐你怎么做

如果你是第一次自己处理这种事情，建议你用这个顺序：

1. 先改 GitHub 仓库名
2. 再更新本地 `git remote`
3. 再 `git push`
4. 最后在 Vercel 新建一个名字干净的新项目

这样最不容易乱。

## 如果中间卡住

把下面任意一种内容截图或贴给我，我可以继续一步一步带你做：

- GitHub 的页面
- Vercel 的页面
- 终端报错内容
