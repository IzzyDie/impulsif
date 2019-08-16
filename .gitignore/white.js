module.exports = class White {

    static match(message) {
       return message.content.startsWith('!white')
   }

    static action (message) {
       let args = message.content.split('') 
       args.shift()
       message.delete()
       message.channel.send ("ImpulsiF White", {files: ["white.jpg"]})

    }
    
}
