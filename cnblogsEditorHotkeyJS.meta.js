// ==UserScript==
// @name         博客园编辑器快捷键禁用器
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  通过“猴子补丁”方式拦截 editor.md 的初始化过程，强行注入快捷键禁用配置。
// @author       Qixyi
// @match        https://i.cnblogs.com/posts/edit*
// @match        https://i.cnblogs.com/post/new*
// @run-at       document-start
// @grant        unsafeWindow
// @license      MIT
// ==/UserScript==
