import fs from 'fs';
import * as cheerio  from 'cheerio';
import TurndownService from 'turndown';


function removeAllClassesExcept($: cheerio.Root, element: cheerio.Element|undefined, allowedClasses: string[]) {
    $(element || '*').each((_, element) => {
    const classList = $(element).attr('class')?.split(' ') || [];
    const newClassList = classList.filter(className => allowedClasses.includes(className));
    if (newClassList.length > 0) {
        $(element).attr('class', newClassList.join(' '));
    } else {
        $(element).removeAttr('class');
    }
    });
}

function removeAllElements($: cheerio.Root, elementsToRemove: string[]) {
    $(elementsToRemove.join(', ')).each((_, element) => {
        $(element).remove();
    });
}

function removeEmptyElements($: cheerio.Root, elements: string[]) {
    $(elements.join(', ')).each((_, element) => {
        if (!$(element).html()?.trim()) {
            $(element).remove();
        }
    });
};

function removeAttributes($: cheerio.Root, attributes: string[]) {
    $(`[${attributes.join('], [')}]`).each((_, element) => {
        attributes.forEach(attribute => {
            $(element).removeAttr(attribute);
        });
    });
}

function removeSpansPreservingText($: cheerio.Root) {
    $('span').each((_, element) => {
        const span = $(element);
        const text = span.text();
        span.replaceWith(text);
    });
}

function markdownify(html: string) {
    const turndownService = new TurndownService();
    const r = turndownService.turndown(html);
    return r;
}


const extract = async (filePath: string) => {
    const data = fs.readFileSync(filePath, 'utf8');

        const $ = cheerio.load(data);

        removeAllClassesExcept($, undefined, ['font-user-message', 'font-claude-message']);

        removeAllElements($, ['path', 'button', 'head']);

        removeAttributes($, ['style', 'depth', 'index']);

        removeEmptyElements($, ['div', 'span']);

        removeSpansPreservingText($);


        let progress = true;
        while (progress) {
            progress = false;
            $('div').each((_, element) => {
                const children = $(element).children();
                if (children.length === 1 && children.first().is('div')) {
                    // here, element is a div, with one child, also a div
                    children.first().replaceWith(children.first().children());
                    progress = true;
                    return false;
                }
                return true;
            });
        }

        removeEmptyElements($, ['div', 'span']);
        let output = '<Dialogue>';

        let indent = 4;
        $('.font-user-message, .font-claude-message').each((_, element) => {
            if ($(element).hasClass('font-user-message')) {
                output += '\n  <Human>';
            } else {
                output += '\n  <AI>';
            }
            output += '\n' + markdownify($(element).prop('outerHTML')!).split('\n').map(line => ' '.repeat(indent) + line).join('\n');
            if ($(element).hasClass('font-user-message')) {
                output += '\n  </Human>';
            } else {
                output += '\n  </AI>';
            }
        });

        output += '\n</Dialogue>\n';

        return output;



        // output = output.replaceAll(HUMAN_ELEM, 'Human');
        // output = output.replaceAll(AI_ELEM, 'AI');

        // return output;
    };

const simplifiedHtml = await extract(process.argv[2]!);

// console.log(simplifiedHtml)

console.log(`
---
title: "Claude's Dialogue"
author: Dan
date: "2022-02-02"
layout: '@/layouts/BlogPost.astro'
---
import { Dialogue, Human, AI } from '@/components/Dialogue';

`);

console.log(simplifiedHtml);