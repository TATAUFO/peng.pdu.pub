import os
import re

def main():
    # 创建一个目录来存放生成的文件
    if not os.path.exists('docs/zh/diary'):
        os.makedirs('docs/zh/diary')

    # 读取Draft.md文件
    with open('docs/zh/Draft.md', 'r', encoding='utf-8') as file:
        content = file.read()

    # 使用正则表达式找到以## 数字开头，并以 [Top](#笔记)结尾的结构
    pattern = r'## (\d+)\n((?:.|\n)*?)\[Top\]\(#笔记\)'
    matches = re.findall(pattern, content)

    # 使用正则表达式找到目录项 * [标题内容](#数字)
    directory_pattern = r'\* \[([^\]]+)\]\(#(\d+)\)'
    directory_matches = re.findall(directory_pattern, content)

    # 创建一个字典来存储标题内容与数字的对应关系
    directory_map = {}
    for title, number in directory_matches:
        directory_map[number] = title.strip()

    # 逐个处理匹配到的内容
    file_paragraphs = {}
    for i, match in enumerate(matches):
        number = match[0]
        text = match[1].strip()

        # 获取前一篇文章的标题和数字
        prev_title = directory_map.get(str(int(number) - 1))
        prev_number = str(int(number) - 1) if prev_title else None

        # 获取下一篇文章的标题和数字
        next_title = directory_map.get(str(int(number) + 1))
        next_number = str(int(number) + 1) if next_title else None

        # 构建链接
        prev_link = f"[{prev_title}]({prev_number}.md)" if prev_title else ''
        draft_link = "[Draft](../Draft.md)"
        next_link = f"[{next_title}]({next_number}.md)" if next_title else ''

        # 构建结尾链接
        end_links = f"\n\n[Previous: {prev_link}] | [Draft: {draft_link}] | [Next: {next_link}]"

        # 如果标题内容存在于目录中，则将其添加到相应的数字.md文件中
        title = directory_map.get(number)
        if title:
            text = f"# {title}\n\n{text}{end_links}"

        # 创建对应数字的.md文件并写入内容
        with open(f'docs/zh/diary/{number}.md', 'w', encoding='utf-8') as file:
            file.write(text)

        # 获取每篇文章的第一个段落
        paragraphs = re.findall(r'^([^#\n].*?)\n\n', match[1], re.MULTILINE)
        file_paragraphs[number] = paragraphs[0] if paragraphs else ""


    # 在 index.md 文件中添加最大5个数字对应的链接以及对应文件中的第一个段落
    index_content = ""
    if os.path.exists('index.md'):
        with open('index.md', 'r', encoding='utf-8') as file:
            index_content = file.read()


        # 按数字排序
        sorted_numbers = sorted(file_paragraphs.keys(), key=lambda x: int(x), reverse=True)[:5]

        # 添加链接和段落
        draft_content = "# [去中心化&PDU笔记](./docs/zh/Draft.html)"
        for number in sorted_numbers:
            title = directory_map.get(number)
            draft_content += f"\n\n## [{title}](./diary/{number}.md)\n\n{file_paragraphs[number]}"

        draft_content += "\n\n- [全部笔记](./docs/zh/Draft.html)"
        # 清理内容
        cleaned_index_content = re.sub(r'# \[去中心化&PDU笔记\]\(.*?\)(.*?)\- \[全部笔记\]\(.*?\)', draft_content, index_content, flags=re.DOTALL)
        
        # 写入到 index.md 文件中
        with open('index.md', 'w', encoding='utf-8') as file:
            file.write(cleaned_index_content.strip())
if __name__ == "__main__":
    main()
