const fs = require('fs');
const path = require('path');
const glob = require('glob');

const rootDir = process.cwd();
const files = glob.sync('src/ts/L3ForWApiEx/**/*.ts', { cwd: rootDir, absolute: true });

let modifiedFileCount = 0;
let totalInsertedCount = 0;
const modifiedPaths = [];

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let offset = 0;

    const funcRegex = /export\s+async\s+function\s+(\w+Ex_GetObjExLstByPagerAsync)\s*\(/g;
    let match;

    while ((match = funcRegex.exec(originalContent)) !== null) {
        const funcName = match[1];
        const matchIndex = match.index;
        
        // Search back 500 characters for existing marker
        const lookbackStart = Math.max(0, matchIndex - 500);
        const lookbackText = originalContent.substring(lookbackStart, matchIndex);
        if (lookbackText.includes('分页与排序模式说明') || lookbackText.includes('Paging/Sorting Mode')) {
            continue;
        }

        // Determine Mode
        // Read body - find first '{' and corresponding '}' or just search next 2000 chars for patterns
        const searchRange = originalContent.substring(matchIndex, matchIndex + 2000);
        let mode = 'Unknown';
        if (/GetObjLstByPagerAsync\s*\(\s*objPagerPara\s*\)/.test(searchRange)) {
            mode = 'Mode A';
        } else if (/GetObjLstAsync\s*\(\s*objPagerPara\.whereCond/.test(searchRange)) {
            mode = 'Mode B';
        }

        const funcNameWithFS = funcName.replace(/Async$/, 'FSAsync');
        const comment = `/**
 * 分页与排序模式说明:
 * - Mode A: 后台分页 + 后台排序(基础字段) + 前台扩展字段映射。
 * - Mode B(FS): 全量获取(whereCond) + 前台扩展字段排序 + 前台分页(slice)。
 * - 当前模式: ${mode}。
 * - 如需前台排序模式，请新增同实体函数: ${funcNameWithFS}。
 */\n`;

        // Insert at matchIndex (start of 'export')
        const insertPos = matchIndex + offset;
        content = content.slice(0, insertPos) + comment + content.slice(insertPos);
        offset += comment.length;
        totalInsertedCount++;
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        modifiedFileCount++;
        if (modifiedPaths.length < 20) {
            modifiedPaths.push(path.relative(rootDir, filePath));
        }
    }
});

console.log(`ModifiedFileCount: ${modifiedFileCount}`);
console.log(`TotalInsertedCount: ${totalInsertedCount}`);
console.log('First 20 paths:');
modifiedPaths.forEach(p => console.log(p));
