(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),s=(t(16),t(1)),o=t(2),i=t(4),m=t(3),p=t(7),u=t(10),h=t.n(u),d=(t(19),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=(this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),r.a.createElement("h3",null,"I'm a ",r.a.createElement("span",null,a),". ",t,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},n))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2020 Garvit Khurana"),r.a.createElement("li",null,"Design by ",r.a.createElement("a",{href:"https://github.com/khuranagarvit019"},"khuranagarvit019")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),g=t.p+"static/media/resume.5dbef5b3.pdf",f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.address.street,n=this.props.data.address.city,l=this.props.data.address.state,c=this.props.data.address.zip,s=this.props.data.phone,o=this.props.data.email;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:a,alt:"Garvit Khurana Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"I am a sophomore at University of Petroleum & Energy Studies, Dehradun, pursuing B.Tech in Computer Science & Engineering with specialization in AI & Machine Learning. ",r.a.createElement("br",null),r.a.createElement("br",null),"I am looking to establish a career in the field of Artificial Intelligence and to gain knowledge in my domain and apply the knowledge obtained in order to achieve excellence in solving daily life problems in programming & AI"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,t,r.a.createElement("br",null),n,", ",l," - ",c),r.a.createElement("br",null),r.a.createElement("span",null,s),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:".concat(o,"?subject=The%20subject%20of%20the%20mail")},o)))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"button"},r.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},a)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("section",{id:"four",className:"skills"},r.a.createElement("div",{className:"languages skills show-on-scroll"},r.a.createElement("i",{class:"devicon-c-plain colored"}),r.a.createElement("i",{class:"devicon-cplusplus-plain-wordmark"}),r.a.createElement("i",{class:"devicon-python-plain-wordmark"}),r.a.createElement("i",{class:"devicon-android-plain-wordmark colored"}),r.a.createElement("i",{class:"devicon-mysql-plain-wordmark colored"}),r.a.createElement("i",{class:"devicon-github-plain colored"}),r.a.createElement("i",{class:"devicon-git-plain colored"}),r.a.createElement("i",{class:"devicon-linux-plain colored"}),r.a.createElement("img",{width:"90px",src:"https://img.icons8.com/windows/8x/323573/fedora.png",title:"Fedora"}),r.a.createElement("img",{width:"90px",src:"https://img.icons8.com/fluent/2x/console.png",title:"Terminal"}),r.a.createElement("img",{width:"90px",src:"https://img.icons8.com/color/2x/kotlin.png",title:"Kotlin"}),r.a.createElement("img",{width:"90px",src:"https://img.icons8.com/color/2x/firebase.png",title:"Firebase"}),r.a.createElement("img",{width:"90px",src:"https://img.icons8.com/color/16x/000000/arduino.png",title:"Arduino"}),r.a.createElement("img",{width:"90px",src:"https://img.icons8.com/dusk/64/000000/database-restore.png",title:"Database"}))))))}}]),t}(n.Component),v=t(6),w=t(11),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){var a;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object(w.a)({"form-name":"contact-me"},n.state),Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&"))}).then((function(){alert("Your message was successfully sent!"),n.setState({name:"",email:"",message:""})})).catch((function(e){return alert(e)})),e.preventDefault()},n.handleChange=function(e){return n.setState(Object(v.a)({},e.target.name,e.target.value))},n.state={name:"",email:"",message:""},n}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,c=this.props.data.phone,s=this.props.data.email,o=this.props.data.contactmessage;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Get In Touch."))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},o))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactName"},"Name ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",size:"35",id:"contactName",name:"name",value:this.state.name,required:!0,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactEmail"},"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"email",size:"35",id:"contactEmail",name:"email",value:this.state.email,required:!0,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactMessage"},"Message ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message",value:this.state.message,required:!0,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"submit"},"Submit"),r.a.createElement("span",{id:"image-loader"},r.a.createElement("img",{alt:"",src:"images/loader.gif"})))))),r.a.createElement("aside",{className:"four columns footer-widgets"},r.a.createElement("div",{className:"widget widget_contact"},r.a.createElement("h4",null,"Address and Phone"),r.a.createElement("p",{className:"address"},e,r.a.createElement("br",null),a," ",r.a.createElement("br",null),t,", ",n," - ",l,r.a.createElement("br",null),r.a.createElement("span",null,c),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:".concat(s,"?subject=The%20subject%20of%20the%20mail")},s)))))))}}]),t}(n.Component),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return r.a.createElement("li",{key:e.user},r.a.createElement("blockquote",null,r.a.createElement("p",null,e.text),r.a.createElement("cite",null,e.user)))}));return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row projects"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},r.a.createElement("div",{className:"article-wrapper show-on-scroll"},r.a.createElement("article",{className:"col-12 col-12-xsmall work-item"},r.a.createElement("a",{href:"https://github.com/khuranagarvit019/Facial-Emotion-Recognition",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/thumbs/fed.png",alt:"Facial Emotion Detection"})),r.a.createElement("div",{className:"art-description"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",null,"Facial Emotion Detection"),r.a.createElement("p",null,"The purpose of this project is to train a Convolutional Neural Network which can detect emotions on human faces. The application detects the seven universal facial emotions- Anger, Disgust, Fear, Happy, Sad, Surprised & Neutral.")),r.a.createElement("ul",{className:"actions"},r.a.createElement("div",{className:"actions-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/khuranagarvit019/Facial-Emotion-Recognition",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github icon"}),"View Source"))),r.a.createElement("div",{className:"languages"},r.a.createElement("img",{width:"60px",src:"https://img.icons8.com/color/4x/000000/python.png",title:"Python"})))))),r.a.createElement("div",{className:"article-wrapper show-on-scroll"},r.a.createElement("article",{className:"col-12 col-12-xsmall work-item"},r.a.createElement("a",{href:"https://www.linkedin.com/posts/khuranagarvit019_upes-programming-python3-activity-6678194330441801728-qFZk",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/thumbs/fmd.png",alt:"Face Mask Detection"})),r.a.createElement("div",{className:"art-description"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",null,"Face Mask Detection"),r.a.createElement("p",null,"COVID-19 (Coronavirus) has affected our day to day life and is slowing down the global economy. All the governments in order to improve their financial condition are opening the lockdowns imposed by them, So it's very necessary that in the Public Area, people are wearing face masks to prevent them from this deadly virus. We have come with an approach, using which it can be easily checked that people are wearing masks or not."),r.a.createElement("p",null,"Practical Implementations -  CCTV cameras can be controlled by programming Raspberry Pi in this approach & those cameras can be installed in public places in order to maintain safety considering the situation of COVID-19 pandemic.")),r.a.createElement("ul",{className:"actions"},r.a.createElement("div",{className:"actions-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/posts/khuranagarvit019_upes-programming-python3-activity-6678194330441801728-qFZk",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin icon"}),"View on LinkedIn"))),r.a.createElement("div",{className:"languages"},r.a.createElement("img",{width:"60px",src:"https://img.icons8.com/color/4x/000000/python.png",title:"Python"})))))),r.a.createElement("div",{className:"article-wrapper show-on-scroll"},r.a.createElement("article",{className:"col-12 col-12-xsmall work-item"},r.a.createElement("a",{href:"https://github.com/khuranagarvit019/TicTacToe-Terminal-Version",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/thumbs/tictac.png",alt:"tic-tac-toe"})),r.a.createElement("div",{className:"art-description"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",null,"Tic-Tac-Toe"),r.a.createElement("p",null,"Tic-Tac-Toe game programmed in C.")),r.a.createElement("ul",{className:"actions"},r.a.createElement("div",{className:"actions-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/khuranagarvit019/TicTacToe-Terminal-Version",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github icon"}),"View Source"))),r.a.createElement("div",{className:"languages"},r.a.createElement("img",{width:"60px",src:"https://img.icons8.com/color/4x/c-programming.png",title:"C"})))))),r.a.createElement("div",{className:"article-wrapper show-on-scroll"},r.a.createElement("article",{className:"col-12 col-12-xsmall work-item"},r.a.createElement("a",{href:"https://github.com/The-Semicolons/Baymax",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/thumbs/baymax.png",alt:"Baymax"})),r.a.createElement("div",{className:"art-description"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",null,"Baymax Web App - Under Development"),r.a.createElement("p",null,"A chatbot web application that can assist doctors in hospital for smooth and faster workflows. This chat bot can talk to you and ask you questions regarding your problems and suggest diagnosis to the doctor."),r.a.createElement("p",null,"This app is under development. Whole Team of ",r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/",target:"_blank",rel:"noopener noreferrer"},"The Semicolons;")," is working on it.")),r.a.createElement("ul",{className:"actions"},r.a.createElement("div",{className:"actions-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/The-Semicolons/Baymax",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github icon"}),"View Source"))),r.a.createElement("div",{className:"languages"},r.a.createElement("img",{width:"60px",src:"https://img.icons8.com/color/48/000000/tensorflow.png"}),r.a.createElement("img",{width:"60px",src:"https://img.icons8.com/color/48/000000/javascript.png"}),r.a.createElement("img",{width:"60px",src:"https://img.icons8.com/color/48/000000/firebase.png"})))))),r.a.createElement("div",{className:"article-wrapper show-on-scroll"},r.a.createElement("article",{className:"col-12 col-12-xsmall work-item"},r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/#portfolio",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/thumbs/RFID.jpg",alt:"Parko"})),r.a.createElement("div",{className:"art-description"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",null,"Parko"),r.a.createElement("p",null,"A system to automate the parking service with online payments based on parking duration with RFID cards. Keeping log of entry and exit vehicles for security reasons. Payments can be done through the mobile or web app."),r.a.createElement("p",null,"Developed by team ",r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/",target:"_blank",rel:"noopener noreferrer"},"The Semicolons;"))),r.a.createElement("ul",{className:"actions"},r.a.createElement("div",{className:"actions-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/#portfolio",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer"},"Read More"))),r.a.createElement("div",{className:"languages"},r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/fluent/48/000000/arduino.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/html.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/javascript.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/css.png"})))))),r.a.createElement("div",{className:"article-wrapper show-on-scroll"},r.a.createElement("article",{className:"col-12 col-12-xsmall work-item"},r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/#portfolio",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/thumbs/khet.png",alt:"Khetbazaar"})),r.a.createElement("div",{className:"art-description"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",null,"Khetbazaar"),r.a.createElement("p",null,"An online e-commerce website dedicated to farmers. The portal will eliminate the middle man in supply chain to provide best revenue for the farmers. The portal also eases the process of buying fertilisers, pesticides and seeds with direct contact to seller."),r.a.createElement("p",null,"Developed by team ",r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/",target:"_blank",rel:"noopener noreferrer"},"The Semicolons;"))),r.a.createElement("ul",{className:"actions"},r.a.createElement("div",{className:"actions-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://the-semicolons.github.io/The-Semicolons/#portfolio",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer"},"Read More"))),r.a.createElement("div",{className:"languages"},r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/html.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/javascript.png"}),r.a.createElement("img",{width:"40px",src:"https://img.icons8.com/color/48/000000/css.png"})))))),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",{className:"wide-button"},r.a.createElement("a",{href:"https://github.com/khuranagarvit019",className:"button portfolio-button",target:"_blank",rel:"noopener noreferrer"},"Full Portfolio")))))))}}]),t}(n.Component),x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={resumeData:{}},p.a.initialize("UA-110570651-1"),p.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){var e=document.getElementById("siteLoading");h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(a){this.setState({resumeData:a}),setTimeout((function(){e.outerHTML=""}),1250)}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(b,{data:this.state.resumeData.resume}),r.a.createElement(y,{data:this.state.resumeData.portfolio}),r.a.createElement(k,{data:this.state.resumeData.testimonials}),r.a.createElement(N,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/khuranagarvit019",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/khuranagarvit019","/service-worker.js");j?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):T(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.f8a85377.chunk.js.map