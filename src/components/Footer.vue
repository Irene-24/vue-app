<template>

<footer>
    <p> <span v-html="copyright"></span> {{title}} Inc.</p>   
</footer>

</template>

<script>

export default {
  props:
  {
    title:{type:String}
  },
 data()
 {
   return {
     copyright : "Copyright &copy; 2019 of "
   }
 },
 components : 
 {
  
 }
}
</script>

<style scoped>

 footer
 {
     padding: 8px;
     background:#271302;
 }
 
 p
 {
     color:sandybrown;
     text-align: center;
 }

</style>
