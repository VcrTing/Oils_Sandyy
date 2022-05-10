<template>
  <div class="home">
    <div>
      <p>this is a test message</p>
      <p>{{userID}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      userID: "test"
    }
    
  },
  methods: {
    updateUserID(userID){
      this.userID=userID
    },
    returnMessage(event){
      var data = event.data;
      switch (data.cmd) {
        case 'getFormJson':
            // Process business logic
            console.log(data)
            console.log(data.params.userID)
            this.updateUserID(data.params.userID)
            break;
        }
    },
    
  },
  mounted(){
    console.log("child site mounted")
  },
  updated(){
    console.log("child site updated")
  },
  created: function() {
    // Accept information from parent page
    window.addEventListener("message", this.returnMessage);
  },
  unmounted: function() {
    window.removeEventListener('message', this.returnMessage);
  }
}

// Send information to parent vue page
window.parent.postMessage({
    cmd: 'returnHeight',
    params: {
      success: true,
      data: document.body.scrollHeight + 'px'
    }
}, '*');
</script>
