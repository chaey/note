(this["webpackJsonpnote-exdone"]=this["webpackJsonpnote-exdone"]||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),o=n(19),s=n.n(o),i=n(10),a=n(21),u=n(6),d=n(1);function l(e){var t=e.notes.map((function(t,n){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"title ".concat(t.id===e.currentNote.id?"selected-note":""),onClick:function(){return e.setCurrentNoteId(t.id)},children:[Object(d.jsx)("h4",{className:"text-snippet",children:t.body.split("\n")[0]}),Object(d.jsx)("button",{className:"delete-btn",onClick:function(n){return e.deleteNote(n,t.id)},children:Object(d.jsx)("i",{className:"gg-trash trash-icon"})})]})},t.id)}));return Object(d.jsxs)("section",{className:"pane sidebar",children:[Object(d.jsxs)("div",{className:"sidebar--header",children:[Object(d.jsx)("h3",{children:"Notes"}),Object(d.jsx)("button",{className:"new-note",onClick:e.newNote,children:"+"})]}),t]})}var j=n(9),b=n.n(j),h=n(20),f=n.n(h);function O(e){var t=e.currentNote,n=e.updateNote,r=c.a.useState("write"),o=Object(u.a)(r,2),s=o[0],i=o[1],a=new f.a.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0});return Object(d.jsx)("section",{className:"pane editor",children:Object(d.jsx)(b.a,{value:t.body,onChange:n,selectedTab:s,onTabChange:i,generateMarkdownPreview:function(e){return Promise.resolve(a.makeHtml(e))},minEditorHeight:80,heightUnits:"vh"})})}var N=n(22),m=n(23);n(55),n(56);function x(){var e=c.a.useState((function(){return JSON.parse(localStorage.getItem("notes"))||[]})),t=Object(u.a)(e,2),n=t[0],r=t[1];c.a.useEffect((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]);var o=c.a.useState(n[0]&&n[0].id||""),s=Object(u.a)(o,2),j=s[0],b=s[1];function h(){var e={id:Object(m.a)(),body:"# Type your markdown note's title here"};r((function(t){return[e].concat(Object(a.a)(t))})),b(e.id)}function f(){return n.find((function(e){return e.id===j}))||n[0]}return Object(d.jsx)("main",{children:n.length>0?Object(d.jsxs)(N.a,{sizes:[30,70],direction:"horizontal",className:"split",children:[Object(d.jsx)(l,{notes:n,currentNote:f(),setCurrentNoteId:b,newNote:h,deleteNote:function(e,t){e.stopPropagation(),r((function(e){return e.filter((function(e){return e.id!==t}))}))}}),j&&n.length>0&&Object(d.jsx)(O,{currentNote:f(),updateNote:function(e){r((function(t){for(var n=[],r=0;r<t.length;r++){var c=t[r];c.id===j?n.unshift(Object(i.a)(Object(i.a)({},c),{},{body:e})):n.push(c)}return n}))}})]}):Object(d.jsxs)("div",{className:"no-notes",children:[Object(d.jsx)("h1",{children:"You have no notes"}),Object(d.jsx)("button",{className:"first-note",onClick:h,children:"Create one now"})]})})}s.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fba8fc3e.chunk.js.map