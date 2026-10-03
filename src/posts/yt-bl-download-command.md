---
title: 'yt-dlp 下载备忘'
date: 2026-10-02
description: '记录使用 yt-dlp 下载 YouTube 和 B 站视频、播放列表及字幕的常用命令。'
---

# yt-dlp 下载备忘

个人存档用。换链接时只改引号里的网址，其它先别动。

## 环境

- 代理：Shadowrocket 本地 HTTP，`127.0.0.1:1082`。只给 YouTube 用。
- B 站直连，不要加 `--proxy`。
- 用到登录态时，先完全退出 Chrome。
- 在哪个目录执行，文件就下到哪个目录。下到桌面先运行 `cd ~/Desktop`。

## YouTube 单个视频

最高画质，封成 mp4：

```bash
cd ~/Desktop
yt-dlp --impersonate chrome --proxy "http://127.0.0.1:1082" -f "bv*+ba[ext=m4a]/b" --merge-output-format mp4 "视频网址"
```

报 `Sign in to confirm you're not a bot` 时加上登录态：

```bash
cd ~/Desktop
yt-dlp --impersonate chrome --proxy "http://127.0.0.1:1082" --cookies-from-browser chrome --extractor-args "youtube:player_client=default,web_embedded" -f "bv*+ba[ext=m4a]/b" --merge-output-format mp4 "视频网址"
```

## YouTube 播放列表

```bash
cd ~/Desktop
yt-dlp --impersonate chrome --proxy "http://127.0.0.1:1082" --cookies-from-browser chrome --extractor-args "youtube:player_client=default,web_embedded" --no-write-subs --ignore-errors --download-archive youtube-archive.txt --sleep-interval 5 --max-sleep-interval 15 --retries 10 --fragment-retries 10 --restrict-filenames -f "bv*+ba[ext=m4a]/b[ext=mp4]/b" --merge-output-format mp4 -o "%(playlist)s/%(playlist_index)03d - %(title)s [%(id)s].%(ext)s" "播放列表网址"
```

中断后在同一目录再跑同一条，会跳过已下载的。字幕先不要加，容易 429。

## B 站单个视频

```bash
cd ~/Desktop
yt-dlp --cookies-from-browser chrome -f "bv*+ba/b" --merge-output-format mp4 "视频网址"
```

## B 站合集

每个合集用不同的存档文件名，避免三个窗口互相跳过。

```bash
cd ~/Desktop
yt-dlp --cookies-from-browser chrome --ignore-errors --download-archive bili-合集ID.txt --sleep-interval 2 --max-sleep-interval 6 --retries 10 --fragment-retries 10 -f "bv*+ba/b" --merge-output-format mp4 -o "%(playlist_title,playlist)s/%(playlist_autonumber,playlist_index)03d - %(title)s [%(id)s].%(ext)s" "合集网址"
```

合集网址形如：

```text
https://space.bilibili.com/1123639902/lists/4124437?type=season
```

不要加 `--restrict-filenames`，否则中文标题会变成下划线。

## 字幕

批量任务先不下字幕。以后单独补 `.srt`：

```bash
yt-dlp --skip-download --sleep-subtitles 5 --write-subs --write-auto-subs --sub-langs "zh-Hans,en" --convert-subs srt "视频网址"
```

B 站把 `--sub-langs` 换成 `"zh-Hans,ai-zh"`，并且不要加 YouTube 的代理参数。

iPad 用 App Store 里的 VLC 打开。视频和同名 `.srt` 放在一起即可。
