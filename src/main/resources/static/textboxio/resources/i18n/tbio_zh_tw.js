/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"\u9032\u5165\u6aa2\u67e5\u5668",running:"\u6b63\u5728\u6aa2\u67e5......",issue:{counter:"\u554f\u984c{0}\uff0c\u5171{1}",help:"WCAG 2.0\u53c3\u8003-\u5728\u65b0\u8996\u7a97\u4e2d\u6253\u958b",none:"\u6c92\u6709\u6aa2\u6e2c\u5230\u9032\u5165\u554f\u984c"},previous:"\u4ee5\u524d\u7684\u554f\u984c",next:"\u4e0b\u4e00\u500b\u554f\u984c",repair:"\u4fee\u5fa9\u554f\u984c",available:"\u63d0\u4f9b\u7dad\u4fee\u670d\u52d9",ignore:"\u5ffd\u7565"},image:{alttext:{empty:"\u5716\u50cf\u5fc5\u9808\u6709\u4e00\u500b\u66ff\u4ee3\u6587\u5b57\u8aaa\u660e",filenameduplicate:"\u66ff\u4ee3\u6587\u5b57\u4e0d\u80fd\u8207\u5716\u50cf\u6587\u4ef6\u540d\u76f8\u540c",set:"\u63d0\u4f9b\u66ff\u4ee3\u6587\u5b57\ufe30",validation:{empty:"\u66ff\u4ee3\u6587\u5b57\u4e0d\u80fd\u70ba\u7a7a",filenameduplicate:"\u66ff\u4ee3\u6587\u5b57\u4e0d\u80fd\u8207\u6587\u4ef6\u540d\u76f8\u540c"}}},table:{caption:{empty:"\u5716\u8868\u5fc5\u9808\u5177\u6709\u8aac\u660e\u6587\u5b57",summaryduplicate:"\u5716\u8868\u8aac\u660e\u6587\u5b57\u4e0d\u80fd\u6709\u76f8\u540c\u7684\u503c",set:"\u63d0\u4f9b\u8aac\u660e\u6587\u5b57\ufe30",validation:{empty:"\u8aac\u660e\u6587\u5b57\u4e0d\u80fd\u70ba\u7a7a",summaryduplicate:"\u5716\u8868\u8aac\u660e\u6587\u5b57\u4e0d\u80fd\u8207\u5716\u8868\u6982\u62ec\u8aac\u660e\u76f8\u540c"}},summary:{empty:"\u8907\u96dc\u7684\u5716\u8868\u61c9\u8a72\u6709\u6982\u62ec\u8aac\u660e",set:"\u63d0\u4f9b\u5716\u8868\u6982\u62ec\u8aac\u660e\ufe30",validation:{empty:"\u6982\u62ec\u8aac\u660e\u4e0d\u80fd\u70ba\u7a7a",captionduplicate:"\u5716\u8868\u6982\u62ec\u8aac\u660e\u4e0d\u80fd\u8207\u5716\u8868\u8aac\u660e\u6587\u5b57\u76f8\u540c"}},rowscells:{none:"\u5716\u8868\u5143\u7d20\u5fc5\u9808\u5305\u542bTR\u548cTDtag\u9375"},headers:{none:"\u5716\u8868\u5fc5\u9808\u81f3\u5c11\u6709\u4e00\u500b\u6a19\u984c\u5132\u5b58\u683c",set:"\u9078\u64c7\u5716\u8868\u6a19\u984c\ufe30",validation:{none:"\u8acb\u9078\u64c7\u884c\u6216\u5217\u6a19\u984c"}},headerscope:{none:"\u5716\u8868\u6a19\u984c\u5fc5\u9808\u61c9\u7528\u5230\u884c\u6216\u5217",set:"\u9078\u64c7\u6a19\u984c\u7bc4\u570d\ufe30",scope:{row:"\u884c",col:"\u6b04\u76ee",rowgroup:"\u884c\u7fa4\u7d44",colgroup:"\u6b04\u7fa4\u7d44"}}},heading:{nonsequential:"\u6a19\u984c\u5fc5\u9808\u6309\u9806\u5e8f\u61c9\u7528\u3002\u4f8b\u5982\ufe30\u6a19\u984c1\u61c9\u4f9d\u5e8f\u8ddf\u96a8\u6a19\u984c2\uff0c\u800c\u4e0d\u662f\u6a19\u984c3\u3002",paragraphmisuse:"\u9019\u4e00\u6bb5\u770b\u8d77\u4f86\u50cf\u4e00\u500b\u6a19\u984c\u3002\u5982\u679c\u5b83\u662f\u4e00\u500b\u6a19\u984c\uff0c\u8acb\u9078\u64c7\u4e00\u500b\u6a19\u984c\u7d1a\u5225\u3002",set:"\u9078\u64c7\u4e00\u500b\u6a19\u984c\u7d1a\u5225\ufe30"},link:{adjacent:"\u6709\u76f8\u540cURL\u7684\u76f8\u9130\u93c8\u63a5\u61c9\u8a72\u5408\u4f75\u5230\u4e00\u500b\u93c8\u63a5\u5185"},list:{paragraphmisuse:"\u9078\u5b9a\u7684\u6587\u5b57\u4f3c\u4e4e\u662f\u4e00\u500b\u5217\u8868\u3002\u61c9\u4f7f\u7528\u5217\u8868\u9375\u683c\u5f0f\u5316\u5217\u8868\u3002"},contrast:{smalltext:"\u6587\u5b57\u81f3\u5c11\u8981\u67094.5:1\u7684\u5c0d\u6bd4\u5ea6",largetext:"\u5927\u865f\u6587\u5b57\u81f3\u5c11\u8981\u67093:1\u7684\u5c0d\u6bd4\u5ea6"},severity:{error:"\u932f\u8aa4",warning:"\u8b66\u544a",info:"\u5167\u5bb9\u8c50\u5bcc"}},aria:{autocorrect:{announce:"\u81ea\u52d5\u7cfe\u6b63{0}"},label:{toolbar:"\u5bcc\u6587\u5b57\u7de8\u8f2f\u5668\u5de5\u5177\u5217",editor:"Textbox.io\u5bcc\u6587\u5b57\u7de8\u8f2f\u5668-{0}",fullscreen:"Textbox.io\u5168\u5c4f\u5bcc\u6587\u5b57\u7de8\u8f2f\u5668-{0}",content:"\u53ef\u7de8\u8f2f\u5167\u5bb9",more:"\u9ede\u64ca\u5c55\u958b\u6216\u96b1\u85cf"},help:{mac:"\u6709\u95dc\u5e6b\u52a9\uff0c\u8acb\u6309 \u2303\u2325H",ctrl:"\u6709\u95dc\u5e6b\u52a9\uff0c\u8acb\u6309CTRL SHIFT H"},color:{picker:"\u9078\u8272\u5668",menu:"\u8272\u5f69\u9078\u64c7\u5668\u529f\u80fd\u8868"},font:{color:"\u6587\u672c\u984f\u8272",highlight:"\u4eae\u986f\u984f\u8272",palette:"\u8272\u76e4"},context:{menu:{generic:"\u5167\u5bb9\u529f\u80fd\u8868"}},stepper:{input:{invalid:"\u5c3a\u5bf8\u503c\u7121\u6548"}},table:{headerdescription:"\u6309\u7a7a\u683c\u9375\u555f\u52d5\u8a2d\u5b9a\u3002\u6309tab\u9375\u8fd4\u56de\u8868\u683c\u9078\u8272\u5668\u3002",cell:{border:{size:"\u6846\u7dda\u5c3a\u5bf8"}}},input:{invalid:"\u7121\u6548\u7684\u8f38\u5165"},widget:{navigation:"\u4f7f\u7528\u65b9\u5411\u9375\u5c0e\u89bd\u3002"},image:{crop:{size:"\u526a\u88c1\u5c3a\u5bf8\u662f{0}\u5716\u5143{1}\u7684\u5716\u5143"}}},color:{white:"\u767d\u8272",black:"\u9ed1\u8272",gray:"\u7070\u8272",metal:"\u91d1\u5c6c\u8272",smoke:"\u7159\u8272",red:"\u7d05\u8272",darkred:"\u6697\u7d05\u8272",darkorange:"\u6df1\u6a59\u8272",orange:"\u6a59\u8272",yellow:"\u9ec3\u8272",green:"\u7da0\u8272",darkgreen:"\u6df1\u7da0\u8272",mediumseagreen:"\u4e2d\u6d77\u7da0\u8272",lightgreen:"\u6de1\u7da0\u8272",lime:"\u7eff\u9ec4\u8272",mediumblue:"\u4e2d\u85cd\u8272",navy:"\u6df1\u84dd\u8272",blue:"\u85cd\u8272",lightblue:"\u6dfa\u85cd\u8272",violet:"\u85cd\u7d2b\u8272"},directionality:{rtldir:"\u65b9\u5411\u53f3\u81f3\u5de6",ltrdir:"\u65b9\u5411\u5de6\u81f3\u53f3"},parlance:{menu:"\u8a9e\u8a00\u529f\u80fd\u8868",set:"\u8a2d\u5b9a\u8a9e\u8a00",ar:"\u963f\u62c9\u4f2f\u6587",ca:"\u52a0\u6cf0\u9686\u5c3c\u4e9e\u6587",zh_cn:"\u4e2d\u6587\uff08\u7c21\u9ad4\uff09",zh_tw:"\u4e2d\u6587\uff08\u7e41\u9ad4\uff09",hr:"\u514b\u7f85\u57c3\u897f\u4e9e\u6587",cs:"\u6377\u514b\u6587",da:"\u4e39\u9ea5\u6587",nl:"\u8377\u862d\u6587",en:"\u82f1\u6587",en_au:"\u82f1\u6587\uff08\u6fb3\u6d32\uff09",en_ca:"\u82f1\u6587\uff08\u52a0\u62ff\u5927\uff09",en_gb:"\u82f1\u6587\uff08\u82f1\u570b\uff09",en_us:"\u82f1\u6587\uff08\u7f8e\u570b\uff09",fa:"\u6ce2\u65af\u6587",fi:"\u82ac\u862d\u6587",fr:"\u6cd5\u6587",fr_ca:"\u6cd5\u6587\uff08\u52a0\u62ff\u5927\uff09",de:"\u5fb7\u6587",el:"\u5e0c\u81d8\u6587",he:"\u5e0c\u4f2f\u4f86\u6587",hu:"\u5308\u7259\u5229\u6587",it:"\u7fa9\u5927\u5229\u6587",ja:"\u65e5\u6587",kk:"\u54c8\u85a9\u514b\u6587",ko:"\u97d3\u6587",no:"\u632a\u5a01\u6587",pl:"\u6ce2\u862d\u6587",pt_br:"\u8461\u8404\u7259\u6587\uff08\u5df4\u897f\uff09",pt_pt:"\u8461\u8404\u7259\u6587\uff08\u8461\u8404\u7259\uff09",ro:"\u7f85\u99ac\u5c3c\u4e9e\u6587",ru:"\u4fc4\u6587",sk:"\u65af\u6d1b\u4f10\u514b\u6587",sl:"\u65af\u6d1b\u7dad\u5c3c\u4e9e\u6587",es:"\u897f\u73ed\u7259\u6587",es_419:"\u897f\u73ed\u7259\u6587\uff08\u62c9\u4e01\u7f8e\u6d32\uff09",es_es:"\u897f\u73ed\u7259\u6587\uff08\u897f\u73ed\u7259\uff09",sv:"\u745e\u5178\u6587",tt:"\u9791\u977c\u6587",th:"\u6cf0\u6587",tr:"\u571f\u8033\u5176\u6587",uk:"\u70cf\u514b\u862d\u6587"},taptoedit:"\u9ede\u64ca\u7de8\u8f2f",plaincode:{dialog:{title:"\u4ee3\u78bc\u8996\u5716",editor:"HTML\u539f\u59cb\u78bc\u7de8\u8f2f\u5668"}},help:{dialog:{accessibility:"\u9375\u76e4\u5c0e\u822a",a11ycheck:"\u9032\u5165\u6aa2\u67e5",about:"\u95dc\u65bcTextbox.io",markdown:"Markdown\u683c\u5f0f\u5316",shortcuts:"\u5feb\u6377\u9375"}},spelling:{context:{more:"\u66f4\u591a\u8cc7\u8a0a",morelabel:"\u66f4\u591a\u62fc\u5beb\u9078\u9805\u5b50\u529f\u80fd\u8868"},none:"\u7121",menu:"\u62fc\u5beb\u6aa2\u67e5\u8a9e\u8a00"},specialchar:{open:"\u7279\u6b8a\u5b57\u5143",dialog:"\u63d2\u5165\u7279\u6b8a\u5b57\u5143",latin:"\u62c9\u4e01\u5b57\u6bcd",insert:"\u63d2\u5165",punctuation:"\u6a19\u9ede\u7b26\u865f",currency:"\u8ca8\u5e63","extended-latin-a":"\u62c9\u4e01\u5b57\u6bcd\u64f4\u5145A","extended-latin-b":"\u62c9\u4e01\u5b57\u6bcd\u64f4\u5145B",arrows:"\u7bad\u982d",mathematical:"\u6578\u5b78",miscellaneous:"\u96dc\u9805",selects:"\u9078\u53d6\u5b57\u5143",grid:"\u7279\u6b8a\u5b57\u5143"},insert:{"menu-button":"\u63d2\u5165\u529f\u80fd\u8868",menu:"\u63d2\u5165",link:"\u93c8\u63a5",bookmark:"\u66f8\u7c64......",image:"\u5716\u50cf",table:"\u8868\u683c",horizontalrule:"\u6c34\u5e73\u5c3a\u898f",media:"\u5a92\u4ecb"},media:{embed:"\u5a92\u9ad4\u5167\u5d4c\u7a0b\u5f0f\u78bc",insert:"\u63d2\u5165",placeholder:"\u5728\u6b64\u8cbc\u4e0a\u5167\u5d4c\u7a0b\u5f0f\u78bc\u3002"},bookmark:{name:"\u66f8\u7c64\u540d\u7a31",insert:"\u63d2\u5165",placeholder:"\u8f38\u5165\u66f8\u7c64\u540d\u7a31"},wordcount:{open:"\u8a08\u7b97\u5b57\u6578",dialog:"\u8a08\u7b97\u5b57\u6578",counts:"\u8a08\u7b97",selection:"\u9078\u9805",document:"\u6587\u4ef6",characters:"\u5b57\u5143",charactersnospaces:"\u5b57\u5143\uff08\u7121\u7a7a\u683c\uff09",words:"\u5b57\u6578"},list:{unordered:{menu:"\u672a\u6392\u5e8f\u6e05\u55ae\u9078\u9805",default:"\u9810\u8a2d\u672a\u6392\u5e8f",circle:"\u5713\u5708\u672a\u6392\u5e8f",square:"\u65b9\u584a\u672a\u6392\u5e8f",disc:"\u5713\u76e4\u672a\u6392\u5e8f"},ordered:{menu:"\u6392\u5e8f\u6e05\u55ae\u9078\u9805",default:"\u9810\u8a2d\u5df2\u6392\u5e8f",decimal:"\u5c0f\u6578\u9ede\u5df2\u6392\u5e8f","upper-alpha":"\u5927\u5beb\u82f1\u6587\u5b57\u6bcd\u5df2\u6392\u5e8f","lower-alpha":"\u5c0f\u5beb\u82f1\u6587\u5b57\u6bcd\u5df2\u6392\u5e8f","upper-roman":"\u5927\u5beb\u7f85\u99ac\u6587\u5df2\u6392\u5e8f","lower-roman":"\u5c0f\u5beb\u7f85\u99ac\u6587\u5df2\u6392\u5e8f","lower-greek":"\u5c0f\u5beb\u5e0c\u81d8\u6587\u5df2\u6392\u5e8f"}},tag:{inline:{class:"\u8de8\u5ea6({0})"},img:"\u5716\u50cf"},block:{normal:"\u6b63\u5e38",p:"\u6bb5\u843d",h1:"\u6a19\u984c1",h2:"\u6a19\u984c2",h3:"\u6a19\u984c3",h4:"\u6a19\u984c4",h5:"\u6a19\u984c5",h6:"\u6a19\u984c6",div:"Div",pre:"Pre",li:"\u5217\u51fa\u9805\u76ee",td:"\u5132\u5b58\u683c",th:"\u6a19\u984c\u5132\u5b58\u683c",styles:"\u6a23\u5f0f\u529f\u80fd\u8868",dropdown:"\u57fa\u584a",describe:"\u76ee\u524d\u6a23\u5f0f{0}",menu:"\u6a23\u5f0f",label:{inline:"\u5d01\u5165\u5f0f\u6a23\u5f0f",table:"\u8868\u683c\u6a23\u5f0f",line:"\u884c\u6a23\u5f0f",media:"\u5a92\u9ad4\u6a23\u5f0f",list:"\u5217\u8868\u6a23\u5f0f",link:"\u93c8\u63a5\u6a23\u5f0f"}},font:{"menu-button":"\u5b57\u9ad4\u529f\u80fd\u8868",menu:"\u5b57\u578b",face:"\u5b57\u6a23",size:"\u5b57\u9ad4\u5927\u5c0f",coloroption:"\u8272\u5f69",describe:"\u76ee\u524d\u5b57\u9ad4{0}",color:"\u6587\u672c",highlight:"\u7a81\u986f",stepper:{input:"\u8a2d\u7f6e\u5b57\u9ad4\u5927\u5c0f",increase:"\u589e\u52a0\u5b57\u9ad4\u5927\u5c0f",decrease:"\u6e1b\u5c0f\u5b57\u9ad4\u5927\u5c0f"}},cog:{"menu-button":"\u8a2d\u7f6e\u529f\u80fd\u8868",menu:"\u8a2d\u5b9a",spellcheck:"\u62fc\u5beb\u6aa2\u67e5",capitalisation:"\u5927\u5beb",autocorrect:"\u81ea\u52d5\u6821\u6b63",linkpreviews:"\u9810\u89bd\u93c8\u63a5",help:"\u5e6b\u52a9"},alignment:{toolbar:"\u5c0d\u9f4a\u65b9\u5f0f\u529f\u80fd\u8868",menu:"\u5c0d\u9f4a",left:"\u9760\u5de6\u5c0d\u9f4a",center:"\u7f6e\u4e2d\u5c0d\u9f4a",right:"\u9760\u53f3\u5c0d\u9f4a",justify:"\u5169\u7aef\u5c0d\u9f4a",describe:"\u76ee\u524d\u5c0d\u9f4a{0}"},category:{language:"\u8a9e\u8a00\u7d44",undo:"\u64a4\u92b7\u548c\u91cd\u505a\u7d44",insert:"\u63d2\u5165\u7d44",style:"\u6a23\u5f0f\u7d44",emphasis:"\u683c\u5f0f\u5316\u7d44",align:"\u5c0d\u9f4a\u7d44",listindent:"\u5217\u8868\u548c\u7e2e\u9032\u7d44",format:"\u5b57\u9ad4\u7d44",tools:"\u5de5\u5177\u7d44",table:"\u8868\u683c\u7d44",image:"\u5716\u50cf\u7de8\u8f2f\u7d44"},action:{undo:"\u64a4\u92b7",redo:"\u91cd\u505a",bold:"\u7c97\u9ad4",italic:"\u659c\u9ad4",underline:"\u4e0b\u5283\u7dda",strikethrough:"\u522a\u9664\u7dda",subscript:"\u4e0b\u6a19",superscript:"\u4e0a\u6a19",removeformat:"\u79fb\u9664\u683c\u5f0f\u5316",bullist:"\u672a\u6392\u5e8f\u6e05\u55ae",numlist:"\u6392\u5e8f\u6e05\u55ae",indent:"\u7e2e\u9032\u66f4\u591a",outdent:"\u7e2e\u9032\u66f4\u5c11",blockquote:"Blockquote",fullscreen:"\u5168\u87a2\u5e55",search:"\u67e5\u627e\u548c\u66ff\u63db\u5c0d\u8a71\u65b9\u584a",a11ycheck:"\u6aa2\u67e5\u9032\u5165",toggle:{fullscreen:"\u7d50\u675f\u5168\u87a2\u5e55"}},table:{menu:"\u63d2\u5165\u8868\u683c","column-header":"\u6a19\u984c\u6b04","row-header":"\u6a19\u984c\u884c",float:"\u6d6e\u52d5\u5c0d\u9f4a",cell:{alignment:{top:"\u9802\u90e8\u5c0d\u9f4a",middle:"\u4e2d\u9593\u5c0d\u9f4a",bottom:"\u5e95\u90e8\u5c0d\u9f4a",toolbar:"\u5132\u5b58\u683c\u5782\u76f4\u5c0d\u9f4a"},color:{border:"\u6846\u7dda\u984f\u8272",background:"\u80cc\u666f\u9854\u8272"},border:{width:"\u6846\u7dda\u5bec\u5ea6",stepper:{input:"\u8a2d\u5b9a\u6846\u7dda\u5bec\u5ea6",increase:"\u589e\u52a0\u6846\u7dda\u5bec\u5ea6",decrease:"\u6e1b\u5c11\u6846\u7dda\u5bec\u5ea6"}}},context:{row:{title:"\u884c\u5b50\u529f\u80fd\u8868",menu:"\u884c",insertabove:"\u63d2\u5165\u4e0a\u65b9",insertbelow:"\u63d2\u5165\u4e0b\u65b9"},column:{title:"\u6b04\u76ee\u5b50\u529f\u80fd\u8868",menu:"\u6b04\u76ee",insertleft:"\u63d2\u5165\u5de6\u908a",insertright:"\u63d2\u5165\u53f3\u908a"},cell:{merge:"\u5408\u4f75\u5b58\u5132\u683c",unmerge:"\u5206\u5272\u5b58\u5132\u683c","split-cols":"\u5206\u5272\u70ba\u6b04","split-rows":"\u5206\u5272\u70ba\u5217"},table:{title:"\u8868\u683c\u5b50\u529f\u80fd\u8868",menu:"\u8868\u683c",properties:"\u5c6c\u6027",delete:"\u522a\u9664"},common:{delete:"\u522a\u9664",normal:"\u8a2d\u7f6e\u70ba\u5e38\u898f",header:"\u8a2d\u7f6e\u70ba\u6a19\u984c"},palette:{show:"\u5de5\u5177\u6b04\u4e2d\u63d0\u4f9b\u5716\u8868\u7de8\u8f2f\u9078\u9805",hide:"\u4e0d\u518d\u63d0\u4f9b\u5716\u8868\u7de8\u8f2f\u9078\u9805"}},picker:{header:"\u6a19\u984c\u8a2d\u7f6e",label:"\u8868\u683c\u9078\u8272\u5668",describepicker:"\u4f7f\u7528\u65b9\u5411\u9375\u8a2d\u5b9a\u8868\u683c\u5c3a\u5bf8\u3002  \u6309tab\u9375\u524d\u5f80\u8868\u683c\u6a19\u984c\u8a2d\u5b9a\u3002\u6309space\u6216enter\u9375\u63d2\u5165\u8868\u683c\u3002",rows:"{0}\u9ad8",cols:"{0}\u5bec"},border:"\u6846\u7dda",summary:"\u6982\u8981",dialog:"\u8868\u683c\u5c6c\u6027",caption:"\u8868\u683c\u6a19\u984c",width:"\u5bec\u5ea6",height:"\u9ad8\u5ea6"},align:{none:"\u4e0d\u5c0d\u9f4a",center:"\u7f6e\u4e2d\u5c0d\u9f4a",left:"\u9760\u5de6\u5c0d\u9f4a",right:"\u9760\u53f3\u5c0d\u9f4a"},button:{ok:"\u78ba\u5b9a",cancel:"\u53d6\u6d88",close:"\u53d6\u6d88\u5c0d\u8a71\u65b9\u584a"},banner:{close:"\u95dc\u9589\u6a6b\u5e45"},border:{on:"\u958b",off:"\u95dc",labels:{on:"\u6846\u7dda\u958b",off:"\u6846\u7dda\u95dc"}},loading:{wait:"\u8acb\u7a0d\u7b49"},toolbar:{more:"\u66f4\u591a\u8cc7\u8a0a",backbutton:"\u8fd4\u56de","switch-code":"\u8f49\u63db\u81f3\u7de8\u78bc\u8996\u5716","switch-pencil":"\u8f49\u63db\u81f3\u8a2d\u8a08\u8996\u5716"},link:{context:{edit:"\u7de8\u8f2f\u93c8\u63a5",follow:"\u6253\u958b\u93c8\u63a5",ignore:"\u5ffd\u7565\u65b7\u958b\u7684\u93c8\u63a5",remove:"\u522a\u9664\u93c8\u63a5"},dialog:{aria:{update:"\u66f4\u65b0\u93c8\u63a5",insert:"\u63d2\u5165\u93c8\u63a5",properties:"\u93c8\u63a5\u5c6c\u6027",quick:"\u5feb\u901f\u9078\u9805"},autocomplete:{open:"\u93c8\u63a5\u81ea\u52d5\u5b8c\u6210\u6e05\u55ae\u53ef\u7528\u3002\u7e7c\u7e8c\u8f38\u5165\u6216\u4f7f\u7528\u5411\u4e0a\u548c\u5411\u4e0b\u9375\u4f86\u9078\u64c7\u5efa\u8b70\u3002",close:"\u93c8\u63a5\u81ea\u52d5\u5b8c\u6210\u6e05\u55ae\u95dc\u9589",accept:"\u9078\u5b9a\u93c8\u63a5\u5efa\u8b70{0}"},edit:"\u7de8\u8f2f",remove:"\u79fb\u9664",preview:"\u9810\u89bd",update:"\u66f4\u65b0",insert:"\u63d2\u5165",tooltip:"\u93c8\u63a5"},properties:{dialog:{title:"\u93c8\u63a5\u5c6c\u6027"},text:{label:"\u8981\u986f\u793a\u7684\u6587\u672c",placeholder:"\u8f38\u5165\u6216\u7c98\u8cbc\u986f\u793a\u6587\u672c"},url:{label:"\u93c8\u63a5 URL \u6216\u66f8\u7c64",placeholder:"\u8f38\u5165\u93c8\u63a5 URL \u6216\u66f8\u7c64",invalid:"\u60a8\u7684\u93c8\u63a5 URL \u53ef\u80fd\u4e0d\u6b63\u78ba"},title:{label:"\u6a19\u984c",placeholder:"\u9375\u5165\u6216\u7c98\u8cbc\u93c8\u63a5\u6a19\u984c"},button:{remove:"\u79fb\u9664"},target:{label:"\u76ee\u6a19",none:"\u7121",blank:"\u65b0\u8996\u7a97",top:"\u6574\u9801",self:"\u76f8\u540c\u7684\u5e40",parent:"\u7236\u6846\u67b6"}},anchor:{top:"\u6587\u4ef6\u9802\u90e8",bottom:"\u6587\u4ef6\u5e95\u90e8"}},fileupload:{title:"\u63d2\u5165\u5716\u50cf",tablocal:"\u672c\u5730\u6587\u4ef6",tabweburl:"\u7db2\u9801URL",dropimages:"\u5c07\u5716\u50cf\u653e\u5728\u9019\u88e1",chooseimage:"\u9078\u64c7\u4e0a\u50b3\u7684\u5716\u50cf",web:{url:"\u7db2\u9801\u5716\u50cfURL\uff1a"},weburlhelp:"\u9375\u5165URL\uff0c\u67e5\u770b\u5716\u50cf\u9810\u89bd\u3002\u5927\u5716\u50cf\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u6642\u9593\u624d\u80fd\u986f\u793a\u3002",invalid1:"\u6211\u5011\u5728\u60a8\u4f7f\u7528\u7684URL\u627e\u4e0d\u5230\u5716\u50cf\u3002",invalid2:"\u8acb\u6aa2\u67e5URL\u662f\u5426\u8f38\u5165\u6b63\u78ba\u3002",invalid3:"\u8acb\u78ba\u4fdd\u60a8\u8a2a\u554f\u7684\u5716\u50cf\u662f\u516c\u958b\u7684\uff0c\u800c\u975e\u53d7\u5bc6\u78bc\u4fdd\u8b77\u6216\u4f4d\u65bc\u79c1\u4eba\u7db2\u8def\u5167\u3002"},image:{context:{properties:"\u5716\u50cf\u5c6c\u6027",palette:{show:"\u5de5\u5177\u6b04\u4e2d\u63d0\u4f9b\u5716\u50cf\u7de8\u8f2f\u9078\u9805",hide:"\u4e0d\u518d\u63d0\u4f9b\u5716\u50cf\u7de8\u8f2f\u9078\u9805"}},dialog:{title:"\u5716\u50cf\u5c6c\u6027",fields:{align:"\u6d6e\u52d5\u5c0d\u9f4a",url:"URL",urllocal:"\u5c1a\u672a\u4fdd\u5b58\u5716\u50cf",alt:"\u66ff\u4ee3\u6587\u5b57",width:"\u5bec\u5ea6",height:"\u9ad8\u5ea6",constrain:{label:"\u4fdd\u6301\u6bd4\u4f8b",on:"\u9396\u5b9a\u7684\u6bd4\u4f8b",off:"\u89e3\u9396\u7684\u6bd4\u4f8b"}}},menu:"\u63d2\u5165\u5716\u50cf","menu-button":"\u63d2\u5165\u5716\u50cf\u529f\u80fd\u8868","from-url":"\u7db2\u9801URL","from-camera":"\u624b\u6a5f\u76f8\u7c3f",toolbar:{rotateleft:"\u5411\u5de6\u65cb\u8f49",rotateright:"\u5411\u53f3\u65cb\u8f49",fliphorizontal:"\u6c34\u5e73\u7ffb\u8f49",flipvertical:"\u5782\u76f4\u7ffb\u8f49",properties:"\u5716\u50cf\u5c6c\u6027"},crop:{announce:"\u9032\u5165\u88c1\u526a\u4ecb\u9762\u3002\u6309enter\u9375\u61c9\u7528\uff0c\u6309escape\u9375\u53d6\u6d88\u3002",cancel:"\u53d6\u6d88\u88c1\u526a\u64cd\u4f5c",begin:"\u526a\u88c1\u5716\u50cf",apply:"\u9069\u7528\u88c1\u526a",handle:{nw:"\u5de6\u4e0a\u89d2\u7684\u88c1\u526a\u624b\u67c4",ne:"\u53f3\u4e0a\u89d2\u7684\u88c1\u526a\u624b\u67c4",se:"\u53f3\u4e0b\u89d2\u7684\u88c1\u526a\u624b\u67c4",sw:"\u5de6\u4e0b\u89d2\u7684\u88c1\u526a\u624b\u67c4",shade:"\u88c1\u526a\u9762\u7f69"}}},units:{"amount-of-total":"{1}\u7684{0}"},search:{menu:"\u67e5\u627e\u548c\u66ff\u63db",field:{replace:"\u66ff\u63db\u57df",search:"\u641c\u7d22\u57df"},search:"\u641c\u7d22",previous:"\u4e0a\u4e00\u500b",next:"\u4e0b\u4e00\u500b",replace:"\u66ff\u63db","replace-all":"\u5168\u90e8\u53d6\u4ee3",matchcase:"\u5927\u5c0f\u5beb\u76f8\u7b26"},mentions:{initiated:"\u5275\u5efa\u63d0\u793a\uff0c\u7e7c\u7e8c\u9375\u5165\u524d\u9762\u7684\u985e\u578b",lookahead:{open:"\u9810\u5148\u9375\u5165\u5217\u8868\u65b9\u584a",cancelled:"\u5df2\u53d6\u6d88\u7684\u63d0\u793a",searching:"\u641c\u5c0b\u7d50\u679c",selected:"\u5df2\u63d2\u5165{0}\u7684\u63d0\u793a",noresults:"\u6c92\u6709\u7d50\u679c"}},cement:{dialog:{paste:{title:"\u7c98\u8cbc\u683c\u5f0f\u5316\u9078\u9805",instructions:"\u9078\u64c7\u5728\u7c98\u8cbc\u7684\u5167\u5bb9\u5167\u4fdd\u6301\u6216\u79fb\u9664\u683c\u5f0f\u5316\u3002",merge:"\u4fdd\u6301\u683c\u5f0f\u5316",clean:"\u79fb\u9664\u683c\u5f0f\u5316"},flash:{title:"\u5c0e\u5165\u672c\u5730\u5716\u50cf","trigger-paste":"\u518d\u6b21\u5f9e\u9375\u76e4\u89f8\u767c\u7c98\u8cbc\u64cd\u4f5c\uff0c\u7c98\u8cbc\u542b\u5716\u50cf\u7684\u5167\u5bb9\u3002",missing:'\u5f9eMicrosoft Office\u8edf\u9ad4\u5c0e\u5165\u5716\u50cf\u9700\u8981\u7684Adobe Flash\u3002\u5b89\u88dd<a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash\u64ad\u653e\u5668</a>\u3002',"press-escape":'\u6309<span class="ephox-polish-help-kbd">ESC</span>\uff0c\u5ffd\u7565\u672c\u5730\u5716\u50cf\u4e26\u7e7c\u7e8c\u7de8\u8f2f\u3002'}}},cloud:{error:{apikey:"\u60a8\u7684API\u91d1\u9470\u7121\u6548\u3002",domain:"\u60a8\u7684API\u91d1\u9470\u4e0d\u652f\u63f4\u60a8\u7684\u7db2\u57df({0})\u3002",plan:"\u60a8\u5df2\u8d85\u904e\u65b9\u6848\u53ef\u7528\u7684\u7de8\u8f2f\u5668\u4e0b\u8f09\u6b21\u6578\u3002\u9020\u8a2a\u7db2\u7ad9\u9032\u884c\u5347\u7d1a\u3002"},dashboard:"\u524d\u5f80\u7ba1\u7406\u54e1\u63a7\u5236\u677f"},errors:{paste:{notready:"\u6587\u5b57\u532f\u5165\u529f\u80fd\u5c1a\u672a\u8f09\u5165\u3002\u8acb\u7a0d\u5f85\u7247\u523b\uff0c\u7136\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",generic:"\u8cbc\u4e0a\u5167\u5bb9\u6642\u767c\u751f\u932f\u8aa4\u3002"},toolbar:{missing:{custom:{string:'\u5ba2\u88fd\u5316\u6307\u4ee4\u5fc5\u9808\u542b\u6709"{0}"\u5c6c\u6027\uff0c\u800c\u4e14\u5fc5\u9808\u662f\u4e00\u4e32\u5b57\u7b26\u3002'}},invalid:"\u5de5\u5177\u5217\u914d\u7f6e\u7121\u6548({0}\uff09\u3002\u8a73\u60c5\u8acb\u67e5\u770b\u63a7\u5236\u53f0\u3002"},spelling:{missing:{service:"\u627e\u4e0d\u5230\u62fc\u5beb\u670d\u52d9\uff1a\uff08{0}\uff09\u3002"}},images:{edit:{needsproxy:"\u9700\u8981\u901a\u904e\u4ee3\u7406\u624d\u80fd\u5728\u6b64\u57df\u7de8\u8f2f\u5716\u50cf:\uff08{0}\uff09",proxyerror:"\u7de8\u8f2f\u6b64\u5716\u50cf\u6642\u7121\u6cd5\u8207\u4ee3\u7406\u6e9d\u901a\u3002\u8a73\u60c5\u8acb\u67e5\u770b\u63a7\u5236\u53f0\u3002",generic:"\u57f7\u884c\u5716\u50cf\u7de8\u8f2f\u64cd\u4f5c\u6642\u51fa\u932f\u3002\u8a73\u60c5\u8acb\u67e5\u770b\u63a7\u5236\u53f0\u3002"},disallowed:{local:"\u5c40\u90e8\u5716\u50cf\u7c98\u8cbc\u5df2\u88ab\u7981\u7528\u3002\u5c40\u90e8\u5716\u50cf\u5df2\u5f9e\u7c98\u8cbc\u5167\u5bb9\u8655\u522a\u9664\u3002",dragdrop:"\u62d6\u62fd\u5df2\u88ab\u7981\u7528\u3002"},upload:{unknown:"\u5716\u50cf\u4e0a\u50b3\u5931\u6557",invalid:"\u5e76\u4e0d\u662f\u6240\u6709\u6587\u4ef6\u90fd\u5df2\u88ab\u8655\u7406-\u5176\u4e2d\u4e00\u4e9b\u4e0d\u662f\u6709\u6548\u7684\u5716\u50cf",failed:"\u5716\u50cf\u4e0a\u50b3\u5931\u6557\uff1a({0})\u3002",cors:"\u7121\u6cd5\u806f\u7d61\u5716\u50cf\u4e0a\u50b3\u670d\u52d9\u3002\u53ef\u80fd\u767c\u751fCORS\u932f\u8aa4\uff1a({0})"},missing:{service:"\u627e\u4e0d\u5230\u5716\u50cf\u670d\u52d9\uff1a\uff08{0}\uff09\u3002",flash:"\u700f\u89bd\u5668\u7684\u5b89\u5168\u8a2d\u7f6e\u53ef\u80fd\u963b\u6b62\u4e86\u5716\u50cf\u5c0e\u5165\u3002"},import:{failed:"\u4e00\u4e9b\u5716\u50cf\u5c0e\u5165\u5931\u6557\u3002",unsupported:"\u4e0d\u652f\u63f4\u5716\u50cf\u985e\u578b\u3002",invalid:"\u5716\u50cf\u662f\u7121\u6548\u7684\u3002"}},webview:{image:"\u4e0d\u80fd\u7c98\u8cbc\u76f4\u63a5\u8907\u88fd\u7684\u5716\u50cf\u3002"},safari:{image:"Safari\u700f\u89bd\u5668\u4e0d\u652f\u6301\u76f4\u63a5\u7c98\u8cbc\u5716\u50cf\u3002",url:"\u5efa\u8b70\u7684\u89e3\u6c7a\u8fa6\u6cd5",rtf:"\u4e86\u89e3\u5982\u4f55","browser-settings":"\u82e5\u8981\u9ecf\u8cbc\u5716\u50cf\uff0c\u8acb\u8abf\u6574\u60a8\u7684\u700f\u89bd\u5668\u8a2d\u7f6e\u3002"},flash:{crashed:"\u672a\u5c0e\u5165\u5716\u50cf\uff0cAdobe Flash\u53ef\u80fd\u51fa\u73fe\u4e86\u6545\u969c\u3002\u9019\u53ef\u80fd\u662f\u56e0\u7232\u7c98\u8cbc\u5927\u578b\u6587\u4ef6\u5f15\u8d77\u7684\u3002"},http:{400:"\u932f\u8aa4\u7684\u8981\u6c42\uff1a{0}",401:"\u672a\u6388\u6b0a\uff1a{0}",403:"\u7981\u6b62\uff1a{0}",404:"\u627e\u4e0d\u5230\uff1a{0}",407:"\u9700\u8981Proxy\u6388\u6b0a\uff1a{0}",409:"\u6587\u4ef6\u885d\u7a81\uff1a{0}",413:"\u88dd\u8f09\u904e\u5927\uff1a{0}",415:"\u4e0d\u652f\u63f4\u7684\u5a92\u9ad4\u985e\u578b\uff1a{0}",500:"\u5167\u90e8\u4f3a\u670d\u5668\u932f\u8aa4\uff1a{0}",501:"\u5c1a\u672a\u57f7\u884c\uff1a{0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_zh_tw.js","strings for language zh_tw")({version:"2.4.0",strings:a})}();