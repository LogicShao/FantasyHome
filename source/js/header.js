// 创建文档片段（性能优化）
const fragment = document.createDocumentFragment();

// 添加注释节点
fragment.appendChild(document.createComment('----------- 公共js和css start-----------'));

// 创建要添加的元素
const elements = [
    // CSS 样式表
    createLink('stylesheet', 'https://jsd.licaoz.com/gh/bynotes/texiao/source/css/shubiao.css'),
    createLink('stylesheet', 'https://at.alicdn.com/t/font_2037988_gjhbcpzhs67.css', 'text/css'),

    // 百度统计（已注释，需要时取消注释）
    // createScript('var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?8c0854c37b23b617c441acb65529fca1";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();'),

    // 图标
    createLink('apple-touch-icon', './source/img/face_blowing_a_kiss_color.svg', null, '76x76'),
    createLink('shortcut icon', './source/img/face_blowing_a_kiss_color.svg', 'image/x-png'),

    // 自定义样式
    createLink('stylesheet', 'source/css/mystyle.css'),

    // 注释信息
    document.createComment(`\nHi, It's Fanta5yHome. It's changed from TuHome Theme.\nGithub: https://github.com/ye-tutu/TuHome\nGitee: https://gitee.com/ye-tutu/TuHome\n`)
];

// 将元素添加到文档片段
elements.forEach(el => el && fragment.appendChild(el));

// 插入到 head 中
document.head.appendChild(fragment);

// 辅助函数：创建 link 元素
function createLink(rel, href, type = null, sizes = null) {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (type) link.type = type;
    if (sizes) link.sizes = sizes;
    return link;
}

// 辅助函数：创建 script 元素
function createScript(content) {
    const script = document.createElement('script');
    script.textContent = content;
    return script;
}