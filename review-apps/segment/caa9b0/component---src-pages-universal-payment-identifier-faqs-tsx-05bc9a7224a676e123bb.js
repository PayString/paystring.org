(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4VWn":function(e,t,a){"use strict";var n,r=a("TSYQ"),l=a.n(r),i=a("q1tI"),s=a.n(i),o=a("djOb"),c=a.n(o),m=a("SC9r"),d=a("GshL"),u=a("pBiw"),p=a("eMrp"),h=a("79Sd");!function(e){e[e.email=0]="email",e[e.role=1]="role",e[e.first_name=2]="first_name",e[e.last_name=3]="last_name"}(n||(n={}));t.a=function(e){var t=e.direction,a=void 0===t?"rtl":t,r=e.title,o=void 0===r?"Join the PayID Community":r,y=e.description,g=void 0===y?"Sign up to access the PayID newsletter and hear about hackathons and speaker events":y,f=e.orangeButton,b=void 0!==f&&f,v=e.enabledFields,w=e.className,x=Object(i.useState)(!1),E=x[0],I=x[1],P=Object(i.useState)("DEFAULT"),k=P[0],D=P[1],N=Object(i.useState)(),C=N[0],S=N[1],T=Object(i.useState)(),j=T[0],O=T[1],A=Object(i.useState)(),F=A[0],_=A[1],W=Object(i.useState)(!1),M=W[0],L=W[1],q=Object(i.useMemo)((function(){if(!v||!Array.isArray(v)||0===v.length){var e=Object.values(n);return e.splice(e.length/2),e.map((function(e){return e.toLowerCase()}))}return v}),[v]),R=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,H=function(e){return!(!e||!R.test(e))};Object(i.useEffect)((function(){var e=!0;!q.includes("role")||k&&"DEFAULT"!==k||(e=!1),q.includes("first_name")&&(!C||C.length<=0)&&(e=!1),!q.includes("email")||F&&H(F)||(e=!1),I(e)}),[k,C,F,q]);return s.a.createElement(h.a,{background:"orange",direction:a,wave:"blue",spacing:"lg",className:"flex items-center justify-center",waveClassNames:w},!M&&s.a.createElement("div",null,s.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},o),s.a.createElement("div",{className:"mt-8 text-xl text-center"},g),s.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),E){var t={role:q.includes("role")?k:void 0,first_name:q.includes("first_name")?C:void 0,last_name:q.includes("last_name")&&""!==j?j:void 0,email:q.includes("email")?F:void 0};"undefined"!=typeof window&&(void 0!==window.heap&&window.heap.track("newsletter",t),void 0!==window.analytics&&void 0!==t.email&&(Object(d.a)(Object.assign({},t,{email:t.email,form_name:"newsletter"})),window.analytics.identify(t)));var a=Object(m.a)(t);fetch("https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?"+a,{mode:"no-cors"}).catch((function(){})),fetch("https://go.ripple.com/l/105572/2020-06-15/cspx4n",{mode:"no-cors",method:"POST",body:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).catch((function(){})),L(!0)}},className:"mt-16 md:mt-30"},q.includes("role")&&s.a.createElement("div",{className:"relative px-6 mb-6 border-2 border-white rounded"},s.a.createElement("select",{defaultValue:"DEFAULT",id:"role",name:"role",onChange:function(e){return D(e.target.value)},className:"w-full py-4 bg-transparent appearance-none focus:outline-none"},[{label:"Role",value:"DEFAULT"},{label:"Project Manager",value:"PM"},{label:"Developer",value:"Engineer"},{label:"Business Development",value:"BD"},{label:"Sales",value:"Sales"},{label:"Operations",value:"Operations"},{label:"Executive",value:"Executive"},{label:"Marketing",value:"Marketing"}].map((function(e){return s.a.createElement("option",{className:"text-blue-dark-900",value:e.value,key:e.label,hidden:"DEFAULT"===e.value},e.label)}))),s.a.createElement(c.a,{className:"absolute h-2 mt-2 text-white right-4 top-4"}),s.a.createElement("label",{htmlFor:"role",className:l()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none text-white left-4 bg-orange-500 px-2",{"-top-3":"DEFAULT"!==k,"top-4":"DEFAULT"===k})},"Role")),(q.includes("first_name")||q.includes("last_name"))&&s.a.createElement("div",{className:"flex"},q.includes("first_name")&&s.a.createElement(p.a,{theme:"orange",id:"firstName",label:"First Name",type:"text",name:"first-name",autoComplete:"given-name",className:"mr-3",required:!0,requiredText:"First name is required",onChange:function(e){return S(e.currentTarget.value)}}),q.includes("last_name")&&s.a.createElement(p.a,{theme:"orange",id:"lastName",label:"Last Name",type:"text",name:"last-name",autoComplete:"family-name",className:"ml-3",onChange:function(e){return O(e.currentTarget.value)}})),q.includes("email")&&s.a.createElement(p.a,{theme:"orange",id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",required:!0,requiredText:"Email address is required",validate:H,invalidText:"Invalid email address",onChange:function(e){H(e.currentTarget.value)?_(e.currentTarget.value):_(void 0)}}),s.a.createElement(u.a,{disabled:!E,label:"Submit",variant:"secondary",className:"mt-8 bg-white sm:hidden"}),s.a.createElement(u.a,{disabled:!E,variant:"secondary",label:"Submit",size:"lg",className:l()("hidden mx-auto mt-16 sm:block bg-white",{"text-orange-500":!!b})}))),M&&s.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},"Thank you for subscribing!"))}},"79Sd":function(e,t,a){"use strict";var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l),s=a("Kk5M"),o=a.n(s),c=a("bahM"),m=a.n(c),d=function(e){var t=r()("bg-transparent",{"text-white":"white"===e.wave,"text-gray-50":"gray"===e.wave,"text-blue-dark-900":"blue"===e.wave,"text-orange-500":"orange"===e.wave,"text-blue-dark-800":"light-blue"===e.wave});return i.a.createElement("div",{className:r()("wave-vector",e.className)},"ltr"===e.direction&&i.a.createElement(o.a,{className:t}),"rtl"===e.direction&&i.a.createElement(m.a,{className:t}))};t.a=function(e){var t=e.wave,a=void 0===t?"white":t,n=e.background,l=void 0===n?"blue":n,s=e.direction,o=void 0===s?"ltr":s,c=e.spacing,m=void 0===c?"md":c,u="";"sm"===m?u="xl:-mt-20 lg:-mt-18 md:-mt-10 sm:-mt-8":"md"===m?u="xl:-mt-52 lg:-mt-40 md:-mt-14 sm:-mt-10":"lg"===m&&(u="xl:-mt-74 lg:-mt-52 md:-mt-36 sm:-mt-28"),u=r()(u,e.waveVectorClassNames);var p=r()(e.waveClassNames,"wave",{"bg-white text-blue-dark-900":"white"===l,"bg-gray-50 text-blue-dark-900":"gray"===l,"bg-blue-dark-900 text-white":"blue"===l,"bg-orange-500 text-white":"orange"===l,"bg-blue-dark-800 text-white":"light-blue"===l}),h=r()("flex justify-center",{"px-6 lg:px-18":!e["no-spacing"]}),y=r()("wave-content",{"lg:px-17":!e["no-gutter"]},{container:!e["no-spacing"]},{"w-full":e["no-spacing"]},e.className);return i.a.createElement("div",{className:p,style:e.style},i.a.createElement("div",{className:h},i.a.createElement("div",{className:y},e.children)),i.a.createElement(d,{wave:a,direction:o,className:u}))}},Kk5M:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M119.603 106.85C27.6811 82.8743 3.1337 32.6632 0 0V230H375C375 98.0089 247.198 128.693 151.462 113.105C143.158 111.753 128.221 109.098 119.603 106.85Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=r,r.default=r},XZtC:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),i=a("SC9r"),s=a("GshL"),o=a("79Sd");t.a=function(e){var t=[{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/developers.svg")+")"},title:"Getting Started for Developers",link:Object(i.d)()},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/whitepaper.svg")+")"},title:"PayID Technical White Paper",link:"/whitepaper.pdf"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/api-reference.svg")+")"},title:"API Reference",link:"https://api.payid.org/?version=latest"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/standards.svg")+")"},title:"PayID Standards",link:"https://github.com/payid-org/rfcs"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/security.svg")+")"},title:"Security and Privacy",link:"https://github.com/payid-org/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/travel-rule.svg")+")"},title:"Travel Rule and Compliance",link:"https://trisa.io/"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/checkout.svg")+")"},title:"Checkout",link:"https://ripplex.io/portal/wallet/xrp/testnet"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/xpring-sdk.svg")+")"},title:"RippleX SDK for PayID",link:Object(i.d)()+"/ripplex-dev-kit-payid"}];return l.a.createElement(o.a,{background:e.background,direction:e.direction,wave:"orange","no-gutter":!0},l.a.createElement("div",{className:"flex flex-col items-center sm:justify-center mb-14 md:mb-25"},l.a.createElement("h2",{className:"text-3xl font-bold sm:text-5xl sm:text-center "},"Learn More"),l.a.createElement("p",{className:"max-w-xl mt-6 text-xl sm:mt-8 sm:text-center"},"Discover everything you need to know about the free, open source PayID protocol")),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"},t.map((function(e){return l.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",key:e.title,className:"transition duration-500 ease-in-out transform bg-no-repeat bg-cover rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable",style:e.bgStyle,onClick:function(){return function(e){e.link.startsWith("https://github.com/")&&Object(s.b)({type:e.title,url:e.link,text:e.title})}(e)}},l.a.createElement("h3",{className:"font-bold text-white learnable-title mx-13"},e.title))})))))}},bahM:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M255.397 106.85C347.319 82.8743 371.866 32.6632 375 0V230H0C0 98.0089 127.802 128.693 223.538 113.105C231.842 111.753 246.779 109.098 255.397 106.85Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=r,r.default=r},mIpM:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.76766 0.306022C1.36328 -0.102007 0.707659 -0.102007 0.303283 0.306022C-0.101094 0.714051 -0.101094 1.3756 0.303282 1.78362L2.50026 4.00045L0.304215 6.21633C-0.100161 6.62436 -0.100161 7.28591 0.304216 7.69393C0.708592 8.10196 1.36422 8.10196 1.76859 7.69394L4.69735 4.73873C5.10172 4.3307 5.10172 3.66915 4.69735 3.26112C4.68804 3.25173 4.6786 3.24255 4.66903 3.23359L1.76766 0.306022Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 5 8"},e.exports=r,r.default=r},y6FU:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("4VWn"),i=a("XZtC"),s=a("9Dj+"),o=a("TSYQ"),c=a.n(o),m=a("Wbzz"),d=a("mIpM"),u=a.n(d),p=a("SC9r"),h=a("GshL"),y=a("79Sd"),g=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],l=Object(n.useState)(),i=l[0],s=l[1],o=[{topic:"PayID Basics",contents:[{title:"What is PayID?",description:"PayID is an open universal payment identifier that makes it easier for people to send and receive money in any currency across any payment network."},{title:"Who uses PayID?",description:r.a.createElement(r.a.Fragment,null,"Any business that sends and receives money can use PayID to give each of their customers a simple and human-readable ID that works across any payment network and makes payments easier with greater network reach. PayID is an open standard, so anyone can build implementations and extensions on top of PayID.",r.a.createElement(m.Link,{to:"/about-us",className:"block mt-6 text-orange-500 focus:underline hover:underline"},"See companies that use PayID"))},{title:"How is PayID compliant with international payment regulations?",description:r.a.createElement(r.a.Fragment,null,"Rather than prescribing a single solution, PayID is flexible and composable by design, which empowers transaction participants to implement their own policies. PayID provides a simple extension that helps businesses satisfy Travel Rule record-keeping required in jurisdictions globally, including both current FinCEN rules and FATF guidance, via native integration with the TRISA protocol. PayID can also be used to improve other compliance solutions for both users and services.",r.a.createElement(m.Link,{to:"/compliance-and-regulations",className:"block mt-6 text-orange-500 focus:underline hover:underline"},"Learn more about PayID and TRISA for Travel Rule"))},{title:"How can I get started with PayID?",description:r.a.createElement(r.a.Fragment,null,"PayID is open source and easy to set up with just a few lines of code. You can explore"," ",r.a.createElement("a",{href:Object(p.d)(),className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"the documentation")," ","and"," ",r.a.createElement("a",{href:"https://github.com/payid-org/payid",className:"text-orange-500 focus:underline hover:underline",target:"_blank",onClick:function(){return Object(h.b)({type:"faq",url:"https://github.com/payid-org/payid",text:"GitHub repository"})},rel:"noreferrer"},"GitHub repository"),".")},{title:"Who developed this website?",description:"The content on this website content was developed by Ripple, an early adopter of PayID, in collaboration with the Open Payments Coalition."},{title:"What payment networks does PayID support?",description:"PayID supports any payment network or payment processor. Companies may add any payment network or payment processor to a PayID header to send and receive money."},{title:"How is PayID different from payment networks and processors?",description:"PayID is an open standard for payment identifiers. This means that PayID is a naming convention for any payment ID —​ like a bank account number or a crypto address. Any payment network or payment processor can support PayID as an identifier."},{title:"Where can I get a PayID?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You can get a PayID in the following apps: PayMe+,"," ",r.a.createElement("a",{href:"http://coinfield.com/",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Coinfield"),","," ",r.a.createElement("a",{href:"http://crypto.com/",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Crypto.com"),","," ",r.a.createElement("a",{href:"http://shop.tangem.com/",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Tangem"),", and"," ",r.a.createElement("a",{href:"http://bitrue.com/",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Bitrue"),"."))}]},{topic:"Verifiable PayID",contents:[{title:"What is Verifiable PayID?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"In the default version of PayID, a receiver trusts their PayID provider to not swap the mapping between PayID to payment address. While this trust is sufficient with custodial wallets, it may not be appropriate in some circumstances, such as with a non-custodial wallet."),r.a.createElement("p",{className:"mt-4"},"PayID for Wallets removes this layer of trust by cryptographically signing response messages with digital identity keys. As a result, PayID providers cannot swap out payment addresses without the sender or receiver finding out."))},{title:"Is Verifiable PayID secure?",description:"Yes, it is. Default PayID uses tried-and-true security technologies that secure all internet services. PayID for Wallets adds another layer of security by including digital identity keys that cryptographically sign response messages, so participants in PayID transactions do not need to trust any counterparty."},{title:"What does Verifiable PayID allow me to do?",description:"Verifiable PayID adds several digital signature fields so you can link a PayID to one or more external digital identities, prove control of the payment rail address, and provide non-repudiable messaging."}]},{topic:"Development and Implementation",contents:[{title:"How do I implement PayID?",description:r.a.createElement(r.a.Fragment,null,"PayID is a free-to-use, fully open standard with an open source implementation. Any company can start using PayID by integrating a PayID server into their existing infrastructure using the reference implementation on GitHub. The"," ",r.a.createElement("a",{href:Object(p.d)()+"/ripplex-dev-kit-payid",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"RippleX Dev Kit")," ","is the easiest way to enable “send to PayID” on your app.")},{title:"What tech is PayID built on?",description:"PayID is a web-based protocol built on a simple HTTP API secured by the standard web security stack, including TLS."},{title:"How does PayID handle security?",description:"PayID leverages tried-and-true security technologies that secure all internet services, including e-commerce and digital banking services. Additionally, PayID messages include cryptographic certificates and signatures that ensure participants in PayID transactions do not need to trust any counterparty."},{title:"How do I deploy a PayID server?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"PayID is designed by devs for devs. You can deploy a PayID server with just a few commands with existing web infrastructure, and then integrate it into an application or account system with just a few lines of code."),r.a.createElement("p",{className:"mt-4"},"When you want to experiment with or deploy a PayID server, you have several options:"),r.a.createElement("ul",{className:"mt-4 list-inside"},r.a.createElement("li",{className:"list-disc hover:underline"},r.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"text-orange-500 focus:underline hover:underline",href:Object(p.d)()+"/local-deployment"},"Deploy Locally Without Docker")),r.a.createElement("li",{className:"list-disc hover:underline"},r.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"text-orange-500 focus:underline hover:underline",href:Object(p.d)()+"/remote-deployment"},"Deploy a PayID server on AWS with NGINX reverse proxy")),r.a.createElement("li",{className:"list-disc hover:underline"},r.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"text-orange-500 focus:underline hover:underline",href:Object(p.d)()+"/aws-lambda-deploy"},"Deploy on AWS Lambda"))))},{title:"Where can I learn more about building with PayID?",description:r.a.createElement(r.a.Fragment,null,"For other questions on PayID development and deployment, visit"," ",r.a.createElement("a",{href:Object(p.d)(),className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"the docs page"),".")},{title:"How can I try out a PayID server?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The"," ",r.a.createElement("a",{className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer",href:Object(p.b)()+"/sandbox"},"PayID Sandbox"," "),"lets you experiment with PayID in a test environment. To use PayID Sandbox, log in with your GitHub account and follow the prompts. You can quickly set up a virtual test server, and then create users with simple PayID addresses that map to addresses on various payment networks."))},{title:"How does the PayID protocol work?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"With PayID, you can use human-readable addresses to transmit value in the currency of your choice. The PayID network allows participants to reach one another through a standardized address. For example, alice$wallet.com maps to the corresponding URL https://wallet.com/alice."),r.a.createElement("p",{className:"mt-4"},"When you make an HTTP GET request that follows the PayID protocol, it resolves to an address on the underlying payment network. PayID is a payment-network-agnostic protocol, capable of sending payments to any payment network."))},{title:"What is the PayID reference implementation?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The Open Payments Coalition provides a reference implementation of the PayID protocol. Anyone may use this reference implementation or make changes to it. Other implementations can be created, as long as they follow the PayID protocol."),r.a.createElement("p",{className:"mt-4"},"The reference implementation uses TypeScript, a Node.js HTTP server, and a Postgres database. By default, the server hosts the PayID Protocol implementation, or Public API, on port 8080. It also hosts a second RESTful API on port 8081 for CRUD operations of PayIDs and associated addresses."))},{title:"What are the requirements to run a PayID server?",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"To run a PayID server in a production environment, you should give each component of the stack a vCPU and 500 MB of RAM, and ensure there are at least two High-Availability replicas for each component."),r.a.createElement("p",{className:"mt-4"},"Here's how the requirements would break down:"),r.a.createElement("ul",{className:"mt-4 list-inside"},r.a.createElement("li",{className:"list-disc"},"1 vCPU + 500 MB RAM per nginx replica (2x)"),r.a.createElement("li",{className:"list-disc"},"1 vCPU + 500 MB RAM per PayID Node.js server replica (2x)"),r.a.createElement("li",{className:"list-disc"},"1 vCPU + 500 MB RAM per Postgres replica (2x)")))}]}];return r.a.createElement(y.a,{spacing:"sm",waveClassNames:"faq-bg"},r.a.createElement("div",{className:"max-w-3xl pt-16 lg:pt-70"},r.a.createElement("h1",{className:"text-4xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter"},"Understanding and Using PayID")),r.a.createElement("div",{className:"flex mt-20 sm:mt-30"},r.a.createElement("div",{className:"hidden mr-8 sm:block sm:w-56 md:w-72 md:mr-32 lg:-ml-16"},r.a.createElement("div",{className:"sticky top-20"},o.map((function(e,n){return r.a.createElement("div",{className:"mb-6",key:n},r.a.createElement("button",{className:c()("text-xs font-semibold hover:text-orange-500 focus:text-orange-500 focus:outline-none align-middle text-left",{"text-orange-500":t===n,"text-gray-200":t!==n}),disabled:t===n,onClick:function(){a(n),s(void 0)}},e.topic,r.a.createElement(u.a,{className:c()("h-2 ml-4 duration-500 transform inline-block",{"rotate-90":t===n,"-rotate-90":t!==n})})),t===n&&r.a.createElement("div",{className:"block mt-2 ml-4"},e.contents.map((function(e,t){return r.a.createElement("a",{key:t,className:c()("block mb-2 text-xs font-semibold hover:text-orange-500 focus:text-orange-500 outline-none",{"text-orange-500":t===i,"text-gray-200":t!==i}),href:"#"+e.title,onClick:function(){return s(t)}},e.title)}))))})))),r.a.createElement("div",{className:"w-full md:max-w-md"},o.map((function(e,t){return r.a.createElement("div",{className:"mt-20 sm:mt-30 first:mt-0",key:t},r.a.createElement("h2",{className:"mb-10 text-3xl font-bold sm:text-4xl sm:mb-14"},e.topic),e.contents.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",{className:"mt-10 text-2xl font-bold sm:mt-12",id:e.title},e.title),r.a.createElement("p",{className:"mt-4"},e.description))})))})))))};t.default=function(){return r.a.createElement(s.a,{path:"universal-payment-identifier-faqs",title:"Understanding, Deploying, and Using PayID",description:"Get familiar with PayID through our development FAQs. You'll learn about who PayID is for, how to use it, and how to get started with your business today."},r.a.createElement(g,null),r.a.createElement(i.a,{background:"white"}),r.a.createElement(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-universal-payment-identifier-faqs-tsx-05bc9a7224a676e123bb.js.map