(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a(43)},22:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var o=a(4),l=a(5),n=a(7),s=a(6),i=a(8),c=a(1),r=a(0),d=a.n(r),m=a(16),u=a.n(m),p=(a(22),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(n.a)(this,Object(s.a)(e).call(this,t))).state={title:""},a.setEdit=a.setEdit.bind(Object(c.a)(Object(c.a)(a))),a.handleClickOutside=a.handleClickOutside.bind(Object(c.a)(Object(c.a)(a))),a.changeTitleTask=a.changeTitleTask.bind(Object(c.a)(Object(c.a)(a))),a.onKeyPress=a.onKeyPress.bind(Object(c.a)(Object(c.a)(a))),a}return Object(i.a)(e,t),Object(l.a)(e,[{key:"setEdit",value:function(t){0===document.getElementsByClassName("edit-title").length&&this.setState({title:t.target.dataset.title})}},{key:"changeTitleTask",value:function(t){this.setState({title:t.target.value})}},{key:"onKeyPress",value:function(t){"Enter"===t.key&&(this.props.editTodo(document.getElementsByClassName("edit-title")[0]),this.setState({title:""}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickOutside,!1)}},{key:"componentWillMount",value:function(){document.addEventListener("click",this.handleClickOutside,!1)}},{key:"handleClickOutside",value:function(t){var e=document.getElementsByClassName("edit-title")[0];t.path.includes(e)||""===this.state.title||(this.props.editTodo(e),this.setState({title:""}))}},{key:"render",value:function(){var t=""===this.state.title?d.a.createElement("p",{className:this.props.complete?"complete textforli":"textforli","data-id":this.props._id,"data-title":this.props.title,onDoubleClick:this.setEdit},this.props.title):d.a.createElement("input",{type:"text",className:"edit-title",value:this.state.title,"data-id":this.props._id,onChange:this.changeTitleTask,onKeyPress:this.onKeyPress,autoFocus:!0});return d.a.createElement("li",{className:"clearfix"},d.a.createElement("label",{className:"custom-control custom-checkbox"},d.a.createElement("input",{type:"checkbox","data-id":this.props._id,className:"checkbox custom-control-input",onChange:this.props.toggleTodo,checked:this.props.complete?"checked":""}),d.a.createElement("span",{className:"custom-control-indicator"})),t,d.a.createElement("div",{className:"icon-del"},d.a.createElement("svg",{className:"cross-del",onClick:this.props.destroyTask,"data-id":this.props._id,xmlns:"http://www.w3.org/2000/svg",width:"17",height:"19",viewBox:"0 -4 15 17"},d.a.createElement("path",{"data-id":this.props._id,fillRule:"evenodd",d:"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"}))))}}]),e}(d.a.Component)),h=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(n.a)(this,Object(s.a)(e).call(this,t))).addNewTodo=function(){a.props.addNewTodo(a.state.value),a.resetName()},a.state={value:""},a.changeTitleTask=a.changeTitleTask.bind(Object(c.a)(Object(c.a)(a))),a.onKeyPress=a.onKeyPress.bind(Object(c.a)(Object(c.a)(a))),a}return Object(i.a)(e,t),Object(l.a)(e,[{key:"changeTitleTask",value:function(t){this.setState({value:t.target.value})}},{key:"onKeyPress",value:function(t){"Enter"===t.key&&this.addNewTodo()}},{key:"resetName",value:function(){this.setState({value:""})}},{key:"render",value:function(){return d.a.createElement("div",{className:"input-group"},d.a.createElement("label",{className:"input-group-text",onClick:this.props.massCheckUncheck},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"red"},d.a.createElement("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"}))),d.a.createElement("input",{id:"inputTodo",type:"text",className:"form-control",placeholder:"Enter todo list item",onChange:this.changeTitleTask,onKeyPress:this.onKeyPress,value:this.state.value}),d.a.createElement("button",{id:"btn",type:"button",className:"btn btn-primary",onClick:this.addNewTodo},"Add"))}}]),e}(d.a.Component),b=a(3),f=a.n(b),k=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(n.a)(this,Object(s.a)(e).call(this,t))).clearCompletedTasks=function(t){f.a.delete("http://localhost:3100/cleartodos").then(function(t){a.setState({todos:a.state.todos.filter(function(t){return!t.complete})})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})},a.state={todos:[{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1},{title:"1",complete:!1}],filter:"All"},a.addNewTask=a.addNewTask.bind(Object(c.a)(Object(c.a)(a))),a.toggleTodo=a.toggleTodo.bind(Object(c.a)(Object(c.a)(a))),a.destroyTask=a.destroyTask.bind(Object(c.a)(Object(c.a)(a))),a.massCheckUncheck=a.massCheckUncheck.bind(Object(c.a)(Object(c.a)(a))),a.setFilter=a.setFilter.bind(Object(c.a)(Object(c.a)(a))),a.editTodo=a.editTodo.bind(Object(c.a)(Object(c.a)(a))),a}return Object(i.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=this;f.a.get("http://localhost:3100/todos").then(function(e){t.setState({todos:e.data})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})}},{key:"toggleTodo",value:function(t){var e=this,a=this.state.todos,o=a.find(function(e){return e._id===t.target.dataset.id});f.a.put("http://localhost:3100/updateonechbox",{id:o._id,complete:!o.complete}).then(function(t){o.complete=!o.complete,e.setState({todos:a})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})}},{key:"editTodo",value:function(t){var e=this,a=this.state.todos;console.log("@@@@@@@@@@ e",t);var o=a.find(function(e){return e._id===t.dataset.id}),l=t.value.trim();""!==l&&f.a.put("http://localhost:3100/updateonetitle",{id:o._id,title:l}).then(function(t){o.title=l,e.setState({todos:a})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})}},{key:"destroyTask",value:function(t){var e=this,a=this.state.todos,o=a.find(function(e){return e._id===t.target.dataset.id});f.a.delete("http://localhost:3100/deletetodo",{data:{_id:o._id}}).then(function(t){var l=a.indexOf(o);a.splice(l,1),e.setState({todos:a})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})}},{key:"addNewTask",value:function(t){var e=this,a=this.state.todos;t=t.trim(),console.log("newTitle ",t),""!==t&&f.a.post("http://localhost:3100/addtodo",{title:t,complete:!1}).then(function(t){console.log("@@@@@@@@@@ ",t.data),a.push(t.data),e.setState({todos:a})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})}},{key:"getTypeOfCompletionTasks",value:function(t){return this.state.todos.filter(function(e){return e.complete===t}).length}},{key:"massCheckUncheck",value:function(){var t=this,e=this.state.todos;e.filter(function(t){return!t.complete}).length>0?f.a.put("http://localhost:3100/updateallchbox",{complete:!0}).then(function(a){e.map(function(t){t.complete=!0}),t.setState({todos:e})}).catch(function(t){console.log("@@@@@@@@@@ error",t)}):f.a.put("http://localhost:3100/updateallchbox",{complete:!1}).then(function(a){e.map(function(t){t.complete=!1}),t.setState({todos:e})}).catch(function(t){console.log("@@@@@@@@@@ error",t)})}},{key:"setFilter",value:function(t){this.setState({filter:t.target.dataset.type})}},{key:"render",value:function(){var t=this,e=this.state.todos.filter(function(e){return"All"===t.state.filter||"InComplete"===t.state.filter&&!e.complete||"Complete"===t.state.filter&&e.complete});return d.a.createElement("div",{className:"container"},d.a.createElement("h1",{className:"display-2 text-center"},"TodoList"),d.a.createElement("p",{className:"lead text-center"},"Welcome to my todoList applications"),d.a.createElement("div",{className:"row"},d.a.createElement("div",{id:"form-enter-todo",className:"col-lg-7 col-9 mx-auto form-enter-todo"},d.a.createElement(h,{addNewTodo:this.addNewTask,massCheckUncheck:this.massCheckUncheck}))),d.a.createElement("div",{className:"row"},d.a.createElement("p",{id:"quantityComplete",className:"mx-auto quantityComplete col-lg-7 col-9 text-right"},d.a.createElement("span",{id:"complete"},d.a.createElement("b",null,this.getTypeOfCompletionTasks(!0))," Complete "),d.a.createElement("span",{id:"incomplete"},d.a.createElement("b",null,this.getTypeOfCompletionTasks(!1))," InComplete"))),d.a.createElement("div",{className:"row"},d.a.createElement("ul",{id:"list",className:"list col-lg-7 col-9 mx-auto"},e.map(function(e){return d.a.createElement(p,Object.assign({},e,{key:e._id,toggleTodo:t.toggleTodo,destroyTask:t.destroyTask,editTodo:t.editTodo}))}))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"clearfix col-lg-7 col-9 mx-auto"},d.a.createElement("div",{className:"btnWrapLeft"},d.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.clearCompletedTasks},"Clear complete")),d.a.createElement("div",{className:"rightWrapper"},d.a.createElement("div",{className:"btnWrapRight"},d.a.createElement("button",{type:"button",className:"Complete"===this.state.filter?"btn btn-primary filter-active":"btn btn-primary","data-type":"Complete",onClick:this.setFilter},"Complete")),d.a.createElement("div",{className:"btnWrapRight"},d.a.createElement("button",{type:"button",className:"InComplete"===this.state.filter?"btn btn-primary filter-active":"btn btn-primary","data-type":"InComplete",onClick:this.setFilter},"InComplete")),d.a.createElement("div",{className:"btnWrapRight"},d.a.createElement("button",{type:"button",className:"All"===this.state.filter?"btn btn-primary filter-active":"btn btn-primary","data-type":"All",onClick:this.setFilter},"All"))))))}}]),e}(r.Component);u.a.render(d.a.createElement(k,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.7fb994bc.chunk.js.map