import Vue from 'vue'
import <%=ProjectName %> from './components/<%=project_name%>.vue'

Vue.component(<%=ProjectName%>.name, <%=ProjectName%>)

console.log(<%=ProjectName%>);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><<%=project_name%>>Hello</<%=project_name%>></div>',
  components: { <%=ProjectName%> }
})
