(window.webpackJsonpfrontendd=window.webpackJsonpfrontendd||[]).push([[0],{117:function(e,t,a){},12:function(e,t,a){e.exports=a.p+"static/media/logoGet.9e3d5c78.svg"},140:function(e,t){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=(a(86),a(87),a(88),a(13)),o=a(17),i=a(3),m=a.n(i),u=a(5),d=a(2),p=a(12),E=a.n(p),f=(a(25),a(73)),g=a.n(f).a.create({baseURL:"https://getjobserver.herokuapp.com"}),h=a(149);function v(e){var t=e.history,a=Object(n.useState)(""),c=Object(d.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),p=Object(d.a)(i,2),f=p[0],v=p[1],b=Object(n.useState)(""),A=Object(d.a)(b,2),j=A[0],x=A[1];function O(){return(O=Object(u.a)(m.a.mark(function e(a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,g.post("/devs",{user:l,senha:f});case 3:n=e.sent,(r=n.data._id)?t.push("/homedev/".concat(r)):x(!0);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:E.a,className:"logo",alt:"Tindev"})),j&&r.a.createElement(h.a,{color:"danger"},r.a.createElement("strong",null,"Algo deu Errado!"),"Revise seu e Email e Senha"),r.a.createElement("input",{type:"text",placeholder:"Seu usuario do GitHub",value:l,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Sua senha",value:f,onChange:function(e){return v(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"botao"},"Enviar")))}var b=a(18),A=(a(59),a(21)),j=a.n(A),x=a(33),O=a.n(x),N=a(34),y=a.n(N),w=a(22),C=a.n(w),k=(a(60),a(146)),S=a(147),z=a(148),B=(a(117),a(16)),q=a.n(B),F=a(35),R=a.n(F);function M(e){var t=e.match,a=Object(n.useState)([]),c=Object(d.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)([]),i=Object(d.a)(o,2),p=i[0],E=i[1],f=Object(n.useState)(null),h=Object(d.a)(f,2),v=h[0],A=h[1],x=Object(n.useState)(null),N=Object(d.a)(x,2),w=N[0],B=N[1],F=Object(n.useState)({}),M=Object(d.a)(F,2),D=M[0],I=M[1],U=Object(n.useState)(1),J=Object(d.a)(U,2),T=J[0],G=J[1];function _(){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l.length<=1)){e.next=6;break}return G(T+1),e.next=4,g.get("/devs?pg=".concat(T,"&vs=6"),{headers:{user:t.params.id}});case 4:a=e.sent,s(Object(b.a)(a.data));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Q(){return(Q=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/devs/".concat(a,"/likes"),null,{headers:{user:t.params.id}});case 2:console.log("like",a),s(l.filter(function(e){return e._id!==a})),_();case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(){return(V=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/devs/".concat(a,"/deslikes"),null,{headers:{user:t.params.id}});case 2:console.log("deslike",a),s(l.filter(function(e){return e._id!==a})),_();case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){function e(){return(e=Object(u.a)(m.a.mark(function e(){var a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/vagLog",{headers:{user:t.params.id}});case 2:return a=e.sent,I(a.data),e.next=6,g.get("/matcs",{headers:{user:t.params.id}});case 6:return n=e.sent,E(n.data),e.next=10,g.get("/devs?pg=".concat(T,"&vs=6"),{headers:{user:t.params.id}});case 10:r=e.sent,s(r.data);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t.params.id]),Object(n.useEffect)(function(){R()("https://getjobserver.herokuapp.com",{query:{user:t.params.id}}).on("match",function(e){A(e)})},[t.params.id]),r.a.createElement("div",{className:"main-container"},!v&&!w&&r.a.createElement("header",{class:"fixar"},r.a.createElement("a",{className:"logo",href:"/"},r.a.createElement("img",{src:j.a,className:"logoo",alt:"logo"}),"getJob()"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"# ",onClick:function(){return B(!0)}},"Matchs")),r.a.createElement("li",null,r.a.createElement("a",{role:"button",href:"/emp/".concat(D.idEmp)},D.user,r.a.createElement("img",{src:D.avatar,alt:" "}))))),r.a.createElement("div",{className:"menu-toggle"}," ",r.a.createElement("i",{class:"fa fa-bars","aria-hidden":"true"}," ",r.a.createElement("img",{src:C.a,alt:"menu"})," ")," ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),l.length>0?r.a.createElement(k.a,null,r.a.createElement(S.a,{id:"Row"},l.map(function(e){return r.a.createElement(z.a,{id:"Col",key:e._id,xs:{size:8,offset:2},sm:{size:9,offset:2},md:{size:5,offset:1},lg:{size:4,offset:1},xl:{size:3,offset:1}},r.a.createElement("div",{className:"box-card"},r.a.createElement("div",{className:"imgBx"},r.a.createElement("img",{src:e.avatar,alt:e.name})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("strong",null,e.name)),r.a.createElement("div",{className:"texto"},r.a.createElement("p",null,r.a.createElement("strong",null,"Usuario:"),"  ",e.user),r.a.createElement("p",null,r.a.createElement("strong",null,"Repositorios:"),"  ",e.repositorios),r.a.createElement("p",null,r.a.createElement("strong",null,"Localidade:"),"  ",e.cidade)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return function(e){return V.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:y.a,alt:"deslike"})),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return Q.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:O.a,alt:"deslike"}))))))}))):r.a.createElement("div",{className:"empty"},"Acabou"),v&&r.a.createElement("div",{className:"match-container"},r.a.createElement("img",{src:q.a,alt:"itsMatch"}),r.a.createElement("img",{className:"avatar",src:v.avatar,alt:"Avatar"}),r.a.createElement("strong",null,v.name),r.a.createElement("p",null,v.bio),r.a.createElement("button",{type:"button",onClick:function(){return A(null)}},"Fechar")),w&&r.a.createElement("div",{className:"matchVer-container"},p.length>0?r.a.createElement(k.a,null,r.a.createElement("img",{className:"imgMatch",src:q.a,alt:"Its a Match"}),r.a.createElement(S.a,{id:"Row"},p.map(function(e){return r.a.createElement(z.a,{id:"Col",key:e._id,xs:{size:8,offset:2},sm:{size:9,offset:2},md:{size:5,offset:1},lg:{size:4,offset:1},xl:{size:3,offset:1}},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"box-card"},r.a.createElement("div",{className:"imgBx"},r.a.createElement("img",{src:e.avatar,alt:e.name})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("strong",null,e.name)),r.a.createElement("div",{className:"texto"},r.a.createElement("p",null,r.a.createElement("strong",null,"Usuario:"),"  ",e.user),r.a.createElement("p",null,r.a.createElement("strong",null,"Repositorios:"),"  ",e.repositorios),r.a.createElement("p",null,r.a.createElement("strong",null,"Localidade:"),"  ",e.cidade),r.a.createElement("p",null,r.a.createElement("strong",null,"Bio:"),"  ",e.bio),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:"),"  ",e.email))))))}))):r.a.createElement("div",{className:"empty"},"Acabou"),r.a.createElement("button",{type:"button",onClick:function(){return B(null)}},"Fechar")))}var D=a(78),I=a.n(D),U=a(79),J=a.n(U),T=a(80),G=a.n(T);a(143);function _(e){e.history;return r.a.createElement("body",null,r.a.createElement("center",null,r.a.createElement("nav",null," ",r.a.createElement("div",{className:"inicio"},r.a.createElement("img",{src:G.a,alt:"tindev",className:"logoo"}),r.a.createElement("img",{src:E.a,alt:"tindev",className:"logo"})))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"expla texto "},r.a.createElement("div",null,r.a.createElement("h1",null,"Quem somos?")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,"O getJob() \xe9 uma ampla plataforma que tem o objetivo de facilitar a vida de quem esta a procura de um emprego ou estagios e para a divulga\xe7\xe3o dessas vagas."),r.a.createElement("br",null),r.a.createElement("p",null,"Tendo assim dois tipos de contas!"))),r.a.createElement("div",{className:" expla container"}),r.a.createElement("div",{className:"collum"},r.a.createElement("div",{class:" texto"},r.a.createElement("br",null),r.a.createElement("h2",null,"Conta Pessoal"),r.a.createElement("a",{className:"efeito",href:"logindev"},r.a.createElement("img",{src:J.a,alt:"logo",width:"200px"})),r.a.createElement("h3",null,"Conta voltada para pessoas em busca de empregos ou estagios!")),r.a.createElement("div",{class:" texto"},r.a.createElement("br",null),r.a.createElement("h2",null,"Conta Comercial"),r.a.createElement("a",{className:"efeito",href:"loginemp"},r.a.createElement("img",{src:I.a,alt:"logo",width:"200px"})),r.a.createElement("h3",null,"Conta voltada para empresas que dejesam divulgar suas vagas!"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"rodape"},r.a.createElement("center",null," Lu\xeds-A\xe7ucena-Luan getJob() 2019")),r.a.createElement("script",{src:"./acoes.js"}),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.4.0.js",integrity:"sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=",crossorigin:"anonymous"})))}a(144);function L(e){var t=e.match,a=Object(n.useState)([]),c=Object(d.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(null),i=Object(d.a)(o,2),p=i[0],E=i[1],f=Object(n.useState)({}),h=Object(d.a)(f,2),v=h[0],b=h[1];return Object(n.useEffect)(function(){function e(){return(e=Object(u.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/empLog",{headers:{user:t.params.id}});case 2:return a=e.sent,b(a.data),e.next=6,g.get("/emps",{headers:{user:t.params.id}});case 6:n=e.sent,s(n.data);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t.params.id]),r.a.createElement("div",{className:"vagas-container"},r.a.createElement("header",{class:"fixar"},r.a.createElement("a",{className:"logo",href:"/"},r.a.createElement("img",{src:j.a,className:"logoo",alt:"logo"}),"getJob()"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/criavaga/".concat(t.params.id)},"Criar vaga")),r.a.createElement("li",null,r.a.createElement("a",{role:"button",href:"/"},v.user,r.a.createElement("img",{src:v.avatar,alt:" "}))))),r.a.createElement("div",{className:"menu-toggle"}," ",r.a.createElement("i",{class:"fa fa-bars","aria-hidden":"true"}," ",r.a.createElement("img",{src:C.a,alt:"menu"})," ")," ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),l.length>0?r.a.createElement(k.a,null,r.a.createElement(S.a,{id:"Row"},l.map(function(e){return r.a.createElement(z.a,{id:"Col",key:e._id,xs:{size:8,offset:2},sm:{size:9,offset:2},md:{size:5,offset:1},lg:{size:4,offset:1},xl:{size:3,offset:1}},r.a.createElement("div",{className:"box-card"},r.a.createElement("div",{className:"imgBx"},r.a.createElement("img",{src:e.avatar,alt:e.user})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("strong",null,e.atuacao)),r.a.createElement("div",{className:"texto"},r.a.createElement("p",null,r.a.createElement("strong",null,"Usuario:"),"  ",e.user),r.a.createElement("p",null,r.a.createElement("strong",null,"Descri\xe7\xe3o:"),"  ",e.descricao),r.a.createElement("p",null,r.a.createElement("strong",null,"Localidade:"),"  ",e.cidade)),r.a.createElement("div",{className:"buttonss"},r.a.createElement("a",{href:"/homevaga/".concat(e._id)},"Ver vaga")))))}))):r.a.createElement("div",{className:"empty"},"Acabou"),p&&r.a.createElement("div",{className:"match-container"},r.a.createElement("img",{src:q.a,alt:"itsMatch"}),r.a.createElement("img",{className:"avatar",src:"localhost:3333/image/"+p.avatar,alt:"Avatar"}),r.a.createElement("strong",null,p.name),r.a.createElement("p",null,p.bio),r.a.createElement("button",{type:"button",onClick:function(){return E(null)}},"Fechar")))}function Q(e){var t=e.history,a=Object(n.useState)(""),c=Object(d.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),p=Object(d.a)(i,2),f=p[0],v=p[1],b=Object(n.useState)(""),A=Object(d.a)(b,2),j=A[0],x=A[1];function O(){return(O=Object(u.a)(m.a.mark(function e(a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,g.post("/emps",{username:l,senha:f,type:!0});case 3:n=e.sent,(r=n.data._id)?t.push("/emp/".concat(r)):x(!0);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:E.a,className:"logo",alt:"Tindev"})),j&&r.a.createElement(h.a,{color:"danger"},r.a.createElement("strong",null,"Algo deu Errado!"),"Revise seu e Email e Senha"),r.a.createElement("input",{type:"text",placeholder:"Nome da Empresa",value:l,required:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Sua senha",required:!0,value:f,onChange:function(e){return v(e.target.value)}}),r.a.createElement("button",{className:"botao",type:"submit"},"Enviar"),r.a.createElement("a",{href:"/cadastroemp"},r.a.createElement("h4",{className:"Link"},"Fazer Cadastro"))))}function V(e){var t,a=e.history,c=Object(n.useState)(""),l=Object(d.a)(c,2),o=l[0],i=l[1],p=Object(n.useState)(""),f=Object(d.a)(p,2),h=f[0],v=f[1],b=Object(n.useState)(""),A=Object(d.a)(b,2),j=A[0],x=A[1],O=Object(n.useState)(""),N=Object(d.a)(O,2),y=N[0],w=N[1];function C(){return(C=Object(u.a)(m.a.mark(function e(n){var r,c,l,s,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(r=new FormData).append("file",t.selectFile,t.selectFile.name),e.next=5,g.post("/upload",r);case 5:if(c=e.sent,l=c.data.avatar,console.log(l),!l){e.next=14;break}return e.next=11,g.post("/emps",{user:o,senha:h,cidade:j,email:y,avatar:l,type:!1});case 11:s=e.sent,i=s.data._id,a.push("/emp/".concat(i));case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return C.apply(this,arguments)}},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:E.a,className:"logo",alt:"Tindev"})),r.a.createElement("input",{type:"text",placeholder:"Nome da Empresa",value:o,required:!0,onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Sua senha",required:!0,value:h,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{type:"text",required:!0,placeholder:"Cidade",value:j,onChange:function(e){return x(e.target.value)}}),r.a.createElement("input",{type:"email",required:!0,placeholder:"Email",value:y,onChange:function(e){return w(e.target.value)}}),r.a.createElement("input",{type:"file",required:!0,placeholder:"Imagem",value:t,onChange:function(e){return function(e){t={selectFile:e.target.files[0]},console.log(t.selectFile)}(e)}}),r.a.createElement("button",{type:"submit",className:"botao"},"Enviar"),r.a.createElement("a",{href:"/loginemp"},r.a.createElement("h4",{className:"link"},"Fazer Login"))))}function H(e){var t=e.match,a=Object(n.useState)([]),c=Object(d.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)([]),i=Object(d.a)(o,2),p=i[0],E=i[1],f=Object(n.useState)(null),h=Object(d.a)(f,2),v=h[0],A=h[1],x=Object(n.useState)(null),N=Object(d.a)(x,2),w=N[0],B=N[1],F=Object(n.useState)({}),M=Object(d.a)(F,2),D=M[0],I=M[1],U=Object(n.useState)(1),J=Object(d.a)(U,2),T=J[0],G=J[1];function _(){return(_=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/vags/".concat(a,"/likes"),null,{headers:{user:t.params.id}});case 2:console.log("like",a),s(l.filter(function(e){return e._id!==a})),L();case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(){return Q.apply(this,arguments)}function Q(){return(Q=Object(u.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l.length<=1)){e.next=9;break}return G(T+1),console.log(T),e.next=5,g.get("/vags?pg=".concat(T,"&vs=6"),{headers:{user:t.params.id}});case 5:a=e.sent,n=a.data,console.log(T,n.length),n.length>0&&s(Object(b.a)(a.data));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(){return(V=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/vags/".concat(a,"/deslikes"),null,{headers:{user:t.params.id}});case 2:s(l.filter(function(e){return e._id!==a})),console.log(l.length),L();case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){function e(){return(e=Object(u.a)(m.a.mark(function e(){var a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/devLog",{headers:{user:t.params.id}});case 2:return a=e.sent,I(a.data),e.next=6,g.get("/matchs",{headers:{user:t.params.id}});case 6:return n=e.sent,E(n.data),e.next=10,g.get("/vags?pg=".concat(T,"&vs=6"),{headers:{user:t.params.id}});case 10:r=e.sent,s(r.data);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t.params.id]),Object(n.useEffect)(function(){R()("https://getjobserver.herokuapp.com",{query:{user:t.params.id}}).on("match",function(e){A(e)})},[t.params.id]),r.a.createElement("div",{className:"main-container"},!v&&!w&&r.a.createElement("header",{className:"fixar"},r.a.createElement("a",{className:"logo",href:" "},r.a.createElement("img",{src:j.a,className:"logoo",alt:"logo"}),"getJob()"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"# ",onClick:function(){return B(!0)}},"Matchs")),r.a.createElement("li",null,r.a.createElement("a",{role:"button",href:" "},D.user,r.a.createElement("img",{src:D.avatar,alt:" "}))))),r.a.createElement("div",{className:"menu-toggle"}," ",r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}," ",r.a.createElement("img",{src:C.a,alt:"menu"})," ")," ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),l.length>0?r.a.createElement(k.a,null,r.a.createElement(S.a,{id:"Row"},l.map(function(e){return r.a.createElement(z.a,{id:"Col",key:e._id,xs:{size:8,offset:2},sm:{size:9,offset:2},md:{size:5,offset:1},lg:{size:4,offset:1},xl:{size:3,offset:1}},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"box-card"},r.a.createElement("div",{className:"imgBx"},r.a.createElement("img",{src:e.avatar,alt:e.name})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("strong",null,e.atuacao)),r.a.createElement("div",{className:"texto"},r.a.createElement("p",null,r.a.createElement("strong",null,"Empresa:"),"  ",e.user),r.a.createElement("p",null,r.a.createElement("strong",null,"Descri\xe7\xe3o:"),"  ",e.descricao),r.a.createElement("p",null,r.a.createElement("strong",null,"Localidade:"),"  ",e.cidade)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return function(e){return V.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:y.a,alt:"deslike"})),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return _.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:O.a,alt:"deslike"})))))))}))):r.a.createElement("div",{className:"empty"},"Acabou"),v&&r.a.createElement("div",{className:"match-container"},r.a.createElement("img",{src:q.a,alt:"itsMatch"}),r.a.createElement("img",{className:"avatar",src:v.avatar,alt:"Avatar"}),r.a.createElement("strong",null,v.user),r.a.createElement("p",null,v.atuacao),r.a.createElement("p",null,v.descricao),r.a.createElement("p",null,v.emailContato),r.a.createElement("button",{type:"button",onClick:function(){return A(null)}},"Fechar")),w&&r.a.createElement("div",{className:"matchVer-container"},p.length>0?r.a.createElement(k.a,null,r.a.createElement("img",{className:"imgMatch",src:q.a,alt:"Its a Match"}),r.a.createElement(S.a,{id:"Row"},p.map(function(e){return r.a.createElement(z.a,{id:"Col",key:e._id,xs:{size:8,offset:2},sm:{size:9,offset:2},md:{size:5,offset:1},lg:{size:4,offset:1},xl:{size:3,offset:1}},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"box-card"},r.a.createElement("div",{className:"imgBx"},r.a.createElement("img",{src:e.avatar,alt:e.name})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("strong",null,e.atuacao)),r.a.createElement("div",{className:"texto"},r.a.createElement("p",null,r.a.createElement("strong",null,"Empresa:"),"  ",e.user),r.a.createElement("p",null,r.a.createElement("strong",null,"Descri\xe7\xe3o:"),"  ",e.descricao),r.a.createElement("p",null,r.a.createElement("strong",null,"Localidade:"),"  ",e.cidade),r.a.createElement("p",null,r.a.createElement("strong",null,"Email Contato:"),"  ",e.emailContato))))))}))):r.a.createElement("div",{className:"empty"},"Acabou"),r.a.createElement("button",{type:"button",onClick:function(){return B(null)}},"Fechar")))}function Z(e){var t=e.match,a=e.history,c=Object(n.useState)(""),l=Object(d.a)(c,2),o=l[0],i=l[1],p=Object(n.useState)(""),f=Object(d.a)(p,2),h=f[0],v=f[1],b=Object(n.useState)(""),A=Object(d.a)(b,2),j=A[0],x=A[1],O=Object(n.useState)(""),N=Object(d.a)(O,2),y=N[0],w=N[1];function C(){return(C=Object(u.a)(m.a.mark(function e(n){var r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,g.post("/vags",{atuacao:o,descricao:h,id:t.params.id,cidade:j,emailC:y});case 3:r=e.sent,c=r.data._id,console.log(c),a.push("/emp/".concat(t.params.id));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return C.apply(this,arguments)}},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:E.a,className:"logo",alt:"Tindev"})),r.a.createElement("input",{type:"text",placeholder:"Atua\xe7\xe3o",value:o,required:!0,onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Descri\xe7\xe3o",required:!0,value:h,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{type:"text",required:!0,placeholder:"Cidade",value:j,onChange:function(e){return x(e.target.value)}}),r.a.createElement("input",{type:"Email para Contato",required:!0,placeholder:"Email",value:y,onChange:function(e){return w(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"botao"},"Enviar"),r.a.createElement("a",{href:"/loginemp"},r.a.createElement("h4",{className:"link"},"Fazer Login"))))}function P(){var e=Object(n.useState)(Array.from(Array(30).keys(),function(e){return e+1})),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(d.a)(l,2),o=s[0],i=s[1];return Object(n.useEffect)(function(){window.onScroll=function(){console.log(document.querySelector("#root").scrollTop),console.log(window.innerHeight),console.log(document.querySelector("#root").scrollHeight),alert("evento scroll detectado! "+window.pageXOffset+" "+window.pageYOffset),document.querySelector("#root").scrollTop+window.innerHeight>=document.documentElement.scrollHeight&&console.log("a");i(!0)}()},[]),Object(n.useEffect)(function(){o&&setTimeout(function(){i(null),c(function(e){return[].concat(Object(b.a)(e),Object(b.a)(Array.from(Array(30).keys(),function(t){return t+e.length+1})))})},2e3)},[o]),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group mb-2"},a.map(function(e){return r.a.createElement("li",{key:e,className:"list-group-item"},"List Item ",e)})),o&&"Fetching more list items...")}function W(){return r.a.createElement(s.a,null,r.a.createElement(o.a,{path:"/logindev",exact:!0,component:v}),r.a.createElement(o.a,{path:"/homevaga/:id",exact:!0,component:M}),r.a.createElement(o.a,{path:"/",exact:!0,component:_}),r.a.createElement(o.a,{path:"/cadastroemp",exact:!0,component:V}),r.a.createElement(o.a,{path:"/loginemp",exact:!0,component:Q}),r.a.createElement(o.a,{path:"/homedev/:id",exact:!0,component:H}),r.a.createElement(o.a,{path:"/criavaga/:id",exact:!0,component:Z}),r.a.createElement(o.a,{path:"/emp/:id",exact:!0,component:L}),r.a.createElement(o.a,{path:"/teste",exact:!0,component:P}))}l.a.render(r.a.createElement(function(){return r.a.createElement(W,null)},null),document.getElementById("root"))},16:function(e,t,a){e.exports=a.p+"static/media/itsamatch.21c10b26.png"},21:function(e,t,a){e.exports=a.p+"static/media/logo.77c1824e.png"},22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjBBwWMSK43RT/AAAAwUlEQVRIx82UOwrCQBRFz4sjIn5awcJUVlaSUqxdgBtxPW5HrES0sUpnIdj5IRFxNBbuYG7A3P5eZg6HB/+OkTCmFth+szM29IgCBz6cjRdO+IE3Co1BRC5MFOSOJSPqWFD9xcGIGeICBzypBqASMdq0ggj8KGSOGYmg8ta40BVecCvBRDERV0nlqzFnSiPQxCcro01HuAd3FUEFYsQMBAZHx4KhMJAaGU1B5UcJKnup7x17+gKDk5EwEVReawDKyBd4BDTBrTCNVQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0yOFQyMDo0OTozNCswMjowMOc+aPsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMjhUMjA6NDk6MzQrMDI6MDCWY9BHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},25:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/like.542059a4.svg"},34:function(e,t,a){e.exports=a.p+"static/media/dislike.d4ec34e8.svg"},59:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/comercial.fb58e217.png"},79:function(e,t,a){e.exports=a.p+"static/media/pesoal.1ee0d578.png"},80:function(e,t,a){e.exports=a.p+"static/media/favicon (1).3b78e3d7.ico"},81:function(e,t,a){e.exports=a(145)},86:function(e,t,a){},88:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.6b4aca40.chunk.js.map