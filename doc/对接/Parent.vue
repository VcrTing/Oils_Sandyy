<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <iframe ref="iframe" :src= "src" height="400" width="600" title="testing Iframe cross site comms" @load= "sendMessage"></iframe>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      getPost: "test",
      src: "http://localhost:8081" 
    }
    
  },
  methods: {
    sendMessage () {
      console.log("parent: sending to child")
      // External vue transfers data to iframe
      this.iframeWin.postMessage({
        cmd: 'getFormJson',
        params: {
          'userID': "3"
        }
      }, '*')
    },
  },
  mounted(){
    // Add the listening of postMessage on the window of external vue, and bind the handler handleMessage
    window.addEventListener('message', this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow
    this.sendMessage()
  },
  handleMessage (event) {
    // Analyze the data sent from iframe according to the above structure
    const data = event.data
    switch (data.cmd) {
      case 'returnFormJson':
        // Business logic
        break
      case 'returnHeight':
        // Business logic
        break
    }
  }
}
</script>
